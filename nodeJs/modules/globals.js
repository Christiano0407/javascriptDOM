let i = 0;
//=> setInterval ==> Intervalos de tiempo
let intervalo = setInterval(function () {
  console.log("Intervaloss");

  if (i === 3) {
    clearInterval(intervalo); //>clearInterval ==> Limpiar e parar el intervalo.
  }
  i++;
}, 1000);

//>>> Immeadiate ==>>
setImmediate(function () {
  console.log("Hello!");
});
