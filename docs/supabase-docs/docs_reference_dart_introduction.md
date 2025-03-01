Dart Reference v2.0
# Flutter Client Library
supabase_flutterView on GitHub
This reference documents every object and method available in Supabase's Flutter library, supabase-flutter. You can use supabase-flutter to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.
We also provide a supabase package for non-Flutter projects.
## Installing
### Install from pub.dev#
You can install Supabase package from pub.dev
FlutterOther Dart Project
Terminal
`
1
flutter pub add supabase_flutter
`
## Initializing
You can initialize Supabase with the static `initialize()` method of the `Supabase` class.
The Supabase client is your entrypoint to the rest of the Supabase functionality and is the easiest way to interact with everything we offer within the Supabase ecosystem.
### Parameters
  * urlRequiredstring
The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * anonKeyRequiredstring
The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * headersOptionalMap<String, String>
Custom header to be passed to the Supabase client.
  * httpClientOptionalClient
Custom http client to be used by the Supabase client.
  * authOptionsOptionalFlutterAuthClientOptions
Options to change the Auth behaviors.
Details
  * postgrestOptionsOptionalPostgrestClientOptions
Options to change the Postgrest behaviors.
Details
  * realtimeClientOptionsOptionalRealtimeClientOptions
Options to change the Realtime behaviors.
Details
  * storageOptionsOptionalStorageClientOptions
Options to change the Storage behaviors.
Details


For FlutterFor other Dart projects
`
1
Future<void> main() async {
2
 await Supabase.initialize(
3
  url: 'https://xyzcompany.supabase.co',
4
  anonKey: 'public-anon-key',
5
 );
67
 runApp(MyApp());
8
}
910
// Get a reference your Supabase client
11
final supabase = Supabase.instance.client;
`
## Upgrade guide
Although `supabase_flutter` v2 brings a few breaking changes, for the most part the public API should be the same with a few minor exceptions. We have brought numerous updates behind the scenes to make the SDK work more intuitively for Flutter and Dart developers.
## Upgrade the client library#
Make sure you are using v2 of the client library in your `pubspec.yaml` file.
`
1
supabase_flutter: ^2.0.0
`
_Optionally_ passing custom configuration to `Supabase.initialize()` is now organized into separate objects:
BeforeAfter
main.dart
`
1
await Supabase.initialize(
2
 url: supabaseUrl,
3
 anonKey: supabaseKey,
4
 authFlowType: AuthFlowType.pkce,
5
 storageRetryAttempts: 10,
6
 realtimeClientOptions: const RealtimeClientOptions(
7
  logLevel: RealtimeLogLevel.info,
8
 ),
9
);
`
### Auth updates#
#### Renaming Provider to OAuthProvider#
`Provider` enum is renamed to `OAuthProvider`. Previously the `Provider` symbol often collided with classes in the provider package and developers needed to add import prefixes to avoid collisions. With the new update, developers can use Supabase and Provider in the same codebase without any import prefixes.
BeforeAfter
`
1
await supabase.auth.signInWithOAuth(
2
 Provider.google,
3
);
`
#### Sign in with Apple method deprecated#
We have removed the sign_in_with_apple dependency in v2. This is because not every developer needs to sign in with Apple, and we want to reduce the number of dependencies in the library.
With v2, you can import sign_in_with_apple as a separate dependency if you need to sign in with Apple. We have also added `auth.generateRawNonce()` method to easily generate a secure nonce.
BeforeAfter
`
1
await supabase.auth.signInWithApple();
`
#### Initialization does not await for session refresh#
In v1, `Supabase.initialize()` would await for the session to be refreshed before returning. This caused delays in the app's launch time, especially when the app is opened in a poor network environment.
In v2, `Supabase.initialize()` returns immediately after obtaining the session from the local storage, which makes the app launch faster. Because of this, there is no guarantee that the session is valid when the app starts.
If you need to make sure the session is valid, you can access the `isExpired` getter to check if the session is valid. If the session is expired, you can listen to the `onAuthStateChange` event and wait for a new `tokenRefreshed` event to be fired.
BeforeAfter
`
1
// Session is valid, no check required
2
final session = supabase.auth.currentSession;
`
#### Removing Flutter Webview dependency for OAuth sign in#
In v1, on iOS you could pass a `BuildContext` to the `signInWithOAuth()` method to launch the OAuth flow in a Flutter Webview.
In v2, we have dropped the webview_flutter dependency in v2 to allow you to have full control over the UI of the OAuth flow. We now have native support for Google and Apple sign in, so opening an external browser is no longer needed on iOS.
Because of this update, we no longer need the `context` parameter, so we have removed the `context` parameter from the `signInWithOAuth()` method.
BeforeAfter
`
1
// Opens a webview on iOS.
2
await supabase.auth.signInWithOAuth(
3
 Provider.github,
4
 authScreenLaunchMode: LaunchMode.inAppWebView,
5
 context: context,
6
);
`
#### PKCE is the default auth flow type#
PKCE flow, which is a more secure method for obtaining sessions from deep links, is now the default auth flow for any authentication involving deep links.
BeforeAfter
`
1
await Supabase.initialize(
2
 url: 'SUPABASE_URL',
3
 anonKey: 'SUPABASE_ANON_KEY',
4
 authFlowType: AuthFlowType.implicit, // set to implicit by default
5
);
`
#### Auth callback host name parameter removed#
`Supabase.initialize()` no longer has the `authCallbackUrlHostname` parameter. The `supabase_flutter` SDK will automatically detect auth callback URLs and handle them internally.
BeforeAfter
`
1
await Supabase.initialize(
2
 url: 'SUPABASE_URL',
3
 anonKey: 'SUPABASE_ANON_KEY',
4
 authCallbackUrlHostname: 'auth-callback',
5
);
`
#### SupabaseAuth class removed#
The `SupabaseAuth` had an `initialSession` member, which was used to obtain the initial session upon app start. This is now removed, and `currentSession` should be used to access the session at any time.
BeforeAfter
`
1
// Use `initialSession` to obtain the initial session when the app starts.
2
final initialSession = await SupabaseAuth.initialSession;
`
### Data methods#
#### Insert and return data#
We made the query builder immutable, which means you can reuse the same query object to chain multiple filters and get the expected outcome.
BeforeAfter
`
1
// If you declare a query and chain filters on it
2
final myQuery = supabase.from('my_table').select();
34
final foo = await myQuery.eq('some_col', 'foo');
56
// The `eq` filter above is applied in addition to the following filter
7
final bar = await myQuery.eq('another_col', 'bar');
`
#### Renaming is and in filter#
Because `is` and `in` are reserved keywords in Dart, v1 used `is_` and `in_` as query filter names. Users found the underscore confusing, so the query filters are now renamed to `isFilter` and `inFilter`.
BeforeAfter
`
1
final data = await supabase
2
 .from('users')
3
 .select()
4
 .is_('status', null);
56
final data = await supabase
7
 .from('users')
8
 .select()
9
 .in_('status', ['ONLINE', 'OFFLINE']);
`
#### Deprecate FetchOption in favor of `count()` and `head()` methods#
`FetchOption()` on `.select()` is now deprecated, and new `.count()` and `head()` methods are added to the query builder.
`count()` on `.select()` performs the select while also getting the count value, and `.count()` directly on `.from()` performs a head request resulting in only fetching the count value.
BeforeAfter
`
1
// Request with count option
2
final res = await supabase.from('cities').select(
3
   'name',
4
   const FetchOptions(
5
    count: CountOption.exact,
6
   ),
7
  );
89
final data = res.data;
10
final count = res.count;
1112
// Request with count and head option
13
// obtains the count value without fetching the data.
14
final res = await supabase.from('cities').select(
15
   'name',
16
   const FetchOptions(
17
    count: CountOption.exact,
18
    head: true,
19
   ),
20
  );
2122
final count = res.count;
`
#### PostgREST error codes#
The `PostgrestException` instance thrown by the API methods has a `code` property. In v1, the `code` property contained the http status code.
In v2, the `code` property contains the PostgREST error code, which is more useful for debugging.
BeforeAfter
`
1
try {
2
 await supabase.from('countries').select();
3
} on PostgrestException catch (error) {
4
 error.code; // Contains http status code
5
}
`
### Realtime methods#
Realtime methods contains the biggest breaking changes. Most of these changes are to make the interface more type safe.
We have removed the `.on()` method and replaced it with `.onPostgresChanges()`, `.onBroadcast()`, and three different presence methods.
#### Postgres Changes#
Use the new `.onPostgresChanges()` method to listen to realtime changes in the database.
In v1, filters were not strongly typed because they took a `String` type. In v2, `filter` takes an object. Its properties are strictly typed to catch type errors.
The payload of the callback is now typed as well. In `v1`, the payload was returned as `dynamic`. It is now returned as a `PostgresChangePayload` object. The object contains the `oldRecord` and `newRecord` properties for accessing the data before and after the change.
BeforeAfter
`
1
supabase.channel('my_channel').on(
2
 RealtimeListenTypes.postgresChanges,
3
 ChannelFilter(
4
  event: '*',
5
  schema: 'public',
6
  table: 'messages',
7
  filter: 'room_id=eq.200',
8
 ),
9
 (dynamic payload, [ref]) {
10
  final Map<String, dynamic> newRecord = payload['new'];
11
  final Map<String, dynamic> oldRecord = payload['old'];
12
 },
13
).subscribe();
`
#### Broadcast#
Broadcast now uses the dedicated `.onBroadcast()` method, rather than the generic `.on()` method. Because the method is specific to broadcast, it takes fewer properties.
BeforeAfter
`
1
supabase.channel('my_channel').on(
2
 RealtimeListenTypes.broadcast,
3
 ChannelFilter(
4
  event: 'position',
5
 ),
6
 (dynamic payload, [ref]) {
7
  print(payload);
8
 },
9
).subscribe();
`
#### Presence#
Realtime Presence gets three different methods for listening to three different presence events: `sync`, `join`, and `leave`. This allows the callback to be strictly typed.
BeforeAfter
`
1
final channel = supabase.channel('room1');
23
channel.on(
4
 RealtimeListenTypes.presence,
5
 ChannelFilter(event: 'sync'),
6
 (payload, [ref]) {
7
  print('Synced presence state: ${channel.presenceState()}');
8
 },
9
).on(
10
 RealtimeListenTypes.presence,
11
 ChannelFilter(event: 'join'),
12
 (payload, [ref]) {
13
  print('Newly joined presences $payload');
14
 },
15
).on(
16
 RealtimeListenTypes.presence,
17
 ChannelFilter(event: 'leave'),
18
 (payload, [ref]) {
19
  print('Newly left presences: $payload');
20
 },
21
).subscribe(
22
 (status, [error]) async {
23
  if (status == 'SUBSCRIBED') {
24
   await channel.track({'online_at': DateTime.now().toIso8601String()});
25
  }
26
 },
27
);
`
## Fetch data
Perform a SELECT query on the table or view.
  * By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * `select()` can be combined with Filters
  * `select()` can be combined with Modifiers
  * `apikey` is a reserved keyword if you're using the Supabase Platform and should be avoided as a column name.


