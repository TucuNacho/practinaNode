// const fs = require("fs");
import fs from "fs";
fs.readFile("listaPersonajes.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Ocurrio un error al intentar abrir un archivo: ", err);
    return;
  }
  console.log("datos leidos correctamente");
  console.log(data);

});
