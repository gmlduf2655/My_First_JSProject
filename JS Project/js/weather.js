const API_KEY = "aa6ad18550977ce39e171be878a2681c";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).
    then ((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        const temp = parseInt(data.main.temp);

        city.innerText = `${data.name} ${temp}℃` ;
        weather.innerText = `${data.weather[0].main}`;
    });

}

function onGeoError() {
    alert("We can't find your position");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);