const fs = require('fs'); 


const async multiplicacion = (tabla) => {
  console.clear();
  console.log("===============================");
  console.log(`============  ${tabla} ================`);
  console.log("===============================");
  console.log("");

  let number = 12;
  let salida = "";

  for (let index = 1; index <= number; index++) {
    salida = salida + ` ${tabla} x ${index}` + ` = ${tabla * index} \n`;
  }

fs.writeFileSync(`tabla-${tabla}.txt`,salida);
console.log("Archivo Creado!!!");
};

module.exports = {
multiplicar: multiplicacion
}