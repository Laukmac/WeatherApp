let now = new Date ();
let weekdays =  [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekdays[now.getDay()];
let hours = now.getHours(); 
let minutes = now.getMinutes();
let h3 = document.querySelector("h3");
h3.innerHTML= `${day}, ${hours}:${minutes}`;

function showTemperature(response){
  let h2 = document.querySelector("h2");
  h2.innerHTML= response.data.name;
  let temperature = document.querySelector("div.col-6");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let windspeed = document.querySelector("#windspeed");
  windspeed.innerHTML = response.data.wind.speed;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  console.log(response.data);
}

function search(event){
  event.preventDefault();
  let apiKey = "e304b015eb7af663852222eb9928a3f7";
  let city = document.querySelector("#city-Selected").value;
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&wind.speed=imperial`;
  console.log(axios);
  axios.get(apiUrl).then(showTemperature);
}
let citySearchForm = document.querySelector("#search-city");
citySearchForm.addEventListener("submit", search);
