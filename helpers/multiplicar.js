const fs = require('fs'); 



    const  multiplicacion = async(tabla) => {
      try {
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
      
        // file System para crear un txt
      fs.writeFileSync(`tabla-${tabla}.txt`,salida);

      return `tabla-${tabla}`;

    

} catch (err) {
    throw err;
}

}


// exportaciones de las funciones
module.exports = {
multiplicar : multiplicacion
}