const express = require('express');
const parser = require('body-parser')
const routers = require('./js/Database')

const app = express();

app.use(express.static('src'))

app.use(parser.urlencoded({ extended: true }))

app.use(express.json())

app.use(routers)

// app.get("/src/index.html", function(req, res){
//     res.sendFile(__dirname + "/src/index.html")
// })

// app.get("/src/read-more.html", function(req, res){
//     res.sendFile(__dirname + "/src/read-more.html")
// })

// app.get("/src/characters.html", function(req, res){
//     res.sendFile(__dirname + "/src/characters.html")
// })

// app.get("/src/game.html", function(req, res){
//     res.sendFile(__dirname + "/src/game.html")
// })

// app.get("/src/login.html", function(req, res){
//     res.sendFile(__dirname + "/src/login.html")
// })

// app.get("/src/register.html", function(req, res){
//     res.sendFile(__dirname + "/src/register.html")
// })

app.listen(8080)