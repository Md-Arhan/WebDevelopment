const express = require('express');
const app = express();
const morgan = require('morgan');
const ExpressError = require("./ExpressError");

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

// app.use(morgan('combined'));

//logger - morgan 
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();   //manipulating middleware by adding an extra middleware in between
//     console.log(req.method, req.hostname, req.path, req.time);
//     // console.log(morgan.combined)
//     next();
// })


//Checking query access

// app.use("/api", (req, res, next) =>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }

//     throw new ExpressError(401, "DENIED ACCESS");
// })

// app.use((req, res, next) => {
//     res.send("good");
// })

// Checking multiple middleware

// app.get("/api", checkToken, (req, res) => {
//     res.send("data");
// })

// const checkToken = (req, res, next) => {
//     console.log("I am only for random");
//         next();
// };

// checking not defined object

// app.get("/wrong", (req, res) => {
//     abcd = abcd;
// })




// if we use middle ware in the start if it send the response for the path if wont reach herre

app.use((req, res, next) => {
    console.log("hehe")
    // next();
})

/*
This middleware is matched first because it's registered before the route.
It logs hehe, then does not call next(), so the request hangs.
It doesn't send any response, so the browser keeps waiting.
The route handler app.get("/random") is never reached. 

You only need to call next() if:
Your middleware is not ending the response (i.e., not using res.send(), res.json(), res.end())
You want Express to continue to the next middleware or route handler

Yes — if your middleware does not send a response, and you want the request to continue through the middleware stack or reach a route handler or 404 handler, you must call next(), even for undefined routes.

Yes — all built-in middleware in Express uses next() internally
*/

app.get("/", (req, res)=>{
    res.send("HI");
})                                   // this wont send the response, middleware can send the response

app.get("/random", (req, res) =>{
    console.log("hi");
    res.send("bye");               //it wont reach here bcz middleware send response
});





//Error Handling

// app.get("/err", (req, res) => {
//     abcd = abcd;
// })       //if we use custom err then status must be undefined bcz we have not defines anything cutsom error

// app.get("/admin", (req, tes) =>{
//     throw new ExpressError(404, "Access Forbidden");

    
// })

// app.use((err, req, res, next) => {
//     console.log("----ERROR----");
//     // next(err);
//     let  {status = 500 /*Default status*/ , message} = err;
//     res.status(status).send(message);
//     res.send(err);  //custom handling error
// });

// app.use((err, req, res, next) => {
//     console.log("----ERROR2------");
//     next(err);   //express default middleware 
// })

//404 
// app.use((req, res) => {
//     res.send("page not found");
// })

app.listen(8080, () =>{
    console.log("server running");
});