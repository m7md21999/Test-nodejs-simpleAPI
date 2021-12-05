const express = require("express");
const https = require("https");

const app = express();

app.get("/hello", function(req,res){
https.get("https://api.kanye.rest/", function(resp){
console.log(resp.statusCode);

resp.on("data", function (data){
    result = JSON.parse(data);
    res.send("<h1>" + result.quote + "</h1>");
})
});
});

app.listen(3000, function(req,res) {
    console.log("Server is running on 3000");
});