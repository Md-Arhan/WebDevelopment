const mongoose = require("mongoose");
const Chat = require("./models/chats");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

// let chat1 = new Chat({
//     from: "arhan",
//     to: "umair",
//     msg: "send me your exam sheets",
//     created_at :  new Date()   //UTC
// })

// chat1.save().then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })

const data = [
    {
      from: "abban",
      to: "umair",
      msg: "Hey, how are you?",
      created_at: new Date("2025-05-01T10:30:00Z"),
    },
    {
      from: "arhan",
      to: "ezaz",
      msg: "I'm good, thanks! You?",
      created_at: new Date("2025-05-01T10:31:00Z"),
    },
    {
      from: "danish",
      to: "altaf",
      msg: "Don't forget the meeting at 3 PM.",
      created_at: new Date("2025-05-03T08:20:00Z"),
    },
    {
      from: "azhar",
      to: "rishish",
      msg: "Thanks for the reminder!",
      created_at: new Date("2025-05-03T08:22:00Z"),
    },
    {
      from: "zaiban",
      to: "mustafa",
      msg: "Wanna grab coffee later?",
      created_at: new Date("2025-05-04T14:15:00Z"),
    },
  ]

Chat.insertMany(data);
