// const { faker } = require("@faker-js/faker");

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(), // before version 9.1.0, use userName()
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// // console.log(getRandomUser());

// const mysql = require("mysql2");
// // console.log(typeof mysql);
// // console.log(mysql.createConnection);

// // create the connection
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "delta_app",
//   password : "Admin@9916"
// });

// // let q = "SHOW TABLES";
// // let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// // let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// // let users = [["123245ckauhsclnac", "123_usdbknjklalknddanajnckaerb", "abc@gamikcanhsldjanckajcnl.comb", "aaskjkjaldnaksbcb"], 
// //             ["156land", "akjsudaklkjandhbka", "khanldankjacslsdlk", "lanldkansdcka"]];

// let data = [];
// let q =  "INSERT INTO user (id, username, email, password) VALUES ?";

// for(let i=0; i<100; i++){
//    data[i] =getRandomUser();
//   // console.log(getRandomUser());
// }

// conn.query(q, [data], (err, result, fields) => {
//   if (err) {
//       console.error("Error inserting user:", err);
//       return;
//   }
//   console.log("User inserted successfully:", result);
// });





// Project


const { faker } = require("@faker-js/faker");
const express = require('express');
const mysql = require("mysql2");
const app = express();
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// create the connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password : "Admin@9916"
});

// let data = [];
// let q =  "INSERT INTO user (id, username, email, password) VALUES ?";

// for(let i=0; i<100; i++){
//    data[i] =getRandomUser();
// }

// conn.query(q, [data], (err, result, fields) => {
//   if (err) {
//       console.error("Error inserting user:", err);
//       return;
//   }
//   console.log("User inserted successfully:", result);
// });



//HOME Route
app.get("/", (req, res) => {
  let q = "SELECT count(*) from user";

  conn.query(q, (err, result, fields) => {
      if (err) {
          console.error("Error inserting user:", err);
          res.send("some error in db");
          return;
      }

      let count = result[0]["count(*)"]
      // console.log(result[0]["count(*)"]);
      // res.send(result[0]["count(*)"]);
      res.render("home.ejs", {count});
  });
})


//SHOW Route
app.get("/user", (req, res) => {
  let q = `SELECT * from user`;

  conn.query(q, (err, result, fields) => {
      if (err) {
          console.error("Error inserting user:", err);
          res.send("some error in db");
          return;
      }

      // console.log(result);
      // res.send(result);
      res.render("showusers.ejs", {result})
  });
})


//Edit User
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  conn.query(q, (err, result, fields) => {
    if (err) {
        console.error("Error inserting user:", err);
        res.send("some error in db");
        return;
    }

    // console.log(result);
    // res.send(result);
    res.render("edit.ejs", {res : result[0]});
  });  
})


//Update Route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password : formPass, username :  newUserName} = req.body;
  // let chechPass = `SELECT * FROM USER WHERE password='${password}'`;
  // if(!chechPass){
  //   res.send("password is incorrect");
  // }
  let q = `SELECT * FROM user WHERE id='${id}'`;
  conn.query(q, (err, result, fields) => {
    if (err) {
        console.error("Error inserting user:", err);
        res.send("some error in db");
        return;
    }

    if(formPass != result[0].password){
      res.send("Wrong Password");
    }else{
      let q2 = `UPDATE user SET username ='${newUserName}' WHERE id='${id}'`;
      conn.query(q2, (err, result) => {
        if(err){
          console.log(err);
          res.send("some error");
          return;
        }
        res.redirect("/user");
      })
    }

    // console.log(result);
    // res.send(result);
    // res.send(result);
  });
})

app.delete("/user/:id/delete", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  console.log(q);

  conn.query(q, (err, result) => {
    if(err){
      console.log(err);
      res.send("some error");
      return;
    }

    let q2 = `DELETE FROM user WHERE id = '${id}'`;
    conn.query(q2, (err, res) => {
      if(err){
        console.log(err);
        return;
      }
      console.log("deleted");
    })

    res.redirect("/user");
  })
});

app.get("/user/add", (req, res) => {
  res.render("adduser.ejs");
});

app.post("/user/add/posts", (req, res) => {
  let {username, password, email} = req.body;
  let id = faker.string.uuid();
  
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?) `;
  conn.query(q, [id, username, email, password], (err, result) =>{
    if(err){
      console.log(err);
      res.send("error");
      return;
    }

    res.send("User added Successfully");
  })
})

app.listen(8080, () => {
  console.log("server is running");
})