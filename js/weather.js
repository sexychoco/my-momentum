const API_KEY = "914a28003ed167334d7fbe0a154a8e94";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather-span");
      const temperature = document.querySelector(".temperature-span");
      const location = document.querySelector(".location-span");
      weather.innerText = `${data.weather[0].main}`;
      temperature.innerText = `${data.main.temp}`;
      location.innerText = `${data.name}`;
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
