Kotlin Reference v3.0
# kotlin Client Library
@supabase-community/supabase-ktView on GitHub
This reference documents every object and method available in Supabase's Kotlin Multiplatform library, supabase-kt. You can use supabase-kt to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.
To see supported Kotlin targets, check the corresponding module README on GitHub.
To migrate from version 2.X to 3.0.0, see the migration guide
The Kotlin client library is created and maintained by the Supabase community, and is not an official library. Please be tolerant of areas where the library is still being developed, and — as with all the libraries — feel free to contribute wherever you find issues.
Huge thanks to official maintainer, jan-tennert.
## Installing
### Add one or more modules to your project#
![latest stable supabase-kt version](https://img.shields.io/github/release/supabase-community/supabase-kt?label=stable)![latest supabase-kt version](https://img.shields.io/maven-central/v/io.github.jan-tennert.supabase/supabase-kt?label=experimental)
Add dependency to your build file using the BOM.
The available modules are:
  * **auth-kt**
  * **realtime-kt**
  * **storage-kt**
  * **functions-kt**
  * **postgrest-kt**
  * Other plugins also available here


Checkout the different READMEs for information about supported Kotlin targets.
_Note that the minimum Android SDK version is 26. For lower versions, you need to enablecore library desugaring._
build.gradle.ktsbuild.gradlepom.xml
`
1
implementation(platform("io.github.jan-tennert.supabase:bom:VERSION"))
2
implementation("io.github.jan-tennert.supabase:postgrest-kt")
3
implementation("io.github.jan-tennert.supabase:auth-kt")
4
implementation("io.github.jan-tennert.supabase:realtime-kt")
`
### Add Ktor Client Engine to each of your Kotlin targets (required)#
You can find a list of engines here
  * Note that not all Ktor engines support Websockets. So if you plan to use the Realtime module, make sure to use an engine that supports Websockets. Checkout the engine limitations for more information.
  * If using `supabase-kt` 3.0.0 and above, you need to use Ktor version 3.0.0-rc-1 or later.


build.gradle.ktsbuild.gradlepom.xml
`
1
implementation("io.ktor:ktor-client-[engine]:KTOR_VERSION")
`
Multiplatform example:
build.gradle.kts
`
1
val commonMain by getting {
2
  dependencies {
3
    //supabase modules
4
  }
5
}
6
val jvmMain by getting {
7
  dependencies {
8
    implementation("io.ktor:ktor-client-cio:KTOR_VERSION")
9
  }
10
}
11
val androidMain by getting {
12
  dependsOn(jvmMain)
13
}
14
val jsMain by getting {
15
  dependencies {
16
    implementation("io.ktor:ktor-client-js:KTOR_VERSION")
17
  }
18
}
19
val iosMain by getting {
20
  dependencies {
21
    implementation("io.ktor:ktor-client-darwin:KTOR_VERSION")
22
  }
23
}
`
### Serialization#
supabase-kt provides several different ways to encode and decode your custom objects. By default, KotlinX Serialization is used.
Use KotlinX Serialization.
build.gradle.ktsbuild.gradlepom.xml
`
1
plugins {
2
  kotlin("plugin.serialization") version "KOTLIN_VERSION"
3
}
`
`
1
val supabase = createSupabaseClient(supabaseUrl, supabaseKey) {
2
  //Already the default serializer, but you can provide a custom Json instance (optional):
3
  defaultSerializer = KotlinXSerializer(Json {
4
    //apply your custom config
5
  })
6
}
`
Use Moshi.
build.gradle.ktsbuild.gradlepom.xml
`
1
implementation("io.github.jan-tennert.supabase:serializer-moshi:VERSION")
`
`
1
val supabase = createSupabaseClient(supabaseUrl, supabaseKey) {
2
  defaultSerializer = MoshiSerializer()
3
}
`
Use Jackson.
build.gradle.ktsbuild.gradlepom.xml
`
1
implementation("io.github.jan-tennert.supabase:serializer-jackson:VERSION")
`
`
1
val supabase = createSupabaseClient(supabaseUrl, supabaseKey) {
2
  defaultSerializer = JacksonSerializer()
3
}
`
Use custom serializer.
`
1
class CustomSerializer: SupabaseSerializer {
23
  override fun <T : Any> encode(type: KType, value: T): String {
4
    //encode value to string
5
  }
67
  override fun <T : Any> decode(type: KType, value: String): T {
8
    //decode value
9
  }
1011
}
`
`
1
val supabase = createSupabaseClient(supabaseUrl, supabaseKey) {
2
  defaultSerializer = CustomSerializer()
3
}
`
## Initializing
### Create Supabase Client#
Independently of which Supabase module you are using, you will need to initialize the main client first and install the module.
To create a new client, you can use the `createSupabaseClient` function.
When installing a module, you can pass a block to configure it.
### OAuth and OTP link verification#
supabase-kt provides several platform implementations for OAuth and OTP link verification.
**On Desktop platforms (JVM, MacOS*, Linux, Windows)** , it uses a HTTP Callback Server to receive the session data from a successful OAuth login. The success page can be customized via `AuthConfig#httpCallbackConfig` * If no deeplinks are being used.
_Note: OTP link verification such as sign ups are not supported on JVM. You may have to send a verification token rather than a url in your email. To send the token, rather than a redirect url, change`{{ .ConfirmationURL }}` in your sign up email to `{{ .Token }}`_
**On Android, iOS & MacOS**, OAuth and OTP verification use deeplinks. Refer to the guide below on how to setup deeplinks. Alternatively you can use Native Google Auth. **On JS** , it uses the website origin as the callback url. Session importing gets handled automatically. **tvOS & watchOS** currently have no default implementation. Feel free to create a PR.
You always make your own implementation and use `auth.parseSessionFromFragment(fragment)` or `auth.parseSessionFromUrl(url)` to let supabase-kt handle the parsing after receiving a callback. Then you can simply use `auth.importSession(session)`.
### Configure deeplink callbacks for Authentication#
Deeplinks are supported on Android, iOS and MacOS.
  1. **Set up a deeplink** On Android, set up a deeplink in your Android manifest. On iOS and MacOS, set up a url scheme.
  2. **Add your deeplink to theredirect URLs** **Pattern** : scheme://host
  3. **Configure the Auth plugin** Set the `host` and `scheme` in the Auth config: 
`
1
install(Auth) {
2
  host = "deeplink host" // this can be anything, eg. your package name or app/company url (not your Supabase url)
3
  scheme = "deeplink scheme"
45
  // On Android only, you can set OAuth and SSO logins to open in a custom tab, rather than an external browser:
6
  defaultExternalAuthAction = ExternalAuthAction.CustomTabs() //defaults to ExternalAuthAction.ExternalBrowser
7
}
`
  4. **Call platform specific function on startup** On Android: `supabase.handleDeeplinks(intent)` If you don't want a separate activity, just call this function at the top of your `onCreate` function in your MainActivity. On iOS/MacOS: `supabase.handleDeeplinks(url)`


Then you can log in using OAuth:
`
1
supabase.auth.signInWith(Google)
`
Or open OTP links directly in your app.
### PKCE Authentication flow#
supabase-kt supports the PKCE authentication flow. To use it, change the `flowType` in the Auth configuration:
`
1
install(Auth) {
2
 flowType = FlowType.PKCE
3
}
`
That's it! If you already implemented deeplinks to handle OTPs and OAuth you don't have to change anything!
### Parameters
  * supabaseUrlRequiredString
The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * supabaseKeyRequiredString
The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * builderOptionalSupabaseClientBuilder.() -> Unit
Apply additional configuration and install plugins.
Details


Initialize ClientConfigure Auth moduleConfigure PostgREST moduleConfigure Storage moduleConfigure Realtime moduleConfigure Functions pluginConfigure GraphQL plugin
`
1
val supabase = createSupabaseClient(
2
  supabaseUrl = "https://xyzcompany.supabase.co",
3
  supabaseKey = "public-anon-key"
4
) {
5
  install(Auth)
6
  install(Postgrest)
7
  //install other modules
8
}
`
## Fetch data
Perform a SELECT query on the table or view.
  * When calling a `decode` method, you have to provide a serializable class as the type parameter.
  * You can provide a `Columns` object to select specific columns.
  * You can provide a filter block to filter the results


### Parameters
  * columnsOptionalColumns
The columns to retrieve, defaults to `Columns.ALL`. You can also use `Columns.list`, `Columns.type` or `Columns.raw` to specify the columns.
  * headOptionalBoolean
If true, select will delete the selected data.
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Getting your dataSelecting specific columnsQuery foreign tablesQuery the same foreign table multiple timesQuerying with count optionQuerying JSON data
`
1
val city = supabase.from("cities").select().decodeSingle<City>()
`
## Insert data
Perform an INSERT into the table or view.
  * When calling an `insert` method, you have to provide a serializable value.
  * By default, `insert` will not return the inserted data. If you want to return the inserted data, you can use the `select()` method inside the request.


### Parameters
  * valueRequiredT or List<T>
The value(s) you want to insert. `T` can be any serializable type.
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Create a recordCreate a record and return itBulk create
`
1
val city = City(name = "The Shire", countryId = 554)
2
supabase.from("cities").insert(city)
`
## Update data
Perform an UPDATE on the table or view.
  * `update()` should always be combined with a filter block to avoid updating all records.
  * When calling `insert` or `update`, you have to provide a serializable value in the function parameter.
  * By default, `update` will not return the inserted data. If you want to return the inserted data, you can use the `select()` method inside the request.


### Parameters
  * valueRequiredT or PostgrestUpdate.() -> Unit = {}
The new value, can be either a serializable value or PostgrestUpdate DSL where you can set new values per column.
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Updating your dataUpdate a record and return itUpdating JSON data
`
1
supabase.from("characters").update(
2
  {
3
    Country::name setTo "Han Solo"
4
    //or
5
    set("name", "Han Solo")
6
  }
7
) {
8
  filter {
9
    Character::id eq 1
10
    //or
11
    eq("id", 1)
12
  }
13
}
`
## Upsert data
Perform an UPSERT on the table or view. Depending on the column(s) passed to `onConflict`, `.upsert()` allows you to perform the equivalent of `.insert()` if a row with the corresponding `onConflict` columns doesn't exist, or if it does exist, perform an alternative action depending on `ignoreDuplicates`.
  * Primary keys should be included in the data payload in order for an update to work correctly.
  * Primary keys must be natural, not surrogate. There are however, workarounds for surrogate primary keys.
  * If you need to insert new data and update existing data at the same time, use Postgres triggers.
  * When calling `insert` or `update`, you have to provide a serializable value in the function parameter.
  * By default, `upsert` will not return the inserted data. If you want to return the inserted data, you can use the `select()` method inside the request.


### Parameters
  * valueRequiredT or List<T>
The value(s) you want to insert. `T` can be any serializable type.
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Upsert your dataUpsert your data and return itUpserting into tables with constraintsReturn the exact number of rows
`
1
val toUpsert = Message(id = 3, message = "foo", username = "supabot")
2
supabase.from("messages").upsert(toUpsert)
`
## Delete data
Perform a DELETE on the table or view.
  * `delete()` should always be combined with a filter block to target the item(s) you wish to delete.
  * If you use `delete()` with filters and you have RLS enabled, only rows visible through `SELECT` policies are deleted. Note that by default no rows are visible, so you need at least one `SELECT`/`ALL` policy that makes the rows visible.
  * By default, `delete` will not return the deleted data. If you want to return the deleted data, you can use the `select()` method inside the request.


### Parameters
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Delete recordsFetch deleted records
`
1
supabase.from("cities").delete {
2
  filter {
3
    City::id eq 666
4
    //or
5
    eq("id", 666)
6
  }
7
}
`
## Call a Postgres function
You can call stored procedures as a "Remote Procedure Call".
That's a fancy way of saying that you can put some logic into your database then call it from anywhere. It's especially useful when the logic rarely changes - like password resets and updates.
  * When calling `rpc` with parameters, you have to provide a serializable value in the function parameter.


### Parameters
  * functionRequiredString
The name of the function
  * parametersOptionalT
Parameters to pass to the function. T can be any serializable type.
  * requestOptionalPostgrestRequestBuilder.() -> Unit
Additional configuration & filtering for the request.


Call a stored procedureWith Parameters
`
1
supabase.postgrest.rpc("hello_world")
`
Notes
## Using filters
Filters allow you to only return rows that match certain conditions.
Filters can be used on `select()`, `update()`, and `delete()` queries.
You can use two different types for applying filters:
`
1
eq("country_id", 1)
`
And using a class property:
`
1
City::countryId eq 1
`
As you can see on the property syntax: the name of the `countryId` gets converted to `country_id`.
By default, this is done by converting camel case to snake case, but you can customize this by changing the `propertyConversionMethod` in the Postgrest Config
If a database function returns a table response, you can also apply filters.
Applying a filter blockMultiple filters on one columnFilter by values within a JSON columnFilter Foreign Tables
`
1
supabase.from("cities").select(columns = Columns.list("name", "country_id")) {
2
  filter {
3
    City::name eq "The Shire"
4
    //or
5
    eq("name", "The Shire")
6
  }
7
}
`
Notes
## Column is equal to a value
Finds all rows whose value on the stated `column` exactly matches the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name", "country_id")) {
2
  filter {
3
    City::name eq "The Shire"
4
    //or
5
    eq("name", "The Shire")
6
  }
7
}
`
## Column is not equal to a value
Finds all rows whose value on the stated `column` doesn't match the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name", "country_id")) {
2
  filter {
3
    City::name neq "The Shire"
4
    //or
5
    neq("name", "The Shire")
6
  }
7
}
`
## Column is greater than a value
Finds all rows whose value on the stated `column` is greater than the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::countryId gt 300
4
    //or
