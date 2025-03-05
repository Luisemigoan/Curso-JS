//!Importante: Para poder utilizar módulos en nuestro código, debemos de tener en cuenta que la extensión del archivo debe ser .mjs, sobretodo si utilizamos el ambiente de Node.js, ya que si no, nos marcará un error, también es importante si lo hacemos a travez de la consola del navegador especificar en el script en el que se hace referencia en el archivo HTML el atributo type="module", con esta configuración podremos utilizar módulos en nuestro código tanto en la consola del ambiente de Node como en la consola del navegador.

//Otra solución para no tener que renombrar el archivo a .mjs, ni tener que especificar el type en el script es agregar la siguiente configuración en el archivo package.json:
// {
//     "type": "module"
// }
// Con esta configuración esta configuración le estamos diciendo a Node.js que vamos a utilizar módulos en nuestro código.

// import : nos permite importar una variable, función, clase, etc. desde otro archivo.
import { add, PI, lastName, Person } from './28-modules-export.js'; // usamos la palabra reservada import seguida de las llaves y el nombre de la función que queremos importar, luego especificamos la ruta de dónde vamos a importar la función.

// funciones
console.log(add(5, 1));

// propiedades
console.log(PI);


//variables
console.log(lastName);

//clases
const person = new Person('Juan');
console.log(person);

//Toda propiedad, variable o función que queramos importar debe importarse con su nombre exacto a excepción de las funciones por defecto.

// import default : nos permite importar una unica variable, función, clase, etc. por defecto desde otro archivo.
import substract from './28-modules-export.js'; // usamos la palabra reservada import seguida del nombre de la función que queremos importar, luego especificamos la ruta de dónde vamos a importar la función.
import os from 'os';

console.log(substract(5, 1)); // al ser una función por defecto no es necesario especificar el nombre de la función que estamos importando.

//Nota: la diferencia entre exportación por defecto y exportación normal es que en la exportación por defecto no es necesario especificar el nombre de la función que estamos importando pero se limita a una sola exportación y se debe exportar una funcionalidad, mientras que en la exportación normal si es necesario especificar el nombre de la función que estamos importando pero se pueden importar cuantas definamos y necesitemos.

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus());