const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.querySelector('.hum');
const windSpeed = document.querySelector('.wind');

async function checkWeather(city) {
    const api_key = "a9089761117c969ef7856ffefc1bb4bd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});
