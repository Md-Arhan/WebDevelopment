const express = require('express');
const app = express();
const morgan = require('morgan')

//middleware -> response send

// app.use((req, res, next) => {
//     // let query = req.query;
//     // console.log(query);
//     // res.send("middle ware finished");
//     console.log("hi");
//     return next();  //use to call actual final execution, if not second middleware
//     console.log("this is after next")
// });

// app.use((req, res, next) => {
//     console.log("hello")
//     res.send("hello");        //chain break now this will be executed if we put next it goes to actual path
// })

app.use(morgan('combined'));

//logger - morgan 
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();   //manipulating middleware by adding an extra middleware in between
    console.log(req.method, req.hostname, req.path, req.time);
    // console.log(morgan.combined)
    next();
})


app.get("/", (req, res)=>{
    res.send("HI");
})                                   // this wont send the response, middleware can send the response

app.get("/random", (req, res) =>{
    console.log("hi");
    res.send("bye");               //it wont reach here bcz middleware send response
})

app.listen(8080, () =>{
    console.log("server running");
});