import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  cambiarCarta();
  console.log("Hello Rigo from the console!");
};

const iconos= ["♦" ,"♥" ,"♠" ,"♣"];

const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

const colores = ["red", "black"]

const seleccionarElemento =(arr)=>{

  return Math.floor(Math.random()* arr.length );
}
console.log(numeros.length);
console.log(iconos[seleccionarElemento(iconos)]);
console.log(numeros[seleccionarElemento(numeros)]);






const cambiarCarta =()=>{

  const icono = iconos[seleccionarElemento(iconos)];

  const numero = numeros[seleccionarElemento(numeros)];

  let color = "";//colores[seleccionarElemento(colores)];

  const icon1 = document.querySelector(".icon1");

  const icon2 = document.querySelector(".icon2");

  const valor = document.querySelector(".numero");

  console.log(icono, numero);

  icon1.innerText = icono;
  valor.innerText = numero;
  icon2.innerText = icono;

  if(icono === "♥" || icono === "♦" ){

    color = "red";
    
  }
  else{

    color ="black";
    
  }

  console.log(color);

  icon1.style.color = color;
  icon2.style.color = color;



  

  



}

const boton = document.getElementById("boton");

boton.addEventListener("click", cambiarCarta);

const icono = document.querySelector('.icon1');
console.log(icono);

