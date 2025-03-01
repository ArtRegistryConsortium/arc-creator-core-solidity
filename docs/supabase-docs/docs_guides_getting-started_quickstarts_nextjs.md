Getting Started
Use Supabase with Next.js
Learn how to create a Supabase project, add some sample data, and query from a Next.js app.
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
### Create a Next.js app
Use the `create-next-app` command and the `with-supabase` template, to create a Next.js app pre-configured with:
  * Cookie-based Auth
  * TypeScript
  * Tailwind CSS


Terminal
`
1
npx create-next-app -e with-supabase
`
3
### Declare Supabase Environment Variables
Rename `.env.example` to `.env.local` and populate with your Supabase connection variables:
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
.env.local
`
1
NEXT_PUBLIC_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
2
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUBSTITUTE_SUPABASE_ANON_KEY>
`
4
### Query Supabase data from Next.js
Create a new file at `app/instruments/page.tsx` and populate with the following.
This will select all the rows from the `instruments` table in Supabase and render them on the page.
app/instruments/page.tsx
utils/supabase/server.ts
`
1
 import { createClient } from '@/utils/supabase/server';
23
 export default async function Instruments() {
4
  const supabase = await createClient();
5
  const { data: instruments } = await supabase.from("instruments").select();
67
  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
8
 }
`
5
### Start the app
Run the development server, go to http://localhost:3000/instruments in a browser and you should see the list of instruments.
Terminal
`
1
npm run dev
`
## Next steps#
  * Set up Auth for your app
  * Insert more data into your database
  * Upload and serve static files using Storage


