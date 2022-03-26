//**==> Fylse System, trae cualquier arcghivo o búsca == */
/* const fs = require("fs"); */

function leer(rute, callback) {
  fs.readFile(rute, (err, data) => {
    //console.log(data.toString());
    callback(data.toString()); //** => Viene siendo el Console.log */
  });
}

//**==> Le decimos que accesa a ese archivo y transforme en texto la data == */
//leer(__dirname + "/fstext.txt", console.log);

//** B) == >> Escribir un archivo en el sistema << ==*/
function write(ruta, content, cb) {
  fs.writeFile(ruta, content, function (err) {
    if (err) {
      console.error("Tenemos un error!", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}
write(
  __dirname + "/writeNew.txt",
  "Es un nuevo texto agregado, y escrito New",
  console.log
);

//** == LLamarlo como una promesa == */
// const fs = require("fs").promise;
// const readfile = async () => {
// const file = await fs.readfile("", {encoding: "utf-8"});
// console.log(file)
// }
//readfile();
