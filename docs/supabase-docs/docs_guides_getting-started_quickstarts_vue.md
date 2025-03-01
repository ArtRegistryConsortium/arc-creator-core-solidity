Getting Started
Use Supabase with Vue
Learn how to create a Supabase project, add some sample data to your database, and query the data from a Vue app.
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
### Create a Vue app
Create a Vue app using the `npm init` command.
Terminal
`
1
npm init vue@latest my-app
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a Vue app.
Navigate to the Vue app and install `supabase-js`.
Terminal
`
1
cd my-app && npm install @supabase/supabase-js
`
4
### Create the Supabase client
Create a `/src/lib` directory in your Vue app, create a file called `supabaseClient.js` and add the following code to initialize the Supabase client with your project URL and public API (anon) key:
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
Replace the existing content in your `App.vue` file with the following code.
src/App.vue
`
1
 <script setup>
2
 import { ref, onMounted } from 'vue'
3
 import { supabase } from './lib/supabaseClient'
45
 const instruments = ref([])
67
 async function getInstruments() {
8
  const { data } = await supabase.from('instruments').select()
9
  instruments.value = data
10
 }
1112
 onMounted(() => {
13
  getInstruments()
14
 })
15
 </script>
1617
 <template>
18
  <ul>
19
   <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
20
  </ul>
21
 </template>
`
6
### Start the app
Start the app and go to http://localhost:5173 in a browser and you should see the list of instruments.
Terminal
`
1
npm run dev
`
