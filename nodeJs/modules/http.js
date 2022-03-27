//** == Forma de llamar a HTTP == */
const http = require("http");

//** === Nueva fomra / 2  / Nuevo Servidor Escuchando */
//** == Diferenciar una ruta de Otra == */
http.createServer(router).listen(3000);

//** Endpoint o Endpoints  ==> /hola >>> Redirección */
function router(req, res) {
  console.log("Nueava Petición!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, Status: 200. Funciona la petición");
      res.end();
      break;

    default:
      res.write("Error 404: No es la petición!!");
      res.end();
  }
}
//** =>  Creamos el Servidor  / Primera option == */
/* http
  .createServer(function (req, res) {
    console.log("Nueva Petición");
    console.log(req.url);

    // Cabecera
    res.writeHead();
    // Responder al usuario
    res.write("Hola, ya sé usar HTTP de Node Js");

    res.end();
  })
  .listen(3000);
console.log("   Escuchando el puerto 3000!");
 */
