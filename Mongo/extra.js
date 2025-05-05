// Mongoose Schema options 

// 1. select: Hide a field by default in queries

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false // password won't be returned in queries unless explicitly selected
  }
});

const User = mongoose.model('User', userSchema);

// Saving document
await User.create({ username: 'john', password: 'secret123' });

// Fetching document
const user = await User.findOne({ username: 'john' });
console.log(user); // 👉 Output: { _id, username } (no password)




//2. validate: Custom validation logic

const schema = new mongoose.Schema({
    age: {
      type: Number,
      validate: {
        validator: v => v >= 18,
        message: props => `${props.value} is not old enough!`
      }
    }
  });
  
  const Person = mongoose.model('Person', schema);
  
  // Try creating invalid document
  await Person.create({ age: 15 });
  // 👉 Error: ValidationError: 15 is not old enough!
  


//3. get: Format a value when retrieving it

const productSchema = new mongoose.Schema({
    price: {
      type: Number,
      get: val => `$${val.toFixed(2)}`
    }
  }, { toJSON: { getters: true } });
  
  const Product = mongoose.model('Product', productSchema);
  const product = new Product({ price: 9.5 });
  
  console.log(product.toJSON());
  // 👉 Output: { price: "$9.50", _id: ... }
  

//4. set: Transform a value before saving

const emailSchema = new mongoose.Schema({
    email: {
      type: String,
      set: v => v.toLowerCase()
    }
  });
  
  const EmailUser = mongoose.model('EmailUser', emailSchema);
  const user1 = new EmailUser({ email: 'John@Example.COM' });
  
  console.log(user1.email);
  // 👉 Output: "john@example.com"
  


//5. alias: Create an alternate virtual field name

const aliasSchema = new mongoose.Schema({
    n: {
      type: String,
      alias: 'name'
    }
  });
  
  const AliasUser = mongoose.model('AliasUser', aliasSchema);
  const user3 = new AliasUser({ name: 'Alice' });
  
  console.log(user3.n);     // 👉 Output: "Alice"
  console.log(user3.n);  // 👉 Output: "Alice"
  


  // 6. immutable: Prevent field from being changed

  const immutableSchema = new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true
    }
  });
  
  const ImmutableModel = mongoose.model('ImmutableModel', immutableSchema);
  const doc = await ImmutableModel.create({});
  doc.createdAt = new Date('2000-01-01');
  await doc.save();
  
  console.log(doc.createdAt);
  // 👉 Output: Original timestamp, not 2000-01-01
  

  //7.With transform (hides password in JSON output)

  const userSchemaa = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  userSchemaa.set('toJSON', {
    transform: function(doc, ret) {
      delete ret.password; // Removes password from JSON
      return ret;
    }
  });
  

const Users = mongoose.model('User', userSchema);
const user4 = new User({ username: 'john', password: 'secret123' });

console.log(JSON.stringify(user4)); 

// {
//     "username": "john",
//     "_id": "someObjectId",
//     "__v": 0
//   }


//ObjectId in Mongoose
//ObjectId is a special data type used by MongoDB and Mongoose to represent unique identifiers for documents.

const mongoose = require('mongoose');
const { Schema } = mongoose;

// User schema
const userSchemaaa = new Schema({
  name: String
});
const Userr = mongoose.model('User', userSchemaaa);

// Post schema with ObjectId reference to User
const postSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }
});
const Post = mongoose.model('Post', postSchema);


const user5 = await User.create({ name: 'Alice' });
const post = await Post.create({ title: 'Hello World', author: user._id });



/*
{
  "_id": "postObjectId",
  "title": "Hello World",
  "author": {
    "_id": "userObjectId",
    "name": "Alice",
    "__v": 0
  },
  "__v": 0
}
 */

//"author": "userObjectId"

const user6 = await User.create({ name: 'Alice', email: 'alice@example.com', age: 30 });
const post2 = await Post.create({ title: 'My first post', author: user._id });

const postWithAuthor = await Post.findOne({ title: 'My first post' })
  .populate('author', 'name email'); // Specify fields to populate
console.log(postWithAuthor);

/*
{
  "_id": "postObjectId",
  "title": "My first post",
  "author": {
    "_id": "userObjectId",
    "name": "Alice",
    "email": "alice@example.com"
  },
  "__v": 0
}

 */