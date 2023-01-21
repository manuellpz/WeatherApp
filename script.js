const txtLocation = document.querySelector("#txtLocation");
const infoCondition = document.querySelector("#info_condition");
const infoTemperature = document.querySelector("#info_temperature");
const iconCondition = document.querySelector("#icon_condition");

txtLocation.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const datos = getInfoWeather(e.target.value);
    console.log(datos);
  }
});

const getInfoWeather = (location) => {
  //   const response = await fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=99711c01514a48c89c600343232001&q=${location}&aqi=yes&lang=es`
  //   );
  //   const datos = await response.json();
  //   return datos;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=99711c01514a48c89c600343232001&q=${location}&aqi=yes&lang=es`
  )
    .then((response) => response.json())
    .then((data) => data);
};
