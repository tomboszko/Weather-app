/*const chartDisplay = document.getElementById('chart');
const xValues = temperatureForecast.map(item => item.day); // Récupérez les noms des jours
const yValues = temperatureForecast.map(item => item.temp); // Récupérez les températures
console.log(xValues);
console.log(yValues);
new Chart(chartDisplay, {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      label: 'Température',
      data: yValues,
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});*/


function createChart(xValues, yValues) {
    const chartDisplay = document.getElementById('chart');

    new Chart(chartDisplay, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'Temp',
                data: yValues,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
i
let temperatureForecast = [];
temperatureForecast.push({ temp, icon, day: dayName });
createChart(temperatureForecast.map(item => item.day), temperatureForecast.map(item => item.temp));

