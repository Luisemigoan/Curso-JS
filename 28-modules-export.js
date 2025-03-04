// Un módulo es una forma de dividir nuestro código en piezas que podemos reutilizar, nos permite organizar el cóodigo en archivos separados y reutilizarlo en otros archivos.

//!Importante: Para poder utilizar módulos en nuestro código, debemos de tener en cuenta que la extensión del archivo debe ser .mjs, sobretodo si utilizamos el ambiente de Node.js, ya que si no, nos marcará un error, también es importante si lo hacemos a travez de la consola del navegador especificar en el script en el que se hace referencia en el archivo HTML el atributo type="module", con esta configuración podremos utilizar módulos en nuestro código tanto en la consola del ambiente de Node como en la consola del navegador.

/*Otra solución para no tener que renombrar archivos a .mjs, es agregar la siguiente configuración en el archivo package.json:
{
     "type": "module"
}
 Con esta configuración le estamos diciendo a Node.js que vamos a utilizar módulos en nuestro código.
 */

// export : nos permite exportar una variable, función, clase, etc. para poder ser utilizada en otros archivos.

// funciones
export function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

// propiedades
export const PI = 3.1416;

//variables
export let lastName = 'González';

//clases
export class Person {
    constructor(name) {
        this.name = name;
    }
}

// export default : nos permite exportar una variable, función, clase, etc. por defecto para poder ser utilizada en otros archivos.
export default function substract(a, b) {
    return a -b
}