### Parameters
  * columnsOptionalString
The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`


Getting your dataSelecting specific columnsQuery referenced tablesQuery referenced tables through a join tableQuery the same referenced table multiple timesFiltering through referenced tablesQuerying with count optionQuerying JSON dataQuerying referenced table with inner joinSwitching schemas per query
`
1
final data = await supabase
2
 .from('instruments')
3
 .select();
`
Data source
Response
## Insert data
Perform an INSERT into the table or view.
### Parameters
  * valuesRequiredMap<String, dynamic> or List<Map<String, dynamic>>
The values to insert. Pass an object to insert a single row or an array to insert multiple rows.


Create a recordFetch inserted recordBulk create
`
1
await supabase
2
  .from('cities')
3
  .insert({'name': 'The Shire', 'country_id': 554});
`
Data source
## Update data
Perform an UPDATE on the table or view.
  * `update()` should always be combined with Filters to target the item(s) you wish to update.


### Parameters
  * valuesRequiredMap<String, dynamic>
The values to update with.


Update your dataUpdate a record and return itUpdate JSON data
`
1
await supabase
2
 .from('instruments')
3
 .update({ 'name': 'piano' })
4
 .eq('id', 1);
`
Data source
## Upsert data
Perform an UPSERT on the table or view. Depending on the column(s) passed to `onConflict`, `.upsert()` allows you to perform the equivalent of `.insert()` if a row with the corresponding `onConflict` columns doesn't exist, or if it does exist, perform an alternative action depending on `ignoreDuplicates`.
  * Primary keys must be included in `values` to use upsert.


### Parameters
  * valuesRequiredMap<String, dynamic> or List<Map<String, dynamic>>
The values to upsert with. Pass a Map to upsert a single row or an List to upsert multiple rows.
  * onConflictOptionalString
Comma-separated UNIQUE column(s) to specify how duplicate rows are determined. Two rows are duplicates if all the `onConflict` columns are equal.
  * ignoreDuplicatesOptionalbool
If `true`, duplicate rows are ignored. If `false`, duplicate rows are merged with existing rows.
  * defaultToNullOptionalbool
Make missing fields default to `null`. Otherwise, use the default value for the column. This only applies when inserting new rows, not when merging with existing rows where ignoreDuplicates is set to false. This also only applies when doing bulk upserts.


Upsert your dataBulk Upsert your dataUpserting into tables with constraints
`
1
final data = await supabase
2
 .from('instruments')
3
 .upsert({ 'id': 1, 'name': 'piano' })
4
 .select();
`
Data source
Response
## Delete data
Perform a DELETE on the table or view.
  * `delete()` should always be combined with Filters to target the item(s) you wish to delete.
  * If you use `delete()` with filters and you have RLS enabled, only rows visible through `SELECT` policies are deleted. Note that by default no rows are visible, so you need at least one `SELECT`/`ALL` policy that makes the rows visible.


Delete recordsDelete multiple recordsFetch deleted records
`
1
await supabase
2
 .from('countries')
3
 .delete()
4
 .eq('id', 1);
`
Data source
## Call a Postgres function
Perform a function call.
You can call Postgres functions as Remote Procedure Calls, logic in your database that you can execute from anywhere. Functions are useful when the logic rarely changes—like for password resets and updates.
### Parameters
  * fnRequiredString
The function name to call.
  * paramsOptionalMap<String, dynamic>
The arguments to pass to the function call.


Call a Postgres function without argumentsCall a Postgres function with argumentsBulk processingCall a Postgres function with filters
`
1
final data = await supabase
2
 .rpc('hello_world');
