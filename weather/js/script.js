const apiurl="https://api.openweathermap.org/data/2.5/weather?appid=385a3d9c0274cfb2bcaa2f12679a2f61&units=metric&q=";

function c(){
var city=document.querySelector('#search input').value;
weather(city);
}

async function weather(city){
const res = await fetch(apiurl+city);
const data = await res.json();
console.log(data);
console.log(data.main.temp);
document.querySelector('#temp').innerHTML = Math.round(data.main.temp)+" °C";
document.querySelector('#city').innerHTML = data.name;
document.querySelector('#Humidity').innerHTML = data.main.humidity+" %";
document.querySelector('#wind').innerHTML = data.wind.speed+"km/hr";
}
