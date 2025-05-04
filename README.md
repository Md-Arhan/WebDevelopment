If you want to push an existing local folder/project to GitHub:
❌ DO NOT initialize the repo on GitHub with:
a README.md

a .gitignore

a license

Because that adds a commit to the remote repo, which creates that "unrelated histories" issue you're seeing.

OR, if you've already added README on GitHub
Just like you're doing now:

git pull origin main --allow-unrelated-histories
# then resolve and push



# Command Prompt

Run Command Prompt as Administrator (Most Common)
This gives elevated privileges required for starting services like MongoDB.

🔧 Steps:
Press Windows Key.

Type: cmd

Right-click on "Command Prompt".

Click “Run as administrator”

You’ll see “Administrator: Command Prompt” in the window title bar.

👤 Run Command Prompt as a Different User (e.g., domain user)
If you want to run it as a different user account, not just admin:

🔧 Steps:
Hold down Shift + Right-click on the cmd.exe or Command Prompt shortcut.

Click “Run as different user”

Enter the username and password for the other account.

⚠️ This only works if that user has permission on your system.


# Difference

1. Run as Administrator
Purpose: Gives the program higher permissions to access system files and settings.

Use: Needed when running commands that require admin rights (e.g., starting MongoDB).

Example: Right-click Command Prompt → Run as Administrator.

2. Run as Different User
Purpose: Lets you run the program as another user with their permissions.

Use: Needed if you want to run something as a user other than yourself.

Example: Shift + Right-click on the program → Run as different user.

In short:

Administrator = for higher system access.

Different User = for running as another user.

# Why Users Can't Access System Files:
Security: Allowing unrestricted access to system files could lead to accidental or malicious damage (e.g., deleting important files or making system changes that could break things).

Permissions: Windows (and other operating systems) use a system of permissions to control who can read, write, or modify certain files or folders.

Normal users have limited permissions to ensure they don’t make changes that can impact the whole system.

Administrator accounts have higher permissions to manage the system.

Protecting the System: Key files and folders are protected from changes by User Account Control (UAC). UAC is a security feature that prevents unauthorized applications from making changes that could harm the system.


# CRLF LF

1. LF (Line Feed, \n)
Used by: Unix, Linux, macOS (modern)

Character: \n (ASCII 10)

Example in hex: 0A

2. CRLF (Carriage Return + Line Feed, \r\n)
Used by: Windows

Characters: \r\n (CR is ASCII 13, LF is ASCII 10)

Example in hex: 0D 0A

| Platform         | Line Ending | Characters | ASCII   |
| ---------------- | ----------- | ---------- | ------- |
| Unix/Linux/macOS | LF          | `\n`       | 10      |
| Windows          | CRLF        | `\r\n`     | 13 + 10 |


warning: CRLF will be replaced by LF in <filename>. 
The file will have its original line endings in your working directory.
🔍 What This Warning Means:
Git is telling you that:

You're adding a file that uses CRLF (Windows-style) line endings.

Git is converting them to LF (Unix-style) for storing in the repository.

But your local file will remain with CRLF, depending on Git's config.

This is not an error—just a heads-up about normalization.

In Code (Node.js / JavaScript):
process.stdout.write("Hello");
process.stdout.write("\rWorld");
👆 This would print:
World
The \r returned the cursor, and World replaced Hello.

Yes — understanding how \r (carriage return) works is very useful, especially if you're:

Writing CLI (command-line interface) tools,

Creating progress indicators or live status updates,

Working with log files or text processing,

Debugging platform-specific bugs related to line endings (Windows vs Unix).

# CR

A Carriage Return (CR) is a control character that moves the cursor to the beginning of the line, without advancing to the next line.

It comes from typewriters:
"Carriage" = the mechanism that holds the paper.
"Return" = the action of moving the carriage back to the start of the line.
Pressing the "Return" key would move the carriage to the left without moving down a line.



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
