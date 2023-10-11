// get wetaher data from lat/long 

function getWeatherData(latitude, longitude, apiKey) {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    return fetch(weatherUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('ERROR: Please, try later for weather data!'); 
            }
            return response.json();
        })
        .catch((error) => {
            throw new Error(error.message);
        });
}