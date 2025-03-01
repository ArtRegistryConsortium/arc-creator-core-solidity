C# Reference v1.0
# C# Client Library
supabaseView on GitHub
This reference documents every object and method available in Supabase's C# library, supabase. You can use `Supabase` to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.
The C# client library is created and maintained by the Supabase community, and is not an official library. Please be tolerant of areas where the library is still being developed, and — as with all the libraries — feel free to contribute wherever you find issues.
Huge thanks to official maintainer, Joseph Schultz. As well as Will Iverson, Ben Randall, and Rhuan Barros for their help.
## Installing
### Install from NuGet#
You can install Supabase package from nuget.org
Terminal
Terminal
`
1
dotnet add package supabase
`
## Initializing
Initializing a new client is pretty straightforward. Find your project url and public key from the admin panel and pass it into your client initialization function.
`Supabase` is heavily dependent on Models deriving from `BaseModel`. To interact with the API, one must have the associated model (see example) specified.
Leverage `Table`, `PrimaryKey`, and `Column` attributes to specify names of classes/properties that are different from their C# Versions.
StandardDependency Injection (Maui-like)With Models Example
`
1
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
2
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");
34
var options = new Supabase.SupabaseOptions
5
{
6
  AutoConnectRealtime = true
7
};
89
var supabase = new Supabase.Client(url, key, options);
10
await supabase.InitializeAsync();
`
## Fetch data
Performs vertical filtering with SELECT.
  * **LINQ expressions do not currently support parsing embedded resource columns. For these cases,`string` will need to be used.**
  * **When using string Column Names to select, they must match names in database, not names specified on model properties.**
  * Additional information on modeling + querying Joins and Inner Joins can be found in the `postgrest-csharp README`
  * By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * `From()` can be combined with Modifiers
  * `From()` can be combined with Filters
  * If using the Supabase hosted platform `apikey` is technically a reserved keyword, since the API gateway will pluck it out for authentication. It should be avoided as a column name.


Getting your dataSelecting specific columnsQuery foreign tablesFiltering with inner joinsQuerying with count optionQuerying JSON data
`
1
// Given the following Model (City.cs)
2
[Table("cities")]
3
class City : BaseModel
4
{
5
  [PrimaryKey("id")]
6
  public int Id { get; set; }
78
  [Column("name")]
9
  public string Name { get; set; }
1011
  [Column("country_id")]
12
  public int CountryId { get; set; }
1314
  //... etc.
15
}
1617
// A result can be fetched like so.
18
var result = await supabase.From<City>().Get();
19
var cities = result.Models
`
## Insert data
Performs an INSERT into the table.
Create a recordBulk createFetch inserted record
`
1
[Table("cities")]
2
class City : BaseModel
3
{
4
  [PrimaryKey("id", false)]
5
  public int Id { get; set; }
67
  [Column("name")]
8
  public string Name { get; set; }
910
  [Column("country_id")]
11
  public int CountryId { get; set; }
12
}
1314
var model = new City
15
{
16
 Name = "The Shire",
17
 CountryId = 554
18
};
1920
await supabase.From<City>().Insert(model);
`
## Update data
Performs an UPDATE on the table.
  * `Update()` is typically called using a model as an argument or from a hydrated model.


Update your data using FilterUpdate your data
`
1
var update = await supabase
2
 .From<City>()
3
 .Where(x => x.Name == "Auckland")
4
 .Set(x => x.Name, "Middle Earth")
5
 .Update();
`
## Upsert data
Performs an UPSERT into the table.
  * Primary keys should be included in the data payload in order for an update to work correctly.
  * Primary keys must be natural, not surrogate. There are however, workarounds for surrogate primary keys.


Upsert your dataUpserting into tables with constraintsReturn the exact number of rows
`
1
var model = new City
2
{
3
 Id = 554,
4
 Name = "Middle Earth"
5
};
67
await supabase.From<City>().Upsert(model);
`
## Delete data
Performs a DELETE on the table.
  * `Delete()` should always be combined with Filters to target the item(s) you wish to delete.


