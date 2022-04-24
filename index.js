
const express = require('express');
const path = require("path");
const app = express();
const axios = require("axios");


app.set("port", process.env.PORT || 3000);

app.get("/", (req,res) => 
{
    res.sendFile(path.join(__dirname, '/index.html'));
});

//------------------------------- STATIC FILES ------------------------------- 
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () =>
{
    console.log("Prueba");
    
});