var user = true;
var usuario1 = document.getElementsByClassName("usuario1")[0];
var usuario2 = document.getElementsByClassName("usuario2")[0];
function mostrarRegistro(){
    document.getElementsByClassName("usuario1")[0].style.display = "flex";
}

function saveUser(){
    
    if(document.getElementsByClassName("usuario1")[0].style.display == "flex"){
        var user1Name = document.getElementById('userName1').value;
        document.cookie = "usuario1 =" + user1Name; 
        document.getElementsByClassName("usuario1")[0].style.display = "none";
        
    }else{
        var user2Name = document.getElementById('userName2').value;
        document.cookie = "usuario2 =" + user2Name; 
        window.open("juego.html");
    }
    document.getElementsByClassName("usuario2")[0].style.display = "flex";
console.log(document.cookie);
}

let setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };
