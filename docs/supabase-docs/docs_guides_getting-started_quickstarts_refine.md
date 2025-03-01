Getting Started
Use Supabase with refine
Learn how to create a Supabase project, add some sample data to your database, and query the data from a refine app.
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
### Create a refine app
Create a refine app using the create refine-app.
The `refine-supabase` preset adds `@refinedev/supabase` supplementary package that supports Supabase in a refine app. `@refinedev/supabase` out-of-the-box includes the Supabase dependency: supabase-js.
Terminal
`
1
npm create refine-app@latest -- --preset refine-supabase my-app
`
3
### Open your refine app in VS Code
You will develop your app, connect to the Supabase backend and run the refine app in VS Code.
Terminal
`
1
cd my-app
2
code .
`
4
### Start the app
Start the app, go to http://localhost:5173 in a browser, and you should be greeted with the refine Welcome page.
Terminal
`
1
npm run dev
`
![refine welcome page](https://supabase.com/docs/img/refine-qs-welcome-page.png)
5
### Update `supabaseClient`
You now have to update the `supabaseClient` with the `SUPABASE_URL` and `SUPABASE_KEY` of your Supabase API. The `supabaseClient` is used in auth provider and data provider methods that allow the refine app to connect to your Supabase backend.
###### Project URL
No project found
To get your Project URL, log in.
###### Anon key
No project found
To get your Anon key, log in.
src/utility/supabaseClient.ts
`
1
import { createClient } from "@refinedev/supabase";
23
const SUPABASE_URL = YOUR_SUPABASE_URL;
4
const SUPABASE_KEY = YOUR_SUPABASE_KEY
56
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
7
 db: {
8
  schema: "public",
9
 },
10
 auth: {
11
  persistSession: true,
12
 },
13
});
`
6
### Add instruments resource and pages
You have to then configure resources and define pages for `instruments` resource.
Use the following command to automatically add resources and generate code for pages for `instruments` using refine Inferencer.
This defines pages for `list`, `create`, `show` and `edit` actions inside the `src/pages/instruments/` directory with `<HeadlessInferencer />` component.
The `<HeadlessInferencer />` component depends on `@refinedev/react-table` and `@refinedev/react-hook-form` packages. In order to avoid errors, you should install them as dependencies with `npm install @refinedev/react-table @refinedev/react-hook-form`.
The `<HeadlessInferencer />` is a refine Inferencer component that automatically generates necessary code for the `list`, `create`, `show` and `edit` pages.
More on how the Inferencer works is available in the docs here.
Terminal
`
1
npm run refine create-resource instruments
`
7
### Add routes for instruments pages
Add routes for the `list`, `create`, `show`, and `edit` pages.
You should remove the `index` route for the Welcome page presented with the `<Welcome />` component.
src/App.tsx
`
1
import { Refine, WelcomePage } from "@refinedev/core";
2
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
3
import routerBindings, {
4
 DocumentTitleHandler,
5
 NavigateToResource,
6
 UnsavedChangesNotifier,
7
} from "@refinedev/react-router-v6";
8
import { dataProvider, liveProvider } from "@refinedev/supabase";
9
import { BrowserRouter, Route, Routes } from "react-router-dom";
1011
import "./App.css";
12
import authProvider from "./authProvider";
13
import { supabaseClient } from "./utility";
14
import { InstrumentsCreate, InstrumentsEdit, InstrumentsList, InstrumentsShow } from "./pages/instruments";
1516
function App() {
17
 return (
18
  <BrowserRouter>
19
   <RefineKbarProvider>
20
    <Refine
21
     dataProvider={dataProvider(supabaseClient)}
22
     liveProvider={liveProvider(supabaseClient)}
23
     authProvider={authProvider}
24
     routerProvider={routerBindings}
25
     options={{
26
      syncWithLocation: true,
27
      warnWhenUnsavedChanges: true,
28
     }}
29
     resources={[{
30
      name: "instruments",
31
      list: "/instruments",
32
      create: "/instruments/create",
33
      edit: "/instruments/edit/:id",
34
      show: "/instruments/show/:id"
35
     }]}>
36
     <Routes>
37
      <Route index
38
       element={<NavigateToResource resource="instruments" />}
39
      />
40
      <Route path="/instruments">
41
       <Route index element={<InstrumentsList />} />
42
       <Route path="create" element={<InstrumentsCreate />} />
43
       <Route path="edit/:id" element={<InstrumentsEdit />} />
44
       <Route path="show/:id" element={<InstrumentsShow />} />
45
      </Route>
46
     </Routes>
47
     <RefineKbar />
48
     <UnsavedChangesNotifier />
49
     <DocumentTitleHandler />
50
    </Refine>
51
   </RefineKbarProvider>
52
  </BrowserRouter>
53
 );
54
}
5556
export default App;
`
8
### View instruments pages
Now you should be able to see the instruments pages along the `/instruments` routes. You may now edit and add new instruments using the Inferencer generated UI.
The Inferencer auto-generated code gives you a good starting point on which to keep building your `list`, `create`, `show` and `edit` pages. They can be obtained by clicking the `Show the auto-generated code` buttons in their respective pages.
