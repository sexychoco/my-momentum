const API_KEY = "914a28003ed167334d7fbe0a154a8e94";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-span");
      const temparture = document.querySelector("#temparture-span");
      const city = document.querySelector("#location-span");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
      temparture.innerText = `${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
