
// Function for toggling navigation menu.
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide")
}
// set variables for days and months
var weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var monthsInYear = new Array(
    "January", "February", "March","April", "May", "June", "July", "August", "September","October", "November", "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekdays[day];
var month = lastModified.getMonth();
var month = monthsInYear[month];

var lastModifiedFormatted = day + ', ' + lastModified.getDate() + ' ' + month + " " + lastModified.getFullYear();

document.getElementById("dateLastModified").textContent = lastModifiedFormatted;
document.getElementById("copyrightYear").textContent = year;

// pancake baner
function createBanner(day) {
    if (day == "Friday") {
        document.querySelector("#banner").style.display = "block";
    }
}

createBanner(day);
// wind Chill
let tempF = parseFloat(document.querySelector(".tempF").innerText);
let windSpeed = parseFloat(document.querySelector(".windspeed").innerText);

function windChill(tempF, windSpeed) {
  let output =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);

  document.querySelector("#windchill").innerHTML =
    output.toFixed(1) + "&#176;F";
}

let wind_chill =
  tempF <= 50 && windSpeed >= 3
    ? windChill(tempF, windSpeed)
    : (document.querySelector("#windchill").innerHTML = "N/A");