function updateTime(){

//los angeles
let losAngelesElement = document.querySelector("#los-angeles"); 

let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;

//paris
let parisElement = document.querySelector("#paris"); 
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");


parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")} <small>${parisTime.format("A")}</small>`;
}; 
updateTime(); 
setInterval (updateTime, 1000); 

// 1 add an event listener on the select
// call a function to take care of replacing everything 

function updateCity (event){
let cityTimeZone = event.target.value; 
let cityTime = moment().tz(cityTimeZone); 
cityName = cityTimeZone.replace("_", " ").split("/")[1]; 
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city">
<div>
<h2> ${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
`
}

let citiesSelectElement = document.querySelector("#city"); 
citiesSelectElement.addEventListener("change", updateCity); 