const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(__dirname+"/statics"));

app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/statics/pages/index.html'));
});

app.get("/game",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(path.join(__dirname,"/statics/pages/game.html"));
});

app.get("/gl",(req,res)=>{
    res.statusCode = 307;
    res.redirect("https://google.com");
});

app.get("/ghb",(req,res)=>{
    res.statusCode = 307;
    res.redirect("https://github.com");
});

app.get("/bzu",(req,res)=>{
    res.statusCode = 307;
    res.redirect("https://www.birzeit.edu/ar");
});

app.get("*",(req,res)=>{
    res.statusCode = 404;
    res.sendFile(path.join(__dirname,"/statics/pages/404.html"));
});

app.listen(3000 || process.env.PORT,()=>{
    console.log('Listining...');
});