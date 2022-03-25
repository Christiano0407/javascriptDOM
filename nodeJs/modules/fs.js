//**==> Fylse System, trae cualquier arcghivo o búsca == */
const fs = require("fs");

function leer(rute, callback) {
  fs.readFile(rute, (err, data) => {
    console.log(data.toString());
  });
}

leer(__dirname + "/fstext.txt");
//**==> Le decimos que accesa a ese archivo y transforme en texto la data == */
