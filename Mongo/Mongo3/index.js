const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //parsing the data coming from client side
app.use(methodOverride("_method"));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  // res.send(newChat);
  // console.log(newChat);

  newChat
    .save()
    .then((res) => console.log("chat saved"))
    .catch((err) => console.log(err));
  res.redirect("/chats");
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

app.delete("/chats/:id",async (req, res) =>{
  let { id } = req.params;
  let deleted =await Chat.findByIdAndDelete(id);
  console.log(deleted);
  res.redirect("/chats");
})

app.get("/", (req, res) => {
  res.send("root is working");
});

app.listen(8080, () => {
  console.log("Server is running");
});