5
    gt("country_id", 300)
6
  }
7
}
`
## Column is greater than or equal to a value
Finds all rows whose value on the stated `column` is greater than or equal to the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::countryId gte 300
4
    //or
5
    gte("country_id", 300)
6
  }
7
}
`
## Column is less than a value
Finds all rows whose value on the stated `column` is less than the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::countryId lt 300
4
    //or
5
    lt("country_id", 300)
6
  }
7
}
`
## Column is less than or equal to a value
Finds all rows whose value on the stated `column` is less than or equal to the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredAny
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::countryId lte 300
4
    //or
5
    lte("country_id", 300)
6
  }
7
}
`
## Column matches a pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case sensitive).
### Parameters
  * columnRequiredString
The column to filter on.
  * patternRequiredString
The pattern to match with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::name like "%la%"
4
    //or
5
    like("name", "%la%")
6
  }
7
}
`
## Column matches a case-insensitive pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case insensitive).
### Parameters
  * columnRequiredString
The column to filter on.
  * patternRequiredString
The pattern to match with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::name ilike "%la%"
4
    //or
5
    ilike("name", "%la%")
6
  }
7
}
`
## Column is a value
A check for exact equality (null, true, false), finds all rows whose value on the stated `column` exactly match the specified `value`.
`is_` and `in_` filter methods are suffixed with `_` to avoid collisions with reserved keywords.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredBoolean?
The value to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::name isExact null
4
    //or