Delete records
`
1
await supabase
2
 .From<City>()
3
 .Where(x => x.Id == 342)
4
 .Delete();
`
## Call a Postgres function
You can call stored procedures as a "Remote Procedure Call".
That's a fancy way of saying that you can put some logic into your database then call it from anywhere. It's especially useful when the logic rarely changes - like password resets and updates.
Call a stored procedureWith Parameters
`
1
await supabase.Rpc("hello_world", null);
`
Notes
## Using filters
Filters allow you to only return rows that match certain conditions.
Filters can be used on `Select()`, `Update()`, and `Delete()` queries.
**Note: LINQ expressions do not currently support parsing embedded resource columns. For these cases,`string` will need to be used.**
Applying FiltersFilter by values within a JSON columnFilter Foreign Tables
`
1
var result = await supabase.From<City>()
2
   .Select(x => new object[] { x.Name, x.CountryId })
3
   .Where(x => x.Name == "The Shire")
4
   .Single();
`
## Column is equal to a value
Finds all rows whose value on the stated `column` exactly matches the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Where(x => x.Name == "Bali")
3
 .Get();
`
## Column is not equal to a value
Finds all rows whose value on the stated `column` doesn't match the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Where(x => x.Name != "Bali")
4
 .Get();
`
## Column is greater than a value
Finds all rows whose value on the stated `column` is greater than the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Where(x => x.CountryId > 250)
4
 .Get();
`
## Column is greater than or equal to a value
Finds all rows whose value on the stated `column` is greater than or equal to the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Where(x => x.CountryId >= 250)
4
 .Get();
`
## Column is less than a value
Finds all rows whose value on the stated `column` is less than the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select("name, country_id")
3
 .Where(x => x.CountryId < 250)
4
 .Get();
`
## Column is less than or equal to a value
Finds all rows whose value on the stated `column` is less than or equal to the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Where(x => x.CountryId <= 250)
3
 .Get();
`
## Column matches a pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case sensitive).
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Filter(x => x.Name, Operator.Like, "%la%")
3
 .Get();
`
## Column matches a case-insensitive pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case insensitive).
With `Select()`
`
1
await supabase.From<City>()
2
 .Filter(x => x.Name, Operator.ILike, "%la%")
3
 .Get();
`
## Column is a value
A check for exact equality (null, true, false), finds all rows whose value on the stated `column` exactly match the specified `value`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Where(x => x.Name == null)
3
 .Get();
`
## Column is in an array
Finds all rows whose value on the stated `column` is found on the specified `values`.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Filter(x => x.Name, Operator.In, new List<object> { "Rio de Janiero", "San Francisco" })
3
 .Get();
`
## Column contains every element in a value
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Filter(x => x.MainExports, Operator.Contains, new List<object> { "oil", "fish" })
3
 .Get();
`
## Contained by value
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Filter(x => x.MainExports, Operator.ContainedIn, new List<object> { "oil", "fish" })
3
 .Get();
`
## Match a string
Finds all rows whose tsvector value on the stated `column` matches to_tsquery(query).
Text searchBasic normalizationFull normalizationWebsearch
`
1
var result = await supabase.From<Quote>()
2
 .Select(x => x.Catchphrase)
3
 .Filter(x => x.Catchphrase, Operator.FTS, new FullTextSearchConfig("'fat' & 'cat", "english"))
4
 .Get();
`
## Match an associated value
  * Finds a model given a class (useful when hydrating models and correlating with database)
  * Finds all rows whose columns match the specified `Dictionary<string, string>` object.


With ModelWith Dictionary
`
1
var city = new City
2
{
3
  Id = 224,
4
  Name = "Atlanta"
5
};
67
var model = supabase.From<City>().Match(city).Single();
`
## Don't match the filter
Finds all rows which doesn't satisfy the filter.
With `Select()`
`
1
var result = await supabase.From<Country>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Where(x => x.Name != "Paris")
4
 .Get();
