document.addEventListener('DOMContentLoaded', async () => {
    const cityElement = document.getElementById('city');

    // Function to get weather data for a specified city
    async function searchWeatherForCity(userCity) {
        // Delete spaces
        const trimmedCity = userCity.trim();
        // Check if no blank string
        if (trimmedCity === "") {
            alert('Please enter a city name.');
            return;
        }

        const capitalizedCity = trimmedCity.charAt(0).toUpperCase() + trimmedCity.slice(1);

        try {
            // Search for the geo data from the city
            const geoResponse = await getGeographicData(capitalizedCity, stateCode, countryCode, apiKey);

            if (geoResponse.length > 0) {
                const latitude = geoResponse[0].lat;
                const longitude = geoResponse[0].lon;
                const weatherResponse = await getWeatherData(latitude, longitude, apiKey);

                console.log('Météo data:', weatherResponse);

                const city = capitalizedCity;
                const temperature = weatherResponse.list[0].main.temp; 
                const description = weatherResponse.list[0].weather[0].description;
                const icon = weatherResponse.list[0].weather[0].icon;

                                const temperatureForecast = []; // array to store the forecast temperatures

                    // iteration to get the forecast temperatures
                    // ...
for (let i = 0; i < weatherResponse.list.length && i < 5 * 8; i += 8) {
    const temp = weatherResponse.list[i].main.temp;
    const icon = weatherResponse.list[i].weather[0].icon;

    temperatureForecast.push({temp,icon});
}
// ...

// update the forecast list
const forecastList = document.getElementById('forecastList');
forecastList.innerHTML = '';

// create a list item for each forecast temperature
temperatureForecast.forEach((item) => {
    const listItem = document.createElement('li');
    const iconImg = document.createElement('img');
    iconImg.src = `https://openweathermap.org/img/wn/${item.icon}.png`;
    iconImg.alt = 'Weather Icon';
    listItem.textContent = `${item.temp}°`; // here to add the day name

    listItem.appendChild(iconImg);
    forecastList.appendChild(listItem);
});


            {
 // Update the city element with the new city name
                cityElement.textContent = city;

                document.querySelector('#description').textContent = description;
                document.querySelector('#icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
                document.querySelector('#temperature').textContent = `${temperature}°`;
    }
                // Update local storage with the last city
                localStorage.setItem('lastCity', capitalizedCity);
            } else {
                alert('City not found!');
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Event handler for clicking on the city name
    cityElement.addEventListener('click', () => {
        // Allow the user to edit the city name
        const newCity = prompt('Enter a city:');
        if (newCity !== null) {
            searchWeatherForCity(newCity); // Update the weather data for the new city
        }
    });

    // Get the last city chosen from local storage
    const lastCity = localStorage.getItem('lastCity');

    if (lastCity) {
        cityElement.textContent = lastCity;

        await searchWeatherForCity(lastCity);
    }
});
