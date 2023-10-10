
function getGeographicData() {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=$cityName,$stateCode,$countryCode&limit=1&appid=$apiKey`;

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