`
Data source
Response
## Using filters
Filters allow you to only return rows that match certain conditions.
Filters can be used on `select()`, `update()`, `upsert()`, and `delete()` queries.
If a Database function returns a table response, you can also apply filters.
Applying FiltersChaining FiltersConditional ChainingFilter by values within a JSON columnFilter Referenced Tables
`
1
final data = await supabase
2
 .from('cities')
3
 .select('name, country_id')
4
 .eq('name', 'The Shire'); // Correct
56
final data = await supabase
7
 .from('cities')
8
 .eq('name', 'The Shire') // Incorrect
9
 .select('name, country_id');
`
Notes
## Column is equal to a value
Match only rows where `column` is equal to `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select()
4
 .eq('name', 'viola');
`
Data source
Response
## Column is not equal to a value
Finds all rows whose value on the stated `column` doesn't match the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('id, name')
4
 .neq('name', 'viola');
`
Data source
Response
## Column is greater than a value
Finds all rows whose value on the stated `column` is greater than the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .gt('id', 2);
`
Data source
Response
## Column is greater than or equal to a value
Finds all rows whose value on the stated `column` is greater than or equal to the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .gte('id', 2);
`
Data source
Response
## Column is less than a value
Finds all rows whose value on the stated `column` is less than the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .lt('id', 2);
`
Data source
Response
## Column is less than or equal to a value
Finds all rows whose value on the stated `column` is less than or equal to the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject
The value to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .lte('id', 2);
`
Data source
Response
## Column matches a pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case sensitive).
### Parameters
  * columnRequiredString
The column to filter on.
  * patternRequiredString
The pattern to match with.


With `select()`
`
1
final data = await supabase
2
 .from('planets')
3
 .select()
4
 .like('name', '%Ea%');
`
Data source
Response
## Column matches a case-insensitive pattern
Finds all rows whose value in the stated `column` matches the supplied `pattern` (case insensitive).
### Parameters
  * columnRequiredString
The column to filter on.
  * patternRequiredString
The pattern to match with.


With `select()`
`
1
final data = await supabase
2
 .from('planets')
3
 .select()
4
 .ilike('name', '%ea%');
`
Data source
Response
## Column is a value
A check for exact equality (null, true, false), finds all rows whose value on the stated `column` exactly match the specified `value`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valueRequiredObject?
The value to filter with.


Checking for nullness, true or false
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .isFilter('name', null);
`
Data source
Response
Notes
## Column is in an array
Finds all rows whose value on the stated `column` is found on the specified `values`.
### Parameters
  * columnRequiredString
The column to filter on.
  * valuesRequiredList
The List to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('characters')
3
 .select()
4
 .inFilter('name', ['Luke', 'Leia']);
`
Data source
Response
Notes
## Column contains every element in a value
Only relevant for jsonb, array, and range columns. Match only rows where `column` contains every element appearing in `value`.
### Parameters
  * columnRequiredString
The jsonb, array, or range column to filter on.
  * valueRequiredObject
The jsonb, array, or range value to filter with.


On array columnsOn range columnsOn `jsonb` columns
`
1
final data = await supabase
2
 .from('issues')
3
 .select()
4
 .contains('tags', ['is:open', 'priority:low']);
`
Data source
Response
Notes
## Contained by value
Only relevant for jsonb, array, and range columns. Match only rows where every element appearing in `column` is contained by `value`.
### Parameters
  * columnRequiredString
The jsonb, array, or range column to filter on.
  * valueRequiredObject
The jsonb, array, or range value to filter with.


On array columnsOn range columnsOn `jsonb` columns
`
1
final data = await supabase
2
 .from('classes')
3
 .select('name')
4
 .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday']);
`
Data source
Response
## Greater than a range
Only relevant for range columns. Match only rows where every element in `column` is greater than any element in `range`.
### Parameters
  * columnRequiredString
The range column to filter on.
  * rangeRequiredString
The range to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('reservations')
3
 .select()
4
 .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)');
`
Data source
Response
Notes
## Greater than or equal to a range
Only relevant for range columns. Match only rows where every element in `column` is either contained in `range` or greater than any element in `range`.
### Parameters
  * columnRequiredString
The range column to filter on.
  * rangeRequiredString
The range to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('reservations')
3
 .select()
4
 .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)');
`
Data source
Response
Notes
## Less than a range
Only relevant for range columns. Match only rows where every element in `column` is less than any element in `range`.
### Parameters
  * columnRequiredString
The range column to filter on.
  * rangeRequiredString
The range to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('reservations')
3
 .select()
4
 .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)');
`
Data source
Response
Notes
## Less than or equal to a range
Only relevant for range columns. Match only rows where every element in `column` is either contained in `range` or less than any element in `range`.
### Parameters
  * columnRequiredString
The range column to filter on.
  * rangeRequiredString
The range to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('reservations')
3
 .select()
4
 .rangeLte('during', '[2000-01-01 15:00, 2000-01-01 16:00)');
`
Data source
Response
Notes
## Mutually exclusive to a range
Only relevant for range columns. Match only rows where `column` is mutually exclusive to `range` and there can be no element between the two ranges.
### Parameters
  * columnRequiredString
The range column to filter on.
  * rangeRequiredString
The range to filter with.


With `select()`
`
1
final data = await supabase
2
 .from('reservations')
3
 .select()
4
 .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)');
`
Data source
Response
Notes
## With a common element
Only relevant for array and range columns. Match only rows where `column` and `value` have an element in common.
### Parameters
  * columnRequiredString
The array or range column to filter on.
  * valueRequiredObject
The array or range value to filter with.


On array columnsOn range columns
`
1
final data = await supabase
2
 .from('issues')
3
 .select('title')
4
 .overlaps('tags', ['is:closed', 'severity:high']);
`
Data source
Response
## Match a string
Finds all rows whose tsvector value on the stated `column` matches to_tsquery(query).
### Parameters
  * columnRequiredString
The text or tsvector column to filter on.
  * queryRequiredString
The query text to match with.
  * configOptionalString
The text search configuration to use.
  * typeOptionalTextSearchType
Change how the `query` text is interpreted.


Text searchBasic normalizationFull normalizationWebsearch
`
1
final data = await supabase
2
 .from('quotes')
3
 .select('catchphrase')
4
 .textSearch('content', "'eggs' & 'ham'",
5
  config: 'english'
6
 );
`
Data source
Response
## Match an associated value
Finds all rows whose columns match the specified `query` object.
### Parameters
  * queryRequiredMap<String, dynamic>
The object to filter with, with column names as keys mapped to their filter values


With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select()
4
 .match({ 'id': 2, 'name': 'viola' });
`
Data source
Response
## Don't match the filter
Finds all rows which doesn't satisfy the filter.
  * `.not()` expects you to use the raw PostgREST syntax for the filter names and values.
`
1
.not('name','eq','violin')
2
.not('arraycol','cs','{"a","b"}') // Use Postgres array {} for array column and 'cs' for contains.
3
.not('rangecol','cs','(1,2]') // Use Postgres range syntax for range column.
4
.not('id','in','(6,7)') // Use Postgres list () and 'in' instead of `inFilter`.
5
.not('id','in','(${mylist.join(',')})') // You can insert a Dart list array.
`


### Parameters
  * columnRequiredString
The column to filter on.
  * operatorRequiredString
The operator to be negated to filter with, following PostgREST syntax.
  * valueOptionalObject
The value to filter with, following PostgREST syntax.


With `select()`With `update()`With `delete()`With `rpc()`
`
1
final data = await supabase
2
 .from('countries')
3
 .select()
4
 .not('name', 'is', null)
`
Data source
Response
## Match at least one filter
Finds all rows satisfying at least one of the filters.
  * `.or()` expects you to use the raw PostgREST syntax for the filter names and values.
`
1
.or('id.in.(6,7),arraycol.cs.{"a","b"}') // Use Postgres list () and 'in' instead of `inFilter`. Array {} and 'cs' for contains.
2
.or('id.in.(${mylist.join(',')}),arraycol.cs.{${mylistArray.join(',')}}')	// You can insert a Dart list for list or array column.
3
.or('id.in.(${mylist.join(',')}),rangecol.cs.(${mylistRange.join(',')}]')	// You can insert a Dart list for list or range column.
`


### Parameters
  * filtersRequiredString
The filters to use, following PostgREST syntax
  * referencedTableOptionalString
Set this to filter on referenced tables instead of the parent table


With `select()`Use `or` with `and`Use `or` on referenced tables
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('name')
4
 .or('id.eq.2,name.eq.cello');
`
Data source
Response
## Match the filter
Match only rows which satisfy the filter. This is an escape hatch - you should use the specific filter methods wherever possible.
`.filter()` expects you to use the raw PostgREST syntax for the filter names and values, so it should only be used as an escape hatch in case other filters don't work.
`
1
.filter('arraycol','cs','{"a","b"}') // Use Postgres array {} and 'cs' for contains.
2
.filter('rangecol','cs','(1,2]') // Use Postgres range syntax for range column.
3
.filter('id','in','(6,7)') // Use Postgres list () and 'in' for in_ filter.
4
.filter('id','cs','{${mylist.join(',')}}') // You can insert a Dart array list.
`
### Parameters
  * columnRequiredString
The column to filter on.
  * operatorRequiredString
The operator to filter with, following PostgREST syntax.
  * valueRequiredObject
The value to filter with, following PostgREST syntax.


With `select()`With `update()`With `delete()`With `rpc()`On a referenced table
`
1
final data = await supabase
2
 .from('characters')
3
 .select()
4
 .filter('name', 'in', '("Ron","Dumbledore")')
`
Data source
Response
## Using modifiers
Filters work on the row level. That is, they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g., returning a CSV string).
Modifiers must be specified after filters. Some modifiers only apply for queries that return rows (e.g., `select()` or `rpc()` on a function that returns a table response).
## Return data after inserting
With `upsert()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .upsert({ 'id': 1, 'name': 'piano' })
4
 .select();
`
Data source
Response
## Order the results
Orders the result with the specified column.
### Parameters
  * columnRequiredString
The column to order by.
  * ascendingOptionalbool
Whether to order in ascending order. Default is `false`.
  * nullsFirstOptionalbool
Whether to order nulls first. Default is `false`.
  * referencedTableOptionalString
Specify the referenced table when ordering by a column in an embedded resource.


With `select()`On a referenced tableOrder parent table by a referenced table
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('id, name')
4
 .order('id', ascending: false);
`
Data source
Response
## Limit the number of rows returned
Limits the result with the specified count.
### Parameters
  * countRequiredint
The maximum number of rows to return.
  * referencedTableOptionalint
Set this to limit rows of referenced tables instead of the parent table.


With `select()`On a referenced table
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('name')
4
 .limit(1);
`
Data source
Response
## Limit the query to a range
Limits the result to rows within the specified range, inclusive.
### Parameters
  * fromRequiredint
The starting index from which to limit the result.
  * toRequiredint
The last index to which to limit the result.
  * referencedTableOptionalString
Set this to limit rows of referenced tables instead of the parent table.


With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('name')
4
 .range(0, 1);
`
Data source
Response
## Retrieve one row of data
Retrieves only one row from the result. Result must be one row (e.g. using limit), otherwise this will result in an error.
With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select('name')
4
 .limit(1)
5
 .single();
`
Data source
Response
## Retrieve zero or one row of data
With `select()`
`
1
final data = await supabase
2
 .from('instruments')
3
 .select()
4
 .eq('name', 'guzheng')
5
 .maybeSingle();
`
Data source
Response
## Retrieve as a CSV
Return data as CSV
`
1
final data = await supabase
2
 .from('instruments')
3
 .select()
4
 .csv();
`
Data source
Response
Notes
## Using explain
For debugging slow queries, you can get the Postgres `EXPLAIN` execution plan of a query using the `explain()` method. This works on any query, even for `rpc()` or writes.
Explain is not enabled by default as it can reveal sensitive information about your database. It's best to only enable this for testing environments but if you wish to enable it for production you can provide additional protection by using a `pre-request` function.
Follow the Performance Debugging Guide to enable the functionality on your project.
### Parameters
  * analyzeOptionalbool
If `true`, the query will be executed and the actual run time will be returned.
  * verboseOptionalbool
If `true`, the query identifier will be returned and `data` will include the output columns of the query.
  * settingsOptionalbool
If `true`, include information on configuration parameters that affect query planning.
  * buffersOptionalbool
If `true`, include information on buffer usage.
  * walOptionalbool
If `true`, include information on WAL record generation.


Get the execution planGet the execution plan with analyze and verbose
`
1
final data = await supabase
2
 .from('instruments')
3
 .select()
4
 .explain();
`
Data source
Response
Notes
## Create a new user
Creates a new user.
  * By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.
  * **Confirm email** determines if users need to confirm their email address after signing up. 
    * If **Confirm email** is enabled, a `user` is returned but `session` is null.
    * If **Confirm email** is disabled, both a `user` and a `session` are returned.
  * When the user confirms their email address, they are redirected to the `SITE_URL` by default. You can modify your `SITE_URL` or add additional redirect URLs in your project.
  * If signUp() is called for an existing confirmed user: 
    * When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in your project, an obfuscated/fake user object is returned.
    * When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.


### Parameters
  * emailOptionalString
User's email address to be used for email authentication.
  * phoneOptionalString
User's phone number to be used for phone authentication.
  * passwordRequiredString
Password to be used for authentication.
  * emailRedirectToOptionalString
The URL to redirect the user to after they confirm their email address.
  * dataOptionalMap<String, dynamic>
The user's metadata to be stored in the user's object.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.
  * channelOptionalOtpChannel
Messaging channel to use (e.g. whatsapp or sms). Defaults to `OtpChannel.sms`.


Sign up with an email and passwordSign up with a phone number and password (SMS)Sign up with additional metadataSign up with redirect URL
`
1
final AuthResponse res = await supabase.auth.signUp(
2
 email: 'example@email.com',
3
 password: 'example-password',
4
);
5
final Session? session = res.session;
6
final User? user = res.user;
`
Response
## Listen to auth events
Receive a notification every time an auth event happens.
  * Types of auth events: `AuthChangeEvent.passwordRecovery`, `AuthChangeEvent.signedIn`, `AuthChangeEvent.signedOut`, `AuthChangeEvent.tokenRefreshed`, `AuthChangeEvent.userUpdated`and `AuthChangeEvent.userDeleted`


