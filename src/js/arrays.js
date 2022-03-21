/* ARRAY (eSTRUCTURA DE DATOS) */

//Forma de generar un estructura de datos.
//[0] Posición de comienzo para ingresar.

//Métodos (Mutar o cambiar o agregar)
//.length(Cuántos hay?).
//.push(Añadir elementos al final del array).
//.pop(eliminar el último elemento en el array).
//.unshift(agrgar hasta el inicio).
//.shift(eliminar elemento que está en el inicio).
//.indexOf(La posición de los elementos).

/* LOOPS / FOR / FOR OF (CICLOS) */

//sON Ciclos

//1)
/* var estudiantes = ["Luisa", "Mauricio", "Mariana", "Alma"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante} `);
}
for(i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
} */

/*  let comida = ["Arroz", "Pollo", "Verduras", "Frutas", "Frijoles"];
function miComida(plato) {
   console.log(`Es un platillo, ${plato} `);
   if(plato === "Arroz") {
       console.log("Agrega plátano, porfa!")
   }else if (plato === "Verduras") {
       console.log("Muy poca verdura. Gracias!")
   } else {
       console.log("Ya no tenemos más")
   }
}
//loop
for(i = 0; i < comida.length; i++) {
    miComida(comida[i]);
}  */

/* B) While (mientras...)*/

/* OBJECTS */
//lLEVAR UN OBJECTO FÍSICO (propiedades) A PARADIGMAS DE PROGRAMACIÓN.
//"{} "
//var object = {propiedades};
// var miAuto = {marca:"Audi", año: 1992}:
//acceder a la propiedad => miAuto.marca;
//${`this.marca`} => Una variable que hace referencia al objecto (var);

/* Object:Función Constructora */
//
/* function auto(marca, modelo, date) {
    this.marca = marca;
    this.modelo = modelo;
    this.date = date;
}
var miAuto = new auto("bmw", "W-360", 2022);
var nuevoAuto = new auto("Mercedes", "HX99", 2023); */

/* Ejercicio */
//function constructora
/* function auto(marca, modelo, date) {
    this.marca = marca;
    this.modelo = modelo;
    this.date = date;
}
var autos = [];
for(let i = 0; i < 5; i++) {
var marca = prompt("Ingresa la marca del auto");
var modelo = prompt("Ingresa el modelo del auto");
var date = prompt("Ingresa el año");
autos.push(new auto(marca, modelo, date));
}
for(let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
} */

//2)
/* function menu(sopa, entrada, postre) {
        this.sopa = sopa;
        this.entrada = entrada;
        this.postre = postre;
}
var menus = [];
for (i = 0; i <= 3; i++) {
    let sopa = prompt("Qué sopa..?");
    let entrada = prompt("Entrada..?");
    let postre = prompt("Qué desea de postre...?");
    menus.push(new menu(sopa, entrada, postre));
}
for(i = 0; i <= menus.length; i++) {
    console.log(menus[i]);
} */

/* Métodos de recorridos con Array */
//objetos dentro del array.
//filter(verdadero o falso) / agregar sólo los que cumplen con la validación pedida.
//map (mapear artículos).
//find() = Encontrar algo.
//forEach() = filtrar por elemento y te regrsa una acción.
//some() = Verdadero o falso para los que cumplan la function
//shift()
//pop()
//push()

/* Ejercicio 1 */
/* var productos = [
    {nombre: "Laptop", costo: 12000},
    {nombre: "Mouse", costo: 600},
    {nombre: "Teclado Gamming", costo: 1800},
    {nombre: "Pantalla Gamming", costo: 15000},
    {nombre: "SSD", costo: 1500},
    {nombre: "Disco duro", costo: 1200},
    {nombre: "Cámara Reflex", costo: 18000},
    {nombre: "Audífonos Gamming", costo: 1100},
]; 
 var misProductos = productos.filter(function(articulo) {
    return articulo.costo >= 12000;
})   */
/* var misProductos = productos.find(function(articulo) {
    return articulo.nombre === "Laptop"
}); */
/* productos.forEach(function(articulo) {
    console.log(articulo.nombre)
}); */
/* var misProductos = productos.some(function(articulo) {
    return articulo.costo < 1200
}); */
