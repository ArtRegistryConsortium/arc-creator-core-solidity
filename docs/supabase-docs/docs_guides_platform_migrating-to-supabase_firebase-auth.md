Platform
Migrate from Firebase Auth to Supabase
Migrate Firebase auth users to Supabase Auth.
Supabase provides several tools to help migrate auth users from a Firebase project to a Supabase project. There are two parts to the migration process:
  * `firestoreusers2json` (TypeScript, JavaScript) exports users from an existing Firebase project to a `.json` file on your local system.
  * `import_users` (TypeScript, JavaScript) imports users from a saved `.json` file into your Supabase project (inserting those users into the `auth.users` table of your `Postgres` database instance).


## Set up the migration tool #
  1. Clone the `firebase-to-supabase` repository:
`
1
git clone https://github.com/supabase-community/firebase-to-supabase.git
`
  2. In the `/auth` directory, create a file named `supabase-service.json` with the following contents:
`
1
{
2
 "host": "database.server.com",
3
 "password": "secretpassword",
4
 "user": "postgres",
5
 "database": "postgres",
6
 "port": 5432
7
}
`
  3. Go to the Database settings for your project in the Supabase Dashboard.
  4. Under `Connection parameters`, enable `Use connection pooling` and set the mode to `Session`. Replace the `Host` and `User` fields with the values shown.
  5. Enter the password you used when you created your Supabase project in the `password` entry in the `supabase-service.json` file.


## Generate a Firebase private key #
  1. Log in to your Firebase Console and open your project.
  2. Click the gear icon next to **Project Overview** in the sidebar and select **Project Settings**.
  3. Click **Service Accounts** and select **Firebase Admin SDK**.
  4. Click **Generate new private key**.
  5. Rename the downloaded file to `firebase-service.json`.


## Save your Firebase password hash parameters #
  1. Log in to your Firebase Console and open your project.
  2. Select **Authentication** (Build section) in the sidebar.
  3. Select **Users** in the top menu.
  4. At the top right of the users list, open the menu (3 dots) and click **Password hash parameters**.
  5. Copy and save the parameters for `base64_signer_key`, `base64_salt_separator`, `rounds`, and `mem_cost`.


Sample
`
1
hash_config {
2
 algorithm: SCRYPT,
3
 base64_signer_key: XXXX/XXX+XXXXXXXXXXXXXXXXX+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==,
4
 base64_salt_separator: Aa==,
5
 rounds: 8,
6
 mem_cost: 14,
7
}
`
## Command line options#
### Dump Firestore users to a JSON file #
`node firestoreusers2json.js [<filename.json>] [<batch_size>]`
  * `filename.json`: (optional) output filename (defaults to `./users.json`)
  * `batchSize`: (optional) number of users to fetch in each batch (defaults to 100)


### Import JSON users file to Supabase Auth (Postgres: `auth.users`#
`node import_users.js <path_to_json_file> [<batch_size>]`
  * `path_to_json_file`: full local path and filename of JSON input file (of users)
  * `batch_size`: (optional) number of users to process in a batch (defaults to 100)


## Notes#
For more advanced migrations, including the use of a middleware server component for verifying a user's existing Firebase password and updating that password in your Supabase project the first time a user logs in, see the `firebase-to-supabase` repo.
## Resources#
  * Supabase vs Firebase
  * Firestore Data Migration
  * Firestore Storage Migration


## Enterprise#
Contact us if you need more help migrating your project.
### Is this helpful?
Yes No
Thanks for your feedback!
On this page
  * Set up the migration tool 
  * Generate a Firebase private key 
  * Save your Firebase password hash parameters 
  * Command line options
  * Dump Firestore users to a JSON file 
  * Import JSON users file to Supabase Auth (Postgres: auth.users
  * Notes
  * Resources
  * Enterprise


