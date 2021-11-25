const express = require('express');
const mysql = require('mysql2');

const app = express();

app.get("/src/index.html", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
})

app.get("/src/read-more.html", function(req, res){
    res.sendFile(__dirname + "/src/read-more.html")
})

app.get("/src/characters.html", function(req, res){
    res.sendFile(__dirname + "/src/characters.html")
})

app.get("/src/game.html", function(req, res){
    res.sendFile(__dirname + "/src/game.html")
})

app.get("/src/login.html", function(req, res){
    res.sendFile(__dirname + "/src/login.html")
})

app.get("/src/register.html", function(req, res){
    res.sendFile(__dirname + "/src/register.html")
})

var con = mysql.createConnection({
  host: "localhost",
  user: "Rafael",
  password: "senhaMuitoForte16287"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(8080)