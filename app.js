
var express = require ("express");
var app = express();
const port = 3000

app.set("view engine", "ejs");

//

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    res.send("post route !");
})

app.get("/friends", function(req, res){
    const friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {friends: friends});
});

app.listen(port, () => console.log("Server started !")); 
