

const apiKey ='f2f9bb0b6bea146779fdc9e846c7a4b'; // big bordel with that !!! must fix it
const stateCode = ''; 
const countryCode = ''; 
const limit = 1;
// get lat/long from city name

function getGeographicData(cityName, stateCode, countryCode, apiKey) {// put the link between backticks, it'more readable
    let geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;

    return fetch(geoUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('ERROR: Please, try later for geographic data!');
            }
            return response.json();
        })
        .catch((error) => {
            throw new Error(error.message);
        });

        console.log(geoUrl);
}

// async function getWeatherData(cityName, stateCode, countryCode, apiKey) {
//     try {
//       const geoData = await getGeographicData(cityName, stateCode, countryCode, apiKey);
//       const { lat, lon } = geoData[0];
//       const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//       const response = await fetch(weatherUrl);
//       const weatherData = await response.json();
//       return weatherData;
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getWeatherData('New York', 'NY', 'US', apiKey)
//     .then((weatherData) => {
//       console.log(weatherData);
//     });