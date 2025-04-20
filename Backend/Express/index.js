const express = require("express"); // Its is a function
const app = express(); //here we are calling and storing in a variable
// console.log(app.listen);        //Give you the properties and methods.

const port = 8080;


//app.use use for middle ware controll
// app.use((req, res) => {
//     console.log("working")
//   //   console.log("request recieved");
//   //   console.log(req);
//   //   res.send({
//   //     name: "red",
//   //     color: "blue"
//   //   }).
//   let code = `<h1> Hello</h1>`;
//   res.send(code);
// });



//app.get 
app.get("/", (req, res) =>{
    res.send("you  contacted root path");
})

// app.get("/apple", (req, res) =>{
//     res.send("you  contacted apple path");
// })

// app.get("/something", (req, res) => {
//     res.send("This page doesn't exist");
// });

// app.post("/orange", (req, res) =>{
//     res.send("you send a post")
// })





//path parameter
// app.get("/:username/:id", (req, res) => {
//     let {username , id} = req.params;
//     let htmlstr = `<h2> hello<h2>`
//     console.log(htmlstr);
//     res.send(htmlstr);
//     // res.send(username, id)
//     // console.log(req.params);
//     // res.send("hii im root")
// })


app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("noting search")
    }else
    res.send(`this are the search results ${q}`);
    //even we can send res in form of html
    console.log(req.query);
    res.send("success");
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
