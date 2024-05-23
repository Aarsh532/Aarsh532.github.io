document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const apiKey = 'FJGK3TS54PDABD6HGUWNZKHN9';
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const forecastDiv = document.getElementById('forecast');
            forecastDiv.innerHTML = `<h2>15-day Weather Forecast for ${city}, ${country}</h2>`;
            const forecastList = document.createElement('ul');
            data.days.forEach(day => {
                const listItem = document.createElement('li');
                listItem.textContent = `${day.datetime}: ${day.conditions}, High: ${day.tempmax}°C, Low: ${day.tempmin}°C`;
                forecastList.appendChild(listItem);
            });
            forecastDiv.appendChild(forecastList);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            const forecastDiv = document.getElementById('forecast');
            forecastDiv.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });
});
