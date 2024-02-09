import { Chart } from 'chart.js';

import { getWeatherData } from './getweather.js';

let city = 'your_city_name';
getWeatherData(city)
    .then(data => {
        forecastData = data;
        // Now you can use forecastData
    });

let forecastData = {
    $data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Temperature',
            data: [25, 27, 29, 30, 28],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    // your forecast data here
};

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line', // or 'bar', 'pie', etc.
    data: forecastData,
    options: {
        // chart options go here
    }
});