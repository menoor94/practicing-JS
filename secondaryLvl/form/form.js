



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
