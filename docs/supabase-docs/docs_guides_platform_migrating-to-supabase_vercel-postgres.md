Platform
Migrate from Vercel Postgres to Supabase
Migrate your existing Vercel Postgres database to Supabase.
This guide demonstrates how to migrate your Vercel Postgres database to Supabase to get the most out of Postgres while gaining access to all the features you need to build a project.
## Retrieve your Vercel Postgres database credentials #
  1. Log in to your Vercel Dashboard https://vercel.com/login.
  2. Click on the **Storage** tab.
  3. Click on your Postgres Database.
  4. Under the **Quickstart** section, select **psql** then click **Show Secret** to reveal your database password.
  5. Copy the string after `psql ` to the clipboard.


Example:
`
1
psql "postgres://default:xxxxxxxxxxxx@yy-yyyyy-yyyyyy-yyyyyyy.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
`
Copy this part to your clipboard:
`
1
"postgres://default:xxxxxxxxxxxx@yy-yyyyy-yyyyyy-yyyyyyy.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
`
## Set your `OLD_DB_URL` environment variable#
Set the **OLD_DB_URL** environment variable at the command line using your Vercel Postgres Database credentials.
Example:
`
1
export OLD_DB_URL="postgres://default:xxxxxxxxxxxx@yy-yyyyy-yyyyyy-yyyyyyy.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
`
## Retrieve your Supabase connection string #
  1. If you're new to Supabase, create a project. Make a note of your password, you will need this later. If you forget it, you can reset it here.
  2. Go to the Database settings for your project in the Supabase Dashboard.
  3. Under **Connection string** , select **URI** , make sure **Display connection pooler** is checked, and **Mode: Session** is set.
  4. Click the **Copy** button to the right of your connection string to copy it to the clipboard.


## Set your `NEW_DB_URL` environment variable#
Set the **NEW_DB_URL** environment variable at the command line using your Supabase connection string. You will need to replace `[YOUR-PASSWORD]` with your actual database password.
Example:
`
1
export NEW_DB_URL="postgresql://postgres.xxxxxxxxxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
`
## Migrate the database#
You will need the pg_dump and psql command line tools, which are included in a full PostgreSQL installation.
  1. Export your database to a file in console
Use `pg_dump` with your Postgres credentials to export your database to a file (e.g., `dump.sql`).


`
1
pg_dump "$OLD_DB_URL" \
2
 --clean \
3
 --if-exists \
4
 --quote-all-identifiers \
5
 --no-owner \
6
 --no-privileges \
7
 > dump.sql
`
  1. Import the database to your Supabase project
Use `psql` to import the Postgres database file to your Supabase project.
`
1
psql -d "$NEW_DB_URL" -f dump.sql
`


Additional options
  * To only migrate a single database schema, add the `--schema=PATTERN` parameter to your `pg_dump` command.
  * To exclude a schema: `--exclude-schema=PATTERN`.
  * To only migrate a single table: `--table=PATTERN`.
  * To exclude a table: `--exclude-table=PATTERN`.


Run `pg_dump --help` for a full list of options.
  * If you're planning to migrate a database larger than 6 GB, we recommend upgrading to at least a Large compute add-on. This will ensure you have the necessary resources to handle the migration efficiently.
  * For databases smaller than 150 GB, you can increase the size of the disk on paid projects by navigating to Database Settings.
  * If you're dealing with a database larger than 150 GB, we strongly advise you to contact our support team for assistance in provisioning the required resources and ensuring a smooth migration process.


## Enterprise#
Contact us if you need more help migrating your project.
### Is this helpful?
Yes No
Thanks for your feedback!
On this page
  * Retrieve your Vercel Postgres database credentials 
  * Set your OLD_DB_URL environment variable
  * Retrieve your Supabase connection string 
  * Set your NEW_DB_URL environment variable
  * Migrate the database
  * Enterprise