Listen to auth changesListen to a specific eventUnsubscribe from auth subscription
`
1
final authSubscription = supabase.auth.onAuthStateChange.listen((data) {
2
 final AuthChangeEvent event = data.event;
3
 final Session? session = data.session;
45
 print('event: $event, session: $session');
67
 switch (event) {
8
  case AuthChangeEvent.initialSession:
9
  // handle initial session
10
  case AuthChangeEvent.signedIn:
11
  // handle signed in
12
  case AuthChangeEvent.signedOut:
13
  // handle signed out
14
  case AuthChangeEvent.passwordRecovery:
15
  // handle password recovery
16
  case AuthChangeEvent.tokenRefreshed:
17
  // handle token refreshed
18
  case AuthChangeEvent.userUpdated:
19
  // handle user updated
20
  case AuthChangeEvent.userDeleted:
21
  // handle user deleted
22
  case AuthChangeEvent.mfaChallengeVerified:
23
  // handle mfa challenge verified
24
 }
25
});
`
## Create an anonymous user
Creates an anonymous user.
  * Returns an anonymous user
  * It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.


### Parameters
  * dataOptionalMap<String, dynamic>
The user's metadata to be stored in the user's object.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.


Create an anonymous userCreate an anonymous user with custom user metadata
`
1
await supabase.auth.signInAnonymously();
`
Response
## Sign in a user
Log in an existing user using email or phone number with password.
  * Requires either an email and password or a phone number and password.


### Parameters
  * emailOptionalString
User's email address to be used for email authentication.
  * phoneOptionalString
User's phone number to be used for phone authentication.
  * passwordRequiredString
Password to be used for authentication.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.


Sign in with email and passwordSign in with phone and password
`
1
final AuthResponse res = await supabase.auth.signInWithPassword(
2
 email: 'example@email.com',
3
 password: 'example-password',
4
);
5
final Session? session = res.session;
6
final User? user = res.user;
`
Response
## Sign in with ID Token
Allows you to perform native Google and Apple sign in by combining it with google_sign_in or sign_in_with_apple packages.
### Parameters
  * providerRequiredOAuthProvider
The provider to perform the sign in with. Currently, `OAuthProvider.google` and `OAuthProvider.apple` are supported.
  * idTokenRequiredString
The identity token obtained from the third-party provider.
  * accessTokenOptionalString
Access token obtained from the third-party provider. Required for Google sign in.
  * nonceOptionalString
Raw nonce value used to perform the third-party sign in. Required for Apple sign-in.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.


Native Google sign inNative Apple Sign in
`
1
import 'package:google_sign_in/google_sign_in.dart';
2
import 'package:supabase_flutter/supabase_flutter.dart';
34
const webClientId = '<web client ID that you registered on Google Cloud, for example my-web.apps.googleusercontent.com>';
56
const iosClientId = '<iOS client ID that you registered on Google Cloud, for example my-ios.apps.googleusercontent.com';
78
final GoogleSignIn googleSignIn = GoogleSignIn(
9
 clientId: iosClientId,
10
 serverClientId: webClientId,
11
);
12
final googleUser = await googleSignIn.signIn();
13
final googleAuth = await googleUser!.authentication;
14
final accessToken = googleAuth.accessToken;
15
final idToken = googleAuth.idToken;
1617
if (accessToken == null) {
18
 throw 'No Access Token found.';
19
}
20
if (idToken == null) {
21
 throw 'No ID Token found.';
22
}
2324
final response = await supabase.auth.signInWithIdToken(
25
 provider: OAuthProvider.google,
26
 idToken: idToken,
27
 accessToken: accessToken,
28
);
`
Response
Notes
## Sign in a user through OTP
  * Requires either an email or phone number.
  * This method is used for passwordless sign-ins where an OTP is sent to the user's email or phone number.
  * If you're using an email, you can configure whether you want the user to receive a magiclink or an OTP.
  * If you're using phone, you can configure whether you want the user to receive an OTP.
  * The magic link's destination URL is determined by the `SITE_URL`. You can modify the `SITE_URL` or add additional redirect urls in your project.


### Parameters
  * emailOptionalString
Email address to send the magic link or OTP to.
  * phoneOptionalString
Phone number to send the OTP to.
  * emailRedirectToOptionalString
The URL to redirect the user to after they click on the magic link.
  * shouldCreateUserOptionalbool
If set to false, this method will not create a new user. Defaults to true.
  * dataOptionalMap<String, dynamic>
The user's metadata to be stored in the user's object.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.
  * channelOptionalOtpChannel
Messaging channel to use (e.g. whatsapp or sms). Defaults to `OtpChannel.sms`.


Sign in with email.Sign in with SMS OTP.Sign in with WhatsApp OTP
`
1
await supabase.auth.signInWithOtp(
2
 email: 'example@email.com',
3
 emailRedirectTo: kIsWeb ? null : 'io.supabase.flutter://signin-callback/',
4
);
`
Response
Notes
## Sign in a user through OAuth
Signs the user in using third-party OAuth providers.
  * This method is used for signing in using a third-party provider.
  * Supabase supports many different third-party providers.


### Parameters
  * providerRequiredOAuthProvider
The OAuth provider to use for signing in.
  * redirectToOptionalString
The URL to redirect the user to after they sign in with the third-party provider.
  * scopesOptionalString
A list of scopes to request from the third-party provider.
  * authScreenLaunchModeOptionalLaunchMode
The launch mode for the auth screen. Defaults to `LaunchMode.platformDefault`.
  * queryParamsOptionalMap<String, String>
Additional query parameters to be passed to the OAuth flow.


Sign in using a third-party providerWith `redirectTo`With scopes
`
1
await supabase.auth.signInWithOAuth(
2
 OAuthProvider.github,
3
 redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
4
 authScreenLaunchMode:
5
   kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
6
);
`
## Sign in a user through SSO
  * Before you can call this method you need to establish a connection to an identity provider. Use the CLI commands to do this.
  * If you've associated an email domain to the identity provider, you can use the `domain` property to start a sign-in flow.
  * In case you need to use a different way to start the authentication flow with an identity provider, you can use the `providerId` property. For example: 
    * Mapping specific user email addresses with an identity provider.
    * Using different hints to identify the correct identity provider, like a company-specific page, IP address or other tracking information.


### Parameters
  * providerIdOptionalString
The ID of the SSO provider to use for signing in.
  * domainOptionalString
The email domain to use for signing in.
  * redirectToOptionalString
The URL to redirect the user to after they sign in with the third-party provider.
  * captchaTokenOptionalString
The captcha token to be used for captcha verification.
  * launchModeOptionalLaunchMode
The launch mode for the auth screen. Defaults to `LaunchMode.platformDefault`.


Sign in with email domainSign in with provider UUID
`
1
await supabase.auth.signInWithSSO(
2
 domain: 'company.com',
3
);
`
## Sign out a user
Signs out the current user, if there is a logged in user.
  * In order to use the `signOut()` method, the user needs to be signed in first.


### Parameters
  * scopeOptionalSignOutScope
Whether to sign out from all devices or just the current device. Defaults to `SignOutScope.local`.


Sign out
`
1
await supabase.auth.signOut();
`
## Verify and log in through OTP
  * The `verifyOtp` method takes in different verification types. If a phone number is used, the type can either be `sms` or `phone_change`. If an email address is used, the type can be one of the following: `signup`, `magiclink`, `recovery`, `invite` or `email_change`.
  * The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up or sign in a user.


### Parameters
  * tokenRequiredString
The token that user was sent to their email or mobile phone
  * typeRequiredOtpType
Type of the OTP to verify
  * emailOptionalString
Email address that the OTP was sent to
  * phoneOptionalString
