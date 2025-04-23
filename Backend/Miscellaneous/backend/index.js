const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`GET response ${user}`);
})

app.post("/register", (req, res) => {
    let {user , password} = req.body;
    console.log(req.body);
    res.send(`POST response ${user}`)
})

app.listen(PORT, () => {
    console.log("Server Started")
})