const countryData = {
    iran:["tehran" , "kermanshah" , "shiraz" , "mashhad"]
    ,turkey:["ezmir" , "istanbol", "ankara"]
    ,russia:["moscow" ,"saint Petersburg" , "novosibirsk"]
    ,saudiArabia:["medina" , "mecca" , "najran"]
    ,armenia:["yervan" , "gyumri" , "vanadzor"]
}
// console.log(countryData.russia)

const countrySelector = document.getElementById("countries")
const citySelector  = document.getElementById("city-selector")

countrySelector.addEventListener("change" , () =>{
    const countryName = countrySelector.value
    const cityName = countryData[countryName]

    if(countrySelector.value === 'select-country' )
    {
        citySelector.innerHTML = ''
        citySelector.innerHTML = '<option>select city</option>' 
    }else{

        citySelector.innerHTML = ''  
        cityName.forEach((city) => {
            
         citySelector.innerHTML += '<option>'+city+'</option>' 
        })
    }
})