5
    exact("name", null)
6
  }
7
}
`
## Column is in an array
Finds all rows whose value on the stated `column` is found on the specified `values`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredList<Any>
The values to filter with.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::name isIn listOf("Hobbiton", "Edoras")
4
    //or
5
    isIn("name", listOf("Hobbiton", "Edoras"))
6
  }
7
}
`
## Column contains every element in a value
Only relevant for jsonb, array, and range columns. Match only rows where `column` contains every element appearing in `value`.
### Parameters
  * columnRequiredString
The jsonb, array, or range column to filter on
  * valueRequiredList<Any>
The jsonb, array, or range value to filter with


With `select()`With `update()`With `delete()`With `rpc()`
`
1
supabase.from("cities").select(columns = Columns.list("name")) {
2
  filter {
3
    City::mainExports contains listOf("oil")
4
    //or
5
    contains("main_exports", listOf("oil"))
6
  }
7
}
`
## Greater than a range
Only relevant for range columns. Match only rows where every element in column is greater than any element in range.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredPair<Any, Any>
The values to filter with.


With `select()`
`
1
 supabase.from("reservations").select {
2
   filter {
3
     Reservation::during rangeGt ("2000-01-02 08:30" to "2000-01-02 09:30")
4
     //or
5
     rangeGt("during", "2000-01-02 08:30" to "2000-01-02 09:30")
6
   }
7
 }
`
Data source
Response
Notes
## Greater than or equal to a range
Only relevant for range columns. Match only rows where every element in column is either contained in range or greater than any element in range.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredPair<Any, Any>
The values to filter with.


With `select()`
`
1
 supabase.from("reservations").select {
2
   filter {
3
     Reservation::during rangeGte ("2000-01-02 08:30" to "2000-01-02 09:30")
4
     //or
5
     rangeGte("during", "2000-01-02 08:30" to "2000-01-02 09:30")
6
   }
7
 }
`
Data source
Response
Notes
## Less than a range
Only relevant for range columns. Match only rows where every element in column is less than any element in range.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredPair<Any, Any>
The values to filter with.


With `select()`
`
1
 supabase.from("reservations").select {
2
   filter {
3
     Reservation::during rangeLt ("2000-01-02 08:30" to "2000-01-02 09:30")
4
     //or
5
     rangeLt("during", "2000-01-02 08:30" to "2000-01-02 09:30")
6
   }
7
 }
`
Data source
Response
Notes
## Less than or equal to a range
Only relevant for range columns. Match only rows where every element in column is either contained in range or less than any element in range.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredPair<Any, Any>
The values to filter with.


With `select()`
`
1
 supabase.from("reservations").select {
2
   filter {
3
     Reservation::during rangeLte ("2000-01-02 08:30" to "2000-01-02 09:30")
4
     //or
5
     rangeLte("during", "2000-01-02 08:30" to "2000-01-02 09:30")
6
   }
7
 }
`
Data source
Response
Notes
## Mutually exclusive to a range
Only relevant for range columns. Match only rows where column is mutually exclusive to range and there can be no element between the two ranges.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredPair<Any, Any>
The values to filter with.


With `select()`
`
1
 supabase.from("reservations").select {
2
   filter {
3
     Reservation::during adjacent ("2000-01-02 08:30" to "2000-01-02 09:30")
4
     //or
5
     adjacent("during", "2000-01-02 08:30" to "2000-01-02 09:30")
6
   }
7
 }
`
Data source
Response
## With a common element
Only relevant for array and range columns. Match only rows where column and value have an element in common.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredList<Any>
The values to filter with.


On array columnsOn range columns
`
1
supabase.from("issues").select(columns = Columns.list("title")) {
2
  filter {
3
    Issue::tags overlaps listOf("is:closed", "severity:high")
4
    //or
5
    overlaps("tags", listOf("is:closed", "severity:high"))
6
  }
7
}
`
Data source
Response
## Match a string
Only relevant for text and tsvector columns. Match only rows where `column` matches the query string in `query`.
For more information, see Postgres full text search.
### Parameters
  * columnRequiredString
The text or tsvector column to filter on
  * queryRequiredString
The query text to match with
  * textSearchTypeOptionalTextSearchType
The type of text search to use. Defaults to `TextSearchType.NONE`.
  * configOptionalString
The text search configuration to use.


Text searchSearch multiple columnsBasic normalizationFull normalizationWebsearch
`
1
supabase.from("quotes").select(columns = Columns.list("catchphrase")) {
2
  filter {
3
    textSearch(column = "catchphrase", query = "'fat' & 'cat'", config = "english", type = TextSearchType.YOUR_TYPE)
4
  }
5
}
`
## Don't match the filter
Finds all rows that don't satisfy the filter.
  * `.filterNot()` expects you to use the raw PostgREST syntax for the filter names and values.


### Parameters
  * columnRequiredString
The column to filter on.
  * operatorRequiredFilterOperator
The operator to use for the filter.
  * valueRequiredAny
The value to filter with.


With `select()`
`
1
supabase.from("countries").select {
2
  filter {
3
    filterNot("name", FilterOperation.IS, "")
4
  }
5
}
`
## Match at least one filter
Finds all rows satisfying at least one of the filters.
### Parameters
  * negateOptionalBoolean
If true, negate the entire block.
  * blockRequiredPostgrestFilterBuilder.() -> Unit
The block to apply the `or` filter to.


With `select()`Use `or` with `and`
`
1
supabase.from("countries").select(columns = Columns.list("name")) {
2
  filter {
3
    or {
4
      Country::id eq 2
5
      Country::name eq "Mordor"
6
      //or
7
      eq("id", 2)
8
      eq("name", "Mordor")
9
    }
10
  }
11
}
`
## Match the filter
filter() expects you to use the raw PostgREST syntax for the filter values.
### Parameters
  * columnRequiredString
The column to filter on.
  * operatorRequiredFilterOperator
The operator to use for the filter.
  * valueRequiredAny
The value to filter with.


With `select()`On a foreign table
`
1
supabase.from("characters").select {
2
  filter {
3
    filter(column = "name", operator = FilterOperator.IN, value = "('Han', 'Katniss')")
4
  }
5
}
`
Data source
Response
## Using modifiers
Filters work on the row level—they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g., returning a CSV string).
Modifiers are be specified next to the filter block. Some modifiers only apply for queries that return rows (e.g., `select()` or `rpc()` on a function that returns a table response).
## Return data after inserting
### Parameters
  * columnsOptionalColumns
The columns to select.


With `upsert()`
`
1
val toUpsert = Country(id = 2, name = "Mordor")
2
val count = supabase.from("countries").upsert(toUpsert) {
3
  select()
4
}.decodeSingle<Country>()
`
Data source
Response
## Order the results
Order the query result by column.
### Parameters
  * columnRequiredString
