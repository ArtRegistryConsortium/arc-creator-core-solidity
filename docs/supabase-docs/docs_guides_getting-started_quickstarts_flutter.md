Getting Started
Use Supabase with Flutter
Learn how to create a Supabase project, add some sample data to your database, and query the data from a Flutter app.
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
### Create a Flutter app
Create a Flutter app using the `flutter create` command. You can skip this step if you already have a working app.
Terminal
`
1
flutter create my_app
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase_flutter` client library which provides a convenient interface for working with Supabase from a Flutter app.
Open the `pubspec.yaml` file inside your Flutter app and add `supabase_flutter` as a dependency.
pubspec.yaml
`
1
supabase_flutter: ^2.0.0
`
4
### Initialize the Supabase client
Open `lib/main.dart` and edit the main function to initialize Supabase using your project URL and public API (anon) key:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
lib/main.dart
`
1
import 'package:supabase_flutter/supabase_flutter.dart';
23
Future<void> main() async {
4
 WidgetsFlutterBinding.ensureInitialized();
56
 await Supabase.initialize(
7
  url: 'YOUR_SUPABASE_URL',
8
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
9
 );
10
 runApp(MyApp());
11
}
`
5
### Query data from the app
Use a `FutureBuilder` to fetch the data when the home page loads and display the query result in a `ListView`.
Replace the default `MyApp` and `MyHomePage` classes with the following code.
lib/main.dart
`
1
class MyApp extends StatelessWidget {
2
 const MyApp({super.key});
34
 @override
5
 Widget build(BuildContext context) {
6
  return const MaterialApp(
7
   title: 'Instruments',
8
   home: HomePage(),
9
  );
10
 }
11
}
1213
class HomePage extends StatefulWidget {
14
 const HomePage({super.key});
1516
 @override
17
 State<HomePage> createState() => _HomePageState();
18
}
1920
class _HomePageState extends State<HomePage> {
21
 final _future = Supabase.instance.client
22
   .from('instruments')
23
   .select();
2425
 @override
26
 Widget build(BuildContext context) {
27
  return Scaffold(
28
   body: FutureBuilder(
29
    future: _future,
30
    builder: (context, snapshot) {
31
     if (!snapshot.hasData) {
32
      return const Center(child: CircularProgressIndicator());
33
     }
34
     final instruments = snapshot.data!;
35
     return ListView.builder(
36
      itemCount: instruments.length,
37
      itemBuilder: ((context, index) {
38
       final instrument = instruments[index];
39
       return ListTile(
40
        title: Text(instrument['name']),
41
       );
42
      }),
43
     );
44
    },
45
   ),
46
  );
47
 }
48
}
`
6
### Start the app
Run your app on a platform of your choosing! By default an app should launch in your web browser.
Note that `supabase_flutter` is compatible with web, iOS, Android, macOS, and Windows apps. Running the app on macOS requires additional configuration to set the entitlements.
Terminal
`
1
flutter run
`
## Going to production#
### Android#
In production, your Android app needs explicit permission to use the internet connection on the user's device which is required to communicate with Supabase APIs. To do this, add the following line to the `android/app/src/main/AndroidManifest.xml` file.
`
1
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
2
 <!-- Required to fetch data from the internet. -->
3
 <uses-permission android:name="android.permission.INTERNET" />
4
 <!-- ... -->
5
</manifest>
`
