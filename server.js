const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) => {
res.send("<h1>Hello Mohammed</h1>");
});

app.get("/contact",(req,res) => {
    res.send("<h1>This is the contact page!</h1>");
    });

app.get("/about",(req,res) => {
    res.send("<h1>This is mohammed and you are at the about us page</h1>");
    });

app.listen(port, () => {
    console.log("Port lsiteinng is = 3000");
});

