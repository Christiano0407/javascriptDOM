//** === Process == Archivos que tenemos detrás === */
//** exec => Puedes traer el código e trabajar con el == */
//const { exec } = require("child_process");
const { spawn } = require("child_process");

/* exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  } */

//** stdout ===> Estandar Fuera  == */
//** sterr  ===> Estandar Error == */

/*  console.log(stdout);
  console.log(sterr);
}); */

//** One  */
/* const { exec } = require("child_process");
exec("ls", (e, stdout) => {
  e ? console.log(e) : console.log(stdout);
}); */

//** ===  Two  => Process Spawn === */
/* const { spawn } = require("child_process");
const myprocess = spawn("ls");

process.stdout.on("data", (data) => console.log(data.toString()));
process.on("exit", () => console.log("process end")); */

let oneProceso = spawn("ls", [`-la`]);

//console.log(oneProceso); //** Todos los procesos => Method */
//console.log(oneProceso.pid); //**ID Proceso */
console.log(oneProceso.connected); //** Conectado */
