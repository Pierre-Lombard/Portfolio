function contact(){
    window.location.replace("mailto:pierre.lombard9@gmail.com");
}

const apiKey = 'Ye10e6b3ae76d342bcb9ae4a6c62e3b75';
const city = 'Pretoria';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = data.weather[0].description;
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
    console.log(`The weather in ${city} is ${weather} with a temperature of ${temperature}°C.`);
  })
  .catch(error => console.error(error));
