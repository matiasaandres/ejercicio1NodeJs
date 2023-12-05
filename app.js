const fs = require('fs'); 
// tabla del 5

multi = (tabla) => {
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

fs.writeFile(`tabla-${tabla}.txt`,salida, (err)=>{

    if(err){
        throw err;
    }
    console.log('Archivo Creado');
})
};

multi(13);
