

const apiKey = 'ef2f9bb0b6bea146779fdc9e846c7a4b';
const stateCode = ''; 
const countryCode = ''; 
const limit = 1;


function getGeographicData(cityName, stateCode, countryCode, apiKey) {
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

        
}