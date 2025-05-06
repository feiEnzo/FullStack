require('colors');

var http = require('http');

var express = require('express');
const bodyParser = require("body-parser");

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.set("views", "./views")

var server = http.createServer(app);

server.listen(80);

console.log("server running on localhost:80 ...".rainbow);

users = {'admin': '1234'}

app.post("/login", function (req, res) {
    let username = req.body.username
    let password = req.body.password
    let logged = false
    if (users[username] != null && users[username] === password){
        logged = true
    }
    res.render("resposta.ejs", {logged, username, registered: null})

})

app.post("/cadastra", function (req, res) {
    let username = req.body.username
    let password = req.body.password
    let registered = false
    if (users[username] == null){
        registered = true
        users[username] = password
    }
    res.render("resposta.ejs", {registered, username, logged: null})

})