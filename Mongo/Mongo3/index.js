const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //parsing the data coming from client side
app.use(methodOverride("_method"));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
  } catch (error) {
    next(error)
  }
});

//New Route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "page not foound");
  res.render("new.ejs");
});

app.post("/chats", async ( req, res, next) => {
  try {
    
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    // res.send(newChat);
    // console.log(newChat);
  
    await newChat.save();
    //   .then((res) => console.log("chat saved"))
    // .catch((err) => console.log(err));
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
  console.log(chat);
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  // Take the value of req.body.msg
  // Assign it to a new variable named newMsg
  /*key is the property name
value is the data you're assigning to that key
So the value on the right-hand side is what actually gets stored.

let key = "msg";
let obj = { msg: "Hello!" };
console.log(obj[key]); // Accessing using dynamic key

 */
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});





function asycnWrap(fn){
  /*asyncWrap() returns a wrapper function.
Express stores that wrapper function.
When request comes, Express calls the wrapper function.
The wrapper function immediately calls your async function, with .catch() attached.
So there is only one real execution at request time, but the function Express calls is your wrapped version. */
  return function(req, res, next){
    fn(req, res, next).catch((err) => next(err));
  }

  /*
  Avoiding try-catch everywhere, instead of writing try catch in every route, wrapping up with single function for every route
  Handling all errors in one place.
  Any error inside async function will be automatically caught.
  */
}






//NEW - Show Route for error handling
// app.get("/chats/:id", async (req, res, next) => {
//   /*1. if (!chat) ➤ Custom error
// 🔍 Happens when the ID is valid format-wise but does not match any document in the DB.
// Example: /chats/663f8ee3b7c6c79c5cbe0000
// MongoDB doesn’t throw an error — it just returns null.
// So you manually detect it and pass a custom ExpressError.

// 2. catch (error) ➤ Unexpected or DB-related errors
// 🔥 Happens when:
// ID is invalid format (e.g. too short, wrong characters)
// Chat.findById(id) throws a CastError
// DB connection issues
// Any internal server/runtime errors
//  */
//   try {
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     if(!chat){
//       next( new ExpressError(404, "Chat not found"));  // search portion error handles by these created object error
//     }   // if we remove this if, then if we give wrong lenght id then the ejs provide ejs error
//     res.render("edit.ejs", {chat});
//   } catch (error) {   //handles the id error, casting, the id which we bought we cannot search thats why this catch blocks catches the error, which handle all the error
//     next(error)
//   }
// })

app.get("/chats/:id", asycnWrap(async (req, res, next) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);

  if (!chat) {
    // Custom error: sends to error handler middleware
    // Async functiondoes not call next implicitly we need to call explicitly
    return next(new ExpressError(404, "Chat not found"));
  }

  /*
Reduces boilerplate — no repeated try...catch in every route
Cleaner, more readable code focused on business logic
Centralizes error handling by forwarding errors to Express next()
Automatically catches all async errors and promise rejections
Prevents server crashes from unhandled promise rejections
Still allows custom error handling inside route when needed
  */

  res.render("edit.ejs", { chat });
  //if wromg id send to chat then ejs give you the error not mongoose, when u give wrong bu wrong length then the error is from monggose
}));





app.delete("/chats/:id", async (req, res) =>{
  try {
    let { id } = req.params;
    let deleted =await Chat.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/chats");
    
  } catch (error) {
    next(err);
  }
})

app.get("/", (req, res) => {
  res.send("root is working");
});





//Error Handling MiddleWare

const handleValidationErr = (err) => {
    console.log("This was a validation error, please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err, req, res, next) => {
  console.log(err.name);  //err.name and other methods are from express middleware handler
  if(err.name === "ValidationError"){
    err = handleValidationErr(err);
  }
  next(err);
})

app.use((err, req, res, next) => {
  let {status = 500, message = "Some Error Occured"} = err;
  console.log(err.stack)
  res.status(status).send(message);
  // res.send(err);
})

app.listen(8080, () => {
  console.log("Server is running");
});
