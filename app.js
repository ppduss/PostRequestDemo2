
var express = require ("express");
var app = express();
var bodyParser = require ("body-parser");
const port = 3000
const friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
//
//

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("friends", {friends: friends}); 

})

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(port, () => console.log("Server started !")); 
