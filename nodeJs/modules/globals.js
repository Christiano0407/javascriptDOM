let i = 0;
//**==  setInterval ==> Intervalos de tiempo ==*/
let intervalo = setInterval(function () {
  console.log("Intervaloss");

  if (i === 3) {
    clearInterval(intervalo); //>clearInterval ==> Limpiar e parar el intervalo.
  }
  i++;
}, 1000);

//** =====  */
setImmediate(function () {
  console.log("Hello");
});
//**==__dirname ==*/ Direction
console.log(__dirname);
//**== __filename == */ Direction and file(archivos)
console.log(__filename);

//**==Global Variable ==*/
global.nameGirl = "Luisa";
console.log(nameGirl);
