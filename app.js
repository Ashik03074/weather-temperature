const key = '73adbc4eb1d7c5d0f1c0ddf363fd2722';
const url = 'http://api.openweathermap.org/data/2.5/weather';

function getData(city){
    fetch(`${url}?q=${city}&units=metric&appid=${key}`)
    .then(res => res.json())
    .then(data=> {
        getUI(data);      
    });
}



const search = document.getElementById('search-city');
search.addEventListener('click',function(){
    const city_value = document.getElementById('city-value');
    const city_name = city_value.value;
    getData(city_name);
})

function getUI(info){
    console.log(info.weather[0].main)
    document.getElementById('city-name').innerText = info.name || "Invalid location";
    document.getElementById('temp').innerText = info.main.temp;
    document.getElementById('env').innerText = info.weather[0].main;
    document.getElementById('city-value').value = "";
}

getData('Dhaka');




