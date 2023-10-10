const apiKey = 'e748a217fdddf03424d6b4852488f4b5';
const cityName = 'Charleroi';
const stateCode = ''; // You can leave this empty if not applicable
const countryCode = 'BE'; // ISO country code
const limit = 1; // Limit the number of results to 1

// First API call to get geographic data
getGeographicData(cityName, stateCode, countryCode, apiKey)
    .then((geoResponse) => {
        // Extract latitude and longitude from geoResponse
        if (geoResponse.length > 0) {
            const latitude = geoResponse[0].lat;
            const longitude = geoResponse[0].lon;

            // Second API call to get weather data
            return getWeatherData(latitude, longitude, apiKey);
        } else {
            alert('No results found for the provided location.');
        }
    })
    .then((weatherResponse) => {
        // Handle weather data response here
        console.log(weatherResponse);
    })
    .catch((error) => {
        console.error(error);
    });
