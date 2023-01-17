//This describes the server/API

const express = require("express"); //access to the express library

const app = express(); //mkae a basic server using express

const { goats, nextId } = require("./goats")

//tell the app what kind of requests to listen for

app.get("/", (req, res) => {
    res.json({
        "message": "Welcome ot the GOAT API!"
    })
})

app.get("/goats", (req, res) => {

    // Extract query params
    const { maxAge } = req.query;

    maxAge ? res.json(goats.filter(g => g["age"] <= maxAge)) : res.json(goats);

    res.json(goats)
})

app.get("/goats/:id", (req, res) => {

    
    const id = req.params["id"];

    //filter the goat list for the relevant goat
    console.log(goats);
    const goat = goats.filter(g => g["id"] == id)[0];
    goat ? res.json(goat) : res.status(404).json({ error: "No such Goat!" });  //send a status of 404 if no goats are sound
    console.log(goat);

    
})

module.exports = app;
 