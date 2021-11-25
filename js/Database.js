
const express = require('express');
const mysql = require('mysql2');
const router = express.Router()

var con = mysql.createConnection({
    host: "localhost",
    user: "Rafael",
    password: "senhaMuitoForte16287",
    database: "castlevania_db"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});

router.post("/register", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    var sql = "INSERT INTO usuario (username, email, senha) VALUES ('"+ username +"', '" + email +"', '" + password + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Added " + username + " to database");
    });

    res.redirect("/login.html")
})

router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    var sql = "SELECT email, senha FROM usuario WHERE email='"+ email +"' AND senha='" + password + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;

      if (result.length != 0) {
            console.log("Login success!")
      } else {
          console.log("Login failed!")
      }
    });

    res.redirect("/index.html");

})

module.exports = router