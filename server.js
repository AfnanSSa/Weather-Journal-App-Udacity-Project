//Initializing an empty JS object to serve as the endpoint for all routes
projectData = {};

//Requiring Express to manage server and routes
const express = require("express");

//Creating an instance of the Express app
const app = express();

/*Middleware*/
const bodyParser = require("body-parser");
//Configuring Express to utilize body-parser middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors for enabling cross-origin requests
const cors = require("cors");
//Enabling all CORS requests
app.use(cors());

//Setting up the main project folder
app.use(express.static('website'));


//Setting up the server
//GET endpoint
const getData = (req, res) => res.status(200).send(projectData);
app.get("/all", getData); //GET request

//POST enpoint
const postData = (req, res) => {
    projectData = req.body; //Storing data received from the client in projectData
    console.log(projectData); //Logging the received data to the console
    res.status(200).send(projectData); //Sending back the received data as response
}

app.post("/add", postData); //POST request

const port = 8000; //Defining the port number to listen on

//Starting the server and listening on the specified port
const server = app.listen(port, listening)

//Callback function executed once the server is running
function listening() {
    console.log(`server is running on port ${port}`); //Logging a message indicating that the server is running
}
