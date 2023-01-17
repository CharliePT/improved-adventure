//This describes the server/API

const express = require("express"); //access to the express library
const cors = require("cors");

const app = express(); //mkae a basic server using express
const logger = require("./logger");

//Middleware
// req -> middleware -> endpoint -> response 
//req -> cors -> API -> response

app.use(express.json());
app.use(cors());
app.use(logger);




//Endpoint
let { goats, nextId } = require("./goats")

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

app.post("/goats", (req, res) => { //allows post requests

    //extract the info
    const newGoat = req.body;

    console.log(newGoat);

    newGoat["id"] = nextId;

    nextId += 1;

    goats.push(newGoat);

    res.status(201).json(newGoat);
    
})

app.get("/goats/:id", (req, res) => {

    
    const id = req.params["id"];

    //filter the goat list for the relevant goat
    console.log(goats);
    const goat = goats.filter(g => g["id"] == id)[0];
    goat ? res.json(goat) : res.status(404).json({ error: "No such Goat!" });  //send a status of 404 if no goats are sound
    console.log(goat);

    
})


app.delete("/goats/:id", (req,res) => {
    //pull id from the url
    const id = req.params["id"];
    //check if is real
    const exists = goats.filter(g => g["id"] == id).length == 1;
    //if
    if (exists){
        goats = goats.filter(g => g["id"] != id);

        res.status(200).json({
            message: `Goat ${id} deleted`
        })
    }
    else [
        res.status(404).json({
            error:"No such goat!"
        })
    ]
    
})

module.exports = app;
 