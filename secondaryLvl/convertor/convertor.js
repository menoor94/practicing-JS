const d =document;


function convertCtoF (num){
    return Math.round(num * 9/5) + 32
}


function convertFtoC (num) {
    return Math.round((num-32) * 5/9)
}


const changeBtn = d.querySelector(".change-btn")
const input = d.querySelector(".input")

const CorF = d.querySelector(".c-or-f")
CorF.innerHTML = "C° to F°" 
changeBtn.addEventListener("click" , () =>{
     input.value = ''
    if(input.placeholder === "F°"){
        CorF.innerHTML = "C° to F°"
        input.placeholder = "C°"
    }else if(input.placeholder === "C°"){
        CorF.innerHTML = "F° to C°"
        input.placeholder = "F°"
    }

})

const convertBtn = d.querySelector(".convert-btn")
const displayer = d.querySelector(".display-converted")


convertBtn.addEventListener("click" , () =>{
    displayer.innerHTML = ""
    if(input.value){
        displayer.style.color = "yellow"
        if(input.placeholder === "F°") {
    
            displayer.innerHTML = `converted ${input.value}° Fahrenheit to ${convertFtoC(input.value)}° Celsius`
        }else if(input.placeholder === "C°") {
    
           displayer.innerHTML = `converted ${input.value}° Celsius to ${convertCtoF(input.value)}° Fahrenheit`
        }

    }else if(input.value === "") {
        displayer.innerHTML = "This value can not be Converted!"
        displayer.style.color = "darkRed"
    }
})

const resetBtn = d.querySelector(".reset-btn")

resetBtn.addEventListener("click" , () => {
    displayer.innerHTML = ""
    input.value = ""
})