The column to order by.
  * orderRequiredOrder
The order to use.
  * nullsFirstOptionalBoolean
Whether to order nulls first.
  * referencedTableOptionalString
The foreign table to order by.


With `select()`On a foreign tableOrder parent table by a referenced table
`
1
supabase.from("characters").select(columns = Columns.list("id", "name")) {
2
  order(column = "id", order = Order.DESCENDING)
3
}
`
Data source
Response
## Limit the number of rows returned
Limit the query result by count.
### Parameters
  * countRequiredLong
The number of rows to limit the result to.
  * referencedTableOptionalString
The foreign table to limit by.


With `select()`On a foreign table
`
1
supabase.from("characters").select {
2
  limit(count = 1)
3
}
`
Data source
Response
## Limit the query to a range
Limit the query result by from and to inclusively.
### Parameters
  * fromRequiredLong
The start of the range.
  * toRequiredLong
The end of the range.
  * referencedTableOptionalString
The foreign table to limit by.


With `select()`
`
1
supabase.from("characters").select {
2
  range(1L..5L)
3
}
`
Data source
Response
## Retrieve one row of data
With `select()`
`
1
val result = supabase.from("characters").select(Columns.list("name")) {
2
  limit(1)
3
  single()
4
}
`
Data source
Response
## Retrieve as a CSV
Return data as CSV
`
1
val (csvData, _) = supabase.from("characters").select {
2
  csv()
3
}
`
Data source
Response
Notes
## Using explain
For debugging slow queries, you can get the Postgres `EXPLAIN` execution plan of a query using the `explain()` method. This works on any query, even for `rpc()` or writes.
Explain is not enabled by default as it can reveal sensitive information about your database. It's best to only enable this for testing environments but if you wish to enable it for production you can provide additional protection by using a `pre-request` function.
Follow the Performance Debugging Guide to enable the functionality on your project.
### Parameters
  * analyzeOptionalBoolean
If `true`, the query will be executed and the actual run time will be returned
  * verboseOptionalBoolean
If `true`, the query identifier will be returned and `data` will include the output columns of the query
  * settingsOptionalBoolean
If `true`, include information on configuration parameters that affect query planning
  * buffersOptionalBoolean
If `true`, include information on buffer usage
  * walOptionalBoolean
If `true`, include information on WAL record generation
  * formatOptionalString
The format of the output, can be `"text"` (default) or `"json"`


Get the execution plan
`
1
val result = supabase.from("characters").select {
2
  explain()
3
}
`
Data source
Response
Notes
## Overview
  * The auth methods can be accessed via the Supabase Auth client.


Create auth client
`
1
val supabase = createSupabaseClient(supabaseUrl = "https://xyzcompany.supabase.co'", supabaseKey = "public-anon-key") { ... }
2
val auth = supabase.auth
`
## Create a new user
Creates a new user.
  * By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.
  * **Confirm email** determines if users need to confirm their email address after signing up. 
    * If **Confirm email** is enabled, the return value is the user and you won't be logged in automatically.
    * If **Confirm email** is disabled, the return value is null and you will be logged in instead.
  * When the user confirms their email address, they are redirected to the `SITE_URL` by default. You can modify your `SITE_URL` or add additional redirect URLs in your project.
  * To learn how to handle OTP links & OAuth refer to initializing
  * If signUpWith() is called for an existing confirmed user: 
    * When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in your project, an obfuscated/fake user object is returned.
    * When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.


### Parameters
  * providerRequiredEmail or Phone
The provider to use for the user's authentication. In this case `Email` or `Phone`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalEmail.Config.() -> Unit or Phone.Config.() -> Unit
The configuration for signing in with `Email` or `Phone`.
Details


Sign up with emailSign up with a phone number and password (whatsapp)Sign up with a phone number and password (sms)Sign up with additional user metadataSign up with a redirect URL
`
1
val user = supabase.auth.signUpWith(Email) {
2
  email = "example@email.com"
3
  password = "example-password"
4
}
`
## Listen to auth events
Listen to session changes.
Listen to auth changes
`
1
supabase.auth.sessionStatus.collect {
2
  when(it) {
3
    is SessionStatus.Authenticated -> {
4
      println("Received new authenticated session.")
5
      when(it.source) { //Check the source of the session
6
        SessionSource.External -> TODO()
7
        is SessionSource.Refresh -> TODO()
8
        is SessionSource.SignIn -> TODO()
9
        is SessionSource.SignUp -> TODO()
10
        SessionSource.Storage -> TODO()
11
        SessionSource.Unknown -> TODO()
12
        is SessionSource.UserChanged -> TODO()
13
        is SessionSource.UserIdentitiesChanged -> TODO()
14
      }
15
    }
16
    SessionStatus.Initializing -> println("Initializing")
17
    is SessionStatus.RefreshFailure -> println("Refresh failure ${it.cause}") //Either a network error or a internal server error
18
    is SessionStatus.NotAuthenticated -> {
19
      if(it.isSignOut) {
20
        println("User signed out")
21
      } else {
22
        println("User not signed in")
23
      }
24
    }
25
  }
26
}
`
Notes
## Create an anonymous user
  * Creates an anonymous user.
  * The user can be retrieved by calling `supabase.auth.currentUserOrNull()`.
  * It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.


### Parameters
  * captchaTokenOptionalString?
The captcha token when having captcha enabled.
  * dataOptionalJsonObject? or T
Extra user data to pass in.


Create an anonymous userCreate an anonymous user with custom user metadata
`
1
supabase.auth.signInAnonymously(captchaToken = "token")
`
## Sign in a user
Logs in an existing user.
  * Requires either an email and password or a phone number and password.


### Parameters
  * providerRequiredEmail or Phone
The provider to use for the user's authentication, in this case `Email` or `Phone`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalEmail.Config.() -> Unit or Phone.Config.() -> Unit
The configuration for signing in with `Email` or `Phone`.
Details


Sign in with email and passwordSign in with phone and password
`
1
supabase.auth.signInWith(Email) {
2
  email = "example@email.com"
3
  password = "example-password"
4
}
`
## Sign in with ID Token
### Parameters
  * providerRequiredIDToken
The provider to use for the user's authentication. For this method it will be `IDToken`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalIDToken.Config.() -> Unit
The configuration for signing in with an id token.
Details


Sign In using ID Token
`
1
supabase.auth.signInWith(IDToken) {
2
  idToken = "token"
3
  provider = Google //Also supported: Apple, Azure and Facebook
4
  //optional:
5
  nonce = "nonce"
6
  data = buildJsonObject {
7
    //...
8
  }
9
}
`
## Sign in a user through OTP
Sends a OTP to the user's email or phone number.
  * Requires either an email or phone number.
  * This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
  * If the user doesn't exist, `signInWith(OTP)` will signup the user instead. To restrict this behavior, you can set `createUser` to `false`.
  * The method `signUpWith(OTP)` does the exact same thing as `signInWith(OTP)`, so it doesn't matter which one you use.
  * If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
  * If you're using phone, you can configure whether you want the user to receive a OTP.
  * The magic link's destination URL is determined by the `SITE_URL`.
  * See redirect URLs and wildcards to add additional redirect URLs to your project.
  * To learn how to handle OTP links & OAuth refer to initializing
  * Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, modify the magic link email template to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.