Phone number that the OTP was sent to
  * redirectToOptionalString
URI to redirect the user to after the OTP is verified
  * captchaTokenOptionalString
The captcha token to be used for captcha verification
  * tokenHashOptionalString
Token used in an email link


Verify Signup One-Time Password (OTP)Verify SMS One-Time Password (OTP)
`
1
final AuthResponse res = await supabase.auth.verifyOTP(
2
 type: OtpType.signup,
3
 token: token,
4
 phone: '+13334445555',
5
);
6
final Session? session = res.session;
7
final User? user = res.user;
`
Response
## Retrieve a session
Returns the session data, if there is an active session.
Get the session data
`
1
final Session? session = supabase.auth.currentSession;
`
Response
## Retrieve a new session
  * This method will refresh and return a new session whether the current one is expired or not.


Refresh session using the current session
`
1
final AuthResponse res = await supabase.auth.refreshSession();
2
final session = res.session;
`
Response
## Retrieve a user
Returns the user data, if there is a logged in user.
Get the logged in user
`
1
final User? user = supabase.auth.currentUser;
`
Response
## Update a user
Updates user data for a logged in user.
  * In order to use the `updateUser()` method, the user needs to be signed in first.
  * By default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's email auth provider settings.


### Parameters
  * attributesRequiredUserAttributes
Attributes to update for the user.
Details
  * emailRedirectToOptionalString
The URI to redirect the user to after the email is updated.


Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadataUpdate the user's password with a nonce
`
1
final UserResponse res = await supabase.auth.updateUser(
2
 UserAttributes(
3
  email: 'example@email.com',
4
 ),
5
);
6
final User? updatedUser = res.user;
`
Response
Notes
## Retrieve identities linked to a user
Gets all the identities linked to a user.
  * The user needs to be signed in to call `getUserIdentities()`.


Returns a list of identities linked to the user
`
1
final identities = await supabase.auth.getUserIdentities();
`
Response
## Link an identity to a user
Links an oauth identity to an existing user. This method supports the PKCE flow.
  * The **Enable Manual Linking** option must be enabled from your project's authentication settings.
  * The user needs to be signed in to call `linkIdentity()`.
  * If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.


### Parameters
  * providerRequiredOAuthProvider
The provider to link the identity to.
  * redirectToOptionalString
The URL to redirect the user to after they sign in with the third-party provider.
  * scopesOptionalString
A list of scopes to request from the third-party provider.
  * authScreenLaunchModeOptionalLaunchMode
The launch mode for the auth screen. Defaults to `LaunchMode.platformDefault`.
  * queryParamsOptionalMap<String, String>
Additional query parameters to be passed to the OAuth flow.


Link an identity to a user
`
1
await supabase.auth.linkIdentity(OAuthProvider.google);
`
## Unlink an identity from a user
Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
  * The **Enable Manual Linking** option must be enabled from your project's authentication settings.
  * The user needs to be signed in to call `unlinkIdentity()`.
  * The user must have at least 2 identities in order to unlink an identity.
  * The identity to be unlinked must belong to the user.


### Parameters
  * identityRequiredUserIdentity
The user identity to unlink.


Unlink an identity
`
1
// retrieve all identites linked to a user
2
final identities = await supabase.auth.getUserIdentities();
34
// find the google identity
5
final googleIdentity = identities.firstWhere(
6
 (element) => element.provider == 'google',
7
);
89
// unlink the google identity
10
await supabase.auth.unlinkIdentity(googleIdentity);
`
## Send a password reauthentication nonce
  * This method is used together with `updateUser()` when a user's password needs to be updated.
  * This method sends a nonce to the user's email. If the user doesn't have a confirmed email address, the method sends the nonce to the user's confirmed phone number instead.


Send reauthentication nonce
`
1
await supabase.auth.reauthenticate();
`
Notes
## Resend an OTP
  * Resends a signup confirmation, email change, or phone change email to the user.
  * Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
  * Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
  * This method only resend an email or phone OTP to the user if an initial signup, email change, or phone change request was made.


Resend an email signup confirmation
`
1
final ResendResponse res = await supabase.auth.resend(
2
 type: OtpType.signup,
3
 email: 'email@example.com',
4
);
`
Notes
## Set the session data
  * `setSession()` takes in a refresh token and uses it to get a new session.
  * The refresh token can only be used once to obtain a new session.
  * Refresh token rotation is enabled by default on all projects to guard against replay attacks.
  * You can configure the `REFRESH_TOKEN_REUSE_INTERVAL` which provides a short window in which the same refresh token can be used multiple times in the event of concurrency or offline issues.


### Parameters
  * refreshTokenRequiredString
Refresh token to use to get a new session.


Refresh the session
`
1
final refreshToken = supabase.currentSession?.refreshToken ?? '';
2
final AuthResponse response = await supabase.auth.setSession(refreshToken);
34
final session = res.session;
`
Response
Notes
## Auth MFA
This section contains methods commonly used for Multi-Factor Authentication (MFA) and are invoked behind the `supabase.auth.mfa` namespace.
Currently, we only support time-based one-time password (TOTP) as the 2nd factor. We don't support recovery codes but we allow users to enroll more than 1 TOTP factor, with an upper limit of 10.
Having a 2nd TOTP factor for recovery means the user doesn't have to store their recovery codes. It also reduces the attack surface since the recovery factor is usually time-limited and not a single static code.
Learn more about implementing MFA on your application on our guide here.
## Enroll a factor
Starts the enrollment process for a new Multi-Factor Authentication (MFA) factor. This method creates a new `unverified` factor. To verify a factor, present the QR code or secret to the user and ask them to add it to their authenticator app. The user has to enter the code from their authenticator app to verify it.
  * Currently, `totp` is the only supported `factorType`. The returned `id` should be used to create a challenge.
  * To create a challenge, see `mfa.challenge()`.
  * To verify a challenge, see `mfa.verify()`.
  * To create and verify a challenge in a single step, see `mfa.challengeAndVerify()`.


### Parameters
  * factorTypeOptionalString
Type of factor being enrolled.
  * issuerOptionalString
Domain which the user is enrolled with.
  * friendlyNameOptionalString
Human readable name assigned to the factor.


Enroll a time-based, one-time password (TOTP) factor
`
1
final res = await supabase.auth.mfa.enroll(factorType: FactorType.totp);
23
final qrCodeUrl = res.totp.qrCode;
`
Response
## Create a challenge
Prepares a challenge used to verify that a user has access to a MFA factor.
  * An enrolled factor is required before creating a challenge.
  * To verify a challenge, see `mfa.verify()`.


### Parameters
  * factorIdRequiredString
System assigned identifier for authenticator device as returned by enroll


Create a challenge for a factor
`
1
final res = await supabase.auth.mfa.challenge(
2
 factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',
3
);
`
Response
## Verify a challenge
Verifies a code against a challenge. The verification code is provided by the user by entering a code seen in their authenticator app.
  * To verify a challenge, please create a challenge first.


### Parameters
  * factorIdRequiredString
System assigned identifier for authenticator device as returned by enroll
  * challengeIdRequiredString
The ID of the challenge to verify
  * codeRequiredString
The verification code on the user's authenticator app


