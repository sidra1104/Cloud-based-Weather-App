document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=266bb6287f9c4426bbc123143251602&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weather-result').innerHTML = `<p style="color: red;">City not found!</p>`;
        } else {
            document.getElementById('weather-result').innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').innerHTML = `<p style="color: red;">Error fetching data</p>`;
    }
}
