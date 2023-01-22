const txtLocation = document.querySelector("#txtLocation");
const infoCondition = document.querySelector("#info_condition");
const infoTemperature = document.querySelector("#info_temperature");
const iconCondition = document.querySelector("#icon_condition");

txtLocation.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const datos = getInfoWeather(e.target.value);
    datos.then((data) => {
      infoCondition.textContent = data.current.condition.text;
      infoTemperature.textContent = `${data.current.temp_c}° C`;
      let icon = data.current.condition.icon.replace(/\d\dx\d\d/g,'128x128');
      iconCondition.src = icon;
    });
  }
});

const getInfoWeather = async (location) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=99711c01514a48c89c600343232001&q=${location}&aqi=no&lang=es`
  );
  const datos = await response.json();
  return datos;
};