`
## Match at least one filter
Finds all rows satisfying at least one of the filters.
With `Select()`Use `or` with `and`
`
1
var result = await supabase.From<Country>()
2
 .Where(x => x.Id == 20 || x.Id == 30)
3
 .Get();
`
## Using modifiers
Filters work on the row level—they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g., setting a limit or offset).
## Order the results
Orders the result with the specified column.
With `Select()`With embedded resourcesOrder parent table by a referenced table
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Order(x => x.Id, Ordering.Descending)
4
 .Get();
`
## Limit the number of rows returned
Limits the result with the specified count.
With `Select()`With embedded resources
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Limit(10)
4
 .Get();
`
## Limit the query to a range
Limits the result to rows within the specified range, inclusive.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select("name, country_id")
3
 .Range(0, 3)
4
 .Get();
`
## Retrieve one row of data
Retrieves only one row from the result. Result must be one row (e.g. using limit), otherwise this will result in an error.
With `Select()`
`
1
var result = await supabase.From<City>()
2
 .Select(x => new object[] { x.Name, x.CountryId })
3
 .Single();
`
## Create a new user
Creates a new user.
  * By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.
  * **Confirm email** determines if users need to confirm their email address after signing up. 
    * If **Confirm email** is enabled, a `user` is returned but `session` is null.
    * If **Confirm email** is disabled, both a `user` and a `session` are returned.
  * When the user confirms their email address, they are redirected to the `SITE_URL` by default. You can modify your `SITE_URL` or add additional redirect URLs in your project.
  * If SignUp() is called for an existing confirmed user: 
    * When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in your project, an obfuscated/fake user object is returned.
    * When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.


Sign up.
`
1
var session = await supabase.Auth.SignUp(email, password);
`
## Listen to auth events
Receive a notification every time an auth event happens.
  * Types of auth events: `AuthState.SignedIn`, `AuthState.SignedOut`, `AuthState.UserUpdated`, `AuthState.PasswordRecovery`, `AuthState.TokenRefreshed`


Listen to auth changes
`
1
supabase.Auth.AddStateChangedListener((sender, changed) =>
2
{
3
  switch (changed)
4
  {
5
    case AuthState.SignedIn:
6
      break;
7
    case AuthState.SignedOut:
8
      break;
9
    case AuthState.UserUpdated:
10
      break;
11
    case AuthState.PasswordRecovery:
12
      break;
13
    case AuthState.TokenRefreshed:
14
      break;
15
  }
16
});
`
## Sign in a user
Log in an existing user using email or phone number with password.
  * Requires either an email and password or a phone number and password.


Sign in with email and passwordSign in with phone and password
`
1
var session = await supabase.Auth.SignIn(email, password);
`
## Sign in a user through OTP
  * Requires either an email or phone number.
  * This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
  * If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
  * If you're using phone, you can configure whether you want the user to receive a OTP.
  * The magic link's destination URL is determined by the `SITE_URL`. You can modify the `SITE_URL` or add additional redirect urls in your project.


Send Magic Link.Sign in with SMS OTP.
`
1
var options = new SignInOptions { RedirectTo = "http://myredirect.example" };
2
var didSendMagicLink = await supabase.Auth.SendMagicLink("joseph@supabase.io", options);
`
Notes
## Sign in a user through OAuth
Signs the user in using third party OAuth providers.
  * This method is used for signing in using a third-party provider.
  * Supabase supports many different third-party providers.


Sign in using a third-party providerWith scopes
`
1
var signInUrl = supabase.Auth.SignIn(Provider.Github);
`
## Sign out a user
Signs out the current user, if there is a logged in user.
  * In order to use the `SignOut()` method, the user needs to be signed in first.


Sign out
`
1
await supabase.Auth.SignOut();
`
## Verify and log in through OTP
  * The `VerifyOtp` method takes in different verification types. If a phone number is used, the type can either be `sms` or `phone_change`. If an email address is used, the type can be one of the following: `signup`, `magiclink`, `recovery`, `invite` or `email_change`.
  * The verification type used should be determined based on the corresponding auth method called before `VerifyOtp` to sign up / sign-in a user.


Verify Sms One-Time Password (OTP)
`
1
var session = await supabase.Auth.VerifyOTP("+13334445555", TOKEN, MobileOtpType.SMS);
`
## Retrieve a session
Returns the session data, if there is an active session.
Get the session data
`
1
var session = supabase.Auth.CurrentSession;
`
## Retrieve a user
Returns the user data, if there is a logged in user.
Get the logged in user
`
1
var user = supabase.Auth.CurrentUser;
`
## Update a user
Updates user data, if there is a logged in user.
  * In order to use the `UpdateUser()` method, the user needs to be signed in first.
  * By Default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's email auth provider settings.


Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadata
`
1
var attrs = new UserAttributes { Email = "new-email@example.com" };
2
var response = await supabase.Auth.Update(attrs);
`
Notes
## Invokes a Supabase Edge Function.
Invokes a Supabase Function. See the guide for details on writing Functions.
  * Requires an Authorization header.
  * Invoke params generally match the Fetch API spec.


Basic invocation.Modeled invocation
`
1
var options = new InvokeFunctionOptions
2
{
3
  Headers = new Dictionary<string, string> {{ "Authorization", "Bearer 1234" }},
4
  Body = new Dictionary<string, object> { { "foo", "bar" } }
5
};
67
await supabase.Functions.Invoke("hello", options: options);
`
## Subscribe to channel
Subscribe to realtime changes in your database.
  * Realtime is disabled by default for new Projects for better database performance and security. You can turn it on by managing replication.
  * If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`


Listen to broadcast messagesListen to presence syncListening to a specific tableListen to all database changesListening to insertsListening to updatesListening to deletesListening to row level changes
`
1
class CursorBroadcast : BaseBroadcast
2
{
3
  [JsonProperty("cursorX")]
4
  public int CursorX {get; set;}
56
  [JsonProperty("cursorY")]
7
  public int CursorY {get; set;}
8
}
910
var channel = supabase.Realtime.Channel("any");
11
var broadcast = channel.Register<CursorBroadcast>();
12
broadcast.AddBroadcastEventHandler((sender, baseBroadcast) =>
13
{
14
  var response = broadcast.Current();
15
});
1617
await channel.Subscribe();
1819
// Send a broadcast
20
await broadcast.Send("cursor", new CursorBroadcast { CursorX = 123, CursorY = 456 });
`
## Unsubscribe from a channel
Unsubscribes and removes Realtime channel from Realtime client.
  * Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.


Remove a channel
`
1
var channel = await supabase.From<City>().On(ChannelEventType.All, (sender, change) => { });
2
channel.Unsubscribe();
34
// OR
56
var channel = supabase.Realtime.Channel("realtime", "public", "*");
7
channel.Unsubscribe()
`
## Retrieve all channels
Returns all Realtime channels.
Get all channels
`
1
var channels = supabase.Realtime.Subscriptions;
`
## Create a bucket
Creates a new Storage bucket
  * Policy permissions required: 
    * `buckets` permissions: `insert`
    * `objects` permissions: none


Create bucket
`
1
var bucket = await supabase.Storage.CreateBucket("avatars");
`
## Retrieve a bucket
Retrieves the details of an existing Storage bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: none


Get bucket
`
1
var bucket = await supabase.Storage.GetBucket("avatars");
`
## List all buckets
Retrieves the details of all Storage buckets within an existing product.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: none


List buckets
`
1
var buckets = await supabase.Storage.ListBuckets();
`
## Update a bucket
Updates a new Storage bucket
  * Policy permissions required: 
    * `buckets` permissions: `update`
    * `objects` permissions: none


Update bucket
`
1
var bucket = await supabase.Storage.UpdateBucket("avatars", new BucketUpsertOptions { Public = false });
`
## Delete a bucket
Deletes an existing bucket. A bucket can't be deleted with existing objects inside it. You must first `empty()` the bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select` and `delete`
    * `objects` permissions: none


