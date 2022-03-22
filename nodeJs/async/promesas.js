function hello(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 1000);
  });
}
console.log("Init Process");
hello("Luisa")
  .then((Response) => console.log(Response))
  .catch((error) => console.log(error));

//>
function goodBye(nombre, saludo) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Goodbye", nombre, saludo);
      resolve(nombre, saludo);
    }, 2000);
  });
}
goodBye("Chris", "Adiós")
  .then((Response) => console.log(Response))
  .catch((error) => console.error("Error"));
