console.log("Métodos");

// ========================== One Practice: forEach()
// Por cada elemento.

let array = [2, 4, 6, 8, 10, 12, 14];

// 1) Primer Método (antiguo) : Ciclo:

/* for(let i = 0; i < array.length; i++ ) { */
/*   const item = array[i];  */
/*   const index = i;  */
/*  */
/*   console.log(item, index); */
/* } */

// 2) Segundo método: forEach:
array.forEach((item, index) => {
  console.log(item, index);
});

// =========================== Practice: .map()
//=> Regresa un nuevo arreglo.

let arrayTwo = ["Luisa", "Alma", "Alexa", "Pamela"];

// 1) ============
/* let result = [];  */
/*  */
/* for(let adds = 0; adds < arrayTwo.length; adds++) { */
/*     const item = arrayTwo[adds];  */
/*      */
/*     result.push(`<div>${item}</div>`) */
/* } */
/* console.log(result);  */

// .map() =========================
let arr = ["Mariana", "Natasha", "Luisa", "Pamela"];

let result2 = arr.map((item) => {
  return `<h1>${item}</h1>`;
});

console.log(arr);
console.log(result2);

// 3) ========================= .filter()
// => Nos permite filtrar / Nos regresa un arreglo nuevo:

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//1) Ciclo for();
/* let result3 = [];  */
/* for(let index = 0; index < arr2.length; index++) { */
/*     const items = arr2[index];  */
/*  */
/*     if(items > 5 && items < 11) { */
/*        result3.push(items);  */
/*     }else { */
/*        console.log("Tenemos un error Dos");  */
/*     } */
/* } */
/* console.log(result3); */

//2) filter();
/* let result33 = arr2.filter( (itemss, index) => { */
/*    return itemss > 3 && itemss < 12;  */
/* });  */
let result33 = arr2.filter((itemss) => itemss > 2 && itemss < 12);
console.log(result33);

// 4) ======================== .find();
// => Encontrar la primera coincidencia dentro de nuestro arreglo basado en una condición.

let arr3 = [
  {
    city: "New York",
    budget: 5500,
  },
  {
    city: "Mexico City",
    budget: 4500,
  },
  {
    city: "Orlando Florida",
    budget: 2000,
  },
];

// 1) ciclo for();
let resultsss = [];
for (let index = 0; index < arr3.length; index++) {
  const itemsss = arr3[index];

  if (itemsss.budget < 6000) {
    resultsss = itemsss;
    break;
  }
}
console.log(resultsss);

// 2) .find();

let money = arr3.find((item) => item.budget < 3000);
console.log(money);

console.log(arr3);

// 5) ================================= .findIndex();
// Regresa sólo el índice de la primera coincidencia.

let data = [
  {
    userName: "Pamela",
    city: "Mexico City",
    budget: 1500,
  },
  {
    userName: "Elsa",
    city: "NY",
    budget: 4000,
  },
  {
    userNmae: "Natasha",
    city: "Miami",
    budget: 5000,
  },
];

console.log(data);
//1) findIndex()
let data2 = data.findIndex((item) => item.budget < 4500);
console.log(data[data2]);

// 6) =============================== .reduce();
// => Reducir un arreglo => Aplicar una serie de operaciones y optener un resultado.

//1) ciclo for():
let num = [5, 10, 15, 20, 25, 30];
let res = 0;

for (let i = 0; i < num.length; i++) {
  const item = num[i];

  res = res + item;
}
console.log(res); // => 105

//2) reduce();

let res2 = num.reduce((prev, item, i) => {
  return prev + item; // result = result + item;
}, 1);

console.log(res2);

// EXERCISE Extra ====================:

let numbers = [20, 10, 5, 50, 40, 30];

let res3 = numbers.reduce((prev, item, i) => {
  return Math.max(prev, item);
}, Number.MIN_VALUE);

console.log(res3);

// 5) .every() ================================
// => Test para cada elemento, que cumpla una condición. True / false.
let arrN = [0, 5, 10, 12, 15, 20, 25, 30];

// 1) ciclo for();
let testPassed = false;

for (let i = 0; i < arrN.length; i++) {
  const item = arrN[i];
  if (item > 0) testPassed = true;
  if (item < 0) {
    testPassed = false;
    break;
  }
}
console.log(testPassed); //=>true.
// 2) .every();

const passed = arrN.every((item) => item > 0);

console.log(passed);

// 6) .some() ==================================
// => Pruebas con nuestro arreglo de datos.
let value = [
  {
    id: 0,
    name: `New York Times`,
  },
  {
    id: 1,
    name: `Boston Journal`,
    audience: 8,
  },
  {
    id: 2,
    name: `Washington Post`,
    audience: 9,
  },
  {
    id: 3,
    name: `CBS News`,
  },
];
console.log(value);

// 1) ciclo for()
let test = false;
for (let i = 0; i < value.length; i++) {
  const item = value[i];

  // Existen journals sin audience === true or false.
  if (item.audience == undefined) {
    test = true;
    break;
  }
}
console.log(test);
// 2) .some();
const test2 = value.some((item) => {
  return item.audience == undefined;
});
console.log(test2);

// 7) Extra Tip ============ .some() VS .includes();

// includes() => Te va a buscar por un elemento completo.

// 8) ======================= .sort();
// => === Ordenar elementos dentro de un arreglo (array).

const values = [5, 4, 9, 10, 15, 20, 18, 19, 7];
// ciclo for();
for (let i = 0; i < values.length; i++) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[i] > values[j]) {
      let temp = values[i];
      values[i] = values[j];
      values[j] = temp;
    }
  }
}
console.log(values);
//if() => Le estamos diciendo que sea de menor a mayor.

// .sort();
let val = [...values];
// función de comparación: para invertir números / ordenar..
val.sort((i, j) => {
  //return i - j;
  if (i < j) {
    return -1;
  }

  if (i > j) {
    return 1;
  }

  return 0;
});

console.log(val);
