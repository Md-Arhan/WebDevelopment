const express = require("express"); // Its is a function
const app = express(); //here we are calling and storing in a variable, return a value, app is an object
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



// app.use((req, res) => {
//   res.send("hello")
// })
/*app.use([path], callback):
If no path is provided, it matches all routes and all HTTP methods (GET, POST, PUT, etc.).
It's often used for middleware, error handlers, or fallback routes. 

So Why Does Your app.use(...) Work?
Because you're not specifying a path, it's like saying:

“For any route and any HTTP method, run this function.”
So whether you go to /, /about, or even /random/xyz, it will respond with "hello".

**Methods Similar to app.use() (in behavior or purpose)
1. app.all(path, callback)
Handles all HTTP methods (GET, POST, PUT, etc.) for a specific path.

Unlike app.use(), you must provide a path.

2.Router-level router.use()
Just like app.use(), but used on an express.Router() instance.

3.app.use(express.static(...))
A special case of app.use() used to serve static files (e.g., HTML, CSS, images).

Still doesn’t require a path and applies globally.
ex :
app.use(express.static('public'));
If you open your browser and go to:
http://localhost:3000/ → It will serve public/index.html
http://localhost:3000/style.css → It will serve public/style.css
http://localhost:3000/script.js → It will serve public/script.js
*/



//app.get 
// app.get("/", (req, res) =>{
//     res.send("you  contacted root path");
// })

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


//query settings
// app.get("/search", (req, res) => {
//     let {q} = req.query;
//     if(!q){
//         res.send("noting search")
//     }else
//     res.send(`this are the search results ${q}`);
//     //even we can send res in form of html
//     console.log(req.query);
//     res.send("success");
// })




app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
