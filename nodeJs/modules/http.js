//** == Forma de llamar a HTTP == */
const http = require("http");

//** =>  Creamos el Servidor */
http
  .createServer(function (req, res) {
    console.log("Nueva Petición");
    console.log(req.url);

    res.end();
  })
  .listen(3000);
console.log("   Escuchando el puerto 3000!");
