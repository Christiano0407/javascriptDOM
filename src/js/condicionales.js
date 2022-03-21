/* var nombre = "Luisa";
var elementos = ["Compu", "watch", "mouse"]; */

//funciones
// 1) declarativa
/* function miFunction() {
    console.log("Hola!");
}
miFunction(); */

//2)Expresión
/* var miFunction = function() {
    console.log("Ya");
};
miFunction(); */

//parámetro (parámetro) = No tiene un valor definido = Lo mandas llamar en la función
/* a) */
/* function miDesayuno (fruta) {
    console.log(`Mi desayuno es una ${fruta}`);
}
miDesayuno("Manzana"); */

/* b) */
/* function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
sumar(15, 5); */

/* SCOOPE (VAR/LET/CONST) */
//Variable local sí puede acceder a global pero, no de global a local

/* var miNombre = "Chris";
function miApellido() {
    let apellido = "Velázquez";
    console.log(miNombre + " " + apellido);
} 
miApellido(); */

/* HOISTING */
// Cuando las variables y funciones se procesan antes que el código
// -llamar / declarar / inicializar

/* COERCIÓN */
//Coerción es la forma en la que podemos cambiar un tipo de valor a otro.
//1- implícita: lenguaje nos ayuda a cambiar el tipo de valor.
//2- explícita: obligamos a que cambie el tipo de valor.

/* TRUTHY AND FALSY */
// Verdadero o falso (Boolean). Validar.
/* Operadores */
//Operación: +,-,*, /, Binarios.
//Comparación: =, ==(comparar), ===(Validar que sean estrictamente iguales), < (menor), >(mayot), <=(menor o igual), >=(mayor o igual).
//&&(Ampersent = si las dos son iguales se cumple la condición; si no, no se cumple = a && b ). /
// || (o) =  a || b = Se cumple si alguna de las dos es verdad. /
// ++ (incrementar un valot ) / != (No son iguales) / += / -=.

/* CONDICIONALES */
//if / else / else if.
/* if() {
    ejecución
} else if() {
}else  */

//1-
/* var uno = 10;
if(uno == 10) {
    console.log("Eso es verdad")
}else {
    console.log("No!")
}
function hambre() {
    let desayuno = "8am";
    if (desayuno = "8am" ) {
        console.log("Ok!")
    }else {
        console.log("Mas tarde porfa!")
    }
}
hambre(); */

/* 1) Piedra / Papel / Tijera */

/* var op1 = "Piedra";
var op2 = "Papel";
var op3 = "tijera";
function juego(persona, cpu) {
  if(persona != cpu) {
      if(persona === op1 && cpu === op3){
          console.log("Gana persona")
        }else if(persona === op2 && cpu === op3) {
            console.log("Gana la compu")
        }else if(persona === op3 && cpu === op2)  {
      console.log("Gana persona y pierde papel")
  }else {
    console.log("Nadie gana! Empate!")
    }
  }
}
juego(op1,op3); */

/* 2) compras */
/*     let verdura = "Zanahoria";
    let fruta = "Manzana";
    let chatarra = "Papas fritas";
function compras(hijo, hija) {
    if(hijo != hija) {
        if (hijo === verdura && hija === chatarra){
            console.log("Mi hijo come mejor")
        }else if(hijo === chatarra && hija === fruta) {
           console.log("Mi hija le gusta mucho!")
        } else if(hijo === verdura && hija === fruta) {
        console.log("Comen sano")
        }else{
         console.log("Comen muy mal")
        }
    }
}
compras(chatarra, fruta); */

/* SWITCH */
//Validar condición / casos.

/* var number = 4;
switch (number) {
    case 4:
    console.log("Soy el four");
    break;
    case 1:
        console.log("No! Soy el One");
        break;
        default:
            console.log("Demonios");
} */