### Parameters
  * providerRequiredOTP
The provider to use for the user's authentication, in this case `OTP`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalOTP.Config.() -> Unit
The configuration for signing in with `OTP`.
Details


Sign in with emailSign in with SMS OTP
`
1
supabase.auth.signInWith(OTP) {
2
  email = "example@email.com"
3
}
`
Notes
## Sign in a user through OAuth
  * This method is used for signing in using a third-party provider.
  * Supabase supports many different third-party providers.
  * To learn how to handle OTP links & OAuth refer to initializing


### Parameters
  * providerRequiredOAuthProvider
The OAuth provider to use for the user's authentication, for example `Google` or `Github`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalExternalAuthConfig.() -> Unit
The configuration for signing in with an OAuth provider.
Details


Sign in using a third-party providerSign in using a third-party provider with scopesCreate a custom urlCreate a custom url with scopes
`
1
supabase.auth.signInWith(Github)
`
## Sign in a user through SSO
  * Before you can call this method you need to establish a connection to an identity provider. Use the CLI commands to do this.
  * If you've associated an email domain to the identity provider, you can change the `domain` property in the `signInWith(SSO)` method to start a sign-in flow.
  * In case you need to use a different way to start the authentication flow with an identity provider, you can change the `providerId` property. For example: 
    * Mapping specific user email addresses with an identity provider.
    * Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
  * To learn how to handle OTP links & OAuth refer to initializing


### Parameters
  * providerRequiredSSO
The OAuth provider to use for the user's authentication, in this case `SSO`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalExternalAuthConfig.() -> Unit
The configuration for signing in with an OAuth provider.
Details


Sign in with email domainSign in with provider UUID
`
1
 // You can extract the user's email domain and use it to trigger the
2
 // authentication flow with the correct identity provider.
34
 supabase.auth.signInWith(SSO) {
5
   domain = "company.com"
6
 }
78
 //the url was opened automatically, if you don't want that, provide a custom redirect url
`
## Sign out a user
Logs out the current user.
  * In order to use the `signOut()` method, the user needs to be signed in first.


### Parameters
  * scopeOptionalSignOutScope
The scope of the sign-out.


Sign outSign out all sessionsSign out all sessions except the current
`
1
supabase.auth.signOut()
`
## Send a password reset request
Sends a password reset request to the given email address.
  * The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
  * The `resetPasswordForEmail()` only sends a password reset link to the user's email. To update the user's password, see `updateUser()`.
  * The user gets redirected back to your app, assuming you setup OTP handling
  * After the user has been redirected successfully, prompt them for a new password and call `updateUser()`: 
`
1
supabase.auth.updateUser {
2
  password = "1234567"
3
}
`


### Parameters
  * emailRequiredString
The email to send the password reset email to.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * captchaTokenOptionalString?
The captcha token when having captcha enabled.


Send password reset email
`
1
supabase.auth.resetPasswordForEmail(email = "example@email.com")
`
## Verify and log in through OTP
  * Verifying an OTP is done through either `verifyPhoneOtp` or `verifyEmailOtp`.
  * The verification type used should be determined based on the corresponding auth method called before using `verifyPhoneOtp`/`verifyEmailOtp` to sign up / sign-in a user.


### Parameters
  * typeRequiredOtpType.Email or OtpType.Phone
The OTP type. Depending on the type, an email or phone has to be specified as parameter.
  * email/phoneRequiredString
The email or phone number, depending on which type you specified.
  * tokenRequiredString
The token to verify.
  * captchaTokenOptionalString?
The captcha token when having captcha enabled.


Verify an Email OTPVerify an Phone OTP
`
1
supabase.auth.verifyEmailOtp(type = OtpType.Email.EMAIL, email = "example@email.com", token = "token")
`
Notes
## Retrieve a session
Returns the current session, or `null` if there is none.
Get the session data
`
1
val session = supabase.auth.currentSessionOrNull()
`
## Retrieve a new session
This method will refresh the session whether the current one is expired or not.
  * This is done automatically, but can be disabled in the Auth config.


### Parameters
  * refreshTokenRequiredString
The refresh token to use.


Refresh current sessionRefresh session using the refresh token
`
1
val session = supabase.auth.refreshCurrentSession()
`
## Retrieve a user
  * This method gets the user object from the current session.
  * Fetches the user object from the database instead of local session.
  * Should be used only when you require the most current user data. For faster results, `getCurrentSessionOrNull()?.user` is recommended.


### Parameters
  * jwtRequiredString
The JWT token.


Get the logged in user with the current sessionGet a user based on their access token
`
1
val user = supabase.auth.retrieveUserForCurrentSession(updateSession = true)
`
Notes
## Update a user
Modifies the user data.
  * In order to use the `updateUser()` method, the user needs to be signed in first.
  * By default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's email auth provider settings.


### Parameters
  * updateCurrentUserOptionalBoolean
Whether to update the local session with the new user. Defaults to `true`.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configRequiredUserUpdateBuilder.() -> Unit
Details


Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadata
`
1
val user = supabase.auth.updateUser {
2
  email = "newEmail@email.com"
3
}
`
Notes
## Retrieve identities linked to a user
  * The user needs to be signed in to call `currentIdentitiesOrNull()`.


Returns a list of identities linked to the user
`
1
//get the identities from the current user
2
val identities = supabase.auth.currentIdentitiesOrNull()
3
//Or retrieve them
4
val identities = supabase.auth.retrieveUserForCurrentSession().identities
`
## Link an identity to a user
  * The **Enable Manual Linking** option must be enabled from your project's authentication settings.
  * The user needs to be signed in to call `linkIdentity()`.
  * If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.
  * This method works similarly to `signInWith()` using an OAuthProvider. To learn how to handle OTP links & OAuth refer to initializing


### Parameters
  * providerRequiredOAuthProvider
The OAuth provider you want to link the user with.
  * redirectUrlOptionalString?
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalExternalAuthConfigDefaults.() -> Unit
Extra configuration.
Details


Link an identity to a user
`
1
supabase.auth.linkIdentity(OAuthProvider)
23
//Example:
4
supabase.auth.linkIdentity(Google)
`
## Unlink an identity from a user
  * The **Enable Manual Linking** option must be enabled from your project's authentication settings.
  * The user needs to be signed in to call `unlinkIdentity()`.
  * The user must have at least 2 identities in order to unlink an identity.
  * The identity to be unlinked must belong to the user.


### Parameters
  * identityIdRequiredString
The id of the OAuth identity
  * updateLocalUserOptionalBoolean
Whether to delete the identity from the local user or not. Defaults to `true`.


Unlink an identity
`
1
//get all identities linked to a user
2
val identities = supabase.auth.currentIdentitiesOrNull() ?: emptyList()
34
//find the google identity linked to the user
5
val googleIdentity = identities.first { it.provider == "google" }
67
//unlink the google identity from the user
8
supabase.auth.unlinkIdentity(googleIdentity.identityId!!)
`
## Send a password reauthentication nonce
  * This method is used together with `updateUser()` when a user's password needs to be updated.
  * This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.


Send reauthentication nonce
`
1
supabase.auth.reauthenticate()
`
Notes
## Resend an OTP
  * Resends a signup confirmation, email change or phone change email to the user.
  * Passwordless sign-ins can be resent by calling the `signInWith(OTP)` method again.
  * Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
  * This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made.


