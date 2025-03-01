# Changelog
New updates and product improvements
### Deploy Edge Functions from CLI without needing Docker + import files outside of supabase directory
Feb 14, 2025
We've introduced an experimental flag to the Supabase CLI, which allows you to deploy Edge Functions without running Docker.
### How to use#
`
1
npx supabase@beta functions deploy --use-api
`
This also simplifies importing files outside the `supabase/` directory within Edge Functions. Useful for monorepo setups where you want to share code between your frontend and Edge Functions.
For example, Given the directory layout below, you can import `my-lib` from either `index.ts` or `deno.json`.
`
1
my-repo/
2
├─ my-app/
3
│ ├─ supabase/
4
│ │ │ functions/
5
│ │ │ │ slug/
6
│ │ │ │ ├─ index.ts
7
│ │ │ │ ├─ deno.json
8
├─ my-lib/
9
│ ├─ src/
10
│ │ ├─ index.ts
11
├─ README.md
`
The new flag is available from the Supabase CLI beta releases 2.13.3. Please check CLI upgrade guide on how to use the beta releases on your machine.
### CI#
We also recommend using the `--use-api` flag if you deploy Edge Functions via CI. This should speed up the deploys as it no longer requires Docker and also solves a race condition previously occurred when deploying multiple functions in parallel.
Here's an example GitHub Action config:
`
1
name: Deploy Function
23
on:
4
 push:
5
  branches:
6
   - main
7
 workflow_dispatch:
89
jobs:
10
 deploy:
11
  runs-on: ubuntu-latest
1213
  env:
14
   SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
15
   PROJECT_ID: your-project-id
1617
  steps:
18
   - uses: actions/checkout@v3
1920
   - uses: supabase/setup-cli@v1
21
    with:
22
     version: 2.13.3
2324
   - run: supabase functions deploy --use-api --project-ref $PROJECT_ID
`
**Note** : If you run into any issues with the `--use-api`, you can drop the flag to use the default Docker-based deploy mechanism.
**Note 2** : To run/ test Edge Functions locally (`supabase functions serve`), you will still need Docker. This only modifies deploy behavior.
### Dashboard Updates [27/01/25 - 10/02/25]
Feb 11, 2025
## Deploy Edge Functions via the Assistant#
https://github.com/user-attachments/assets/c567ecc2-8eed-4589-b077-f578ceaeb562
You can now get help with writing edge functions using the Assistant, and also deploy the suggested edge functions right from the dashboard! This is just the first step towards providing a convenient way to manage your edge functions through the dashboard instead of using solely through the CLI, so watch this space! 👀 🙂
PR: https://github.com/supabase/supabase/pull/33293
Link: https://supabase.com/dashboard/project/_
## Update to Authentication settings location in the dashboard#
![image](https://github.com/user-attachments/assets/f946a195-3ad7-44fd-97d6-cbb7ea943d5a)
All authentication settings are now consolidated into in one place, which is within the Auth section of the dashboard. They were previously split between project settings and the authentication product page which created confusion and potentially hid functionalities that a user might be looking for. We'll eventually also follow up with similar efforts for other product settings to improve the general information architecture of the dashboard, in hopes to help make finding your way around the dashboard better! 😄🙏
PR: https://github.com/supabase/supabase/pull/33335
Link: https://supabase.com/dashboard/project/_/auth/users
## Table Editor peek referencing row from the table#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fa2abdd42-6d15-430f-9d05-2463cf04dfa9&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Clicking "View reference row" from the Table Editor now shows the row in a Popover rather than opening the referencing table with the relevant filters applied. This is in hopes to make the UX less intrusive and abrupt - and we'd love to hear what you think! Feel free to leave any feedback either through the dashboard or right here in the discussions 🙂
PR: https://github.com/supabase/supabase/pull/33141
Link: https://supabase.com/dashboard/project/_/editor
## Easy way to Fix "Security Definer view" warnings#
![screenshot-2025-02-05-at-13 04 15](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F9099c12a-c59b-45e3-914b-f5755dd45a39&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Views that were created in the public schema without specifying security invoker will normally have a warning in the Table Editor regarding its accessibility via the project's API. Understandably, the solution to address this might not be intuitive, especially if you're not familiar with Postgres. As such, we've added a convenient action to automatically address this warning by applying the necessary fixes.
PR: https://github.com/supabase/supabase/pull/33363
Link: https://supabase.com/dashboard/project/_/editor
## Other bug fixes and improvements#
Table Editor
  * Changing schemas will render the table editor empty state instead of persisting the currently viewed table to prevent confusion (PR)
  * Add support for `bytea` data type (PR)


SQL Editor
  * Each section's (Shared, Favorites, Private) opened/closed state now persists from where you left off (PR)
  * Support duplicating a query (PR)
  * Fix inability to scroll results section when query returns an error with a long message (PR)
  * Opt to not clear search results when clicking on a query while searching (PR)
  * Fix moving query to new folder (PR)


Database
  * Fix database tables not showing foreign key relations when opening Edit Table panel for the first time (PR)


Reports
  * Add refresh button to Custom reports, API report, Storage report and Database report (PR)


Webhooks
  * Fix issue with saving values with quotes in http parameters and headers (PR)


Cron
  * Support single quotes in cron job names (PR)


Advisors
  * Support resetting query performance report on read replicas (PR)


Logs & Analytics
  * Support navigating logs in the table with arrow keys (PR)


### Developer Update - January 2025
Feb 7, 2025
Here’s everything that happened with Supabase in the last month:
## Third-party Auth with Firebase is now GA#
![third-party-auth-with-firebase-is-ga](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F75e887ef-9fe1-43c7-b91f-38c70ab6bfcc&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x) Use Firebase Auth with your Supabase projects. [Docs]
## Easier to see errors in log charts#
![easier-errors-in-logs](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F9aa50bbc-6888-4155-8635-fa8daddac94d&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x) Log charts in Supabase are now stacked with successes and errors on top of each other, and colored by type. [Link] [GitHub]
## Enhanced type inference for JSON fields#
![enhanced-type-inference-for-json-fields](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F23c78985-1239-4872-b6a5-3fe602341a6e&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x) Set up custom types with `supabase-js` for more concise and accurate types that reflect your data. [GitHub]
## Type validation for query filter values#
![type-validation-for-query-filter-values](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fec627922-c456-40ee-a67d-6fca39057c0b&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x) The Supabase TypeScript SDK will correctly validate all query filter values in `eq`, `neq`, and `in` methods. [GitHub] [Docs]
## AI Prompt for writing Edge Functions#
![ai-prompt-for-writing-edge-functions](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fae3cbd6d-a641-4ded-8664-3a418f8c55c1&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x) A prompt to help generate Supabase Edge Functions following best practices that you can supply to Cursor, Copilot, and other AI coding tools. [Docs]
## Quick Product Announcements#
  * Free plans are now limited to 0.5GB _per project_ instead of 0.5GB per account. Keep building! [GitHub]
  * Now you can top up your credit balance through your organization's billing settings. [GitHub]
  * Added 3 configurable parameters to control disk autoscaling. [GitHub]
  * Easier to find queries in the SQL Editor. [GitHub]

_This discussion was created from the releaseDeveloper Update - January 2025._
### Deprecation of Fly.io Postgres Managed by Supabase on March 14, 2025
Feb 7, 2025
Supabase is deprecating Fly’s Postgres offering managed by Supabase on March 14, 2025.
### Why are we deprecating this offering?#
This deprecation enables us to focus on a new architecture for scale-to-zero databases, zero-downtime upgrades (more on this later), and more. Afterward, we’ll re-evaluate multi-cloud deployments beyond AWS, our current cloud provider.
### What’s the current status of Fly Postgres on Supabase?#
We have disabled Fly Postgres signups and existing Fly Postgres customers will no longer be able to spin up new projects on Supabase. However, you can still access any existing Fly Postgres database.
### What is the deprecation timeline?#
Before March 14:
You will still be able to access your existing Fly Postgres projects. We strongly recommend that you transition to Supabase’s or Fly’s native Postgres offering as soon as possible.
On March 14:
Your Fly Postgres projects are removed from our platform.
Reach out to our support if you have any questions or concerns regarding this deprecation.
### Dashboard Updates [13/01/25 - 27/01/25]
Jan 28, 2025
## Log charts now show stacked charts with total warnings and errors#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fd2b918ec-2403-414d-a0f6-0bfe2cacbf21&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
With stacked charts, you should now be able to get a better, faster glance at your logs' status, and also identify potential issues with incoming requests easily!
Link: https://supabase.com/dashboard/project/_/logs/edge-logs
PR: https://github.com/supabase/supabase/pull/32742
## Additional parameters added to Disk Settings#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fac47c400-a1d4-44c2-95dc-1df9d5c46be0&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
3 new configurable parameters have been added that can control the autoscale behaviour of your disk, namely:
  * Autoscale growth percent: Refers to the percentage of current disk size to grow by
  * Minimum increment: Refers to the minimum value to grow the disk size by when autoscaling
  * Maximum disk size: Refers to the maximum size that your disk can grow to


These parameters can be configured anytime with no cooldown, and can be accessed under "Advanced disk settings" in your project settings "Compute and Disk"
Link: https://supabase.com/dashboard/project/_/settings/compute-and-disk
PR: https://github.com/supabase/supabase/pull/32628
## SQL Editor searching now renders a flat list#
https://github.com/user-attachments/assets/3cd07693-882d-486b-b848-842d67d0316a
This addresses a UX problem whereby searching for snippets do not immediately surface results that might be within folders - with rendering a flat list instead, this should enable users to find what they need faster. Results are also no longer separated into "Shared", "Favorites", or "Private to make scanning through results easier.
Link: https://supabase.com/dashboard/project/_/sql/new
PR: https://github.com/supabase/supabase/pull/33064
## Bug fixes and other improvements#
General
  * More mobile responsiveness improvements (PR)


Advisors
  * Show timing in seconds instead of ms if > 1000 ms (PR)
  * Allow exporting advisor results to CSV, or copy as JSON / Markdown


Cron
  * Show all cron jobs even those with no names (PR)
  * Any changes made using the UI will reflect in the SQL snippet textbox to support further customization (PR)


Table Editor
  * Fix a bug with Set to NOW CTA that was specifically happening only in certain timezones (PR)


SQL Editor
  * Fix X axis labels with charting in SQL Editor (PR)
  * Fix client crash issue when using a non-numerical column as the Y axis (PR)
  * Opened / closed state of each section is now persisted (PR)
  * Support duplicating a query (PR)


### Relaxing Database Size limit on Free Plan - 0.5 GB Database Size per project
Jan 27, 2025
> [!NOTE] This is only relevant for Free Plan customers.
We've relaxed the Database Size limit on the Free Plan to be 0.5 GB per active project, rather than 0.5 GB for your entire Free Plan organization (previously included paused/deleted projects within your billing cycle). This will be beneficial in a few cases:
  * When pausing or deleting projects, they will no longer count towards the Free Plan limit.
  * When launching more than one project on the Free Plan, each project is allowed 0.5 GB Database Size, rather than a total of 0.5 GB (i.e. two projects using 0.25 GB).


**Before** Every project that has been active at some point in your billing cycle counts towards the 0.5 GB Database Size limit. If you've deleted a project, the average Database Size will still count towards your limit. We sum up the average Database Size of all projects that are/have been active in the billing cycle. Two projects with 0.5 GB Database Size each equal a Database Size usage of 1 GB and therefore exceed the Free Plan quota.
**After** We only limit active projects to a Database Size of 0.5 GB per project. Deleted or paused projects, even within the billing cycle, do not count towards your Database Size limits. As long as none of your active projects exceeds 0.5 GB Database Size, you'll stay within the Free Plan limits. Two projects with 0.5 GB Database Size each would still be within the Free Plan quota, as no project is exceeding 0.5 GB.
### Developer Update - December 2024
Jan 23, 2025
Welcome to 2025. Here’s everything that happened with Supabase in the last month:
## Supabase Integrations Page#
![supabase-integrations-page](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F67a3aecf-6c07-49df-b129-9f7a158fdb28&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We added an Integrations Section to the Dashboard. Inside you’ll find useful features, like our new Postgres modules: Cron Jobs and Queues.
[Changelog]
## Fix Security and Performance Issues with AI#
![fix-security-and-performance-Issues-with-ai](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F571661f9-e53f-4049-abfa-a3f1fcf44677&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
The AI Assistant has a new ability: it can help you understand and resolve Security and Performance issues. The issue context is passed to the assistant, which explains the issue and suggests fixes.
[Check out the Security Advisor]
## SQL Editor Inline AI Assistance#
![sql-editor-inline-ai-assistance](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F105afd59-a349-47da-a4c1-f57238add18b&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
When using the SQL Editor, you can now hit CMD+K to open an inline AI assistant that will help you make changes to your query. It will only make changes to whatever you have selected, but also has the surrounding context and can access schema, policy, and function information, if needed.
[Check out the SQL Editor]
## Supabase Branching Available in Vercel Integration#
![supabase-branching-available-in-vercel-integration](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F8ac12b38-415b-424c-a910-10f65259776d&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Vercel Branching Integration now works with Vercel Marketplace managed projects. You can synchronize environment variables for newly created branches to your Vercel projects, no matter whether the project was created directly in Supabase or through a Vercel dashboard.
[Changelog]
## Database Connection Settings Redesigned#
![database-connection-settings-redesigned](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fdfbea9d4-8c61-4e13-bb5e-9c64ab1dcbfe&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
The “Connect” dialog has moved to the top of the Dashboard. You can access your database connection settings from anywhere. The “Connection String” tab includes guidance on when to connect via direct connection, transaction pooler, and session pooler.
[Dashboard]
## Query Cloudflare D1 from Your Supabase Database#
![query-cloudflare-d1-from-your-supabase-database](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fde48d24c-56e3-4233-9981-4bdfdd6d7c99&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Cloudflare D1 is a serverless SQLite service. You can now query it from your Supabase database using our Wrappers service, along with other services like BigQuery, ClickHouse, Firebase, and Snowflake.
[Docs]
## Quick Product Announcements#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F0dc568a3-cb5c-428f-9aa4-baa0d87f0147&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
**Dashboard**
  * The Supabase Dashboard is now responsive. This is just a first step towards a more complete mobile experience. [Link]
  * Granular Disk Size usage break down by Database/WAL/System [Changelog]


**Edge Functions**
  * Use a custom NPM registry for Edge Function dependencies [Changelog]


**Logs**
  * Log Explorer UI Overhaul [Changelog]


**Connection Pooler**
  * Supavisor Session Mode on port 6543 will be deprecated on February 28, 2025 [Changelog]


**Auth**
  * Slack v1 OAuth has been deprecated in favor of Slack (OIDC) [Changelog]

_This discussion was created from the releaseDeveloper Update - December 2024._
### Enhanced Type Inference for JSON Fields in supabase-js
Jan 20, 2025
TypeScript users, here's a cool new feature! Starting from v2.48.0, defining custom types for JSON fields in `supabase-js` and using them with the JSON selector is now easier, making your code more type-safe and intuitive.
### Quick Example#
Define your custom JSON type:
`
1
type CustomJsonType = {
2
 foo: string;
3
 bar: { baz: number };
4
 en: 'ONE' | 'TWO' | 'THREE';
5
};
67
export type Database = MergeDeep<
8
 DatabaseGenerated,
9
 {
10
  your_schema: {
11
   Tables: {
12
    your_table: {
13
     Row: {
14
      data: CustomJsonType | null;
15
     };
16
     // Optional: Use if you want type-checking for inserts and update
17
     // Insert: {
18
     // data?: CustomJsonType | null;
19
     // };
20
     // Update: {
21
     // data?: CustomJsonType | null;
22
     // };
23
    }
24
   }
25
   Views: {
26
    your_view: {
27
     Row: {
28
      data: CustomJsonType | null;
29
     };
30
    }
31
   }
32
  }
33
 }
34
>
`
### What You Get#
Now, when you query your data:
`
1
const res = await client
2
 .from('your_table')
3
 .select('data->bar->baz, data->en, data->bar');
45
if (res.data) {
6
 console.log(res.data);
7
 // TypeScript infers the shape of your JSON data:
8
 // [
9
 //  {
10
 //   baz: number;
11
 //   en: 'ONE' | 'TWO' | 'THREE';
12
 //   bar: { baz: number };
13
 //  }
14
 // ]
15
}
`
### Get Started#
Start using this feature with our guides:
  * Generating Types
  * Typescript Support
  * Helper Types for Tables and Joins


### Add static files to Edge Functions
Jan 15, 2025
Supabase CLI 2.7.0 adds support for bundling Edge Functions with static files.
You can access bundled files via Deno's file-system APIs. Here's an example function that serves a PDF file.
`
1
import fs from 'node:fs'; // This should be the first import to prevent other modules to trying to use their own polyfills.
234
Deno.serve(async () => {
5
 return new Response(
6
  await Deno.readFile("./my-book.pdf"),
7
  {
8
   headers: {
9
    "Content-Type": "application/pdf",
10
    "Content-Disposition": 'attachment; filename="my-book.pdf"',
11
   },
12
  },
13
 );
14
});
`
### Use cases#
  * Use custom Wasm modules in your Edge Functions (check this guide for more details on how to write & use wasm modules in Edge Functions)
  * Create paywalls for serving digital content like ebooks
  * HTML email templates for sending emails using Edge Functions


### How to configure#
You will need to add static files to the function's directory to bundle them. Then, in the `supabase/config.toml` file for the project, add these lines:
`
1
[functions.buy-book]
2
static_files = [ "./functions/buy-book/my-book.pdf" ]
`
You can specify an array of files or use a glob pattern (eg: "./functions/email-templates/*.html")
Check the CLI configuration reference for more details: https://supabase.com/docs/guides/local-development/cli/config#functions.function_name.static_files
**Note** : This feature is currently not available with branching and will be added with the next stable release of the CLI.
### Supabase Connection Pooler Deprecating Session Mode on Port 6543 on February 28, 2025
Jan 13, 2025
 _If you're only using Transaction Mode on Connection Pooler port 6543 or already using Session Mode on port 5432 then no action is required._
On February 28, 2025, Supavisor (Supabase's Connection Pooler) is deprecating Session Mode on port 6543. After this date, port 6543 will only support Transaction Mode while port 5432 continues to support Session Mode.
We’re making this change because Session Mode is already available on port 5432 and this streamlines our connection pooler’s ports and their respective modes.
Required steps:
  1. Update your application/database clients to use port 5432 for Session Mode.
  2. In your project’s Database Settings (”Connection pooling configuration”), set “Pool Mode” to “Transaction” and click “Save” (please keep in mind that this will restart all your connections connected to the Pooler).


Please reach out to our support if you have any questions or concerns regarding this change.
### Dashboard Updates [30/12/24 - 13/01/25]
Jan 13, 2025
## UI Overhaul for Log Explorer log details#
https://github.com/user-attachments/assets/1f752ebc-a814-4f1c-845f-4659a0dc87d3
The changes here addresses some UX friction whereby depending on the query, the detail panel of the log would be hard to read. We've hence updated the log detail drawing to add better spacing, the option to expand rows, and also use our TimestampInfo tooltip in the UI as well!
PR: https://github.com/supabase/supabase/pull/31684
Link: https://supabase.com/dashboard/project/_/logs/explorer
## Toggle for enabling connection via S3 protocol in Storage#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fe621ad00-86e1-4d90-95bc-1b00f548657e&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
PR: https://github.com/supabase/supabase/pull/31209
Link: https://supabase.com/dashboard/project/_/settings/storage
## Credit Balance Top Up#
![Screenshot 2025-01-13 at 14 43 06](https://github.com/user-attachments/assets/3c8c5190-0b25-4524-9ee8-1d9cc3a4a2d4)
It is now possible to top up your credit balance through your organization's billing settings. Read more about this in our discussions page here
PR: https://github.com/supabase/supabase/pull/32680
Link: https://supabase.green/dashboard/org/_/billing
## Other bug fixes and improvements#
Auth
  * Fix impersonation and searching users with single quotes (PR)


Advisors
  * Add "Ask Assistant" CTA to advisor issues (PR)


SQL Editor
  * Persist last selected database (PR)


Logs Explorer
  * Add copy as CSV + JSON options (PR)


Edge Functions
  * A number of general improvements (more details in the PR) (PR)


Cron
  * Add last and next run for cron jobs (PR)


### Credit Balance Top Up
Jan 13, 2025
It is now possible to top up your credit balance through your organization's billing settings. On successful payment, an invoice will be issued and you'll be granted credits. Credits will be applied to future invoices only and are not refundable. The topped up credits do not expire.
![Screenshot 2025-01-13 at 14 43 06](https://github.com/user-attachments/assets/3c8c5190-0b25-4524-9ee8-1d9cc3a4a2d4) ![Screenshot 2025-01-13 at 14 47 01](https://github.com/user-attachments/assets/a8cec5dd-0ea4-467a-afa4-d3dfd15f74e8)
This can be useful in many scenarios:
  * Issues with recurring payments (i.e. due to Indian banking regulations)
  * More control about how often your credit card gets charged
  * Easier for some accounting departments
  * Yearly upfront payments


If you run out of credits while you are still on a paid plan, your credit card will be charged as usual.
If you are interested in larger (>$1,000) credit packages, please reach out.
### Type validation for query filter values in supabase-js
Jan 9, 2025
If you are using our TypeScript SDK with automatically generated types, you are in for a treat. Starting version `2.47.12`, our `@supabase/supabase-js` SDK will correctly validate all query filter values in `eq`, `neq` and `in` methods. Including not only primitives, but enums as well. In both tables, views, and arbitrarily-nested relations.
When using enums, LSP auto-completion also works out-of-the-box now.
![Untitled](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F98543258-394f-45aa-8a36-bc3b547b1d07&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Want to start using them? See our guides for how to get started: https://supabase.com/docs/guides/api/rest/generating-types https://supabase.com/docs/reference/javascript/typescript-support
### Use a custom NPM registry for Edge Function dependencies
Jan 7, 2025
Some organizations require using all modules from a private NPM registry for security and compliance reasons. Edge Functions now supports configuring a private registry to load all NPM modules using the `NPM_CONFIG_REGISTRY` environment variable.
You can define a private registry in the project's `.env` file or directly specify it when running the deploy command:
`
1
NPM_CONFIG_REGISTRY=https://custom-registry/ supabase functions deploy my-function
`
You will need Supabase CLI version 2.2.8 or higher to use this feature.
Note that Edge Functions also supports importing private NPM packages (which can be published on any registry).
Check the Managing dependencies guide to learn more about how to configure and use external dependencies in your Edge Functions.
### Dashboard Updates [09/12/24 - 23/12/24]
Dec 23, 2024
## Improved mobile navigation for the dashboard#
https://github.com/user-attachments/assets/a2e1c815-6d65-486f-ae77-1d5993377c40
We've heard many feedback around mobile support for the dashboard and we're taking the first step towards supporting that 📱🙂 While this PR doesn't completely optimize the mobile UX for the dashboard, navigating around the dashboard on mobile is now supported! We'll definitely be looking into optimizing other parts of the dashboard for mobile use so stay tuned! 😉
PR: https://github.com/supabase/supabase/pull/31080
Link: https://supabase.com/dashboard
## Inline completions via Assistant in SQL Editor#
![image](https://github.com/user-attachments/assets/e24c9910-7044-482d-91af-b46111ff34e2)
In hopes to make the Assistant's UX more seamless while in the SQL editor, we've added support for adjusting your SQL snippets inline while in the SQL editor without having to open the Assistant panel. Highlight the section that you'd like to edit, and hit CMD / CTRL + K to pop open the inline prompt 💬 Less clicking, more typing!
PR: https://github.com/supabase/supabase/pull/30706
Link: https://supabase.com/dashboard/project/_/sql/new
## Improve date time editing in Table Editor Grid#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F948e6ae7-e2af-4483-8172-fc12fa675589&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We've also seen a couple of feedback around supporting copying and pasting raw date time values from the Table Editor. We've previously been using the browser native date time input field which we've realised have been less than optimal for the following reasons:
  * Adjusting the value typically takes several clicks which can feel frustrating
  * The precision of time values in JS does not match the precision of time values in Postgres
  * The UX varies a lot across browsers since each browser has their own implementation of the native date time input


As such we've decided to move towards supporting editing your raw values for date, timestamp, and timestamptz type fields, with a helper tooltip to show the time formatted in UTC and your relative timezone. This UX also allows us to support setting values to NULL which we struggled to do so gracefully with native browser date time inputs. Hope this helps make editing your data via the Table Editor easier 🙏🙂 More screenshots available in the attached PR below!
PR: https://github.com/supabase/supabase/pull/31121
Link: https://supabase.com/dashboard/project/_/editor
## Support for bulk delete users#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fe3bffd2e-6cae-49dd-a73f-05397ce159b1&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Also another feature that we've heard many requests for - you can now delete your users in bulk! Select the users that you'd like via the checkboxes and a button will appear to allow you to delete them all. There is, however, a temporary limitation that you may only delete up to 20 users at once, but we'll be looking into lifting this limitation eventually 🙂
PR: https://github.com/supabase/supabase/pull/31271
Link: https://supabase.com/dashboard/project/_/auth/users
## Other bug fixes and improvements#
General
  * Add ability for Assistant to retrieve database functions within a schema (PR)
  * Limit local storage memory to 20 chat messages for Assistant (PR)
  * Support scrolling up in chat while a new response is being streamed (PR)
  * Adjust warnings for destructive prompts via the Assistant (PR)
  * Assistant to adhere to Supabase Linter rules when generating responses (PR)


Table Editor
  * Add dropdown menu item to copy table name (PR)


### Dashboard Updates [18/11/24 - 09/12/24]
Dec 10, 2024
Launch Week 13 has wrapped up and it's now the holiday season! 🎄🎁 If you might have missed our launches last week - fret not! We've got you covered with a brief summary of the changes that landed in the dashboard right here 🙂
## Dashboard Integrations#
![Screenshot 2024-12-10 at 18 02 54](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F65b815f4-b034-4b18-b27a-d1bbc75f0d3a&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
You should have noticed by now, but we've added a new Integrations page where you can easily manage all things related to your database that may not necessarily be directly about your database. This allows us to consolidate some features that were in slightly odd places such as the GraphiQL IDE or Database Webhooks, and also provide UIs that are specific to certain database extension(s) such as Vault, or the newly added Queues and Crons (more on that below!). Database Wrappers have also been shifted here as well, and we hope that this shift will help make finding things around the dashboard easier for everyone 🙂🙏
Link: https://supabase.com/dashboard/project/_/integrations
PR: https://github.com/supabase/supabase/pull/30476
## AI Assistant V2#
![](https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flaunch-week-13%2Fday-1-ai-assistant-v2%2Fthumb.jpg&w=640&q=100)
We've always had the AI assistant sprinkled around the dashboard in the SQL Editor, and RLS Editor. Today we're making it accessible from anywhere in the dashboard, spiced with several new abilities to go along with 🎁 Read more about this in our blog post and learn how you can leverage the assistant to get more done, and quicker! 😄
Blog Post: https://supabase.com/blog/supabase-ai-assistant-v2
Link: https://supabase.com/project/_
PR: https://github.com/supabase/supabase/pull/30523
## Cron#
![](https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flaunch-week-13%2Fday-3-supabase-cron%2Fthumb.jpg&w=640&q=100)
Create recurring jobs to run SQL snippets, or call database functions, Supabase Edge Functions, and even remote webhooks with our new Postgres Module, Cron! Supabase Cron is built on the powerful `pg_cron` extension by the team at Citus Data, and we appreciate the Citus Data for generously licensing their extension with the OSI-compatible PostgreSQL license, allowing us to support existing tools wherever possible. 💪🏻
Blog Post: https://supabase.com/blog/supabase-cron
Link: https://supabase.com/dashboard/project/_/integrations
PR: https://github.com/supabase/supabase/pull/29291
## Queues#
![](https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flaunch-week-13%2Fday-4-supabase-queues%2Fthumb.png&w=640&q=100)
Process and manage asynchronous tasks with Supabase Queues! This is a Postgres-native, durable Message Queue with guaranteed delivery, improving the scalability and resiliency of your applications, and it's designed to work seamlessly with the entire Supabase platform. Similarly to Cron, Supabase Queues is built on the `pgmq` extension by the team at Tembo, and we appreciate the Tembo team for licensing their extension with OSI-compatible PostgreSQL license as well! 🙏
Blog Post: https://supabase.com/blog/supabase-queues
Link: https://supabase.com/dashboard/project/_/integrations
PR: https://github.com/supabase/supabase/pull/30300
## Restore to a new project#
You can now copy data easily from an existing Supabase project to an entirely new and independent one! This has been a well requested functionality and we're happy to share that it's finally possible to do so via the dashboard 🙂 Read more about this in our blog post, or in our documentation 🙏
Blog Post: https://supabase.com/blog/restore-to-a-new-project
Docs: https://supabase.com/docs/guides/platform/backups#restore-to-a-new-project
Link: https://supabase.com/dashboard/project/_/database/backups/restore-to-new-project
PR: https://github.com/supabase/supabase/pull/30325
## Other bug fixes and improvements#
Table Editor
  * Fix rendering of OID cell types causing a client crash (PR)


### Slack V1 OAuth Provider Deprecated in favour of Slack (OIDC)
Dec 1, 2024
Dear Users,
Slack has deprecated their existing v1 API and will fully sunset the API over the next two years. This means that Slack Applications using the v1 `Slack (Deprecated)` provider will stop functioning if no action is taken. In turn, Supabase Auth users using the `Slack (Deprecated)` provider will also not be able to sign in via the Slack OAuth provider if no action is taken.
![image](https://github.com/user-attachments/assets/eca053a4-72ac-4b4f-aca4-1ef97362a2ed)
We’ve introduced a new replacement OAuth provider named “Slack (OIDC)” which supports the latest Slack API and will send out an email to affected users next week with instructions on how to migrate.
To migrate your authentication system, you'll need to:
  1. Create a new Slack Application in your Slack dashboard
  2. Update your credentials in the Supabase Dashboard by switching from the deprecated `Slack (Deprecated)` provider to the new `Slack (OIDC)` provider. You can find the provider in your project under Authentication > Providers > Slack (Deprecated)
  3. Update your code to use the new provider in all OAuth calls, like this:


`
1
const { data, error } = await supabase.auth.signInWithOAuth({
2
  provider: 'slack_oidc',
3
 })
`
  1. If you are using the Supabase CLI , you will also need to update your `config.toml` to use `[auth.external.slack_oidc]` in place of `[auth.external.slack_oidc]`. See the local development docs for a detailed example.


Refer to our documentation for further details
Further configuration of the deprecated Slack provider will not be possible past **15th Jan 2025** as we will remove `Slack` provider from the dashboard then. If you need more time to access the configuration page , reach out to us via a support ticket.
Slack will terminate support for Legacy bots and Classic Apps on March 31, 2025 and March 31, 2026 respectively.
Please reach out via support or on the thread if there are any questions or concerns.
### Removal of app.settings.jwt_secret from the database
Nov 22, 2024
# Introduction#
We are removing `app.settings.jwt_secret` from the `postgres` database on 2024/11/22.
This setting has previously been available through our PostgREST integration, and could be accessed using `current_setting('app.settings.jwt_secret')` in SQL.
# Why are we doing this?#
The `jwt_secret` can be used to mint new, custom JWTs and is security sensitive. Supabase limits access to the `jwt_secret` , through both the dashboard and API, to specific roles (owner, admin and developer). Allowing access to this setting directly in the database can allow bypassing of these restrictions.
# What do you need to do?#
If you need the `jwt_secret`, it can be retrieved through the Supabase dashboard.
If you are using the `app.settings.jwt_secret` in SQL, you will need to update your function to retrieve this value from Vault.
`
1
select vault.create_secret('JWT_SECRET', 'app.jwt_secret', 'The jwt secret');
23
-- retrieve the value, this replaces select current_setting('app.settings.jwt_secret')
4
select decrypted_secret 
5
  from vault.decrypted_secrets 
6
  where name = 'app.jwt_secret';
`
Also, please consult the changelog entry for Asymmetric Keys to understand the coming changes to `jwt_secret` and how keys at Supabase are changing.
### Dashboard Updates [04/11/24 - 18/11/24]
Nov 18, 2024
## Table Editor Performance Improvements#
We've set aside some time to look into improving the performance of the Table Editor over the past few weeks, in particular shortening both perceived and actual loading times as you navigate around the Table Editor. This all comes together in several PRs as we explored from 2 angles:
  * Optimizing the queries that are firing behind the scenes by removing redundant sections + minimise waterfall requests
  * Introducing prefetching behaviours as your mouse cursor goes through the list of tables to have the tables' contents ready by the time you open it in the UI


Performance improvements have always been a consistent topic with the team, and we don't intend to stop here! Hopefully these changes will make it smoother and faster for you to build your project with the dashboard and as always let us know any feedback! 🙂🙏 Just a button away in the top right corner of the dashboard to get your thoughts heard 😄
PRs:
  * Query optimizations Part 1: https://github.com/supabase/supabase/pull/30184
  * Query optimizations Part 2: https://github.com/supabase/supabase/pull/30295
  * Prefetching on the table editor: https://github.com/supabase/supabase/pull/29987
  * Prefetching on the home page: https://github.com/supabase/supabase/pull/30317


Link: https://supabase.com/dashboard/project/_/editor
## Other bug fixes and improvements#
Table Editor
  * Simplified header when rows are selected (PR)
  * Allow exporting of data on tables that are protected (PR)


Authentication
  * Fixed provider "Enabled" state when viewing user details if user's provider is LinkedIn (PR)
  * Sorting users on a column will shift users with NULL values on that column to the bottom (PR)
  * Fix "Last signed in at" column showing up as "Waiting for verification" on subsequent pages as page is scrolled down (PR)


Storage
  * Add ability to toggle image transformations from settings (PR)


### `supabase-js` release candidate `2.46.2-rc.3` incoming types inferences for PostgREST fixes and feedbacks
Nov 6, 2024
🚀 **Announcement:** We’ve just released `supabase-js` version `2.46.2-rc.3`, which resolves several type errors in the PostgREST client.
### Notable issues resolved:#
  * https://github.com/supabase/postgrest-js/issues/523
  * https://github.com/supabase/supabase-js/issues/943
  * https://github.com/supabase/postgrest-js/issues/450
  * https://github.com/supabase/postgrest-js/issues/546
  * https://github.com/supabase/supabase-js/issues/930


We’d love your feedback to ensure everything runs smoothly!
### **Important Notes:** #
This update _might_ require regenerating your database types. You can do this via the Supabase CLI (≥v1.207.8) or the dashboard. For instructions, check out our guide here.
### **Potential Issues** #
This version introduces stricter alignment between runtime behavior and type inference. As a result, some types might appear "broken" but are actually being corrected.
The main changes to be aware of:
  1. The result of an embedding now correctly infers a single object or an array based on the relationship.
  2. The result of an object embedding now more accurately identifies whether the result can be `null`.


Before reporting a bug, please double-check that the inferred types are truly incorrect based on your query and database schema.
### **Bug Reporting:** #
If your project is hosted on Supabase, please open a support ticket here and check "Allow Supabase Support to access your project temporarily." This will enable us to investigate your database types directly.
Alternatively, you can open an issue on GitHub. Please include:
  1. The generated `Database` type used to instantiate the client (e.g., `createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)`). If possible a minimal `SQL` declaration resulting in such `Database` type.
  2. The query where type inference failed (e.g., `.from('which-table').select('which-query')`).
  3. Your TypeScript version (`npx tsc -v`).


### Write Edge Functions in pure JavaScript instead of using TypeScript
Nov 5, 2024
From Supabase CLI version 1.215.0 or higher you can configure a custom entrypoint to your Edge Functions. This can be used to write Edge Functions in pure JavaScript instead of TypeScript.
Save your Function as a JavaScript file (eg: `index.js`) and then update the `supabase/config.toml` as follows:
`
1
[functions.hello-world]
2
# other entries
3
entrypoint = './functions/hello-world/index.js' # path must be relative to config.toml
`
You can use any `.ts`, `.js`, `.tsx`, `.jsx` or `.mjs` file as the entrypoint for a Function.
More details: https://supabase.com/docs/guides/functions/quickstart#not-using-typescript
### Use `deno.json` configuration file in Edge Functions
Nov 5, 2024
Each Edge Function can now have its own `deno.json` or `deno.jsonc` file to manage dependencies. You will need to deploy your functions using Supabase CLI version v1.215.0 or above to make use of this feature.
### How to use `deno.json`#
Create a `deno.json` in your function's folder:
`
1
// supabase/functions/function-name/deno.json
2
{
3
 "imports": {
4
  "lodash": "https://cdn.skypack.dev/lodash"
5
 }
6
}
`
You can now use aliased imports in your source code:
`
1
// supabase/functions/function-name/index.ts
2
import lodash from 'lodash'
`
To test your function locally, run `supabase functions serve`. When you're ready, you can deploy it to hosted platform by running `supabase functions deploy function-name`
For more details, check the guide: https://supabase.com/docs/guides/functions/import-maps#using-denojson-recommended
### Dashboard Updates [21/10/24 - 04/11/24]
Nov 4, 2024
## Spam validation check now added to Auth templates#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fa0dffb5a-6cf5-436e-8364-cbaca61815b1&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We've now added a spam validation checker for your email templates in the Auth section of the dashboard! This is powered by SpamAssassin and is in hopes to assist you with writing email content in a way to avoid being marked as spam by email clients.
You will still be able to save your email templates regardless of whether you're using the built-in SMTP provider or a custom SMTP provider. However, we highly recommend fixing these warnings since they can affect email deliverability.
PR: https://github.com/supabase/supabase/pull/30188
Links: https://supabase.com/dashboard/project/_/auth/templates
## Other improvements and bug fixes#
Authentication
  * Hovering over auth logs for a user will show relative time info (PR)
  * Allow sorting on last signed in at for users (PR)
  * Allow selection of functions that return void for auth hooks (PR)
  * Allow updating of SMS rate limit irregardless of SMS autoconfirm being enabled (PR)


Storage
  * Fix developer roles not being able to update buckets (PR)


Database
  * Fix create index "Select a table" combobox not using search input (PR)
  * Support opening tables in table editor from the schema visualizer (PR)


Logs & Analytics
  * Fix filters for log reports (PR)


### Import NPM packages from private registries in Edge Functions
Oct 29, 2024
Edge Functions now support importing NPM packages from private registries. You will need to deploy your functions using Supabase CLI version v1.207.9 or above to make use of this feature.
### How to use packages from private registries#
Create a `.npmrc` file within `supabase/functions`. This will allow you to import the private packages into multiple functions. Alternatively, you can place the `.npmrc` file directly inside `supabase/functions/function-name` directory.
Add your registry details in the `.npmrc` file. Follow this guide to learn more about the syntax of npmrc files.
`
1
@myorg:registry=https://npm.registryhost.com
2
//npm.registryhost.com/:_authToken=VALID_AUTH_TOKEN
`
After that, you can import the package directly in your function code or add it to the `import_map.json` (https://supabase.com/docs/guides/functions/import-maps#using-import-maps).
`
1
import MyPackage from "npm:@myorg/private-package@v1.0.1"
23
// use MyPackage
`
To test your function locally, run `supabase functions serve`. When you're ready, you can deploy it to hosted platform by running `supabase functions deploy function-name`
### Dashboard Updates [07/10/24 - 21/10/24]
Oct 21, 2024
## Disk size usage section under organization settings#
![Screenshot 2024-10-13 at 03 21 37](https://github.com/user-attachments/assets/2a20a674-3b83-4463-b5c4-be008f1a3dcd)
We've added a new disk size section for paid plans to give a quick overview of each project under the organization and their respective disk sizes for better visibility over the corresponding charges. This is only an initial iteration for this UI, we do plan to add historical statistics and more to improve visibility and transparency over what you're using and what you're paying for 🙂
PR: https://github.com/supabase/supabase/pull/29862
Link: https://supabase.com/dashboard/org/_/usage
## Bug fixes and other improvements#
Table Editor
  * Fix views filtering in table editor for local dashboard (PR)
  * Fix exporting a table that contains columns of enum array types to CSV (PR)


SQL Editor
  * Fix snippets not loading for local dashboard (PR)


Authentication
  * Support searching by properties when viewing a user's raw JSON (PR)


### Improved docs information architecture
Oct 9, 2024
We improved the information architecture (IA) on our docs site.
## Why?#
We’d outgrown the IA! As we added more features and guides, some sections grew to contain a miscellaneous collection of things that don’t belong together. They just had no better place to go.
With the new IA, it should be easier to find what you’re looking for.
## Summary of changes#
  * Two top-level menus, **Build** and **Manage** , to replace the old **Build** menu
  * **Build** menu: 
    * **Local development / CLI** is now primarily about local dev, CI/CD information has been moved to **Deployment**
    * Information on both Vercel and Supabase integrations now moved to **Integrations** section
    * New **Deployment** section covers everything needed to get your changes onto hosted Supabase (including branching, Terraform, CI/CD, and production checklists)
  * **Manage** menu: 
    * **Platform management** (formerly “Platform”) trimmed down to contain information about configuring your Supabase platform (including account management, project permissions, and billing)
    * New **Monitoring and troubleshooting** section contains troubleshooting guides and information on logging and telemetry


### Dashboard Updates [23/09/24 - 07/10/24]
Oct 7, 2024
## Improved users management UI#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F59be9f0e-30ad-4eeb-aa99-cafc6f0b83e5&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
One of our oldest pages on the dashboard has finally gotten an upgrade! 😄 We're taking the first steps towards a pattern of visualizing table data with a data grid, with the Auth users page being our first contender. Couple of stuff that we'd love to highlight that were improved and introduced:
### Click on users to grab more details about them in a side panel (PR)#
![Screenshot 2024-10-07 at 11 55 24](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F1393bbe2-ec47-4bef-a7a4-17ce133b060b&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
### Added a ban functionality within the danger zone at the bottom of the panel#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fce7db424-5caa-457a-9180-2e999b180a8e&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
### Search now also supports filtering for providers (PR)#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fde943a7e-02ae-4de7-a0a6-5f7b4b1d70d7&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
### Columns can be sorted based on your preference (and will be persisted in local storage)#
https://github.com/user-attachments/assets/3f7890ca-04cf-4cb9-8046-63b3db9b6eb9
### You can also now toggle column visibility, as well as apply sorts on columns#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fa3009aac-e8d1-4a4a-9744-8af9d0375822&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
### View authentication logs of the user right from the panel (PR)#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F87a6fe4c-f3e4-4fb1-a7be-80ef1e07270d&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
These tooling should now allow you to customize the auth users view that best fits your workflow, and we definitely hope to keep making this better so as always, feel free to drop us any feedback good or bad, any bugs via the widget at the top right corner of the dashboard 🙂 We say this all the time and its a promise that we've kept - we look at _every_ feedback that comes in 🤙
PR: https://github.com/supabase/supabase/pull/29105
Link: https://supabase.com/dashboard/project/_/auth/users
## Timestamp helper for Logs Collections#
https://github.com/user-attachments/assets/80541e0a-4571-4193-ab9e-8d9af4b63d55
Hovering over the date/time string in the left most column of a row in any logs collection will now show a helper tooltip that will depict the time in 4 different formats: UTC, Local TZ, Relative time, and raw numerical timestamp. This will hopefully help with interpreting timestamps much easier and faster and alleviate any confusion around timezones! 🙂🕰️ We're also planning to use this pattern across the whole dashboard too wherever time data is involved 💪🏻
PR: https://github.com/supabase/supabase/pull/29530
Link: https://supabase.com/dashboard/project/_/logs/edge-logs
## Other bug fixes and improvements#
General
  * Added breakdown of security issues dropdown on project home page (PR)


Organization Settings
  * Fixed tooltip not showing up for users with project scoped roles, to show which projects they have roles for (PR)


Table Editor
  * Autofocus on search input when navigating to table editor (PR)
  * Improved column type dropdown with searching for types (PR)
  * Improved datetime editing in table editor grid + support for setting these column values to NULL (PR)


Edge Functions
  * Added validations for adding/removing secrets on SUPABASE_ prefixed secrets (PR)


Reports
  * Added database connections charts to database reports (PR)


### XHTML responses are only allowed with a Custom Domain enabled
Oct 1, 2024
## Summary#
Returning XHTML responses from the Data APIs and Edge Functions is now only allowed if a Custom Domain is being used.
Additionally, you can now serve HTML and XHTML responses from the Storage service as well, if a Custom Domain is being used.
If your use-case requires serving these content types, you can continue to do so by using a Custom Domain add-on.
Affected projects have been notified in advance.
## Background#
HTML responses (i.e. content-types that can be directly rendered by browsers) were historically disallowed for projects not using a custom domain, in order to prevent abuse on the shared domains used for provisioning Supabase projects. This change updates this behavior to process XHTML responses in the same manner, due to the same rationale.
### Supabase Platform Access Control: Project Permissions Breaking Changes on October 15, 2024
Sep 24, 2024
 _These breaking changes are rolling out on October 15, 2024 and affects only organizations on the Enterprise plan that have implemented project permissions with members assigned the Developer role._
Supabase launched new granular access control for Enterprise organizations so that its members are given access to specific projects instead of the entire organization. You can check out our Launch Week 12 announcement to learn more.
We recently re-evaluated the access that the **Developer** role has and decided to implement changes to restrict them on a couple of resources to improve your project's security.
On October 15, 2024, we will turn off certain access that the Developer role currently has to your project's resources. The following table is to illustrate all of the breaking changes that will be going into effect:
Resource| Action| Developer| Read-Only  
---|---|---|---  
**API Configuration**  
JWT Secret| Generate new| ✅ → ❌| ❌1  
API Settings| Update| ✅ → ❌| ❌1  
**Auth Configuration**  
Auth Settings| Update| ✅ → ❌| ❌1  
Advanced Settings| Update| ✅ → ❌| ❌1  
**Storage Configuration**  
Upload Limit| Update| ✅ → ❌| ❌1  
S3 access keys| Create| ✅ → ❌| ❌1  
Delete| ✅ → ❌| ❌1  
**Edge Functions Configuration**  
Secrets| Create| ✅ → ❌| ❌1  
Delete| ✅ → ❌| ❌1  
**Authentication**  
Providers| Update| ✅ → ❌| ❌1  
Rate Limits| Update| ✅ → ❌| ❌1  
Email Templates| Update| ✅ → ❌| ❌1  
URL Configuration| Update| ✅ → ❌| ❌1  
**Logs & Analytics**  
Events Collections| Create| ✅ → ❌| ❌1  
Update| ✅ → ❌| ❌1  
Delete| ✅ → ❌| ❌1  
Warehouse Access Tokens| Create| ✅ → ❌| ❌1  
Revoke| ✅ → ❌| ❌1  
You can learn more about our Platform Access Control here: https://supabase.com/docs/guides/platform/access-control.
If you have any questions or concerns please contact support.
## Footnotes#
  1. Role's permission to the resource and action will remain the same. ↩ ↩2 ↩3 ↩4 ↩5 ↩6 ↩7 ↩8 ↩9 ↩10 ↩11 ↩12 ↩13 ↩14 ↩15 ↩16 ↩17 ↩18


### Dashboard Weekly Updates [16/09/24 - 23/09/24]
Sep 23, 2024
## Deployment of up to 5 read replicas now supported on larger compute sizes#
Previously, each project could only deploy up to 2 read replicas, but we're now raising this limit to 5 for projects on larger compute sizes (XL and above).
PR: https://github.com/supabase/supabase/pull/29250
Link: https://supabase.com/dashboard/project/_/settings/infrastructure
## Catch queries that contains an update query without a where clause in SQL Editor#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fb560b611-a545-4259-9c4d-e9d6ddd6cc97&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
Another effort to safeguard against running queries with unintended side effects - this time, we're checking for `UPDATE` queries without a `WHERE` clause - this check kicks in prior to running the query. We've also consolidated this warning with our existing warning against destructive operations to catch both cases if they exist in the same query.
PR: https://github.com/supabase/supabase/pull/28458
Link: https://supabase.com/dashboard/project/_/sql
## Other bug fixes and improvements#
General
  * Support querying a table via CMDK by opening the SQL editor (PR)
  * Update Supabase Assistant with GPT 4o from 3.5 (PR)


Table Editor
  * Improve pagination input field, by only navigating to page on Enter (PR)


SQL Editor
  * Fix inability to share queries that are under favorites (PR)
  * Fix moving snippets into folders (PR)


Storage Explorer
  * Fix to prevent continuously retrying when a file of an invalid mime type is uploaded (PR)


Auth
  * Support searching by UID (PR)
  * Add confirmation modal when closing tab with unsaved changes on templates page (PR)
  * Support adding/removing multiple redirect URLs (PR)


Database
  * Fix index page crashing when creating an index on a table with no columns (PR)


Logs Explorer
  * Layout shift and scroll fixes (PR)
  * Prevent use of WITH, ILIKE or wildcards (PR)


### Projects on XL and larger compute add-ons can now create up to 5 Read Replicas.
Sep 22, 2024
The initial launch of Read Replicas allowed for up to two Read Replicas per project.
The limit for projects on XL compute add-ons and larger has now been raised to 5 Read Replicas per project.
Projects on compute add-ons smaller than XL are still allowed up to 2 Read Replicas per project.
### Supabase Auth: Changes to default email provider
Sep 18, 2024
As our user base has grown, we are taking steps to make sure we are able to continue to provide a safe, secure, robust free plan experience. To ensure that email-based auth continues to work for all users on Supabase, we're making changes if you're using the default email provider. This allows us to continue to offer our default provider in a more sustainable and resilient manner.
For maximum flexibility and control over your auth emails, we suggest one of the following:
  * Use a custom SMTP provider instead
  * Send emails through your own email provider using the email send hook


If you still want to use the default email provider, these are the changes being planned:
  * **Email template customization will be allowed and customized email templates will not be reverted to default.**
  * **26th September** : If you do not have a custom SMTP server set up, emails can only be sent to email addresses in your project's organization. So for example, if your organization has the following members: person-a@example.com, person-b@example.com and person-c@example.com , this means that email messages from Auth will only be sent to these addresses.


These measures are taken to prevent abuse to our shared SMTP service. In the future, we may consider increasing the email rate limits once we see a drop in abuse.
## Frequently asked questions#
### Why such a short notice?#
Supabase uses a third-party email sending provider that has mandated we reduce email abuse significantly or they will be forced to block all email sending. A tragedy of the commons.
### Can't Supabase switch to a different email sending partner?#
Yes, but we would run into the same issues. All email sending services are required to monitor abuse and force their customers to follow the same rules.
### Can't Supabase send emails on their own, without a third party?#
Not really. You can't just send email on the web today without investing a lot of money and time (unblocking port 25, keeping IP addresses out of spam lists, etc.). This is not our core competency and do not have plans to start doing this today.
### How long does it take to set up a custom SMTP provider?#
Fortunately this is very easy. You can use any email sending service for this, really popular ones include:
  * Resend
  * AWS SES
  * Postmark
  * SendGrid
  * Zepto Mail
  * Brevo


All you need to do is create an account, verify your sending domain and finally input the SMTP username and password in the Auth settings page.
### What if I turn off email confirmations, can I use it then?#
_Currently this behavior is not supported and we'll be rolling out a fix for it during the first week of October._
Confirming email addresses is where most of the email message activity for a project originates. Turning it off can be a viable option for some projects that are still in the early testing, development or experimental phase.
Be aware that even if you turn off email confirmations the forgot password or reset password flows in your app continue to function. They also send messages, and starting 26th September those messages will be delivered only to the members of the Supabase organization that owns the project. All other end-users will get a message similar to "Email address not authorized." Effectively, the forgot password / reset password flow will be broken for your project.
### What if I want just username + password authentication and using `<username>@<fakedomain>` instead?#
Please don't do this. Part of the reason why we were forced to lock down these changes is bounced emails, probably from use cases like this.
Official username + password support is going to be made available in the coming year, and until then:
  * Use a real domain, that you control
  * Send emails to that domain, so set up a receiving server


But the best thing to do is:
  * Set up a Send Email Auth Hook that does nothing. You don't even need to use a server or an Edge Function. Just define a Postgres function that just does nothing.


### I'm using the admin API to generate links, and not really sending using Supabase's default provider. Do I need to do anything?#
_All projects using generate link via the admin API without custom SMTP have been patched to allow the behavior. We still strongly urge those customers to set up custom SMTP regardless._
Just because you're mostly using the admin API to generate links to send in custom email messages, doesn't mean that the Auth server is not configured to use Supabase's shared SMTP service. Your Auth API can be called from your frontend at any time, especially in edge cases such as to handle forgot password or other similar flows, which you may not be handling via the admin API.
Therefore we urge all customers that do use the admin API to set up a custom SMTP sending service regardless.
If you are not interested in setting this up, you can instruct the Auth server to ignore all emails (pretend it's sending them) by configuring a Send Email Auth Hook as a Postgres function that does nothing.
### How can I disable the warning banner?#
You can disable the warning banner by setting up a custom SMTP provider , or, if your project doesn't use email at all, by disabling the email provider.
## Updates#
### 20th September 2024#
**Email template customization will be allowed and customized email templates will not be reverted to default.**
Team has decided that restricting email template customization is not viable and a big breaking change. We may need to do go back to this in the future if abuse continues and our other measures like allowing projects to only send messages to authorized email addresses do not improve the situation. We continue to urge all customers regardless of plan that use the default SMTP service for live applications to move to a custom SMTP provider as soon as able.
  * ~~**20th September** : Email template customization will no longer be possible without setting up a custom SMTP provider. Email templates already customized can still be customized until 24th September.~~
  * ~~**24th September** : Projects without a custom SMTP provider will have their custom email templates returned back to the default ones from Supabase. This means that any auth emails sent out from your project will use the default email template.~~


### Supabase Auth: Asymmetric Keys support in 2025
Sep 13, 2024
> Update (19th December 2024): Asymmetric Keys will not be released in Q4 2024 because it needs further development work. We will finalize the timeline and announce the updated timeline in Q1 2025.
> Update (2nd October 2024): We have decided to push back the launch from 7th October 2024 to Q4 2024 to roll this out meticulously; we want to perform exhaustive security checks and spend more time dogfooding internally.
# Asymmetric key changelog#
# Introduction#
We are introducing asymmetric key cryptography to Supabase Auth in **Q4 2024~~on 7th October 2024~~**. This will be provided as an additional option to the JWT secret currently shown in the JWT settings page.
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F5ce813d3-7d10-41b7-9fc6-5eb2cb4896bf&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
# Why are we doing this?#
Supabase Auth has always been using a symmetric secret (known as the JWT secret) for signing and verifying JWTs. While this is simple and convenient (since the same secret is used for both signing and verifying), it presents the following problems:
  1. **Extra network request required to verify the user’s JWT with the symmetric secret.** Currently, one needs to make a request to Supabase Auth in order to verify the user’s JWT or copy the JWT secret into their environment. While the latter suggestion improves performance, it can result in security implications if the secret is accidentally leaked, which requires all your keys to be rolled.
  2. **Difficult to roll with zero downtime.** Since the symmetric secret cannot be shared publicly, developers need to wrangle with rolling the secret across their environments while ensuring that the new secret is used.


# Benefits of using asymmetric keys#
Asymmetric keys rely on public / private key cryptography, which means that the private key is only used for signing, while the public key is only used for verifying. This solves the above problems in the following way:
  * Usage of asymmetric key cryptography rather than a shared symmetric secret for signing and verifying JWTs. Since asymmetric keys don’t use a shared secret, there is less risk of the secret being leaked.
  * Faster JWT verification times since there’s no need to make a network call to Supabase Auth via `getUser()` . The public key can be used for verifying the JWT. Note that adding the symmetric secret to your server-side environment to verify the JWT also has the same effect but is potentially less secure since there is an increased risk of the secret being leaked if it is used in multiple applications.
  * Zero-downtime key rotation. Public keys can be exposed in a JSON Web Key Set (JWKs) format, which allows any one of them to be used for verification. When the asymmetric key is rotated, we can still keep the previously used public key in the JWKs endpoint to verify existing JWTs. New JWTs will be signed by the new asymmetric key.


These will include the following changes:
  * A public JWKs endpoint for retrieving the public JWK to verify JWTs. This will be exposed through the `https://<project_ref>.supabase.co/auth/v1/.well-known/jwks.json` endpoint. The symmetric secret will not be exposed through this endpoint for security reasons.
  * A new method called `getClaims()` , which handles verifying the JWT and returning the claims in it.
  * Ability to download the public keys in different formats through the dashboard (e.g. PEM, JWKs).


## Migration to Asymmetric JWTs#
New projects that are created after **1st May 2025** will be created with an RSA asymmetric key by default. Existing projects can choose to start using asymmetric keys by doing the following:
  1. Ensure that you are using the new API keys.
  2. Update all your clients to use at least supabase-js version x.x.x (the version number will be updated closer to the release date). In this version, we are introducing a new method called `getClaims` which handles verifying both symmetric and asymmetric JWTs: 
     * Example successful response payload for `getClaims()`
`
1
{
2
 "data": {
3
	 "iss": "https://projectref.supabase.co",
4
	 "sub": "565dafb5-fd66-4274-9c37-f0ff720f5637",
5
	 "aud": "authenticated",
6
	 "exp": 1824717902,
7
	 "iat": 1724717902,
8
	 "email": "foo@example.com",
9
	 "phone": "",
10
	 "app_metadata": {
11
	  "provider": "email",
12
	  "providers": ["email"]
13
	 },
14
	 "user_metadata": {
15
	  ...
16
	 },
17
	 "role": "authenticated",
18
	 "aal": "aal1",
19
	 "amr": [
20
	  {
21
	   "method": "oauth",
22
	   "timestamp": 1724717902
23
	  }
24
	 ],
25
	 "session_id": "479c1cbf-bd52-42d4-894f-1519f39b3241",
26
	 "is_anonymous": false
27
 },
28
 "error": null
29
}
`
     * Using `getClaims()` to verify the JWT
`
1
import { createClient } from 'supabase/supabase-js'
23
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
45
// previously, using getUser() requires making an 
6
// additional network request to Supabase Auth to verify the JWT
7
// 
8
// const { data, error } = await supabase.auth.getUser()
910
// getClaims() will always return the JWT payload if the JWT is verified
11
// If it's an asymmetric JWT, getClaims() will verify using the JWKs endpoint.
12
// If it's a symmetric JWT, getClaims() calls getUser() to verify the JWT. 
13
const { data, error } = await supabase.auth.getClaims(jwks)
`
  3. Create an asymmetric key through the dashboard. At this point the symmetric JWT moves to a `Previously Used` state. Existing JWTs signed with the symmetric JWT continue to be valid, but new JWTs are signed via the asymmetric JWT. Note: The UI mockup below is subjected to change and is just meant to illustrate the different possible states of a signing key.


![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fafe92146-84f9-471d-b51d-bd0050824af7&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
  1. After the JWT expiry period, you can safely revoke the “Previously Used” symmetric JWT, since new JWTs will now be signed with the asymmetric key.


# Frequently Asked Questions#
  * What do I need to do before I can start using asymmetric keys in Supabase Auth? 
    * See migration section above for the detailed steps
  * Can I create a symmetric key after I create an asymmetric key? 
    * Yes. You will still be able to create a new symmetric key under the JWT settings page in the dashboard. New projects will be created with an asymmetric key by default on **1st May 2025**.
  * Will the private asymmetric key be exposed? 
    * No. Only the public keys will be exposed in various formats (e.g. PEM, JWKs) since those are needed for verification.
  * Will I be able to bring my own private key? 
    * Yes, you can bring your own private key as long as it complies with the key types allowed.
  * What key types can I use to create asymmetric JWTs? 
    * By default, asymmetric keys will be created with RS256 by default. You can optionally choose to use ECC or Ed25519. ECC keys are more performant, but not as widely supported as RS256. You can also fallback to HS256 (symmetric keys).


### Upcoming changes to Supabase API Keys (new & restored projects affected from 1st May 2025, no breaking changes for existing projects until 1st October 2025)
Sep 12, 2024
> Update (19th December 2024): Changes to Supabase API Keys will not be released in Q4 2024 because it needs further development work. We will finalize the timeline and announce the updated timeline in Q1 2025.
# Introduction#
We’re changing the way API keys work in Supabase to improve your project’s security and developer experience and plan to roll out these changes **Q4 2024**. Rest assured that the current API keys in your existing projects will continue to work for another year until **1st October 2025** during the transition.
We’ll contact you when we launch the new API keys, and when we do, no immediate action is required. However, we strongly recommend that you migrate your project’s existing API keys for the new set when they are introduced. Updating to use the new API keys is a quick and painless process and can be as simple as a change in environment variable and take just a few minutes.
# Timeline#
> **Update (2nd October 2024):** We have decided to push back the launch from 7th October 2024 to Q4 2024 to roll this out meticulously; we want to perform exhaustive security checks and spend more time dogfooding internally.
**Key Dates**| **Description**| **User Action Needed**  
---|---|---  
**Q4 2024~~7th October 2024~~**|  Introduction of new API keys.New projects will automatically generate **both** new API keys and legacy API keys to help ease the transition.Existing projects can continue to use the legacy API keys and can opt in to use the new API keys by manually generating them.| No immediate action needed. We strongly recommend that you migrate to use the new API keys.  
**1st May 2025**|  We will start sending you monthly reminders to migrate off legacy API keys and start using the new keys.New projects will be created with only new API keys.Projects restored from **1st May 2025** will no longer be restored with the legacy API keys.| You are highly encouraged to migrate off to use the new API keys before this date since paused projects that are restored risk being broken as they won’t have the legacy keys.  
**1st October 2025**|  Legacy API keys will be deleted and removed from the Docs / Dashboard.| You have to migrate to use the new API keys by this point or your app will break.  
# Why are we doing this?#
Currently there is a tight coupling between API keys and the JWT secret which presents a few challenges:
  1. **Difficult to revoke the`service_role` or `anon` key.** Imagine if someone in your Supabase organization leaves the team, and you want to roll your project’s JWT secret to revoke their access? Or you accidentally commit the `service_role` key into your version control system and need to roll it?
If either of these keys gets leaked, the developer’s only option is to roll the JWT secret by generating a new one. When the JWT secret is rolled, all authenticated users would be logged out, clients using the older anon and service keys would break. Realistically, there is no way to roll the JWT secret without downtime.
  2. **Sub-optimal developer experience to create an API key with a custom role.** Developer needs to sign a JWT with a long expiry time and their custom role using the secret.


The introduction of new API keys solves the above problems by allowing the developer to:
  * roll individual API keys
  * roll the API keys without logging out their users
  * create custom API keys easily


### **API Key changes** #
These are the planned changes for the API keys:
  * `anon` key will be renamed to `publishable` key and the `service_role` key will be renamed to `secret` key. `publishable` api keys are meant to be used along with Supabase Auth users and `secret` api keys are for use from the server side and bypasses all row level security policies. We chose to use `publishable` and `secret` to align with stripe’s terminology and preferred it to terms like `public` and `private` since those could be confused with public / private key cryptography when we introduce asymmetric JWTs to Supabase Auth.
  * New API keys will look like regular strings instead of JWTs:
**Legacy API Keys**| **Equivalent New API Keys**  
---|---  
`anon` key: `eyJhbGciOiJIUzI1...FDsBGn0iqSmL28Zeg8f0`| `publishable` key: `sb_publishable_123abc`  
`service_role` key: `eyJhbGciOiJIUzI1...SEVEyZQNhffCoSj4P5A`| `secret` key: `sb_secret_123abc`  
  * With the new API keys, it will be possible to revoke individual API keys and without revoking the JWT secret. Once the legacy API key is revoked, it won’t be possible to restore them.
  * New projects will be created with both new and legacy API keys until **1st May 2025.** New projects created after this date will only be created with new API keys.
  * Projects that are restored after **1st May 2025** will not be restored with legacy API keys.
  * Legacy API keys will no longer work for all projects after **1st October 2025.**


# Migration to the new API keys#
  1. If you want to use the new API keys, all you need to do is to swap out your keys for the new ones:

**Legacy API Keys**| **Equivalent New API Keys**  
---|---  
`anon` key| `publishable` key  
`service_role` key| `secret` key  
  1. Update your `.env` file to contain the new API key


`
1
# the legacy anon key
2
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...w6PYobnC7Ep7EnDd9DG25qBFDsBGn0iqSmL28Zeg8f0 
34
# the new publishable key
5
SUPABASE_PUBLISHABLE_KEY=sb_publishable_123abc
`
  1. Instantiate the supabase client with the new API Keys.


`
1
import { createClient } from 'supabase/supabase-js' 
23
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
`
  1. After all your clients have been instantiated with the new API keys, you can revoke the legacy keys from the dashboard.


# Frequently Asked Questions#
  * What is the timeline for the migration? 
    * See "Timeline" section above
  * My app is deployed through Vercel / Netlify, how do I use the new API keys? 
    * If you’re using Vercel or Netlify, changing the keys in your environment will only be reflected when you trigger a new deployment.
  * I only connect to the database via the connection string — do I need to worry about this at all? 
    * No, unless you use the supabase client libraries to make queries to the database.
  * How do we do custom claims? 
    * Currently, users have to manually create a new key with their custom claims using the JWT secret provided.
    * There will be support for creating new API keys with custom properties in the dashboard and management API.
  * What benefit do we get from migrating to use the new API keys? 
    * You can revoke an individual key in the event of a compromise
    * You can revoke keys without logging out existing users
    * You don’t have to deal with minting a new JWT using the JWT secret if you want to add custom claims to an API key.
  * What is the interaction between the `apikey` header, the `Authorization` header and the underlying Postgres role used? 
    * The new API keys are just regular strings instead of JWTs.
    * By default, secret API keys assume the `service_role`. When creating the new secret API keys, you can override this behavior and assign a custom `role`. Downstream services like postgREST and storage assume this role when they are called with this API key.
    * By default, publishable API keys default to the `anon` role. When a user JWT is passed in via the `Authorization` header, the role claim in the JWT is used instead. You cannot map publishable keys to custom roles when creating the key, like you will be able to do with secret API keys.


![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fce8698f8-c279-456b-8be2-1a81790ac2c1&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
### Dashboard Weekly Updates [02/09/24 - 09/09/24]
Sep 12, 2024
## Schema Visualizer nodes are now persisted#
![image](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F55e18a2a-096a-4e88-b0d1-48ca0856a9a8&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
This was yet another request that we've commonly heard from everyone and we're taking a first step to making this happen 😄 Position of the nodes will now be stored within local storage so that you won't have to re-position them each time you land on this page. We've also added a button to help arrange the nodes automatically if that might be preferred!
Note that if you add new tables to the schema however, the node positions will be defaulted to a certain position that may overlap with other nodes - we're definitely looking into how we can make that better so that new nodes can be easily identified (and then shifted around to your liking 🙂)
PR: https://github.com/supabase/supabase/pull/29136
Link: https://supabase.com/dashboard/project/_/schemas
## Other improvements and bug fixes#
General
  * Minor improvements to layouts and buttons to ensure their visibility on smaller screens (PR)
  * Fix project status filter on home page to only show active projects if only the active checkbox is checked (PR)


Table Editor
  * Fix client crash when creating an empty table with no columns (PR)
  * Fix handling of of large JSON / text fields in the side panel text editor (PR)


SQL Editor
  * Add client side validation for query size (max 1MB) (PR)
  * Couple of fixes around adding a new folder with the same name as an existing one (PR)


Database
  * Update Stripe Wrapper with more tables (PR)
  * Remove docs button for database extensions that have no documentation yet (PR)


### Edge Functions are now Deno 1.45 compatible
Sep 10, 2024
Supabase Edge Runtime version 1.57 is compatible with Deno 1.45.
Supabase's hosted platform was upgraded to use this release when serving Edge Functions starting last week.
If you're using Supabase CLI for local development latest stable release 1.192.5, it adds compatibility for Deno 1.45.
## How do I find which version of Edge Runtime I'm running?#
### Supabase CLI (local)#
When you run supabase functions serve, it should show the current version of Edge Runtime used (and its Deno compatibility)
`
1
> supabase functions serve
23
Setting up Edge Functions runtime...
4
Serving functions on http://127.0.0.1:54321/functions/v1/<function-name>
5
Using supabase-edge-runtime-1.58.2 (compatible with Deno v1.45.2)
`
### Hosted Platform#
You can check the served_by field in log events to see which Edge Runtime version was used to serve your function.
![Screenshot 2024-06-18 at 7 44 47 PM](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Fassets%2F5358%2F7dbfe2f2-6f8b-4ae8-b19c-7d01ef5c8adc&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We try our best to maintain backward compatibility in these upgrades. If you're experiencing any issues, please feel free to make a support request
### Dashboard Weekly Updates [26/08/24 - 02/09/24]
Sep 2, 2024
## Upgrade your organization directly from our pricing page#
https://github.com/user-attachments/assets/2262d816-0c69-4c58-a6e2-1ce4868122f2
Users who are logged in will now be able to select and upgrade their organization from the pricing page itself when clicking on the Upgrade to Pro / Team plan buttons. This is mainly to help streamline this process so that users can upgrade their existing organizations, and prevent confusions where users end up creating new paid organizations instead.
PR: https://github.com/supabase/supabase/pull/28942
Link: https://supabase.com/pricing
## UI improvements around credit card billing information#
![Screenshot 2024-08-29 at 12 45 11](https://github.com/user-attachments/assets/0af61d92-b063-4a7a-b622-7165cbe7f1ab)
The selected payment method on the billing page is easily missed as you'll need to scroll down before finding it. In particular with outstanding invoices, it may not be obvious that the wrong card (or even expired card) might have been selected as the default. As such we now will
  * Indicate which cards are about to expire (within the current month)
  * Indicate which cards have expired
  * Show the selected payment method, along with a quick link to change it on the invoices page


PR: https://github.com/supabase/supabase/pull/28971
Link: https://supabase.com/dashboard/org/_/billing
## Set payment method as default when adding a new payment method#
![Screenshot 2024-08-27 at 17 59 50](https://github.com/user-attachments/assets/c1c1517b-d28e-4878-9560-6375dd1ea826)
When adding a new payment method, we have now added a checkbox to set the card as default which is toggled on by default. This should resolve a UX issue whereby customers needed to explicitly set the card as default in a separate manual step after adding it.
PR: https://github.com/supabase/supabase/pull/28921
Link: https://supabase.com/dashboard/org/_/billing
## Choose which schemas to share with OpenAI#
![AI assistant schema](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F68056238-937d-4285-bbe4-d973fa4e09e3&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
This mainly applies to wherever the Supabase AI assistant is present in the dashboard (SQL Editor + RLS policies). You can now choose which schemas to share with OpenAI as opposed to sending information from all schemas in hopes to improve the output quality of the assistant by only sharing relevant information for your prompts to the assistant.
Do keep in mind that you'll need to opt in to sending anonymous data to OpenAI prior to doing this 🙂 You may also verify exactly what data is being sent here as well under "Important information regarding opting in"!
PR: https://github.com/supabase/supabase/pull/28594
Link: https://supabase.com/dashboard/project/_/sql/new
## Other improvements and bug fixes#
General
  * Show which is the last sign in method used on login page (PR)
  * Added 3 new regions to spin up projects from: Ohio, Stockholm, Paris, and Zurich (PR)
  * Commands added for cmd+k to search and open snippets in the SQL Editor (PR)
  * Support pasting image (via Cmd/Ctrl + v) in the feedback widget (PR)
  * Use expanding text area for RLS AI assistant for multi line prompts (PR)


Table Editor
  * Save last selected schema, no longer defaults to public schema (PR)
  * Set the correct schema in the schema selector when opening a table via URL directly (PR)
  * Support exporting table data as SQL seed file (PR)
  * Couple of fixes for bugs around composite foreign keys (PR)
  * Improve display of estimated row count for the table if the table has > 50k rows, to emphasize that it's an estimated count (PR)
  * Spreadsheet import now checks column types from imported spreadsheet (PR)


SQL Editor
  * Fix folder name editing where clicking on the input field toggles the folder (PR)
  * Support opening cell value via right click into a side panel for a more detailed view (PR)


Auth
  * "With check" checkbox is toggled on by default for commands that involve a with check expression (PR)


Storage
  * Support searching and sorting buckets (PR)


Logs Explorer
  * Support copying cell content via context menu (PR)


### Dashboard Weekly Updates [26/08/24 - 30/08/24]
Aug 30, 2024
![screenshot-2024-08-30-at-13 18 28](https://supabase.com/_next/image?url=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2F29aec90a-a524-40f3-827c-f469414aa6cd&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
The SQL Editor got an upgrade this week, finally letting you organize snippets into folders!
  * Favourites and Shared snippets are in folders now
  * Organize Private snippets in folders as you like
  * Share snippets with your team as you could before


Link: https://supabase.com/dashboard/project/_/sql/new PR: https://github.com/supabase/supabase/pull/27881
### Other bug fixes and improvements#
**Project compute size badge**
  * See project compute details and upgrade right from the home screen (PR)


**SQL Editor**
  * Update the SQL Editor AI Assistant model to the latest from OpenAI (PR)


### Moving to hourly usage-based billing for databases, based on disk consumption
Aug 23, 2024
**tldr:**
  * **No changes for Free Plan users**
  * **Billing for paid plan organizations will be based on provisioned disk rather than used database space:**
    * Each project starts with 8 GB disk provisioned by default.
    * The first 8 GB of provisioned disk per project is free, then $0.125 per additional GB.
    * Charges are prorated down to the hour, which is advantageous for short-lived projects and branches.
    * Provisioned disk from Read Replicas will also be included in billing.
    * Enables upcoming features for enhanced control over disk and Postgres parameters.


**Timeline**
This change will be rolled out to new customers on **August 26th, 2024** and will be gradually rolled out to existing customers shortly after.
**Changes**
We are adjusting our pricing to offer more flexibility and self-serve for developers wanting to tune their disk and Postgres configuration. For example:
  * Some developers want disks with higher throughput
  * Some developers want to store more than 1GB of WAL (for tools like Airbyte/PeerDB, or adding more read replicas)


To make this available we will start billing for provisioned disk size (rather than database space used). Previously, costs associated with WAL files were not directly billed but also users could not control change `max_wal_size` (default is 1GB).
There is no action needed on your end. You will automatically be transitioned to the new billing model throughout the next couple of weeks. In case there is any change in your monthly bill, we will reach out to you proactively with additional information and give you a grace period to decrease your usage.
For customers on the Free Plan, there will be no changes; the total database space remains capped at 500MB. These adjustments only apply to customers on paid plans. The database disk will continue to autoscale when nearing capacity for paid plan customers.
**Before**| **After (August 26th, 2024)**  
---|---  
**Price**|  $0.125 / GB| $0.000171 / GB-Hr  
Change| We take the average database space used for all projects, independent of how many days/hours you store the files and sum it up.| We will you based on the provisioned disk usage every hour. First 8GB per project are free. Read replicas will also incur disk costs.  
Invoice Item| Your invoices display 'Total Database size'.| Your invoices will display 'Disk Size GB-Hrs'.  
### Example 1: Pro plan org, active for whole month#
In this scenario, an Organization is on the Pro Plan with 3 active projects.
**Usage**
Project| # Days Active| Average Database Space Used| Provisioned Disk| After: Provisioned Disk Size GB-Hrs  
---|---|---|---|---  
Project A| 30| 25 GB| 40.5 GB| 29,160 (720 hours * 40.5 GB)  
Project B| 30| 10 GB| 27 GB| 19,440 (720 hours * 27 GB)  
Project C| 30| 5 GB| 8 GB| 5,760 (720 hours * 8 GB)  
**Total**| **40 GB**| **54,360 GB-Hrs**  
**Billing**
**Before**| **After**  
---|---  
Total Usage| 40 GB| 54,360 GB-Hrs  
Usage Discount (Pro Plan)| (8 GB)| (17,280 GB-Hrs - first 8 GB per project included)  
_**Billable Usage**_| **32 GB**| **37,080 GB-Hrs**  
Price| $0.125 / GB| $0.000171 / GB-Hr  
 _**Total Cost**_|  _**$4.00**_|  _**$6.43**_  
### Example 2: Pro plan org, active for part of the month#
In this scenario, an Organization is on the Pro Plan with 3 active projects.
**Usage**
Project| # Days Active| Average Database Space Used| Provisioned Disk| After: Provisioned Disk Size GB-Hrs  
---|---|---|---|---  
Project A| 30| 9 GB| 12 GB| 8,640 (720 hours * 12 GB)  
Project B| 15| 9 GB| 12 GB| 4,320 (360 hours * 12 GB)  
Project C| 2| 9 GB| 12 GB| 576 (48 hours * 12 GB)  
**Total**|  27 GB| 13,536 GB-Hrs  
**Billing**
**Before**| **After**  
---|---  
Total Usage| 27 GB| 13,536 GB-Hrs  
Usage Discount (Pro Plan)| (8 GB)| (9,024 - first 8 GB per project included)  
_**Billable Usage**_| **19 GB**| **4,512 GB-Hrs**  
Price| $0.125 / GB| $0.000171 / GB-Hr  
 _**Total Cost**_|  _**$2.38**_| **$0.77**  
### Where do I see my disk size?#
You can see your project’s disk size in your database settings (Project Settings > Database).
![Screenshot 2024-07-25 at 09 36 09](https://github.com/user-attachments/assets/f0429333-d65f-4172-bc6c-53569d1ea0a3)
### How can I resize my disk down?#
Your disk size is based on your database space usage. As a first step, you need to identify current database space usage and reduce it. To see your current database space usage, head over to the built-in “Database” project report. Once you have reduced your database space and want to reduce your provisioned disk, you can upgrade your Postgres version through your project settings to automatically rightsize your disk. For further information around disk management and reducing database space, please refer to our docs.
### Is this going to affect my monthly bill?#
If your current disk size is >8GB, this is likely going to impact you. Note that this will be gradually rolled out and you will be notified about the concrete impact on your organization and given a 3-month grace period, which gives you time to right-size your disk and minimize the impact of this change.
### Threshold for transitioning projects to physical backups lowered to 15GB
Aug 19, 2024
Further to earlier discussions, the threshold for transitioning large databases to use physical backups for their daily backups is being lowered to 15GB in the next few days.
Physical backups are more performant, have lower impact on the db, and avoid holding locks for long periods of time. Restores continue to work as expected, but backups taken using this method can no longer be downloaded from the dashboard.
Over the next few months, we'll be introducing functionality to restore to a separate, new database, allowing for the perusal of the backed up data without disruption to the original project.
Please refer to supabase.com/docs/guides/platform/backups#daily-backups-process for additional details.
### Improved invoices and more timely usage data
Aug 8, 2024
Currently, usage data on the invoice breakdown and organization usage page has a 24-hour delay. Starting from **August 26th** , the usage data will have no more of 1 hour delay for new customers. Afterwards, the changes will be rolled out to existing customer gradually. We're also working on additional improvements to provide better usage insights.
![Screenshot 2024-07-31 at 21 06 58](https://github.com/user-attachments/assets/5365a59b-d49c-42de-a5cd-a2cd7f301b8a)
Additionally, we are revamping invoices to provide more detailed breakdowns of usage for enhanced transparency. Due to our new proration of project add-ons and storage down to the hour, you may notice slight variances in your monthly bill. For the majority of line items, you’ll see the project reference and usage on the invoice, which should make it clearer which project allocated the usage/costs.
A few examples:
Compute Hours is broken down per project and the compute credits ($10) is displayed as discount for the compute line item.
![Screenshot 2024-08-08 at 20 34 47](https://github.com/user-attachments/assets/135a896c-c427-4ce9-8e22-aa96003376b6)
Egress is broken down to each project and displays included quota (250GB) and over-age pricing ($0.09/GB)
![Screenshot 2024-08-08 at 20 34 57](https://github.com/user-attachments/assets/bb0afcf5-4b7f-43bf-a33f-052052b86091)
Realtime Messages line item shows package-based pricing with $2.50 per million.
![Screenshot 2024-08-08 at 20 35 26](https://github.com/user-attachments/assets/64699237-8638-4c4d-b40c-b06003ff5b1f)
### Moving to hourly usage-based billing for IPv4, Custom Domain and Point-in-time recovery
Aug 7, 2024
# Moving to hourly usage-based billing for IPv4, Custom Domain and Point-in-time recovery#
We’re moving to billing all project add-ons usage-based and prorated down to the hour at the end of your billing cycle. We're not altering the monthly prices.
## Timeline#
This change will be rolled out to new customers on **August 26th, 2024** and will be gradually rolled out to existing customers shortly after.
## Changes#
Before| After (August 26th, 2024)  
---|---  
Custom Domain| $10 / month| $0.0137 / hour  
IPv4| $4 / month / database| $0.0055 / hour / database  
Point-in-time Recovery - 7 Days| $100 / month| $0.137 / hour  
Point-in-time Recovery - 14 Days| $200 / month| $0.274 / hour  
Point-in-time Recovery - 28 Days| $400 / month| $0.55 / hour  
Change| Project add-ons are paid upfront. Every time you change an add-on, you immediately pay for remaining time or get credits for unused time. Each change triggers an additional invoice.| We bill you at the end of your billing cycle for the hours you’ve used the project add-ons. No in-between charges, credit prorations or additional invoices.  
Invoice Item| Your invoices display '_Add-on Name_ '.| Your invoices will display '_Add-on Name_ Hours'.  
## Details#
We're updating how we bill project add-ons (IPv4, Point-in-time recovery, Custom Domain) without changing their monthly prices. This change will be rolled out on August 26th, 2024 for new customers and shortly after for existing customers.
Previously, when you added a project add-on, like IPv4 or PITR, you were immediately invoiced and charged for the remaining billing cycle period. At the start of a new cycle, you paid upfront for the entire month. If you removed an add-on mid-cycle, you received a credit for unused time.
Starting August 26th, you will be billed retrospectively for these add-ons, similar to Compute Hours. There are no more upfront charges, prorated invoices, or credits. You simply pay for the exact hours you use the project add-ons.
Plans (Pro/Team/Enterprise) are still charged upfront and there are no changes to how they are billed.
### Moving to hourly billing for Storage Size
Aug 2, 2024
# Hourly Billing for Storage#
We’re moving to more granular billing periods. We're not altering the prices or storage quotas. Every customer will benefit from this change, especially short-lived projects and customers using Branching.
### **Timeline** #
This change will be rolled out to new customers on **August 26th, 2024** and will be gradually rolled out to existing customers shortly after.
### **Changes** #
The price will move to "GB per hour" instead of "Total storage GB":
Before| After (August 26th, 2024)  
---|---  
Price| $0.021 / GB| $0.00002919 / GB / hour  
Change| We take the average storage size for all projects, independent of how many days/hours you store the files.| We bill you only for the exact GBs used each hour.  
Invoice Item| Your invoices display 'Total storage size'.| Your invoices will display 'Storage Size GB-Hrs'.  
Let's step through 2 scenarios to explain how this change will benefit developers:
# **Example 1: Pro Plan Org, active for the full month** #
In this scenario, an Organization is on the Pro Plan with 3 active projects.
#### **Usage** #
The projects are running for the entire month:
Storage| # Days Active| Active Hours (After)  
---|---|---  
Project A| 200 GB| 30| 144,000 (720 hours * 200 GB)  
Project B| 1,500 GB| 30| 1,080,000 (720 hours * 1,500 GB)  
Project C| 2,500 GB| 30| 1,800,000 (720 hours * 2,500 GB)  
-| -| -| -  
Total| 4,200 GB| 3,024,000 hours  
#### **Billing** #
After the billing changes on August 26th there would be **no change in pricing:**
Before| After  
---|---  
Total Usage| 4,200 GB| 3,024,000 hours  
Usage Discount (Pro Plan)| (100 GB)| (74,400 hours)  
Billable Usage| 4,100 GB| 2,949,600 hours  
-| -| -  
Price| $0.021 / GB| $0.00002919 / GB / hour  
Total Cost| $86.10| $86.10  
# **Example 2: Pro Plan Org, active for part of the month** #
In this scenario, an Organization is on the Pro Plan with 3 active projects.
**Usage**
In this scenario, some of the projects are only active for a few days in the month:
Storage| # Days Active| After: GB Hours  
---|---|---  
Project A| 200 GB| 2| 9,600 (48 hours * 200 GB)  
Project B| 1,500 GB| 15| 540,000 (360 hours * 1,500 GB)  
Project C| 2,500 GB| 30| 1,800,000 (720 hours * 2,500 GB)  
-| -| -| -  
Total| 4,200 GB| 2,349,600 hours  
**Billing**
Currently we charge you for the full 4,200 GB, even though Project A and B weren’t active for the entire month. After August 26th, this scenario will be **22.87% cheaper:**
Before| After  
---|---  
Total Usage| 4,200 GB| 2,349,600 hours  
Usage Discount (Pro Plan)| (100 GB)| (74,400 hours)  
Billable Usage| 4,100 GB| 2,275,200 hours  
-| -| -  
Price| $0.021 / GB| $0.00002919 / GB / hour  
Total Cost| $86.10| $66.41  
# Feedback#
This change should be universally beneficial, but if there is anything that we have missed just let us know and we will make sure we consider it before rolling out this change.
### Wrappers Wasm FDW is on Public Alpha
Jul 30, 2024
WebAssembly Foreign Data Wrapper (Wasm FDW) is now on public alpha from Wrappers version >= 0.4.1. This release also contains two new Wasm FDWs: Snowflake and Paddle.
### What is Wasm FDW?#
In previous versions of Wrappers, all the foreign data wrappers need to be built into `wrappers` extension. The develop/test/release cycle is time consuming and fully on Supabase teams. To speed up this process and give more flexibility to community, we're adding Wasm to the Wrappers framework. With this new feature, users can build their own FDW using Wasm and use it instantly on Supabase platform.
Another benefit is because of the improved modularity, each FDW can be updated and loaded individually. New FDWs release will be quicker than before. Also, `wrappers` extension size won't be bloated as more FDWs added in.
### What are the changes?#
There is no changes from end-users' perspective, all existing native FDWs are still same. The Wasm FDW only brings a new way of developing and distributing FDW.
### How to use it?#
Visit `Database -> Platform -> Wrappers` on Supabase Studio, enable `Wrappers` and choose `Snowflake` or `Paddle`, then create foreign tables.
Visit Snowflake Wasm FDW docs or Paddle Wasm FDW docs for more details.
### How to develop my own Wasm FDW?#
To build your own Wasm FDW, visit the example project to get started.
### Developer Updates - June 2024
Jul 23, 2024
We have several updates and new features to share with you this month. Dive in to see what’s new from Supabase.
# Edge Runtime Inspector Feature (CLI)#
![Edge Runtime Inspector Feature \(CLI\)](https://supabase.com/_next/image?url=https%3A%2F%2Fobuldanrptloktxcffvn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fmarketing-emails%2Fjune%25202024%2Fedge_runtime_inspector.jpg%3Ft%3D2024-07-16T12%253A20%253A04.791Z&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We’ve introduced the Edge Runtime Inspector, a powerful new feature in the CLI that helps you inspect and debug edge functions more efficiently. Pull Request
# View and Abort Running Queries (Supabase Studio)#
![View and abort queries in Supabase Studio](https://supabase.com/_next/image?url=https%3A%2F%2Fobuldanrptloktxcffvn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fmarketing-emails%2Fjune%25202024%2Fsupa_studio_view_query.png%3Ft%3D2024-07-16T12%253A20%253A19.171Z&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
You can now view and abort queries currently running on your database (primary or replica) in the Supabase Studio SQL Editor. This feature gives you greater control and flexibility in managing your queries. Pull Request
# Logging Integration With The ELK Stack#
The Logflare to Elastic filebeat backend has been merged. This integration enables log drains to ELK stacks, providing more robust logging and monitoring capabilities. Documentation
# Interpreting Supabase Grafana I/O Charts#
![Interpreting Supabase Grafana I/O Charts](https://supabase.com/_next/image?url=https%3A%2F%2Fobuldanrptloktxcffvn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fmarketing-emails%2Fjune%25202024%2Fgrafana.png%3Ft%3D2024-07-16T12%253A20%253A42.350Z&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)We have published a guide on how to use the Supabase I/O charts to identify when you may need to scale your database, optimize your queries, or spin up a read replica. Github Discussion
# Breaking Change to Supabase Platform Access Control#
On July 26, 2024, Supabase will be making breaking changes to our platform’s access control system. **Developer** and **Read-Only** roles will no longer have write access to an organization’s GitHub and Vercel integrations. These changes **will not** affect existing integrations that are in place. Github Discussion
# Change to Retention of Paused Free Tier Projects#
Starting June 24, 2024, paused Free Tier projects are restorable for 90 days. There is a grace period where all paused projects will continue to be restorable until September 22, 2024. Github Discussion
# Billing Improvements#
![Billing Improvements](https://supabase.com/_next/image?url=https%3A%2F%2Fobuldanrptloktxcffvn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fmarketing-emails%2Fjune%25202024%2Fbilling.png%3Ft%3D2024-07-16T12%253A20%253A52.830Z&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
We’ve made significant improvements to our billing system to help you better understand compute pricing. These changes aim to prevent unexpected charges and provide clarity on “Compute Hours.” Github Discussion
# Quick product announcements#
[Edge Functions] We’ve implemented some key updates to Edge Functions, including adding Deno 1.43 support [Github Discussion]
# New Engineering and Troubleshooting Guides#
![Troubleshooting Guides](https://supabase.com/_next/image?url=https%3A%2F%2Fobuldanrptloktxcffvn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fmarketing-emails%2Fjune%25202024%2Ftroubleshooting_guides.jpg%3Ft%3D2024-07-16T12%253A21%253A48.891Z830Z&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
  * How Postgres chooses which index to use
  * Using SQLAlchemy with Supabase
  * Supabase & Your Network: IPv4 and IPv6 compatibility
  * Understanding the Usage Summary on the Dashboard
  * Supavisor and Connection Terminology Explained
  * Prisma Error Management
  * How to change max database connections
  * Inspecting edge function environment variables


# Made with Supabase#
  * Dribble - Flutter NBA name guess game available for iOS and Android [Website]
  * EvalHub - an open-source platform for researchers to discover AI evaluation metrics [Website]
  * SVGPS - Removes the burden of working with a cluster of SVG files by converting your icons into a single JSON file [Website]
  * CleanCoffee - Lean coffee discussion utility where you can create boards and share with friends [Website]
  * Rewritebar - Improve your writing in any macOS application with AI assistance. Quickly correct grammar mistakes, change writing styles or translate text [Website]


# Community highlights#
  * Building a Basic Social Network with Remix and Supabase [YouTube]
  * Next Level Supabase Techniques For Your Production App! [YouTube]
  * Building a Local-First React Native App with PowerSync and Supabase [YouTube]
  * Build a Fullstack Job Portal App with Next.js 14, Tailwind, Supabase, Stripe, Clerk [YouTube]
  * Generate Vector Tiles with PostGIS [Blog] [YouTube]


### DigiCert no longer being used as the CA for Supabase HTTP APIs
Jul 22, 2024
Supabase HTTP APIs are no longer using DigiCert as the root CA. This should have **no** impact on the vast majority of environments, as the other CAs in use are essentially universally trusted.
If your client environment only trusts certificates signed by DigiCert, you could be impacted. We're currently using Cloudflare to serve our HTTP APIs, and recommend ensuring that any client environment that only trusts a specific subset of CAs trusts all of the CAs Cloudflare uses.
### March Beta 2021
Apr 6, 2021
Launch week, Storage, Supabase CLI, Connection Pooling, Supabase UI, and Pricing. Here's what we released last month.
This is also available as a blog post and a video demo.
## Supabase Storage#
Need to store images, audio, and video clips? Well now you can do it on Supabase Storage. It's backed by S3 and our new OSS storage API written in Fastify and Typescript. Read the full blog post.
![ph-1](https://supabase.com/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F10214025%2F113680011-ff098c80-96f2-11eb-8cba-e19630ca02aa.png&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
## Connection Pooling#
The Supabase API already handles Connection Pooling, but if you're connecting to your database directly (for example, with Prisma) we now bundle PgBouncer. Read the full blog post.
![pgbouncer-thumb](https://supabase.com/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F10214025%2F113680055-09c42180-96f3-11eb-93e4-3869a40d4b91.jpg&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
## React UI Component Library#
We open sourced our internal UI component library, so that anyone can use and contribute to the Supabase aesthetic. It lives at ui.supabase.io . It was also the #1 Product of the Day on Product Hunt.
![supabase-ui](https://supabase.com/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F10214025%2F113680095-16e11080-96f3-11eb-960a-b569e034e444.png&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
## CLI#
Now you can run Supabase locally in the terminal with `supabase start`. We have done some preliminary work on diff-based schema migrations, and added some new tooling for self-hosting Supabase with Docker. Blog post here.
![supabase-cli](https://supabase.com/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F10214025%2F113680121-1cd6f180-96f3-11eb-8aa4-930347d83eb0.png&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
## OAuth Scopes#
Thanks to a comunity contribution (@_mateomorris and @Beamanator), Supabase Auth now includes OAuth scopes. These allow you to request elevated access during login. For example, you may want to request access to a list of Repositories when users log in with GitHub. Check out the Documentation.
![oauth-scopes](https://supabase.com/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F10214025%2F113680272-3ed07400-96f3-11eb-8703-09b47d849b4b.png&w=3840&q=75&dpl=dpl_5vxuPdRWDTgYeoKGiu8atZgYCq3x)
## Kaizen#
  * You can now manage your PostgREST configuration inside the Dashboard.
  * Our website has been redesigned. Check out our new Homepage and Blog, and our new Database, Auth, and Storage product pages.
  * We refactored some of our Filter methods to make them even easier to use. Check out the Full Text Search refactor.
  * We have added several new sections to our Docs including: Local Dev, Self Hosting, and Postgres Reference docs (all still under development).


Next 
## Build in a weekend, scale to millions
Start your projectRequest a demo
