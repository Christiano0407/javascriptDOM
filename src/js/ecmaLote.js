//ECMAScript9
//Operador de reposo => extraer las propiedades de un objeto que no se ha construido.

//1)
/* const obj = {
    name: "Chris",
    age: 28,
    country: "CDMX",
} */

/* let { name, ...all } = obj;
console.log(name, all); */
/* let {country, ...all} = obj;
console.log(all); */

//2)
/* const obj1 = {
    name: "Kader",
    age: "24",
}
const obj2 = {
    ...obj1,
    country: "Turquía",
}
console.log(obj2); */

//Promise.finally(termina el llamado):
//1)
/* const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve(`Hello`)
        : reject(new Error(`Error`))
    });
};
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizó")) */

//Regex:
//Coincidir texto con un patrón.
/* const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec(`2020-04-20`);
const year = match[1]
const month = match[2]
const day =  match[3]
console.log(year, month, day); */
