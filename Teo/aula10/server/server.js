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

server.listen(3000);

console.log("server running on port 3000...".rainbow);

let colors = {0: "red", 1: "green", 2: "blue"}
let i = 0


app.get("/index", function (req, res){
    let color = colors[i]
    res.render("colors.ejs", {color})
})

app.get("/colors", function (req, res) {
    let color = colors[i]
    i = (i+1)%3
    res.render("colors.ejs", {color})
})



app.post("/index", function (req, res) {
    let color = colors[i]
    res.render("colors.ejs", {color})
})