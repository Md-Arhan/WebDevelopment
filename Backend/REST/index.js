const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let post = [
    {
        id : uuidv4(),
        username : "arhan",
        content : "I love Coding", 
        
    },
    {
        id : uuidv4(),
        username : "Ur",
        content : "I love Coding c++", 

    },
    {
        id : uuidv4(),
        username : "Rehman",
        content : "I love Coding java", 
    }
]

app.get("/post", (req, res) => {
    res.render("index.ejs", {post});
})

app.get("/post/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    post.push({id, username, content});     //creating a object in the array (post array);
    res.redirect("/post");
    // res.send("post working");
})

app.get("/post/:id", (req, res) => {
    let {id} = req.params;
    let posts = post.find((p) => id === p.id);
    // console.log(id);
    // res.send("req working")
    if (!posts) {
        return res.status(404).send("Post not found");
    }

    res.render("show.ejs", { post : posts})
})

app.patch("/post/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let posts = post.find((p) => id === p.id);
    posts.content = newContent;
    console.log(posts)
    // console.log(id)
    res.redirect("/post");
})

app.get("/post/:id/edit", (req, res) => {
    let {id} = req.params;
    let posts = post.find((p) => id === p.id);
    console.log(posts);
    res.render("edit.ejs", {post : posts});
})

app.delete("/post/:id", (req, res) => {
    let {id} = req.params;
    post = post.filter((p) => id !== p.id);

    res.redirect("/post");
})

app.listen(port, () => {
    console.log("Server Running")
});