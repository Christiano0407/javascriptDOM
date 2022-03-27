//**==> Escuchar todos los procesos e Métodos === */

//** Llamar a Process */
// const p = require("process");
//**Cerrar Procesos */
//** Solo poner process => Ejecutar un procesos => Abrir, cerrar o ejecutar */
process.on("beforeExit", () => {
  console.log("Inicia el proceso!");
});

process.on("exit", () => {
  console.log("Ale, el proceso acabó");
});

//** == Para ver Nuestros o Dónde está el error ==  */
//**> Aclaración ===>  unhandleRejection */
process.on("unhandledRejection", (err, origen) => {
  console.error(err);
});
functionNotExist();
console.log("Vaya! Encontramos un erro!");
