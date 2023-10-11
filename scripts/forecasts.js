


function displayForecasts(dailyForecasts) {
    const forecastList = document.querySelector('#forecastList');
    forecastList.innerHTML = ''; // delete all children

                                // show the forecast for each day
    for (const date in dailyForecasts) {
        const dailyForecastItem = document.createElement('li');
        dailyForecastItem.innerHTML = `<strong>${date}:</strong><br>`;

        dailyForecasts[date].forEach((forecast) => {
            dailyForecastItem.innerHTML += `${forecast.description}, ${forecast.temperature}°C<br>`;
        });

        forecastList.appendChild(dailyForecastItem);
    }
}
