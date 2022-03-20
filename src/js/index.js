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

console.groupEnd();
