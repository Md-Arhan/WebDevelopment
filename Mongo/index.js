const mongoose = require("mongoose");
// const {Schema} = mongoose;

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then((res) => {
   console.log("Connection Successful");
}).catch(err => console.log(err));        //connection

const userSchema = new mongoose.Schema({
   name : String,
   age : Number,
   email : String
});

const User = mongoose.model("User", userSchema);  //use to create documents 
// const Employee = mongoose.model("Employee", userSchema);

const user2 = new User({
    name : "aeve",
    age: 21,
    email:"eve@gmail.com"
});

// console.log(user1);
// user1.save();

// user2.save().then((res) =>{
//     console.log(res)
// }).catch((err) =>{
//     console.log(err)
// });

// const doc = new User;
// console.log(doc);

//insert

// User.insertMany([
//     {name : "tony", age:20, email:"akjn@lknga"},
//     {name : "peter", age:21, email:"akjn@fkja"},
//     {name : "bruce", age:22, email:"akjn@kan"}
// ]).then((res) =>{
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// })


//Find

// User.find({age : {$gt : 21}}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// })

// User.findOne({age : {$gt : 21}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.findOne({_id : "68176198ff823f70f6aa15ba"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

User.findById("68176198ff823f70f6aa15ba").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


//Update

// User.updateOne({name:"adam"}, {age:49}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.updateMany({name:"adam", age:{$gt : 40}}, {age:50}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



//FindOneAndUpdate

// User.findOneAndUpdate({name : "tony"}, {age:60}, {returnDocument:'after'}).then((res) =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name : "tony"}, {age:60}, {new:false}).then((res) =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate("681762b5e23f5b3acffc382e", {age:70}, {new:false}).then((res) =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



//Delete 

// User.deleteOne({name:"tony"}, {translateAliases:true}).then((res)=>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

/*
const userSchema = new mongoose.Schema({
fullName: { type: String, alias: 'name' }

In the example above:
The actual field in MongoDB is fullName
But you can use the alias name in your code

User.updateMany(
  { name: "adam" }, // using alias instead of actual field
  { $set: { age: 50 } },
  { translateAliases: true }
)
}); 

Without translateAliases: true
If you don't use it and only pass { name: "adam" }, Mongoose will look for a literal field name in the document, which won’t match anything unless such a field exists.
*/


// User.findByIdAndDelete("6817624c6bf463769c687a12").then((res) => {
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findOneAndDelete({name:"peter"}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



//Schema Validations -> In book.js file

