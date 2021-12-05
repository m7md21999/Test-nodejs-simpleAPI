const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    console.log(__dirname + "/index.html");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
    console.log(req.body);
    res.send("This is a posting method");
})

app.listen(3000, function() {
    console.log("Listenning on port 3000!");
});
