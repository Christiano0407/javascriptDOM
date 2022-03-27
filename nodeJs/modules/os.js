//**  == Sistema Operativo (OS) ==  OS > Se llama el módulo == */

//** = Llamar a OS = */
const os = require("os");

//** os.arch() ==> Arquitectura ==> x64 (Bytes) */
//console.log(os.arch());
//**os.platform() ==> Plataforma  >> Si estamos en Linux, Windows, Android.... */
//console.log(os.platform());
//**os.cpus() ==> CPU => Compu >> Acceder a la información de la CPU  >> Core*/
//**os.spus().length */
//console.log(os.cpus());
//console.log(os.cpus().length);
//**os.constants >  No lleva "()" >> Errores del sistema */
//console.log(os.constants);
//**  >>> Velocidad de la CPU  */
//**os.freemem >> Memoria de la CPU / Libre / Bytes de Memoria */
//console.log(os.freemem());
/* const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
} */

//**Bytes  Kilobyte = 1024 bytes => kb / MB/GB*/
//console.log(kb(os.freemem()));
//**Megabytes */
//console.log(mb(os.freemem()));
//**Gigabytes */
//console.log(gb(os.freemem()));
//console.log(gb(os.totalmem()));
//**os.homedir()  >> Dirección del Usuario  / Home */
console.log(os.homedir());
//**Archivos temporales */
console.log(os.tmpdir());
//**os.hostname()  >> Trabajar con servidores  > > Hosting  */
console.log(os.hostname());
//** os.networkInterface()  >>  Interfaz de Red  */
console.log(os.networkInterfaces());