### Parameters
  * typeRequiredOtpType.Email or OtpType.Phone
The OTP type. Depending on the type, an email or phone has to be specified as parameter.
  * email/phoneRequiredString
The email or phone number, depending on which type you specified.
  * captchaTokenOptionalString?
The captcha token when having captcha enabled.


Resend an email signup confirmationResend a phone signup confirmationResend email change emailResend phone change OTP
`
1
supabase.auth.resendEmail(OtpType.Email.SIGNUP, "example@email.com")
`
Notes
## Set the session data
Changes the local session.
  * `importSession()` takes in a UserSession.
  * Refresh token rotation is enabled by default on all projects to guard against replay attacks.
  * You can configure the `REFRESH_TOKEN_REUSE_INTERVAL` which provides a short window in which the same refresh token can be used multiple times in the event of concurrency or offline issues.


### Parameters
  * sessionRequiredUserSession
The session to set.


Set local session
`
1
supabase.auth.importSession(UserSession(accessToken = "token", refreshToken = "refresh", expiresIn = 2000, tokenType = "Bearer", user = null))
`
Notes
## Exchange an auth code for a session
  * Used when `flowType` is set to `FlowType.PKCE` in the Auth configuration.


### Parameters
  * codeRequiredString
The code to exchange.
  * saveSessionOptionalBoolean
Whether to save the session. Defaults to true.


Exchange Auth Code
`
1
supabase.auth.exchangeCodeForSession("34e770dd-9ff9-416c-87fa-43b31d7ef225")
`
## Auth MFA
This section contains methods commonly used for Multi-Factor Authentication (MFA) and are invoked behind the `supabase.auth.mfa` namespace.
Currently, we only support time-based one-time password (TOTP) as the 2nd factor. We don't support recovery codes but we allow users to enroll more than 1 TOTP factor, with an upper limit of 10.
Having a 2nd TOTP factor for recovery frees the user of the burden of having to store their recovery codes somewhere. It also reduces the attack surface since multiple recovery codes are usually generated compared to just having 1 backup TOTP factor.
## Enroll a factor
Enrolls a new factor.
  * Use `FactorType.TOTP` or `FactorType.Phone` as the factorType and use the returned id to create a challenge.
  * To create a challenge, see `mfa.createChallenge()`.
  * To verify a challenge, see `mfa.verifyChallenge()`.
  * To create and verify a challenge in a single step, see `mfa.createChallengeAndVerify()`.


### Parameters
  * factorTypeRequiredFactorType<C, R>
The type of MFA factor to enroll. Currently supports `FactorType.TOTP` and `FactorType.Phone`.
  * issuerOptionalString?
Domain which the user is enrolling with.
  * configOptionalConfig.() -> Unit
Factor type specific configuration.


Enroll a time-based, one-time password (TOTP) factorEnroll a Phone FactorCheck the local user for verified factorsRetrieve verified factors
`
1
val factor = supabase.auth.mfa.enroll(factorType = FactorType.TOTP, friendlyName = "Your friendly Name") {
2
   // Optional
3
   issuer = "example.com"
4
}
56
// Use the id to create a challenge.
7
// The challenge can be verified by entering the code generated from the authenticator app.
8
// The code will be generated upon scanning the qr_code or entering the secret into the authenticator app.
9
val (id, type, qrCode) = factor.data //qrCode is a svg as a string
10
val (factorId, factorType, _) = factor
11
val challenge = supabase.auth.mfa.createChallenge(factor.id)
`
## Create a challenge
Creates a challenge for a factor.
  * An enrolled factor is required before creating a challenge.
  * To verify a challenge, see `mfa.verifyChallenge()`.
  * A phone factor sends a code to the user upon challenge. The channel defaults to `Phone.Channel.SMS` unless otherwise specified.


### Parameters
  * factorIdRequiredString
The id of the MFA factor you want to create a challenge for.
  * channelOptionalPhone.Channel?
The channel to send the challenge to. Defaults to `Phone.Channel.SMS`.


Create a challenge for a factor
`
1
val challenge = supabase.auth.mfa.createChallenge(factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225")
`
## Verify a challenge
Verifies a challenge for a factor.
  * To verify a challenge, please create a challenge first.


### Parameters
  * factorIdRequiredString
The id of the MFA factor to verify.
  * challengeIdRequiredString
The id of the challenge to verify.
  * codeRequiredString
The code used to verify.
  * saveSessionOptionalBoolean
Whether to save the session. Defaults to true.


Verify a challenge for a factor
`
1
supabase.auth.mfa.verifyChallenge(
2
  factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225",
3
  challengeId = "4034ae6f-a8ce-4fb5-8ee5-69a5863a7c15",
4
  code = "123456",
5
  saveSession = true // this is set to true by default, but you can set it to false if you want to handle the session yourself
6
)
`
## Create and verify a challenge
Creates and verifies a challenge for a factor.
  * Creating and verifying a challenge in a single step is not supported by the `Phone` factor type.
  * An enrolled factor is required before invoking `createChallengeAndVerify()`.
  * Executes `mfa.createChallenge()` and `mfa.verifyChallenge()` in a single step.


### Parameters
  * factorIdRequiredString
The id of the MFA factor to verify.
  * codeRequiredString
The code used to verify.
  * saveSessionOptionalBoolean
Whether to save the session. Defaults to true.


Create and verify a challenge for a factor
`
1
supabase.auth.mfa.createChallengeAndVerify(
2
  factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225",
3
  code = "123456",
4
  saveSession = true // this is set to true by default, but you can set it to false if you want to handle the session yourself
5
)
`
## Unenroll a factor
Unenroll removes a MFA factor. A user has to have an `AAL2` authentication level in order to unenroll a verified factor.
### Parameters
  * factorIdRequiredString
The id of the factor you want to unenroll.


Unenroll a factor
`
1
supabase.auth.mfa.unenroll(factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225")
`
## Get Authenticator Assurance Level
  * Authenticator Assurance Level (AAL) is the measure of the strength of an authentication mechanism.
  * In Supabase, having an AAL of `aal1` refers to having the 1st factor of authentication such as an email and password or OAuth sign-in while `aal2` refers to the 2nd factor of authentication such as a time-based, one-time-password (TOTP).
  * If the user has a verified factor, the `next` field will return `AuthenticatorAssuranceLevel.AAL2`, else, it will return `AuthenticatorAssuranceLevel.AAL1`.


Get the AAL details of the current sessionCheck whether the user has at least one verified factorCheck whether the user is logged in using AAL2
`
1
val (current, next) = supabase.auth.mfa.getAuthenticatorAssuranceLevel()
`
## Auth Admin
  * Any method under the `supabase.auth.admin` namespace requires a `service_role` key.
  * These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.


Create server-side auth client
`
1
val supabase = createSupabaseClient(
2
  supabaseUrl = "https://id.supabase.co",
3
  supabaseKey = "supabaseKey"
4
) {
5
  install(Auth) {
6
    minimalSettings() //disables session saving and auto-refreshing
7
  }
8
  // install other plugins (these will use the service role key)
9
}
10
supabase.auth.importAuthToken("service_role")
1112
// Access auth admin api
13
val adminAuthClient = supabase.auth.admin
`
## Retrieve a user
Fetches the user object from the database based on the user's id.
  * The `retrieveUserById()` method requires the user's id which maps to the `auth.users.id` column.


