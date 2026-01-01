const d = document;

function capitilizeString(str) {
    return    str[0].toUpperCase() + str.slice(1).toLowerCase()

}


const cities =  {
    tehran:{
        degree:"-1"
        ,condition:"Rainy"
        ,windSpeed:"24"
        ,humidity: "60%"
    } 
    ,kermanshah:{
        degree:"5"
        ,condition:"Cloudy"
        ,windSpeed:"19"
        ,humidity:"40%"
    }
    ,karaj:{
        degree:"9"
        ,condition:"Sunny"
        ,windSpeed:"10"
        ,humidity:"10%"
    }
    ,abhar:{
        degree:"2"
        ,condition:"Windy"
        ,windSpeed:"30"
        ,humidity:"20%"
    }
    ,kangavar:{
        degree:"-2"
        ,condition:"clear"
        ,windSpeed:"12"
        ,humidity:"5%"
    }
};



const searchBar = d.querySelector(".search-bar")
const searchBtn = d.querySelector(".search-btn")

const cityName = d.querySelector(".city-name")
const degreeEl = d.querySelector(".weather-degree")
const conditionEl = d.querySelector(".weather-condition")
const windSpeedEl = d.querySelector(".wind-speed")


searchBtn.addEventListener("click" , () =>{
    const enteredName = searchBar.value.trim().toLowerCase()
    const mainCity = cities[enteredName]
    
    
    if(mainCity) {
        cityName.innerHTML = "in "+ capitilizeString(searchBar.value)
        degreeEl.innerHTML = "degree: "+mainCity.degree
        conditionEl.innerHTML = "condition: "+mainCity.condition
        windSpeedEl.innerHTML = "wind speed: " + "km/h"
        d.querySelector(".humidity").innerHTML = "humidity: "+mainCity.humidity
        
    }else{
        console.log("city not found")
    }
})




