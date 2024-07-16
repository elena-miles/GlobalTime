function updateTime(){

//los angeles
let losAngelesElement = document.querySelector("#los-angeles"); 
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;
}

//paris
let parisElement = document.querySelector("#paris"); 
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")} <small>${parisTime.format("A")}</small>`;
}; 



//budapest
let budapestElement =document.querySelector("#budapest"); 
if (budapestElement){
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest"); 
budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
budapestTimeElement.innerHTML = `${budapestTime.format("h:mm:ss")} <small>${budapestTime.format("A")}</small>`;
}
}
updateTime(); 
setInterval (updateTime, 1000); 

// 1 add an event listener on the select
// call a function to take care of replacing everything 

function updateCity (event){
let cityTimeZone = event.target.value; 
if (cityTimeZone === "current"){
cityTimeZone = moment.tz.guess();
}
let cityTime = moment().tz(cityTimeZone); 
cityName = cityTimeZone.replace("_", " ").split("/")[1]; 
let citiesElement = document.querySelector("#cities");
//abreviate if longer than 10 characters
if (cityName.length > 10) {
    cityName = cityName.substring(0, 10) + "...";
}
citiesElement.innerHTML = `
<div class="city">
<div>
<h2> ${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
<a href="index.html"> All cities</a>
`
}

let citiesSelectElement = document.querySelector("#city"); 
citiesSelectElement.addEventListener("change", updateCity); 
