'use strict';


const base_url = `https://api.weatherapi.com/v1/current.json?key=7000886b7a1644aca81141658232406&q=Huntersville&aqi=no`;
const btn = document.querySelector('button');
const container = document.querySelector('.weather-content');
btn.addEventListener('click', getWeather);
async function getWeather(){
    let url = base_url;
    try {
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        addWeather(data);
    } catch (error) {
        console.log(error.message);
    }

}

function addWeather(data){

    container.innerHTML = '';
    const temperature = document.createElement('h5');
    temperature.textContent = "Local Temperature: " + data.current.temp_f + " degrees Farenheit";
    const humidity = document.createElement('h5');
    humidity.textContent = "Local Humidity: " + data.current.humidity + "%";
    const condition = document.createElement('h5');
    condition.textContent = "Local Condition: " + data.current.condition.text;


    container.append(temperature, humidity, condition);

}