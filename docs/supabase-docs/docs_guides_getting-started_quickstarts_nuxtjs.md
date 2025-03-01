Getting Started
Use Supabase with Nuxt
Learn how to create a Supabase project, add some sample data to your database, and query the data from a Nuxt app.
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
### Create a Nuxt app
Create a Nuxt app using the `npx nuxi` command.
Terminal
`
1
npx nuxi@latest init my-app
`
3
### Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a Nuxt app.
Navigate to the Nuxt app and install `supabase-js`.
Terminal
`
1
cd my-app && npm install @supabase/supabase-js
`
4
### Query data from the app
In `app.vue`, create a Supabase client using your project URL and public API (anon) key:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
Replace the existing content in your `app.vue` file with the following code.
app.vue
`
1
<script setup>
2
import { createClient } from '@supabase/supabase-js'
3
const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')
4
const instruments = ref([])
56
async function getInstruments() {
7
 const { data } = await supabase.from('instruments').select()
8
 instruments.value = data
9
}
1011
onMounted(() => {
12
 getInstruments()
13
})
14
</script>
1516
<template>
17
 <ul>
18
  <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
19
 </ul>
20
</template>
`
5
### Start the app
Start the app, navigate to http://localhost:3000 in the browser, open the browser console, and you should see the list of instruments.
Terminal
`
1
npm run dev
`
The community-maintained @nuxtjs/supabase module provides an alternate DX for working with Supabase in Nuxt.
