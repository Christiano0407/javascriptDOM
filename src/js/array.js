console.group("Arrays");
console.log("Array");
// Lista de Arrays ============= >
let featuredPost = [
  "Check out my Netflix Clone", // 0
  "Here the code for my project", // 1
  "We my portfolio",
]; // 2
console.log(featuredPost);
console.log(featuredPost[2]);
console.log(featuredPost.length);

// Integrar arrays =========== >
let skills = [
  ...featuredPost,
  ["experiences", "education", "license", ["Hello"]],
];

console.log(skills);

let itemSkils = [...skills, ["Developer", "Marketing", "Iot"]];
console.log(itemSkils);
console.log(itemSkils[2]);
console.groupEnd();
console.group("ArraysTwo");
// < ========== Create Array with multiply dates ============ >
let person = ["Alma Velázquez Rosa", "Training Sports", true];
console.log(person);
console.log(person[0]);
console.log(person.length);

let personTwo = [
  {
    name: "Luisa",
    apellido: "Cantú",
    edad: 20,
  },
  {
    name: "Fausto",
    apellido: "Medel",
    edad: 30,
  },
];
console.log(personTwo);
console.log(personTwo[1].name);
console.log(personTwo.length);

console.groupEnd();
console.group("Métodos / Methods");

const num = [8, 4];
console.log(num);
num.push(2);
console.log(num);

console.groupEnd();
console.group("Message");
// < ============================= Push() ================================= >
// >>>> Agrega un elemento al final de la lista o array ===== >
let message = [
  "Hey, how´s it going?",
  "I´m great. thank you! How about you!?",
  "All good. Been working on my portfolio lately",
];
//console.log(message);
let newMessage = "Same Here!";
message.push(newMessage);
console.log(message);

// < ========================== pop() ================================== >
// >>>>> Elimina el último elemento agregado a las lista ==== >
message.pop();
console.log();

// < =========================== forEach() =================================>
// <<<<<<<< Trabaja cada uno de los elementos (items) por separado ==== >
message.forEach((item, index) => {
  console.log(item, index);
});

// < =========================() ==========================================>

console.groupEnd();
