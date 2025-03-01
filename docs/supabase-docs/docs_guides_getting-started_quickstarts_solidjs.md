Getting Started
Use Supabase with SolidJS
Learn how to create a Supabase project, add some sample data to your database, and query the data from a SolidJS app.
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
### Create a SolidJS app
Create a SolidJS app using the `degit` command.
Terminal
`
1
npx degit solidjs/templates/js my-app
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a SolidJS app.
Navigate to the SolidJS app and install `supabase-js`.
Terminal
`
1
cd my-app && npm install @supabase/supabase-js
`
4
### Query data from the app
In `App.jsx`, create a Supabase client using your project URL and public API (anon) key:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
Add a `getInstruments` function to fetch the data and display the query result to the page.
src/App.jsx
`
1
 import { createClient } from "@supabase/supabase-js";
2
 import { createResource, For } from "solid-js";
34
 const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>');
56
 async function getInstruments() {
7
  const { data } = await supabase.from("instruments").select();
8
  return data;
9
 }
1011
 function App() {
12
  const [instruments] = createResource(getInstruments);
1314
  return (
15
   <ul>
16
    <For each={instruments()}>{(instrument) => <li>{instrument.name}</li>}</For>
17
   </ul>
18
  );
19
 }
2021
 export default App;
`
5
### Start the app
Start the app and go to http://localhost:3000 in a browser and you should see the list of instruments.
Terminal
`
1
npm run dev
`
