// DOM Javascript ==  Nodo s==>>> 01
console.group("DOM Javascript");
const id = document.getElementById("id");
const tag = document.getElementsByTagName("p");
const classes = document.querySelector(".world");
const nodeList = document.querySelectorAll(".one");

console.log(id);
console.log(tag);
console.log(classes);
console.log(nodeList);

// === ============ NodeLists vs Array ===========>  02 =====================>
//Node List ==>  const nodeList = document.querySelectorAll("selector css");
//const elementList = [...nodeList];t ==> NodeList a un Array.
const array = [...nodeList];
console.log(array);

// Part 03 ================= Add and Create Node in DOM========================== ====================>

const title = document.createElement("h1");
const texts = document.createTextNode("Hello World");
//> >>>> ===== ===>>
const add = document.querySelector(".add");
const titleTwo = document.createElement("h2");
const textTwo = document.createTextNode("Text Two");
add.appendChild(titleTwo);
titleTwo.appendChild(textTwo);
const addTwo = document.querySelector(".addTwo");
addTwo.append("Hello my friends", document.createElement("div"));
//>>
const addThree = document.querySelector(".addThree");
const titleThree = document.createElement("span");
const paragraph = document.createTextNode("Three");
addThree.appendChild(titleThree);
titleThree.appendChild(paragraph);
const reference = document.querySelector("span");
addThree.insertBefore(titleThree, reference);

// ====> === Otras formas de agregar==== ============  ======  ====== >

console.groupEnd();
