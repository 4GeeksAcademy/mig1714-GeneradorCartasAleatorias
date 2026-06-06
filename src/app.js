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

const seleccionarElemento =(arr)=>{

  return Math.floor(Math.random()* arr.length );
}
console.log(numeros.length);
console.log(iconos[seleccionarElemento(iconos)]);
console.log(numeros[seleccionarElemento(numeros)]);



const cambiarCarta =()=>{

  const icono = iconos[seleccionarElemento(iconos)];

  const numero = numeros[seleccionarElemento(numeros)];

  console.log(icono, numero);

  document.querySelector(".icon1").innerText = icono;
  document.querySelector(".numero").innerText = numero;
  document.querySelector(".icon2").innerText = icono;



}

const icono = document.querySelector('.icon1');
console.log(icono);

