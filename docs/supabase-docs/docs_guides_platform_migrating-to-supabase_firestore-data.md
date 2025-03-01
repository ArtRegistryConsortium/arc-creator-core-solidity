Platform
Migrated from Firebase Firestore to Supabase
Migrate your Firebase Firestore database to a Supabase Postgres database.
Supabase provides several tools to convert data from a Firebase Firestore database to a Supabase PostgreSQL database. The process copies the entire contents of a single Firestore `collection` to a single PostgreSQL `table`.
The Firestore `collection` is "flattened" and converted to a table with basic columns of one of the following types: `text`, `numeric`, `boolean`, or `jsonb`. If your structure is more complex, you can write a program to split the newly-created `json` file into multiple, related tables before you import your `json` file(s) to Supabase.
## Set up the migration tool #
  1. Clone the `firebase-to-supabase` repository:
`
1
git clone https://github.com/supabase-community/firebase-to-supabase.git
`
  2. In the `/firestore` directory, create a file named `supabase-service.json` with the following contents:
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


## Command line options#
### List all Firestore collections#
`node collections.js`
### Dump Firestore collection to JSON file#
`node firestore2json.js <collectionName> [<batchSize>] [<limit>]`
  * `batchSize` (optional) defaults to 1000
  * output filename is `<collectionName>.json`
  * `limit` (optional) defaults to 0 (no limit)


#### Customize the JSON file with hooks#
You can customize the way your JSON file is written using a custom hook. A common use for this is to "flatten" the JSON file, or to split nested data into separate, related database tables. For example, you could take a Firestore document that looks like this:
Firestore
`
1
[{ "user": "mark", "score": 100, "items": ["hammer", "nail", "glue"] }]
`
And split it into two files (one table for users and one table for items):
Users
`
1
[{ "user": "mark", "score": 100 }]
`
Items
`
1
[
2
 { "user": "mark", "item": "hammer" },
3
 { "user": "mark", "item": "nail" },
4
 { "user": "mark", "item": "glue" }
5
]
`
### Import JSON file to Supabase (PostgreSQL) #
`node json2supabase.js <path_to_json_file> [<primary_key_strategy>] [<primary_key_name>]`
  * `<path_to_json_file>` The full path of the file you created in the previous step (`Dump Firestore collection to JSON file `), such as `./my_collection.json`
  * `[<primary_key_strategy>]` (optional) Is one of: 
    * `none` (default) No primary key is added to the table.
    * `smallserial` Creates a key using `(id SMALLSERIAL PRIMARY KEY)` (autoincrementing 2-byte integer).
    * `serial` Creates a key using `(id SERIAL PRIMARY KEY)` (autoincrementing 4-byte integer).
    * `bigserial` Creates a key using `(id BIGSERIAL PRIMARY KEY)` (autoincrementing 8-byte integer).
    * `uuid` Creates a key using `(id UUID PRIMARY KEY DEFAULT gen_random_uuid())` (randomly generated UUID).
    * `firestore_id` Creates a key using `(id TEXT PRIMARY KEY)` (uses existing `firestore_id` random text as key).
  * `[<primary_key_name>]` (optional) Name of primary key. Defaults to "id".


## Custom hooks#
Hooks are used to customize the process of exporting a collection of Firestore documents to JSON. They can be used for:
  * Customizing or modifying keys
  * Calculating data
  * Flattening nested documents into related SQL tables


### Write a custom hook#
#### Create a `.js` file for your collection#
If your Firestore collection is called `users`, create a file called `users.js` in the current folder.
#### Construct your `.js` file#
The basic format of a hook file looks like this:
`
1
module.exports = (collectionName, doc, recordCounters, writeRecord) => {
2
 // modify the doc here
3
 return doc
4
}
`
##### Parameters
  * `collectionName`: The name of the collection you are processing.
  * `doc`: The current document (JSON object) being processed.
  * `recordCounters`: An internal object that keeps track of how many records have been processed in each collection.
  * `writeRecord`: This function automatically handles the process of writing data to other JSON files (useful for "flatting" your document into separate JSON files to be written to separate database tables). `writeRecord` takes the following parameters: 
    * `name`: Name of the JSON file to write to.
    * `doc`: The document to write to the file.
    * `recordCounters`: The same `recordCounters` object that was passed to this hook (just passes it on).


### Examples#
#### Add a new (unique) numeric key to a collection#
`
1
module.exports = (collectionName, doc, recordCounters, writeRecord) => {
2
 doc.unique_key = recordCounter[collectionName] + 1
3
 return doc
4
}
`
#### Add a timestamp of when this record was dumped from Firestore#
`
1
module.exports = (collectionName, doc, recordCounters, writeRecord) => {
2
 doc.dump_time = new Date().toISOString()
3
 return doc
4
}
`
#### Flatten JSON into separate files#
Flatten the `users` collection into separate files:
`
1
[
2
 {
3
  "uid": "abc123",
4
  "name": "mark",
5
  "score": 100,
6
  "weapons": ["toothpick", "needle", "rock"]
7
 },
8
 {
9
  "uid": "xyz789",
10
  "name": "chuck",
11
  "score": 9999999,
12
  "weapons": ["hand", "foot", "head"]
13
 }
14
]
`
The `users.js` hook file:
`
1
module.exports = (collectionName, doc, recordCounters, writeRecord) => {
2
 for (let i = 0; i < doc.weapons.length; i++) {
3
  const weapon = {
4
   uid: doc.uid,
5
   weapon: doc.weapons[i],
6
  }
7
  writeRecord('weapons', weapon, recordCounters)
8
 }
9
 delete doc.weapons // moved to separate file
10
 return doc
11
}
`
The result is two separate JSON files:
users.json
`
1
[
2
 { "uid": "abc123", "name": "mark", "score": 100 },
3
 { "uid": "xyz789", "name": "chuck", "score": 9999999 }
4
]
`
weapons.json
`
1
[
2
 { "uid": "abc123", "weapon": "toothpick" },
3
 { "uid": "abc123", "weapon": "needle" },
4
 { "uid": "abc123", "weapon": "rock" },
5
 { "uid": "xyz789", "weapon": "hand" },
6
 { "uid": "xyz789", "weapon": "foot" },
7
 { "uid": "xyz789", "weapon": "head" }
8
]
`
## Resources#
  * Supabase vs Firebase
  * Firestore Storage Migration
  * Firebase Auth Migration


## Enterprise#
Contact us if you need more help migrating your project.
### Is this helpful?
Yes No
Thanks for your feedback!
On this page
  * Set up the migration tool 
  * Generate a Firebase private key 
  * Command line options
  * List all Firestore collections
  * Dump Firestore collection to JSON file
  * Import JSON file to Supabase (PostgreSQL) 
  * Custom hooks
  * Write a custom hook
  * Examples
  * Resources
  * Enterprise


