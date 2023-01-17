//This describes the server/API

const express = require("express"); //access to the express library

const app = express(); //mkae a basic server using express

//tell the app what kind of requests to listen for

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

module.exports = app;
