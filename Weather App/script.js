const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    return fetch(FULL_URL).then((res) => {
 if(!res.ok){
            throw new Error('City not found');
        }
        return res.json();
    })
}

const searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)
        .then((res) => {
            showWeatherData(res);
        }).catch((error) => {
            alert("wrong inputs");
document.getElementById("city-name").innerText = "City not found";
document.getElementById("weather-type").innerText = "Not found";
document.getElementById("temp").innerText = "Not found";
document.getElementById("min-temp").innerText = "Not found";
    document.getElementById("max-temp").innerText = "Not found";
        })
}
showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}
