const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// Goal: Print a samll forecase to the user
// 1. Print: "It is currently 17 degrees out. It feels like 17 degrees out."
// 2. Test Your work.

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// Geocoding
// Address --> Lat/Long --> Weather

// Goal: print the lat/long for Los Angeles
/*
    1. Fire off a new request to the URL explored to the browser.
    2. Have the request module parse it as JSON.
    3. Print both the latitude and longitude to the terminal
    4. Test your work!
*/

// Goal: Handle errors for geocoding request
/*
    1. Setup an error handler for low-level error.
    2. Test by disabling network request and running the app.
    3. Setup error handling for no matching results
    4. Test by altering the search term and running the app.
*/

// Goal: Accept location via command line arguement
/*
  1. Access the commnad line arguement without yargs
  2. Use the string value as the input for geocode
  3. Only geocode if a location was provided.
  4. Test tour work with a couple of location.
*/

// Goal : Use both destructuring and property shorthand in weather app
// 1. Use destructing in app.js, forecast.js and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address!");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
