function contact(){
    window.location.replace("mailto:pierre.lombard9@gmail.com");
}

const apiKey = 'e10e6b3ae76d342bcb9ae4a6c62e3b75';
let city = 'Pretoria';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function getWeather(){
fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = data.weather[0].description;
    const temperature = Math.round(data.main.temp - 273.15);
    console.log(`The weather in ${city} is ${weather} with a temperature of ${temperature}°C.`);
    document.getElementById("weather").innerHTML = city + ', ' + temperature + '°C';
  })
  .catch(error => console.error(error));
}

function getLocation(){
  city = window.prompt("Please enter your city:");
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  getWeather();
}

getWeather();

function goUp(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}