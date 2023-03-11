// api keys
const API_KEY = `b3aea2a9b519e9736db07a0bd2309ee6`;
const loadData =  (city) => {


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => {displayTemperature(data)});
}

 
const displayTemperature = (data) => {
    const display = document.getElementById('temperature');
    const cityName = document.getElementById('cityName');
    const Weather = document.getElementById('Weather');
    console.log(data.weather[0].main)
    display.innerHTML = data.main.temp;
    cityName.innerText = data.name
    Weather.innerText = data.weather[0].main;
}


document.getElementById('btn-search').addEventListener('click', function(){
    const cityName = document.getElementById('search-field');
    loadData(cityName.value);
    cityName.value = ''
})