Verify a challenge for a factor
`
1
final res = await supabase.auth.mfa.verify(
2
 factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',
3
 challengeId: '4034ae6f-a8ce-4fb5-8ee5-69a5863a7c15',
4
 code: '123456',
5
);
`
Response
## Create and verify a challenge
Helper method which creates a challenge and immediately uses the given code to verify against it thereafter. The verification code is provided by the user by entering a code seen in their authenticator app.
  * An enrolled factor is required before invoking `challengeAndVerify()`.
  * Executes `mfa.challenge()` and `mfa.verify()` in a single step.


### Parameters
  * factorIdRequiredString
System assigned identifier for authenticator device as returned by enroll
  * codeRequiredString
The verification code on the user's authenticator app


Create and verify a challenge for a factor
`
1
final res = await supabase.auth.mfa.challengeAndVerify(
2
 factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',
3
 code: '123456',
4
);
`
Response
## Unenroll a factor
Unenroll removes a MFA factor. A user has to have an `aal2` authenticator level in order to unenroll a `verified` factor.
### Parameters
  * factorIdRequiredString
System assigned identifier for authenticator device as returned by enroll


Unenroll a factor
`
1
final res = await supabase.auth.mfa.unenroll(
2
 '34e770dd-9ff9-416c-87fa-43b31d7ef225',
3
);
`
Response
## Get Authenticator Assurance Level
Returns the Authenticator Assurance Level (AAL) for the active session.
  * Authenticator Assurance Level (AAL) is the measure of the strength of an authentication mechanism.
  * In Supabase, having an AAL of `aal1` means the user has signed in with their first factor, such as email, password, or OAuth sign-in. An AAL of `aal2` means the user has also signed in with their second factor, such as a time-based, one-time-password (TOTP).
  * If the user has a verified factor, the `nextLevel` field returns `aal2`. Otherwise, it returns `aal1`.


Get the AAL details of a session
`
1
final res = supabase.auth.mfa.getAuthenticatorAssuranceLevel();
2
final currentLevel = res.currentLevel;
3
final nextLevel = res.nextLevel;
4
final currentAuthenticationMethods = res.currentAuthenticationMethods;
`
Response
## Auth Admin
  * Any method under the `supabase.auth.admin` namespace requires a `service_role` key.
  * These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the Flutter app.


Create server-side auth client
`
1
final supabase = SupabaseClient(supabaseUrl, serviceRoleKey);
`
## Retrieve a user
Get user by id.
  * Fetches the user object from the database based on the user's id.
  * The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.


### Parameters
  * uidRequiredString
User ID of the user to fetch.


Fetch the user object using the access_token jwt
`
1
final res = await supabase.auth.admin.getUserById(userId);
2
final user = res.user;
`
Response
## List all users
Get a list of users.
  * Defaults to return 50 users per page.


### Parameters
  * pageOptionalint
What page of users to return.
  * pageOptionalint
How many users to be returned per page. Defaults to 50.


Get a page of usersPaginated list of users
`
1
// Returns the first 50 users.
2
final List<User> users = await supabase.auth.admin.listUsers();
`
Response
## Create a user
Creates a new user.
  * To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
  * `createUser()` will not send a confirmation email to the user. You can use `inviteUserByEmail()` if you want to send them an email invite instead.
  * If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.


### Parameters
  * attributesRequiredAdminUserAttributes
Attributes to create the user with.
Details


With custom user metadataAuto-confirm the user's emailAuto-confirm the user's phone number
`
1
final res = await supabase.auth.admin.createUser(AdminUserAttributes(
2
 email: 'user@email.com',
3
 password: 'password',
4
 userMetadata: {'name': 'Yoda'},
5
));
`
Response
## Delete a user
Delete a user.
  * The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.


### Parameters
  * idRequiredString
ID of the user to be deleted.


Removes a user
`
1
await supabase.auth.admin
2
  .deleteUser('715ed5db-f090-4b8c-a067-640ecee36aa0');
`
## Send an email invite link
Sends an invite link to the user's email address.
### Parameters
  * emailRequiredString
Email address of the user to invite.
  * redirectToOptionalString
URI to redirect the user to after they open the invite link.
  * dataOptionalMap<String, dynamic>
A custom data object to store the user's metadata. This maps to the `auth.users.user_metadata` column.


Invite a user
`
1
final UserResponse res = await supabase.auth.admin
2
  .inviteUserByEmail('email@example.com');
3
final User? user = res.user;
`
Response
## Generate an email link
Generates email links and OTPs to be sent via a custom email provider.
  * The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `emailChangeCurrent`, `emailChangeNew`, `phoneChange`.
  * `generateLink()` only generates the email link for `email_change_email` if the "Secure email change" setting is enabled under the "Email" provider in your Supabase project.
  * `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.


### Parameters
  * typeRequiredGenerateLinkType
The type of invite link to generate.
  * emailRequiredString
Email address of the user to invite.
  * passwordOptionalString
Password for the user. Required for `signup` type.
  * redirectToOptionalString
URI to redirect the user to after they open the invite link.
  * dataOptionalMap<String, dynamic>
A custom data object to store the user's metadata. This maps to the `auth.users.user_metadata` column.


Generate a signup link
`
1
final res = await supabase.auth.admin.generateLink(
2
 type: GenerateLinkType.signup,
3
 email: 'email@example.com',
4
 password: 'secret',
5
);
6
final actionLink = res.properties.actionLink;
`
Response
## Update a user
### Parameters
  * uidRequiredGenerateLinkType
User ID of the user to update.
  * attributesRequiredAdminUserAttributes
Attributes to update for the user.
Details


Updates a user's email
`
1
await supabase.auth.admin.updateUserById(
2
 '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
3
 attributes: AdminUserAttributes(
4
  email: 'new@email.com',
5
 ),
6
);
`
## Invokes a Supabase Edge Function.
Invokes a Supabase Function. See the guide for details on writing Functions.
  * Requires an Authorization header.
  * Invoke params generally match the Fetch API spec.


### Parameters
  * functionNameRequiredString
The name of the function to invoke.
  * headersOptionalMap<String, String>
Custom headers to send with the request.
  * bodyOptionalMap<String, String>
The body of the request.
  * methodOptionalHttpMethod
HTTP method of the request. Defaults to POST.


Basic invocation.Specifying response type.Parsing custom headers.
`
1
final res = await supabase.functions.invoke('hello', body: {'foo': 'baa'});
2
final data = res.data;
`
## Listen to database changes
Returns real-time data from your table as a `Stream`.
  * Realtime is disabled by default for new tables. You can turn it on by managing replication.
  * `stream()` will emit the initial data as well as any further change on the database as `Stream<List<Map<String, dynamic>>>` by combining Postgrest and Realtime.
  * Takes a list of primary key column names that will be used to update and delete the proper records within the SDK.
  * The following filters are available 
    * `.eq('column', value)` listens to rows where the column equals the value
    * `.neq('column', value)` listens to rows where the column does not equal the value
    * `.gt('column', value)` listens to rows where the column is greater than the value
    * `.gte('column', value)` listens to rows where the column is greater than or equal to the value
    * `.lt('column', value)` listens to rows where the column is less than the value
    * `.lte('column', value)` listens to rows where the column is less than or equal to the value
    * `.inFilter('column', [val1, val2, val3])` listens to rows where the column is one of the values


Listen to a tableWith filter, order and limitWith an IN filterUsing `stream()` with `StreamBuilder`
`
1
supabase.from('countries')
2
 .stream(primaryKey: ['id'])
