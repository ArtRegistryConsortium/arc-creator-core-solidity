Getting Started
Use Supabase with SvelteKit
Learn how to create a Supabase project, add some sample data to your database, and query the data from a SvelteKit app.
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
### Create a SvelteKit app
Create a SvelteKit app using the `npm create` command.
Terminal
`
1
npx sv create my-app
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a SvelteKit app.
Navigate to the SvelteKit app and install `supabase-js`.
Terminal
`
1
cd my-app && npm install @supabase/supabase-js
`
4
### Create the Supabase client
Create a `src/lib` directory in your SvelteKit app, create a file called `supabaseClient.js` and add the following code to initialize the Supabase client with your project URL and public API (anon) key:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
src/lib/supabaseClient.js
`
1
 import { createClient } from '@supabase/supabase-js'
23
 export const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')
`
5
### Query data from the app
Use `load` method to fetch the data server-side and display the query results as a simple list.
Create `+page.server.js` file in the `src/routes` directory with the following code.
src/routes/+page.server.js
`
1
 import { supabase } from "$lib/supabaseClient";
23
 export async function load() {
4
  const { data } = await supabase.from("instruments").select();
5
  return {
6
   instruments: data ?? [],
7
  };
8
 }
`
Replace the existing content in your `+page.svelte` file in the `src/routes` directory with the following code.
src/routes/+page.svelte
`
1
 <script>
2
  let { data } = $props();
3
 </script>
45
 <ul>
6
  {#each data.instruments as instrument}
7
   <li>{instrument.name}</li>
8
  {/each}
9
 </ul>
`
6
### Start the app
Start the app and go to http://localhost:5173 in a browser and you should see the list of instruments.
Terminal
`
1
npm run dev
`
## Next steps#
  * Set up Auth for your app
  * Insert more data into your database
  * Upload and serve static files using Storage


