const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/roledice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6)  + 1;   //coming from database
    res.render("roledice", {num : diceVal});
})

// app.get("/id/:username", (req, res) => {
//     const followers = ["adma", "ahbjka", "kahf", "kahb"];
//     let {username} = req.params;
//     console.log(username);
//     res.render("instagram.ejs", {username, followers});
// })

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const data = require('./data.json');
    console.log(data);
    //data.username is incorrect because username is just a string, not a property of the data object.
    //Use data[username] to dynamically access the data for the user based on the username path parameter.
    //Yes, exactly! The bracket notation in JavaScript is a powerful way to access properties of an object dynamically.
    const InstaData = data[username]
    if(InstaData){
        res.render("insta.ejs", {InstaData});
    }else{
        res.render("error.ejs")
    }

    //dont use your personal names, bca data i not there in the array
})

app.listen(port, () => {
    console.log("Server started");
})