### Parameters
  * uidRequiredString
The id of the user you want to retrieve.


Fetch the user object using the access_token jwt
`
1
val user = supabase.auth.admin.retrieveUserById(uid = "f2a0b0a0-6b1a-4b7a-8f1a-4b7a6b1a8f1a")
`
## List all users
Retrieves a list of users.
  * Defaults to return 50 users per page.


### Parameters
  * pageOptionalInt
The page number to retrieve.
  * perPageOptionalInt
The number of users to retrieve per page.


Get a page of usersPaginated list of users
`
1
val users = supabase.auth.admin.retrieveUsers()
`
## Create a user
Creates a new user.
  * To confirm the user's email address or phone number, set `autoConfirm` to true. Both arguments default to false.


### Parameters
  * builderRequiredAdminUserBuilder.Email.() -> Unit or AdminUserBuilder.Phone.() -> Unit
The builder to create a new user.
Details


Create user with emailCreate user with phoneAuto-confirm the user's emailAuto-confirm the user's phone number
`
1
val userWithEmail = supabase.auth.admin.createUserWithEmail {
2
  email = "example@email.com"
3
  password = "secretpassword"
4
  userMetadata {
5
    put("name", "John")
6
  }
7
}
`
## Delete a user
Deletes a user from the database.
  * The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.


### Parameters
  * uidRequiredString
The id of the user you want to delete.


Removes a user
`
1
supabase.auth.admin.deleteUser(uid = "uid")
`
## Send an email invite link
Sends an invite link to the user's email address.
### Parameters
  * emailRequiredString
The email to send the invite to.
  * redirectToOptionalString
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * dataOptionalJsonObject
Custom data to create the user with.


Invite a user
`
1
supabase.auth.admin.inviteUserByEmail(
2
  email = "example@email.com",
3
  //optional:
4
  redirectTo = "https://example.com/redirect",
5
  data = buildJsonObject {
6
    put("custom", "value")
7
  }
8
)
`
## Generate an email link
Generates email links and OTPs to be sent via a custom email provider.
### Parameters
  * typeRequiredLinkType<C>
The type of link to generate, e.g. `LinkType.Signup`.
  * redirectToOptionalString
The redirect url to use. If you don't specify this, the platform specific will be used, like deeplinks on android.
  * configOptionalC.() -> Unit
The builder to create a new link.


Generate a signup linkGenerate an invite linkGenerate a magic linkGenerate a recovery linkGenerate links to change current email address
`
1
val (url, user) = supabase.auth.admin.generateLinkFor(LinkType.Signup) {
2
  email = "example@email.com"
3
  password = "secretpassword"
4
}
`
## Update a user
Updates the user data.
### Parameters
  * uidRequiredString
The id of the user you want to update.
  * builderRequiredAdminUserUpdateBuilder.() -> Unit
The builder to update the user.
Details


Updates a user's emailUpdates a user's passwordUpdates a user's metadataUpdates a user's app_metadataConfirms a user's email addressConfirms a user's phone number
`
1
supabase.auth.admin.updateUserById(uid = "id") {
2
  email = "example@email.com"
3
}
`
## List all factors for a user
Lists all factors associated to a user.
### Parameters
  * uidRequiredString
The id of the user you want to list factors for.


List all factors for a user
`
1
const factors = supabase.auth.admin.retrieveFactors(uid = "id")
`
## Delete a factor for a user
Deletes a factor on a user. This will log the user out of all active sessions if the deleted factor was verified.
### Parameters
  * uidRequiredString
The id of the user you want to delete a factor for.
  * factorIdRequiredString
The id of the factor you want to delete.


Delete a factor for a user
`
1
supabase.auth.admin.deleteFactor(uid = "id", factorId = "factor_id")
`
## Invokes a Supabase Edge Function.
Invokes a Supabase Function. See the guide for details on writing Functions.
  * When invoking a function with parameters, you have to provide a serializable value in the function parameter.
  * Requires an Authorization header.


### Parameters
  * functionRequiredString
The name of the function to invoke.
  * bodyOptionalT
The body to send with the request. T can be any serializable type.
  * regionOptionalFunctionRegion
The region where the function is invoked. Defaults to `Functions.Config#defaultRegion`.
  * headersOptionalHeaders
The headers to send with the request.


Basic invocationBasic invocation with bodyReuse function by saving it to a variable
`
1
val response = supabase.functions.invoke("function_name")
23
// Decode the response body to a serializable class
4
val data = response.body<FunctionResponse>()
`
## Listen to database changes
Return real-time data from your table as a Flow.
  * Realtime is disabled by default for new tables. You can turn it on by managing replication.
  * `selectAsFlow` and `selectSingleValueAsFlow` will emit the initial data and then listen for changes.
  * Takes in a `filter` parameter to filter the data and a `primaryKey` parameter to cache the data by the primary key.
  * This method requires both the `Realtime` and `Postgrest` plugins to be installed.
  * The type parameter `T` must be a serializable class.
  * If you want more control over the realtime updates, you can use the `Realtime` plugin directly.


### Parameters
  * primaryKeyRequiredKProperty1<Data, Value> or PrimaryKey<Data>
The primary key to cache the data by. Can be a property reference or a custom primary key.
  * channelNameOptionalString
The name of the channel to use for the realtime updates. If null, a channel name following the format "schema:table:id" will be used
  * filterOptionalPostgrestFilterBuilder.() -> Unit or FilterOperation
The filter to apply to the data.


