const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.static("public"));

app.get("/home", function(req, res){
   // res.sendFile(__dirname + "/home");
   res.render("home");
});

app.get("/about", function(req, res){
   res.render("about");
});

app.get("/projects", function(req, res){
   res.render("projects");
});

app.get("/resume", function(req, res){
   res.render("resume");
});










app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
  });