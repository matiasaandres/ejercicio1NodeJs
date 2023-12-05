const {multiplicar} = require('./helpers/multiplicar');



multiplicar(7)
.then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
