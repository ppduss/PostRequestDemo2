
var express = require ("express");
var app = express();
const port = 3000

app.set("view engine", "ejs");

app.listen(port, () => console.log("hello"));