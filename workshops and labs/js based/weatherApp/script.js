const cityLocation = document.getElementById("location");
const mainTemperature = document.getElementById("main-temperature");
const weatherMain = document.getElementById("weather-main");
const humidityElement = document.getElementById("humidity");
const feelsLike = document.getElementById("feels-like");
const windElement = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const selectMenu = document.getElementById("select-menu");
const weatherBtn = document.getElementById("get-weather-btn");
const weatherIcon = document.getElementById("weather-icon");

const topSection = document.querySelector(".top-section");
const bottomSection = document.querySelector(".bottom-section");

async function getWeather(city) {
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }
        return await response.json();
    }
    catch (err) {
        alert("Something went wrong, please try again later");
        console.log(err);
        return;
    }
}

async function showWeather(city) {
    if (selectMenu.value === "") {
        alert("Please select the location!");
        return;
    }
    const weatherData = await getWeather(selectMenu.value);
    const { main, weather, wind } = weatherData;

    topSection.classList.remove("hide");
    bottomSection.classList.remove("hide");

    mainTemperature.querySelector("span").textContent = main.temp;
    humidityElement.querySelector("span").textContent = main.humidity;
    feelsLike.querySelector("span").textContent = main.feels_like;
    weatherMain.textContent = weather[0].main;
    weatherIcon.src = weather[0].icon;
    windElement.querySelector("span").textContent = wind.speed;
    windGust.querySelector("span").textContent = (wind.gust) ? wind.gust : `N/A`;
    cityLocation.textContent = weatherData.name;
    console.log(weatherData);
}
weatherBtn.addEventListener("click", showWeather);

document.addEventListener('DOMContentLoaded', (event) => {
    topSection.classList.add("hide");
    bottomSection.classList.add("hide");
});