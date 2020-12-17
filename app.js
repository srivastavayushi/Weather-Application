const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=aeef1e7ac3847318ef367a09ad62c18f&query=26.78025,82.1627&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the internet");
  } else if (response.body.error) {
    console.log("Unable to find ");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". There is currently " +
        response.body.current.temperature +
        " degree temperature but feels like  " +
        response.body.current.feelslike +
        " degrees out."
    );
  }
});

// Geocoding

const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXl1c2hpLXNyaXZhc3RhdmEiLCJhIjoiY2tpcGg0eDQyMTd5eDJxcGZuN2FxcWc2NyJ9.311oXRcaonPhtO0m_ez3RA&limit=1";
request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to internet");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location, try another search");
  } else {
    const lattitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log("Lattitude : " + lattitude + " Longitude : " + longitude);
  }
});