Delete bucket
`
1
var result = await supabase.Storage.DeleteBucket("avatars");
`
## Empty a bucket
Removes all objects inside a single bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: `select` and `delete`


Empty bucket
`
1
var bucket = await supabase.Storage.EmptyBucket("avatars");
`
## Upload a file
Uploads a file to an existing bucket.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `insert`


Upload fileUpload file with Progress
`
1
var imagePath = Path.Combine("Assets", "fancy-avatar.png");
23
await supabase.Storage
4
 .From("avatars")
5
 .Upload(imagePath, "fancy-avatar.png", new FileOptions { CacheControl = "3600", Upsert = false });
`
## Download a file
Downloads a file.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`


Download fileDownload file with Progress
`
1
var bytes = await supabase.Storage.From("avatars").Download("public/fancy-avatar.png");
`
## List all files in a bucket
Lists all the files within a bucket.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`


List files in a bucket
`
1
var objects = await supabase.Storage.From("avatars").List();
`
## Replace an existing file
Replaces an existing file at the specified path with a new one.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `update` and `select`


Update file
`
1
var imagePath = Path.Combine("Assets", "fancy-avatar.png");
2
await supabase.Storage.From("avatars").Update(imagePath, "fancy-avatar.png");
`
## Move an existing file
Moves an existing file, optionally renaming it at the same time.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `update` and `select`


Move file
`
1
await supabase.Storage.From("avatars")
2
 .Move("public/fancy-avatar.png", "private/fancy-avatar.png");
`
## Delete files in a bucket
Deletes files within the same bucket
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `delete` and `select`


Delete file
`
1
await supabase.Storage.From("avatars").Remove(new List<string> { "public/fancy-avatar.png" });
`
## Create a signed URL
Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`


Create Signed URL
`
1
var url = await supabase.Storage.From("avatars").CreateSignedUrl("public/fancy-avatar.png", 60);
`
## Retrieve public URL
Retrieve URLs for assets in public buckets
  * The bucket needs to be set to public, either via UpdateBucket() or by going to Storage on supabase.com/dashboard, clicking the overflow menu on a bucket and choosing "Make public"
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: none


Returns the URL for an asset in a public bucket
`
1
var publicUrl = supabase.Storage.From("avatars").GetPublicUrl("public/fancy-avatar.png");
`
## Release Notes
## 1.0.0 - 2024-04-21#
  * Assembly Name has been changed to `Supabase.dll`
  * Update dependency: `postgrest-csharp@5.0.0`
    * [MAJOR] Moves namespaces from `Postgrest` to `Supabase.Postgrest`
    * Re: #135 Update nuget package name `postgrest-csharp` to `Supabase.Postgrest`
  * Update dependency: `gotrue-csharp@5.0.0`
    * Re: #135 Update nuget package name `gotrue-csharp` to `Supabase.Gotrue`
    * Re: #89, Only add `access_token` to request body when it is explicitly declared.
    * [MINOR] Re: #89 Update signature for `SignInWithIdToken` which adds an optional `accessToken` parameter, update doc comments, and call `DestroySession` in method
    * Re: #88, Add `IsAnonymous` property to `User`
    * Re: #90 Implement `LinkIdentity` and `UnlinkIdentity`
  * Update dependency: `realtime-csharp@7.0.0`
    * Merges #45 - Updating the `Websocket.Client@5.1.1`
    * Re: #135 Update nuget package name `realtime-csharp` to `Supabase.Realtime`
  * Update dependency: `storage-csharp@2.0.0`
    * Re: #135 Update nuget package name `storage-csharp` to `Supabase.Storage`
  * Update dependency: `functions-csharp@2.0.0`
    * Re: #135 Update nuget package name `functions-csharp` to `Supabase.Functions`
  * Update dependency: `core-csharp@1.0.0`
    * Re: #135 Update nuget package name `supabase-core` to `Supabase.Core`
  * Adds comments to the remaining undocumented code.


