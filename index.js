const express = require('express');
const parser = require('body-parser')
const routers = require('./js/Database')

const app = express();

app.use(express.static('src'))

app.use(parser.urlencoded({ extended: true }))

app.use(express.json())

app.use(routers)

app.listen(8080)