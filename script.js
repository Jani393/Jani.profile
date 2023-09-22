//FUNCIONES
let nombre = "Ani"
let ciudad = "Bs As"
let gusto = "chocolate"
let parrafo = document.querySelector(".about-me-section p");

function cambiarTexto (nombre, ciudad, gusto) {
let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.` ;
return contenido;
}
parrafo. innerText = cambiarTexto (nombre, ciudad, gusto);

//menu responsive

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

