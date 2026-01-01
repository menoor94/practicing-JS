const submitBtn = document.querySelector(".submit-btn")
submitBtn.addEventListener("click" , ()=>{
    submitBtn.classList.toggle("focus")
})





const countryData = {
    iran:["tehran" , "kermanshah" , "shiraz" , "mashhad"]
    ,turkey:["ezmir" , "istanbol", "ankara"]
    ,russia:["moscow" ,"saint Petersburg" , "novosibirsk"]
    ,saudiArabia:["medina" , "mecca" , "najran"]
    ,armenia:["yervan" , "gyumri" , "vanadzor"]
}
// console.log(countryData.russia)
const d = document;
const countrySelect = d.getElementById("countries")
const citySelect = d.getElementById("city-selector")

countrySelect.addEventListener("change" , () => {
    const mainCountryName= countrySelect.value
    const mainCityName = countryData[mainCountryName]
     
    if(mainCountryName==="select-country"){
        citySelect.innerHTML = "<option>select city</option>"
    }else{
        
        citySelect.innerHTML = ''
        mainCityName.forEach((city) => {
            citySelect.innerHTML += "<option>"+city+"</option>"
            
        });
    }
    
    
})
