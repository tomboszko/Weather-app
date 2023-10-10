const dotenv = require('key.env');
dotenv.config();

const apiKey = process.env.API_KEY;
const stateCode = ''; 
const countryCode = ''; 
const limit = 1;


function getGeographicData(cityName, stateCode, countryCode, apiKey) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;

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
}



function getWeatherData(latitude, longitude, apiKey) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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


const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click', () => {
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
                
                const temperature = weatherResponse.list[0].main.temp;
                const city = userCity;
                const description = weatherResponse.list[0].weather[0].description;
                const icon = weatherResponse.list[0].weather[0].icon;

                document.querySelector('#city').textContent = city;
                document.querySelector('#description').textContent = description;
                document.querySelector('#icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
                document.querySelector('#temperature').textContent = `${temperature}°`;
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        alert('enter a City');
    }
});
