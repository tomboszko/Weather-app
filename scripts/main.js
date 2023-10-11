
document.addEventListener('DOMContentLoaded', () => {

    function handleWeatherSearch() {
        const userCity = cityInput.value;
        if (userCity) {
            getGeographicData(userCity, stateCode, countryCode, apiKey)
                .then((geoResponse) => {
                    if (geoResponse.length > 0) {
                        const latitude = geoResponse[0].lat;
                        const longitude = geoResponse[0].lon;
                        return getWeatherData(latitude, longitude, apiKey);
                    } else {
                        alert('City not found!');
                    }
                })
                .then((weatherResponse) => {

                    console.log('meteo data:', weatherResponse);
                    let temperature = weatherResponse.list[0].main.temp;
                    let city = userCity;
                    let description = weatherResponse.list[0].weather[0].description;
                    let icon = weatherResponse.list[0].weather[0].icon;
    
                    document.querySelector('#city').textContent = city;
                    document.querySelector('#description').textContent = description;
                    document.querySelector('#icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
                    document.querySelector('#temperature').textContent = `${temperature}°`;  
                    
                    displayForecasts(weatherResponse.dailyForecasts);
                })

                .catch((error) => {
                    console.error(error);
                });
               
        } else {
            alert('Enter a City');
        }
    }

    cityInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleWeatherSearch();
        }
    });
    
    searchButton.addEventListener('click', () => {
        handleWeatherSearch();
    });
    
});