Listen for changes in multiple rowsListen for changes in multiple rows with a filterListen for changes in a single row
`
1
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
2
flow.collect {
3
  for (country in it) {
4
    println(country.name)
5
  }
6
}
`
## Subscribe to channel
Subscribe to realtime changes in your database.
  * Realtime is disabled by default for new Projects for better database performance and security. You can turn it on by managing replication.
  * If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`
  * When using a method with a generic type like `track`, `broadcast` or `broadcastFlow`, you have to provide a serializable class as the type parameter.
  * Presence, Broadcast and Database updates are sent through a Flow


Listen to broadcastsListen to presence updatesListen to all database changesListen to a specific tableListen to insertsListen to updatesListen to deletesListen to row level changes
`
1
@Serializable
2
data class Message(val content: String, val sender: String)
34
val channel = supabase.channel("channelId") {
5
  // optional config
6
}
78
val broadcastFlow = channel.broadcastFlow<Message>(event = "message")
910
// Collect the flow
11
broadcastFlow.onEach { // it: Message
12
  println(it)
13
}.launchIn(coroutineScope) // launch a new coroutine to collect the flow
1415
channel.subscribe(blockUntilSubscribed = true)
`
## Unsubscribe from a channel
Unsubscribes and removes Realtime channel from Realtime client.
  * Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes.
  * Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  * If you removed all channels, the client automatically disconnects from the Realtime websocket. This can be disabled in the Realtime config by setting `disconnectOnNoSubscriptions` to false.


Remove a channelUnsubscribe from a channel
`
1
val channel = supabase.channel("channelId") {
2
  //optional config
3
}
4
//...
5
supabase.realtime.removeChannel(channel)
`
## Unsubscribe from all channels
Unsubscribes and removes all Realtime channels from Realtime client.
  * Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  * If you removed all channels, the client automatically disconnects from the Realtime websocket. This can be disabled in the Realtime config by setting `disconnectOnNoSubscriptions` to false.


Remove all channels
`
1
supabase.realtime.removeAllChannels()
`
## Retrieve all channels
Returns all Realtime channels.
Get all channels
`
1
val channels = supabase.realtime.subscriptions.entries
`
## Broadcast a message
Broadcast a message to all connected clients to a channel.
  * When using REST you don't need to subscribe to the channel


Send a message via websocketSend a message via REST
`
1
val channel = supabase.channel("room1")
2
channel.subscribe(blockUntilSubscribed = true)
3
channel.broadcast("cursor-pos", message = buildJsonObject {
4
 put("x", 10)
5
 put("y", 20)
6
})
`
Response
## Create a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: `insert`
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
The id of the bucket you want to create.
  * builderOptionalBucketBuilder.() -> Unit
The builder to create a new bucket.
Details


Create bucket
`
1
supabase.storage.createBucket(id = "icons") {
2
  public = true
3
  fileSizeLimit = 5.megabytes
4
}
`
## Retrieve a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: `select`
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


Get bucket
`
1
val bucket = supabase.storage.retrieveBucketById(bucketId = "avatars")
`
## List all buckets
  * RLS policy permissions required: 
    * `buckets` table permissions: `select`
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


List buckets
`
1
val buckets = supabase.storage.retrieveBuckets()
`
## Update a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: `select` and `update`
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
The id of the bucket you want to create.
  * builderOptionalBucketBuilder.() -> Unit
The builder to create a new bucket.
Details


Update bucket
`
1
supabase.storage.updateBucket("cards") {
2
  public = false
3
  fileSizeLimit = 20.megabytes
4
  allowedMimeTypes(ContentType.Image.PNG, ContentType.Image.JPEG)
5
}
`
## Delete a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: `select` and `delete`
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * bucketIdRequiredString
The id of the bucket you want to delete.


Delete bucket
`
1
supabase.storage.deleteBucket(bucketId = "icons")
`
## Empty a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: `select`
    * `objects` table permissions: `select` and `delete`
  * Refer to the Storage guide on how access control works


### Parameters
  * bucketIdRequiredString
The id of the bucket you want to empty.


Empty bucket
`
1
supabase.storage.emptyBucket(bucketId = "icons")
`
## Upload a file
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `insert`
  * Refer to the Storage guide on how access control works
  * Resumable uploads use a `Disk` cache by default to store the upload urls. You can customize that in the Auth config by changing the `resumable.cache` property.


### Parameters
  * pathRequiredString
The path of the file you want to upload.
  * dataRequiredByteArray
The data of the file you want to upload.
  * optionsOptionalUploadOptionBuilder.() -> Unit
Additional options for the upload.
Details


Upload fileUpload file with progressCreate resumable uploadStart and resumable uploadPause resumable uploadCancel resumable uploadListen to the resumable upload stateContinue previous uploads
`
1
val bucket = supabase.storage.from("avatars")
2
bucket.upload("myIcon.png", byteArray) {
3
  upsert = false
4
}
5
//on JVM you can use java.io.File
6
bucket.upload("myIcon.png", file) {
7
  upsert = false
8
}
`
## Download a file
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to download.
  * optionsOptionalDownloadOptionBuilder.() -> Unit
Additional options for the download.
Details


Download file from non-public bucketDownload file from public bucketDownload file with transformationDownload file with progress
`
1
val bucket = supabase.storage.from("avatars")
2
val bytes = bucket.downloadAuthenticated("test.png")
3
//or on JVM:
4
bucket.downloadAuthenticatedTo("test.png", File("test.png"))
`
## List all files in a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `select`
  * Refer to the Storage guide on how access control works


List files in a bucket
`
1
val bucket = supabase.storage.from("avatars")
2
val files = bucket.list()
`
## Replace an existing file
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `update` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to upload.
  * dataRequiredByteArray
The data of the file you want to upload.
  * optionsOptionalUploadOptionBuilder.() -> Unit
Additional options for the upload.
Details


Update file
`
1
val bucket = supabase.storage.from("avatars")
2
bucket.update("myIcon.png", byteArray) {
3
  upsert = false
4
}
5
//on JVM you can use java.io.File
6
bucket.update("myIcon.png", file) {
7
  upsert = false
8
}
`
## Move an existing file
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `update` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * fromRequiredString
The path of the file you want to move.
  * toRequiredString
The new path of the file.
  * destinationBucketOptionalString
The destination bucket of the file.


Move file
`
1
val bucket = supabase.storage.from("avatars")
2
bucket.move("icon1.png", "icon2.png")
`
## Copy an existing file
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `insert` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * fromRequiredString
The path of the file you want to copy.
  * toRequiredString
The new path of the file.
  * destinationBucketOptionalString
The destination bucket of the file.


Copy file
`
1
supabase.storage.from("test").copy(from = "avatar.png", to = "avatar2.png")
`
## Delete files in a bucket
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `delete` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathsRequiredvararg String
The paths of the files you want to remove.


Delete file
`
1
val bucket = supabase.storage.from("avatars")
2
bucket.delete("test.png", "test2.png")
`
## Create a signed URL
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to create a signed url for.
  * expiresInRequiredDuration
The duration the signed url should be valid for.
  * builderOptionalImageTransformation.() -> Unit
The transformation to apply to the image.
Details


Create Signed URLCreate Signed URL with transformation
`
1
val bucket = supabase.storage.from("avatars")
2
val url = bucket.createSignedUrl(path = "icon.png", expiresIn = 3.minutes)
`
## Create signed URLs
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * expiresInRequiredDuration
The duration the signed url should be valid for.
  * pathsRequiredvararg String
The paths of the files you want to create signed urls for.


Create Signed URLs
`
1
val urls = supabase.storage.from("avatars").createSignedUrls(20.minutes, "avata1.jpg", "avatar2.jpg")
`
## Create signed upload URL
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: `insert`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to upload.
  * upsertOptionalBoolean
Whether to overwrite the file if it already exists.


Create Signed Upload URL
`
1
val url = supabase.storage.from("avatars").createSignedUploadUrl("avatar.png")
`
## Upload to a signed URL
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to upload.
  * tokenRequiredString
The token you received from `createSignedUploadUrl`.
  * dataOptionalByteArray
The data of the file you want to upload.
  * optionsOptionalUploadOptionBuilder.() -> Unit
Additional options for the upload.
Details


Upload to a signed URL
`
1
supabase.storage.from("avatars").uploadToSignedUrl(path = "avatar.jpg", token = "token-from-createSignedUploadUrl", data = bytes)
2
//or on JVM:
3
supabase.storage.from("avatars").uploadToSignedUrl(path = "avatar.jpg", token = "token-from-createSignedUploadUrl", file = File("avatar.jpg"))
`
## Retrieve public URL
  * The bucket needs to be set to public, either via updateBucket() or by going to Storage on supabase.com/dashboard, clicking the overflow menu on a bucket and choosing "Make public"
  * RLS policy permissions required: 
    * `buckets` table permissions: none
    * `objects` table permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path of the file you want to get the public url for.


Returns the URL for an asset in a public bucketReturns the URL for an asset in a public bucket with transformations
`
1
val url = supabase.storage.from("public-bucket").publicUrl("folder/avatar1.png")
`
