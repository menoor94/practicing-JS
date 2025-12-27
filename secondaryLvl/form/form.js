



 const getUsername = document.getElementById("username")
 const getPass = document.getElementById("pass")

 const getWarn = document.querySelector(".warn")

 function validation() {
  if(getUsername.value.length < 12 || getPass.value.length < 8) {
    getWarn.style.display= "inline"
    getWarn.style.color = "red"
    getWarn.textContent = "Not succesful"
  }else{
    getWarn.style.display= "inline"
    getWarn.style.color = "green"
    getWarn.textContent = "succesful"

  }

  setTimeout(() => {
    getWarn.style.display = "none"
  } , 2000)
  return false;
 }

 const usernameWarn = document.querySelector(".username-warn");

 const passWarn = document.querySelector(".pass-warn")

 function usernameValidation() {
  if(getUsername.value.length < 12) {
    usernameWarn.textContent = "At least 12 character's";
  }else if( getUsername.value.length >= 12){
    usernameWarn.style.display= "none"
  }
 }

 function passValidation() {
  if( getPass.value.length < 8) {
    passWarn.textContent = "At least 8 character's";
  }else if( getPass.value.length >= 8){
    passWarn.style.display= "none"
  }
 }