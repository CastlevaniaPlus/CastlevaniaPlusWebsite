
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
    const confirmEmail = req.body.confirmEmail
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if (validateCredentials(username, email, confirmEmail, password, confirmPassword)) {

        var sql = "INSERT INTO usuario (username, email, senha) VALUES ('"+ username +"', '" + email +"', '" + password + "')";
        con.query(sql, function (err, result) {
        if (err) throw err;
            console.log("Added " + username + " to database");
        });

        console.log("Register Successfull!")
        res.redirect("/login.html")

    } else {
        res.redirect("/register.html");
    }
})

router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if (validateCredentials(email, password)) {
        var sql = "SELECT email, senha FROM usuario WHERE email='"+ email +"' AND senha='" + password + "'";
        con.query(sql, function (err, result) {
        if (err) throw err;

        if (result.length != 0) {
            console.log("Login success!")
            res.redirect("/index.html");
        } else {
            console.log("Login failed!")
            res.redirect("/login.html");
        }
        });

    } else {
        console.log("Login failed!")
        res.redirect("/login.html");
    }
})

module.exports = router

function validateCredentials(username, email, confirmEmail, password, confirmPassword) {

    if (username == "") {
        console.log('Name cannot be empty')
    } else if (email == "") {
        console.log('Email cannot be empty')
    } else if (password == "") {
        console.log('Password cannot be empty')
    } else if (confirmPassword == "") {
        console.log('Password cannot be empty')
    } else if (confirmEmail == "") {
        console.log('Re-enter password cannot be empty')
    } else {
        return true
    }

    return false; 

}

function validateCredentials(email, password) {

    if (email == "") {
        console.log('Email cannot be empty')
    } else if (password == "") {
        console.log('Password cannot be empty')
    } else {
        return true
    }

    return false; 

}