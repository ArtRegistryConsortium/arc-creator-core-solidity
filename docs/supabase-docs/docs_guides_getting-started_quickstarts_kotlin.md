Getting Started
Use Supabase with Android Kotlin
Learn how to create a Supabase project, add some sample data to your database, and query the data from an Android Kotlin app.
1
### Create a Supabase project
Go to database.new and create a new Supabase project.
When your project is up and running, go to the Table Editor, create a new table and insert some data.
Alternatively, you can run the following snippet in your project's SQL Editor. This will create a `instruments` table with some sample data.
SQL_EDITOR
`
1
-- Create the table
2
create table instruments (
3
 id bigint primary key generated always as identity,
4
 name text not null
5
);
6
-- Insert some sample data into the table
7
insert into instruments (name)
8
values
9
 ('violin'),
10
 ('viola'),
11
 ('cello');
1213
alter table instruments enable row level security;
`
Make the data in your table publicly readable by adding an RLS policy:
SQL_EDITOR
`
1
create policy "public can read instruments"
2
on public.instruments
3
for select to anon
4
using (true);
`
2
### Create an Android app with Android Studio
Open Android Studio > New > New Android Project.
3
### Install the Dependencies
Open `build.gradle.kts` (app) file and add the serialization plug, Ktor client, and Supabase client.
Replace the version placeholders `$kotlin_version` with the Kotlin version of the project, and `$supabase_version` and `$ktor_version` with the respective latest versions.
The latest supabase-kt version can be found here and Ktor version can be found here.
`
1
plugins {
2
 ...
3
 kotlin("plugin.serialization") version "$kotlin_version"
4
}
5
...
6
dependencies {
7
 ...
8
 implementation(platform("io.github.jan-tennert.supabase:bom:$supabase_version"))
9
 implementation("io.github.jan-tennert.supabase:postgrest-kt")
10
 implementation("io.ktor:ktor-client-android:$ktor_version")
11
}
`
4
### Add internet access permission
Add the following line to the `AndroidManifest.xml` file under the `manifest` tag and outside the `application` tag.
`
1
...
2
<uses-permission android:name="android.permission.INTERNET" />
3
...
`
5
### Initialize the Supabase client
You can create a Supabase client whenever you need to perform an API call.
For the sake of simplicity, we will create a client in the `MainActivity.kt` file at the top just below the imports.
Replace the `supabaseUrl` and `supabaseKey` with your own:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
`
1
import ...
23
val supabase = createSupabaseClient(
4
  supabaseUrl = "https://xyzcompany.supabase.co",
5
  supabaseKey = "your_public_anon_key"
6
 ) {
7
  install(Postgrest)
8
}
9
...
`
6
### Create a data model for instruments
Create a serializable data class to represent the data from the database.
Add the following below the `createSupabaseClient` function in the `MainActivity.kt` file.
`
1
@Serializable
2
data class Instrument(
3
  val id: Int,
4
  val name: String,
5
)
`
7
### Query data from the app
Use `LaunchedEffect` to fetch data from the database and display it in a `LazyColumn`.
Replace the default `MainActivity` class with the following code.
Note that we are making a network request from our UI code. In production, you should probably use a `ViewModel` to separate the UI and data fetching logic.
`
1
class MainActivity : ComponentActivity() {
2
  override fun onCreate(savedInstanceState: Bundle?) {
3
    super.onCreate(savedInstanceState)
4
    setContent {
5
      SupabaseTutorialTheme {
6
        // A surface container using the 'background' color from the theme
7
        Surface(
8
          modifier = Modifier.fillMaxSize(),
9
          color = MaterialTheme.colorScheme.background
10
        ) {
11
          InstrumentsList()
12
        }
13
      }
14
    }
15
  }
16
}
1718
@Composable
19
fun InstrumentsList() {
20
  var instruments by remember { mutableStateOf<List<Instrument>>(listOf()) }
21
  LaunchedEffect(Unit) {
22
    withContext(Dispatchers.IO) {
23
      instruments = supabase.from("instruments")
24
               .select().decodeList<Instrument>()
25
    }
26
  }
27
  LazyColumn {
28
    items(
29
      instruments,
30
      key = { instrument -> instrument.id },
31
    ) { instrument ->
32
      Text(
33
        instrument.name,
34
        modifier = Modifier.padding(8.dp),
35
      )
36
    }
37
  }
38
}
`
8
### Start the app
Run the app on an emulator or a physical device by clicking the `Run app` button in Android Studio.
