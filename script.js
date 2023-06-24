const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.querySelector('.hum');
const windSpeed = document.querySelector('.wind');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city) {

    const api_key = "a9089761117c969ef7856ffefc1bb4bd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`) {
        document.body.style.backgroundImage = "url('assests/error.jpg')"; 
        weatherBody.style.display = "none";
        return;
    }

    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed} km/hr`;

    switch(weather_data.weather[0].main) {
        case 'Clouds': 
            document.body.style.backgroundImage = "url('assests/cloud.webp')";
            break;

        case 'Rain':
            document.body.style.backgroundImage = "url('assests/rain.webp')";
            break;

        case 'Mist':
            document.body.style.backgroundImage = "url('assests/mist.jpg')";
            break;   
        
        case 'Snow': 
            document.body.style.backgroundImage = "url('assests/snow.jpg')";
            break;
            
        case 'Clear':
            document.body.style.backgroundImage = "url('assests/clear.jpg')";
            break;    
    }

}


searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});
