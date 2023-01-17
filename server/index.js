//Run the server/ API

const app = require("./app");

//set the app off listening with a callback function

const port = 3000;

app.listen(port, () => {; // on a numbered port
    console.log(`App listening on port ${port}...`);
});