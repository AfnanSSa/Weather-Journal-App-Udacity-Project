/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date(); // Create a new Date object to get the current date and time
let newDate = d.toDateString();
// Base URL and API key for fetching weather data from OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',&appid=14a9d32b72864d3a3f8b2d22c0a6b94d&units=metric';

// Server URL for posting and getting data
const server = 'http://localhost:8000';

// Function to execute when the 'generate' button is clicked
const generatefunc = () => {
    // Getting values entered by the user for zip code and feelings
    const zip = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;

    // Fetch weather data based on the zip code
    getWeatherData(zip).then(data => {
        if(data){
            // Extract relevant information from the weather data
            const {
                main: {temp}, // Temperature
                name: city, // City name
                weather: [{description}], // Weather description
            } = data; 

            // Construct an object with the gathered information
            const info = {
                newDate, // Date
                city, // City name
                temp: Math.round(temp), // Temperature (rounded to nearest integer)
                description, // Weather description
                feelings, // User-entered feelings
            };

            // Post the gathered information to the server
            postData(server + "/add", info);
            
            // Update the user interface
            updateUI();
            // Make the entry section visible
            document.getElementById("entry").style.opacity = 1;
        }
    });
};

// Event Listener to trigger the generation of data when the 'generate' button is clicked
document.getElementById("generate").addEventListener("click", generatefunc);

// Function to fetch weather data from OpenWeatherMap API
const getWeatherData = async (zip) => {
    try{
        // Fetch weather data using the provided zip code
        const res = await fetch(baseURL + zip + apiKey);
        const data = await res.json();
        
        // Check if the response indicates an error
        if(data.cod !=200){
            // Display the error message on the user interface 
            error.innerHTML = data.message;
            setTimeout(_=> error.innerHTML='', 2000) // Clear the error message after 2 seconds
            throw `${data.message}`; // Throw an error message
        }
        return data; // Return the weather data
    } catch (error){
        console.log(error); // Log any errors to the console
    }
};

// Function to post data to the server
const postData = async (url="", info = {}) => {
    // Post data to the specified URL
    const res = await fetch (url, {
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify(info), // Convert the data object to JSON format

    });

    try{
        const newData = await res.json(); // Parse the response as JSON
        console.log(`You just saved`, newData); // Log a success message with the saved data
        return newData; // Return the saved data
    } catch (error){
        console.log(error); // Log any errors to the console
    }
};

// Function to fetch data from the server and update the user interface
const updateUI = async () => {
    // Fetch data from the server
    const res = await fetch(server + "/all");
    try{
        const saveData = await res.json(); // Parse the response as JSON
        // Update the user interface with the retrieved data
        document.getElementById("date").innerHTML = saveData.newDate;
        document.getElementById("city").innerHTML = saveData.city;
        document.getElementById("temp").innerHTML = saveData.temp + "&degC"; // Display temperature with degree symbol
        document.getElementById("description").innerHTML = saveData.description;
        document.getElementById("content").innerHTML = saveData.feelings;
    } catch(error){
        console.log(error) // Log any errors to the console
    }
};
