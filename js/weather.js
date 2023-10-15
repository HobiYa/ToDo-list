const API_KEY = "f8a2225fb6a880893ec38833fc252477";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector(".weather span:first-child");
    const weather = document.querySelector(".weather span:nth-child(2)");
    const humidity = document.querySelector(".weather span:nth-child(3)");
    const temp = document.querySelector(".weather span:last-child");
    
    city.innerText = `지역 : ${data.name}`; 
    weather.innerText = `날씨 : ${data.weather[0].main}` ;
    humidity.innerText = `습도 : ${data.main.humidity}`;
    temp.innerText = `온도 : ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)