
var express = require ("express");
var app = express();
const port = 3000

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.listen(port, () => console.log("Server started !"));
