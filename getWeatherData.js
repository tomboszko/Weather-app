function getWeatherData() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=minutely,hourly,alerts&appid=$apiKey`;
    
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






