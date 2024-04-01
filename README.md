# Weather Journal App

This project is part of the Udacity Front End Developer Nano Degree program. The Weather Journal App is a simple web application that allows users to enter a zip code and their feelings to get the current weather for that location and how they feel. The application fetches data from the OpenWeatherMap API to retrieve the weather information based on the provided zip code.

## Features

- **Weather Data Retrieval:** The app fetches weather data from the OpenWeatherMap API based on the user's input zip code.
- **User Interaction:** Users can input their feelings along with the zip code to store in the application.
- **Dynamic UI Updates:** The UI updates dynamically to display the fetched weather data and user-entered feelings.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Usage

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the server using `node server.js`.
4. Open the app in your web browser.

## API Key

To use the OpenWeatherMap API, you will need to sign up for an API key on their website. Once you have the API key, you can replace the placeholder in the `app.js` file with your actual API key.

## Project Structure

- `website/`: Contains the client-side code including HTML, CSS, and JavaScript files.
- `server.js`: The server-side code responsible for handling API requests and serving the client-side files.
- `package.json`: Contains the project dependencies and scripts.

## Development

If you wish to modify or enhance the Weather Journal App, you can do so by editing the HTML, CSS, and JavaScript files in the `website/` directory. Additionally, you can extend the functionality by adding more features or integrating with other APIs.
