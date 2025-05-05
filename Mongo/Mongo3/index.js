const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chats")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.json());
app.use(express.static(path.join(__dirname, "public")))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then((res) =>{
    console.log("Connection Successful");
}).catch(err => console.log(err));

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})

app.get("/", (req, res) =>{
    res.send("root is working");
})

app.listen(8080, () =>{
  console.log("Server is running")
})