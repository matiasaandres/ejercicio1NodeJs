const {multiplicar} = require('./helpers/multiplicar');

console.clear();

console.log(process.argv);
const [, , arg3] = process.argv;
console.log(arg3);
multiplicar(7)
.then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
 