3
 .listen((List<Map<String, dynamic>> data) {
4
 // Do something awesome with the data
5
});
`
## Subscribe to channel
Subscribe to realtime changes in your database.
  * Realtime is disabled by default for new tables. You can turn it on by managing replication.
  * If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`


Listen to database changesListen to insertsListen to updatesListen to deletesListen to multiple eventsListen to row level changesListen to broadcast messagesListen to presence events
`
1
supabase
2
  .channel('public:countries')
3
  .onPostgresChanges(
4
    event: PostgresChangeEvent.all,
5
    schema: 'public',
6
    table: 'countries',
7
    callback: (payload) {
8
     print('Change received: ${payload.toString()}');
9
    })
10
  .subscribe();
`
## Unsubscribe from a channel
Unsubscribes and removes Realtime channel from Realtime client.
  * Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.


Remove a channel
`
1
final status = await supabase.removeChannel(channel);
`
## Unsubscribe from all channels
Unsubscribes and removes all Realtime channels from Realtime client.
  * Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.


Remove all channels
`
1
final statuses = await supabase.removeAllChannels();
`
## Retrieve all channels
Returns all Realtime channels.
Get all channels
`
1
final channels = supabase.getChannels();
`
## Create a bucket
Creates a new Storage bucket
  * Policy permissions required: 
    * `buckets` permissions: `insert`
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
A unique identifier for the bucket you are creating.
  * bucketOptionsOptionalBucketOptions
A parameter to optionally make the bucket public.
Details


Create bucket
`
1
final String bucketId = await supabase
2
 .storage
3
 .createBucket('avatars');
`
Response
## Retrieve a bucket
Retrieves the details of an existing Storage bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
The unique identifier of the bucket you would like to retrieve.


Get bucket
`
1
final Bucket bucket = await supabase
2
 .storage
3
 .getBucket('avatars');
`
Response
## List all buckets
Retrieves the details of all Storage buckets within an existing product.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


List buckets
`
1
final List<Bucket> buckets = await supabase
2
 .storage
3
 .listBuckets();
`
Response
## Update a bucket
Updates a new Storage bucket
  * Policy permissions required: 
    * `buckets` permissions: `update`
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
A unique identifier for the bucket you are updating.
  * bucketOptionsRequiredBucketOptions
A parameter to optionally make the bucket public.
Details


Update bucket
`
1
final String res = await supabase
2
 .storage
3
 .updateBucket('avatars', const BucketOptions(public: false));
`
Response
## Delete a bucket
Deletes an existing bucket. A bucket can't be deleted with existing objects inside it. You must first `empty()` the bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select` and `delete`
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
A unique identifier for the bucket you are deleting.


Delete bucket
`
1
final String res = await supabase
2
 .storage
3
 .deleteBucket('avatars');
`
Response
## Empty a bucket
Removes all objects inside a single bucket.
  * Policy permissions required: 
    * `buckets` permissions: `select`
    * `objects` permissions: `select` and `delete`
  * Refer to the Storage guide on how access control works


### Parameters
  * idRequiredString
A unique identifier for the bucket you are emptying.


Empty bucket
`
1
final String res = await supabase
2
 .storage
3
 .emptyBucket('avatars');
`
Response
## Upload a file
Uploads a file to an existing bucket.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `insert`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The relative file path. Should be of the format folder/subfolder/filename.png. The bucket must already exist before attempting to update.
  * fileRequiredFile or Uint8List
File object to be stored in the bucket.
  * fileOptionsOptionalFileOptions
Details
  * retryAttemptsOptionalint
Sets the retryAttempts parameter set across the storage client. Defaults to 10.
  * retryControllerOptionalStorageRetryController
Pass a RetryController instance and call `cancel()` to cancel the retry attempts.


Upload fileUpload file on web
`
1
final avatarFile = File('path/to/file');
2
final String fullPath = await supabase.storage.from('avatars').upload(
3
   'public/avatar1.png',
4
   avatarFile,
5
   fileOptions: const FileOptions(cacheControl: '3600', upsert: false),
6
  );
`
Response
## Download a file
Downloads a file.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The full path and file name of the file to be downloaded. For example folder/image.png.
  * transformOptionalTransformOptions
Transform the asset before serving it to the client.
Details


Download fileWith transform
`
1
final Uint8List file = await supabase
2
 .storage
3
 .from('avatars')
4
 .download('avatar1.png');
`
Response
## List all files in a bucket
Lists all the files within a bucket.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The folder path.
  * searchOptionsOptionalSearchOptions
Options for the search operations such as limit and offset.
Details


List files in a bucket
`
1
final List<FileObject> objects = await supabase
2
 .storage
3
 .from('avatars')
4
 .list();
`
Response
## Replace an existing file
Replaces an existing file at the specified path with a new one.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `update` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The relative file path. Should be of the format folder/subfolder/filename.png. The bucket must already exist before attempting to update.
  * fileRequiredFile or Uint8List
File object to be stored in the bucket.
  * fileOptionsOptionalFileOptions
Details
  * retryAttemptsOptionalint
Sets the retryAttempts parameter set across the storage client. Defaults to 10.
  * retryControllerOptionalStorageRetryController
Pass a RetryController instance and call `cancel()` to cancel the retry attempts.


Update fileUpdate file on web
`
1
final avatarFile = File('path/to/local/file');
2
final String path = await supabase.storage.from('avatars').update(
3
   'public/avatar1.png',
4
   avatarFile,
5
   fileOptions: const FileOptions(cacheControl: '3600', upsert: false),
6
  );
`
Response
## Move an existing file
Moves an existing file, optionally renaming it at the same time.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `update` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * fromPathRequiredString
The original file path, including the current file name. For example folder/image.png.
  * toPathRequiredString
The new file path, including the new file name. For example folder/image-new.png.


Move file
`
1
final String result = await supabase
2
 .storage
3
 .from('avatars')
4
 .move('public/avatar1.png', 'private/avatar2.png');
`
Response
## Delete files in a bucket
Deletes files within the same bucket
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `delete` and `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathsRequiredList<String>
A list of files to delete, including the path and file name. For example ['folder/image.png'].


Delete file
`
1
final List<FileObject> objects = await supabase
2
 .storage
3
 .from('avatars')
4
 .remove(['avatar1.png']);
`
Response
## Create a signed URL
Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: `select`
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The file path, including the file name. For example folder/image.png.
  * expiresInRequiredint
The number of seconds until the signed URL expires. For example, 60 for a URL which is valid for one minute.
  * transformOptionalTransformOptions
Transform the asset before serving it to the client.
Details


Create Signed URLWith transform
`
1
final String signedUrl = await supabase
2
 .storage
3
 .from('avatars')
4
 .createSignedUrl('avatar1.png', 60);
`
## Retrieve public URL
Retrieve URLs for assets in public buckets
  * The bucket needs to be set to public, either via updateBucket() or by going to Storage on supabase.com/dashboard, clicking the overflow menu on a bucket and choosing "Make public"
  * Policy permissions required: 
    * `buckets` permissions: none
    * `objects` permissions: none
  * Refer to the Storage guide on how access control works


### Parameters
  * pathRequiredString
The path and name of the file to generate the public URL for. For example folder/image.png.
  * transformOptionalTransformOptions
Transform the asset before serving it to the client.
Details


Returns the URL for an asset in a public bucketWith transform
`
1
final String publicUrl = supabase
2
 .storage
3
 .from('public-bucket')
4
 .getPublicUrl('avatar1.png');
`
Response
