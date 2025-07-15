# MongoDB 

# JSON and BSON

Data Support  ||
String, boolean, number, array, object, null ||
String, boolean, number (integer, float, long, decimal128...), array, null, date, 

Readability ||
Human and machine ||
Machine only

JSON and BSON are indeed close cousins by design. BSON is designed as a binary representation of JSON data, with specific extensions for broader applications, and optimized for data storage and traversal. Just like JSON, BSON supports embedding objects and arrays.


# EJSON

 EJSON.stringify(...) — What It Does
EJSON.stringify() converts MongoDB documents (which can include special types like ObjectId, Date, etc.) into a string format that preserves those special types.

{
  _id: ObjectId("6618e7e43f3b7462eb5fabc0"),
  name: "Arhan",
  createdAt: new Date()
}
JSON.stringify() output:

{
  "_id": {},
  "name": "Arhan",
  "createdAt": "2024-05-01T12:00:00.000Z"
}
❌ Lost the ObjectId — _id is just empty or wrong.


{
  "_id": { "$oid": "6618e7e43f3b7462eb5fabc0" },
  "name": "Arhan",
  "createdAt": { "$date": "2024-05-01T12:00:00.000Z" }
}
✅ Type is preserved — MongoDB can read it correctly later!


# Key points
EJSON.stringify()
✔ Converts MongoDB documents into a string format (EJSON)
✔ Keeps special types like ObjectId, Date, etc.
✔ Useful when you want to store or send the data (e.g., to a file, API, or another system)

✅ EJSON.parse()
✔ Takes that EJSON string and turns it back into real MongoDB objects
✔ Restores ObjectId, Date, and other special types
✔ Use when you're ready to use the data again

let docs = db.student.find().toArray();
let stringData = EJSON.stringify(docs); // Convert to string safely
let backToDocs = EJSON.parse(stringData); // Convert back to usable documents


# Main Use Cases of EJSON:
🗂️ Storing MongoDB data

1. Save documents to a file (like .json, .ejson, or .bson) without losing important types like ObjectId, Date, Binary, etc.

2. 🔄 Transferring MongoDB data

Send data through APIs, networks, or between systems while keeping full type info.

3. 📤 Exporting and 📥 Importing

Tools like mongoexport and mongorestore use EJSON internally to make sure nothing breaks when backing up or restoring data.

4. 🧪 Testing or mocking data

When writing test cases, EJSON allows saving sample documents with real MongoDB data types.


# $oid

$oid is a special keyword used in EJSON (Extended JSON) to represent a MongoDB ObjectId

In MongoDB, every document has a unique _id field, and by default, MongoDB uses a special type called ObjectId for that.
An ObjectId looks like this:
6618e7e43f3b7462eb5fabc0

Regular JSON doesn’t know what an ObjectId is. So EJSON wraps it like this:

{
  "_id": { "$oid": "6618e7e43f3b7462eb5fabc0" }
}
This tells MongoDB:
“Hey, this isn’t just a string — it’s an actual ObjectId.”
When you use EJSON.parse(), it converts $oid back to a real ObjectId type.

# example

let str = '{ "_id": { "$oid": "6618e7e43f3b7462eb5fabc0" }, "name": "Arhan" }';
let doc = EJSON.parse(str);


{
  _id: ObjectId("6618e7e43f3b7462eb5fabc0"),
  name: "Arhan"
}


# Differences

Format	Description	                                       Used For
JSON	Human-readable text	                              APIs, configs
EJSON	JSON with support for MongoDB types (like $oid)	  Export/import with types
BSON	Binary format, fast & compact	                  (🔧 MongoDB's internal storage and communication)


# 🧪 Example:
If you insert a document like this in MongoDB:

{ name: "Arhan", age: 20 }
MongoDB stores it in BSON, something like this (not human-readable):

\x16\x00\x00\x00\x02name\x00\x06\x00\x00\x00Arhan\x00\x10age\x00\x14\x00\x00\x00\x00
It’s a compact, binary version that includes type information, which:

Takes less space,

Is faster to read/write than plain text,

Handles data types like ObjectId, Date, Decimal128, etc.

# How They Work Together:
MongoDB uses BSON internally for performance.

EJSON is used when we need to store or send data in text format, but still preserve types like ObjectId.

So yes, EJSON handles the same data types — just in a readable way, while BSON handles them in binary (for speed and compactness).


# validate
In Mongoose, when you change some fields on a document and then run .validate(), you can control which fields should be validated using:

Option	What It Does
pathsToValidate	Only validate specific fields
validateModifiedOnly	Validate only the fields that were changed (modified)
pathsToSkip	Validate everything that was modified, except the ones you skip

🛠️ Setup Example
js
Copy
Edit
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  age: {
    type: Number,
    min: 18,
  }
});

const User = mongoose.model('User', userSchema);
Now imagine you have a user:

js
Copy
Edit
const user = await User.findById("123");
user.name = "Jo";               // invalid: too short
user.email = "invalidemail";    // invalid: no @
user.age = 25;                  // valid
🧪 1. Validate only a specific field: pathsToValidate
js
Copy
Edit
await user.validate({ pathsToValidate: ['age'] });
✅ This will only validate age, even though you changed name and email.

🔍 2. Validate only modified fields: validateModifiedOnly
js
Copy
Edit
await user.validate({ validateModifiedOnly: true });
✅ This will validate all fields that were changed, which are:

name → ❌ too short

email → ❌ invalid

age → ✅ valid

So this would throw validation errors for name and email.

🙈 3. Skip some fields: pathsToSkip
js
Copy
Edit
await user.validate({ pathsToSkip: ['email'] });
✅ This will validate all modified fields except email. So:

name → ❌ too short → Error will be thrown

email → ❌ skipped

age → ✅ valid

