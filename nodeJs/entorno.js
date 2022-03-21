require("dotenv").config();

/* let names = process.env.NAMES;
console.log(`Hello, ${names}`); */
/* const configs = {
  env: process.env.NAMES,
}; */
//console.log(configs);

let saludo = "Hola";
console.log(saludo);

//> Variables de Entorno ==> env
let nombre = process.env.NOMBRE || "Sin Nombre";
console.log("My Name:" + nombre);
