
document.addEventListener('DOMContentLoaded', () => {
    const cityElement = document.getElementById('city');
    
    // Function to get weather data for a specified city
    function searchWeatherForCity(userCity) {

        // delete spaces
        const trimmedCity = userCity.trim();
        //check if no blank string
        if (trimmedCity === "") {
            alert('Please enter a city name.');
            return;
        }
    
        const capitalizedCity = trimmedCity.charAt(0).toUpperCase() + trimmedCity.slice(1);

        // Search for the geo data from the city
        getGeographicData(capitalizedCity, stateCode, countryCode, apiKey)
            .then((geoResponse) => {
                if (geoResponse.length > 0) {
                    const latitude = geoResponse[0].lat;
                    const longitude = geoResponse[0].lon;
                    return getWeatherData(latitude, longitude, apiKey);
                } else {
                    alert('City not found!');
                }
            })
            // Show the weather data in console
            .then((weatherResponse) => {
                console.log('Météo data:', weatherResponse);
                const temperature = weatherResponse.list[0].main.temp;
                const city = capitalizedCity;
                const description = weatherResponse.list[0].weather[0].description;
                const icon = weatherResponse.list[0].weather[0].icon;

                // Update the city element with the new city name
                cityElement.textContent = city;

                document.querySelector('#description').textContent = description;
                document.querySelector('#icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
                document.querySelector('#temperature').textContent = `${temperature}°`;

                // Update local storage with the last city
                localStorage.setItem('lastCity', capitalizedCity);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Event handler for clicking on the city name
    cityElement.addEventListener('click', () => {
        // Allow the user to edit the city name
        const newCity = prompt('Enter a new city:');
        if (newCity !== null) {
            searchWeatherForCity(newCity); // Update the weather data for the new city
        }
    });

    // Get the last city chosen from local storage
    const lastCity = localStorage.getItem('lastCity');

    if (lastCity) {

        // Display the last city
        cityElement.textContent = lastCity;

        searchWeatherForCity(lastCity);
    }
});
