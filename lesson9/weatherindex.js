
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


function createtown_info_card(data, i) {
    let info = document.createElement("div");
    let card = document.createElement("section");
    card.setAttribute("class", "town_info_card");
    let name = document.createElement("h2");
    let motto = document.createElement("p");
    motto.setAttribute("class", "motto")
    let year = document.createElement("p");
    let population = document.createElement("p");
    let annual_rain = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = data.towns[i].name;
    motto.textContent = data.towns[i].motto;
    year.textContent = `Year Founded: ${data.towns[i].yearFounded}`;
    population.textContent = `Population: ${data.towns[i].currentPopulation}`;
    annual_rain.textContent = `Annual Rain Fall: ${data.towns[i].averageRainfall}`
    img.setAttribute("src", data.towns[i].img);
    img.setAttribute("alt", `landscape in ${data.towns[i].name}, Idaho.`)

    card.appendChild(info)
    info.appendChild(name);
    info.appendChild(motto);
    info.appendChild(year);
    info.appendChild(population);
    info.appendChild(annual_rain);
    card.appendChild(img);

    document.querySelector("#info").appendChild(card);
}

var towns = []
const json_file = "towns.json"

fetch(json_file)
.then(response => {
    if (response.ok){
        return response.json()
    }
    else {
        throw new Error("Unable to fetch data.")
    }
})
.then(data => {
    for (let i=0; i < data.towns.length; i++) {
        switch (data.towns[i].name) {
            case ("Preston"):
                if (towns.includes(data.towns[i].name)) {
                    break
                }
                else {
                    createtown_info_card(data, i); 
                    towns.push(data.towns[i].name) 
                }
            case ("Soda Springs"):
                if (towns.includes(data.towns[i].name)) {
                    break
                }
                else {
                createtown_info_card(data, i);
                towns.push(data.towns[i].name) 
                }

            case ("Fish Haven"):
                if (towns.includes(data.towns[i].name)) {
                    break
                }
                else {
                createtown_info_card(data, i);
                towns.push(data.towns[i].name) 
                }
        }
    }
})