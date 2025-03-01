Getting Started
Use Supabase with React
Learn how to create a Supabase project, add some sample data to your database, and query the data from a React app.
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
### Create a React app
Create a React app using a Vite template.
Terminal
`
1
npm create vite@latest my-app -- --template react
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a React app.
Navigate to the React app and install `supabase-js`.
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
 import { useEffect, useState } from "react";
2
 import { createClient } from "@supabase/supabase-js";
34
 const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");
56
 function App() {
7
  const [instruments, setInstruments] = useState([]);
89
  useEffect(() => {
10
   getInstruments();
11
  }, []);
1213
  async function getInstruments() {
14
   const { data } = await supabase.from("instruments").select();
15
   setInstruments(data);
16
  }
1718
  return (
19
   <ul>
20
    {instruments.map((instrument) => (
21
     <li key={instrument.name}>{instrument.name}</li>
22
    ))}
23
   </ul>
24
  );
25
 }
2627
 export default App;
`
5
### Start the app
Start the app, go to http://localhost:5173 in a browser, and open the browser console and you should see the list of instruments.
Terminal
`
1
npm run dev
`
## Next steps#
  * Set up Auth for your app
  * Insert more data into your database
  * Upload and serve static files using Storage


