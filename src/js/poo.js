/* PROGRAMACIÓN ORIENTADA A OBJETOS (POO) */
//classes
//functions constructoras
//objetos y instancias del objeto.
//Usamos Objetos para modelar cosas del mundo real que queremos representar.
//Los objetos usan almacenamiento de datos que se envían por la red (API).
//Cada objeto tiene una propiedad privada que tiene un vínculo con otro objeto llamando prototipo.

/* CLASS */
//No es un objeto, es un modelo que define las características que un objeto debería tener.
//instancias de objetos = datos y funcionalidades.
// new = crear nuevos objetos o prototipos.
//se agrega un CONSTRUCTOR (Método).
/* Prototype */
//agregar una nueva función o constructor / objeto.
//Los objetos heredan características entre si.
//Puedes añadir métodos, o nuevas propiedas.
//Prototype = constructor = referencia al objeto.

/* CONSTRUCTORES / INSTANCIAS DE OBJETOS / PROTOTYPE*/

//1)Ejercicio
/* function persona(nombre, apellido) {
 this.nombre = nombre;
 this.apellido = apellido;
}
persona.prototype.saludar = function() {
    console.log(`Hola!, soy ${this.nombre}, ${this.apellido}`)
}
let personas = new persona("Kader", "Velázquez");
let erika  = new persona("Erika", "Luna");
personas.saludar();
erika.saludar(); */

//2)
/* let proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; */
//3)
/* function amigo(nombre, apellido, sexo) {
this.nombre = nombre;
this.apellido = apellido;
this.sexo = sexo;
}
amigo.prototype.saludo = function() {
console.log(`Le mando un saludo a mi querida ${this.nombre} ${this.apellido} una gran ${this.sexo} `)
 
if(this.nombre === "Alma"){
    console.log("Ella es mi amiga de la infancia")
 }else {
     console.log("Me confundí")
 }
}
let amigos = new amigo("Alma", "Rosas", "Mujer")
amigos.saludo(); */

/* function fiesta(lugar, ciudad) {
    this.lugar = lugar;
    this.ciudad = ciudad;
}
fiesta.prototype.saludo = function() {
    console.log(`A quí será el lugar ${this.lugar} ${this.ciudad}`)
    if(this.lugar === "Salón 8") {
     console.log("Se encuentra en la Condesa")
    }else {
     console.log("Disculpa!")
    }
}
let fiestas = new fiesta("Salón 8", "CDMX");
fiestas.saludo(); */
//Herencia Prototipal.
//CLASS
/* class persona {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
}
let personas = new persona("Azucena", 32);
console.log(`Hola, yo soy ${personas.name} y tengo ${personas.age}`); */

/* ASINCRONISMO */
//Asincrónico: Ejecuta código y el resultado se devuelve tan pronto como el navegador puede hacerlo.
//Aync y Awayt
//Promesas / fetch() = versión moderna a "XHR" /
//Hilos: Realiza una tarea a la vez(secuencialmentes).
//HACER MÁS COSAS A LA VEZ COMO CON UNA API.
//Callback (función que js usa para el navegador para ejecutar la función).
//Event Loop
//API = Ayuda integrar un Frontend y un Backend /Acceder a una base de datos y devolver datos desde el.
//Fetch
//XMLHttpRequest("xhr").
//ajax
//Request() => (Solicitud) => Constructor / nuevo object.
//FETCH() => Es un Método /OBTENER UN RECURSO DE LA RED y DEVUELVE UNA PROMESA => "WindowOrWorkerGlobalScope".
//=> Sólo se rechaza cuando tiene un error de RED. / then()=> verifica sus propiedad.
//GET / POST /

//ejem 1)
/* const btn = document.getElementById(`btn`);
btn.addEventListener(`click`, () => {
    alert("You Clicked Me");
}) */
//2)
/* console.log("a")
setTimeout(() => {
console.log("b")
}, 2000) */
