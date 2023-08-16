const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city.trim() !== '') {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;

        weatherInfo.style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
