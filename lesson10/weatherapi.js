const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9cef91c93e68d2c9661f7465a0530962"


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#current-temp").textContent = jsObject.main.temp.toFixed(0);

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description
    document.querySelector("#imagesrc").textContent = imagesrc;
    document.querySelector("#icon").setAttribute("src", imagesrc);
    document.querySelector("#icon").setAttribute("alt", desc)
  });
