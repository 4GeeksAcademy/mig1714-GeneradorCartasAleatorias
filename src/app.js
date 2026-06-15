import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  cambiarCarta();
  console.log("Hello Rigo from the console!");
};

//SE CAMBIAN CONSTANTES A LETRA MAYUSCULA PARA 

const ICONOS= ["♦" ,"♥" ,"♠" ,"♣"];

const NUMEROS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

const COLORES = ["red", "black"]

const seleccionarElemento =(arr)=>{

  return Math.floor(Math.random()* arr.length );
}
console.log(NUMEROS.length);
console.log(ICONOS[seleccionarElemento(ICONOS)]);
console.log(NUMEROS[seleccionarElemento(NUMEROS)]);






const cambiarCarta =()=>{


  //SE ELIMINAN CONSTANTES Y SE DEJA EN VARIABLES CON LET
  let icono = ICONOS[seleccionarElemento(ICONOS)];

  let numero = NUMEROS[seleccionarElemento(NUMEROS)];

  let color = "";

  let icon1 = document.querySelector(".icon1");

  let icon2 = document.querySelector(".icon2");

  let valor = document.querySelector(".numero");

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

//Se renombra funcion que indique que es lo que hace el boton exactamente

// const botonCambiarCarta = document.getElementById("boton");

// botonCambiarCarta.addEventListener("click", cambiarCarta);

// const icono = document.querySelector('.icon1');
// console.log(icono);

//Se elimina funcion que queda comentada con el proposito de corregir un error que indicaba que 
//la funcion cambiar carta no existía em console en el inspector.
//Con la línea siguiente se corrige ese error.

document.getElementById("boton").addEventListener("click", cambiarCarta);