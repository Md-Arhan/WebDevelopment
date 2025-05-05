/*
Purpose: Determines whether the returned document is the before or after update.

Values: 'before', 'after' (default: 'before').
*/

const result = await Model.findOneAndUpdate(
  { _id: someId },
  { $set: { name: "Updated Name" } },
  { returnDocument: "after" }
);
console.log(result);


/*
{
  "_id": "someId",
  "name": "Updated Name"
}
 */



/*
2. lean
What it is: Returns a plain JavaScript object instead of a full Mongoose document (no .save(), etc.).

Why: Improves performance when you don’t need Mongoose features.
 */

await User.findOne({ name: "Alicia" }).lean();

// { "_id": "...", "name": "Alicia" } // no Mongoose methods attached



/*
3. session — Used in Transactions
❓ What is a transaction in MongoDB?
A transaction allows you to group multiple read and write operations into one atomic unit. This means:

✅ Either ALL operations succeed, or
❌ None are applied at all (rolled back).

Think of it like a bank transfer:

Withdraw money from account A

Deposit into account B
If one fails, both should be canceled.

Why use session in Mongoose?
You pass the session object into Mongoose queries like .findOneAndUpdate() to link that operation to a transaction.

Without session, each query runs separately. With it, they are grouped together.

You want to perform multiple operations (like updating different documents or collections) as a single atomic transaction — not just to update multiple fields.

 */

const session = await mongoose.startSession(); // 1️⃣ Start session
session.startTransaction();                    // 2️⃣ Begin transaction

try {
  await User.findOneAndUpdate(
    { name: "Alicia" },
    { age: 25 },
    { session }                               // 3️⃣ Pass session to the query
  );

  // You can perform more operations here, e.g., update another collection

  await session.commitTransaction();          // 4️⃣ Commit = save changes
} catch (error) {
  await session.abortTransaction();           // ❌ Rollback if anything fails
} finally {
  session.endSession();                       // 5️⃣ Clean up
}

// { "_id": "xyz", "name": "Alicia", "age": 25 }


/*
 4. strict
What it is: Overrides schema’s strict mode (true = block undefined fields, false = allow). */

await User.findOneAndUpdate(
    { name: "Alicia" },
    { newField: "extra" },
    { strict: false }
  );
  

//   { "_id": "...", "name": "Alicia", "newField": "extra" }


/*
5. timestamps
What it is: Prevents updatedAt/createdAt from changing on update.

Only works if schema has { timestamps: true }. */


await User.findOneAndUpdate(
    { name: "Alicia" },
    { age: 26 },
    { timestamps: false }
  );
  


/*
If no document matches the filter, upsert: true will:

🔍 Create a new document using the update data

✅ Return it (if new: true)

If a match is found, it will just update the document as usual.
*/

await User.findOneAndUpdate(
    { name: "Bob" },                     // Filter (Bob doesn't exist)
    { name: "Bob", age: 30 },            // Update (insert data)
    { upsert: true, new: true }          // Enable upsert, return new doc
  );
  

/*
{
  "_id": "661d34...",
  "name": "Bob",
  "age": 30
} */


/* 7. projection
What it is: Controls which fields are returned (like .select()). */

await User.findOneAndUpdate(
    { name: "Bob" },
    { age: 31 },
    { projection: { name: 1 } }
);

//{ "_id": "...", "name": "Bob" } // `age` not included


/*
8. new
What it is: If true, returns updated document; if false, returns original.
 */

await User.findOneAndUpdate(
    { name: "Bob" },
    { age: 32 },
    { new: true }
  );
  
//{ "_id": "...", "name": "Bob", "age": 32 }


/*9. By default, Mongoose does not run schema validations during update operations (like update, findOneAndUpdate, updateMany).

Setting runValidators: true tells Mongoose:

"Apply the schema validation rules before saving this update." */

const userSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 18 }
  });
  

  await User.findOneAndUpdate(
    { name: "Bob" },
    { age: 10 }
  );
  // No error! Age = 10 is stored 😨
  

  await User.findOneAndUpdate(
    { name: "Bob" },
    { age: 10 },
    { runValidators: true }
  );
  

  //ValidationError: User validation failed: age: Path `age` (10) is less than minimum allowed value (18).



/*
10. setDefaultsOnInsert
What it is: When using upsert, this will apply schema defaults if inserting. */

await User.findOneAndUpdate(
    { name: "Charlie" },
    {},
    { upsert: true, setDefaultsOnInsert: true, new: true }
  );
  
  //{ "_id": "...", "name": "Charlie", "role": "user" } // if `role` has default



/*11. includeResultMetadata
What it is: Returns raw MongoDB metadata along with result. */

await User.findOneAndUpdate(
    { name: "Bob" },
    { age: 33 },
    { includeResultMetadata: true }
  );
  
//   {
//     "value": { "_id": "...", "name": "Bob", "age": 33 },
//     "lastErrorObject": { "n": 1, "updatedExisting": true },
//     "ok": 1
//   }
  

/* 12. translateAliases
What it is: Allows using aliases defined in schema in update/query.*/

// In schema:
// email: { type: String, alias:'e' }

// Query:
await User.findOneAndUpdate(
  { e: "alice@example.com" },
  { age: 34 },
  { translateAliases: true }
);


/* What are Discriminators?
In Mongoose, discriminators allow you to create multiple models that share the same MongoDB collection but have different schemas. Think of it like inheritance in OOP. */

const options = { discriminatorKey: 'kind' };

const Animal = mongoose.model('Animal', new mongoose.Schema({
  name: String
}, options));

const Dog = Animal.discriminator('Dog', new mongoose.Schema({ breed: String }));
const Cat = Animal.discriminator('Cat', new mongoose.Schema({ color: String }));


await Dog.create({ name: "Max", breed: "Labrador" });


// {
//     "_id": "...",
//     "name": "Max",
//     "breed": "Labrador",
//     "kind": "Dog"      // ✅ same as discriminator model name
//   }
  
//To overrite kind

await Animal.findOneAndUpdate(
    { name: "Max" },
    { kind: "Cat" },
    { overwriteDiscriminatorKey: true }
  );