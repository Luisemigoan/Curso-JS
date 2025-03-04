//La consola tiene muchas otras utilidades qu epodemos utilizar en nuestro beneficio, por ejemplo con el manejo de errores se compagina muy bien, console, es una herramienta muy útil porque nos ofrece una variedad de métodos para trazar instrucciones textos, depurar, mandar mensajes en un contexto más cerrado, mostrar errores de una manera más cuidada etc.

// .log : Este es el método más común que utilizamos para mostrar mensajes en la consola, podemos mostrar mensajes de texto, números, arreglos, objetos, etc.
console.log('Hola Mundo');
console.log(88 + 4);
console.log([1, 2, 3, 4]);
console.log({ nombre: 'Juan', edad: 30 });

// .error : error nos permite mostrar un mensaje de error en la consola, es muy útil para mostrar errores en el código, por ejemplo si estamos haciendo una validación y no se cumple, podemos mostrar un mensaje de error en la consola.
console.error('Mi mensaje de error');
console.error("Error al conectarse a la base de datos: ", new Error("Error de conexión"));

// .warn : warn nos permite mostrar un mensaje de advertencia en la consola, es muy útil para mostrar advertencias en el código, por ejemplo si estamos haciendo una validación y no se cumple, podemos mostrar un mensaje de advertencia en la consola.
console.warn('Mi mensaje de advertencia');

// .info : info nos permite mostrar un mensaje de información en la consola, es muy útil para mostrar información en el código, por ejemplo si estamos haciendo una validación y no se cumple, podemos mostrar un mensaje de información en la consola.
console.info('Mi mensaje de información');

// .table : table nos permite mostrar un arreglo o un objeto en forma de tabla en la consola, es muy útil para mostrar arreglos u objetos en forma de tabla en la consola.
let data = [
    ["Luis", 34],
    ["Estefanía", 24],
    ["Juan", 22]
]

console.table(data); //en esta forma se muestra en forma de tabla

data = [
    { nombre: 'Juan', edad: 30},
    { nombre: 'Pedro', edad: 40},
    { nombre: 'Maria', edad: 50}   
]

console.table(data); //en esta forma se muestra en forma de tabla pero con los nombres de las propiedades

// .group : group nos permite agrupar mensajes en la consola, es muy útil para agrupar mensajes en la consola.
console.group('Conversación:');//con esto se agrupan los mensajes.
console.log('Hola');
console.log('Cómo estás?');
console.log('Adiós');
console.groupEnd();//con esto se cierra el grupo.

// .time : time nos permite medir el tiempo que tarda en ejecutarse un bloque de código, es muy útil para medir el tiempo de ejecución de un bloque de código.
console.time('Tiempo en ejecutarse');//iniciae, se le debe asignar un nombre.

for (let i = 0; i < 10000; i++){
    
}
console.timeEnd('Tiempo en ejecutarse');//finaliza, se le debe asignar el mismo nombre.

// assert : assert nos permite mostrar un mensaje de error en la consola si una condición no se cumple, es muy útil para mostrar errores en el código si una condición no se cumple.
console.assert(1 === 1, 'Error: 1 no es igual a 1');
console.assert(1 === 2, 'Error: 1 no es igual a 2');

let age = 17;
console.assert(age >= 18, 'Debes ser mayor de edad');

// .count : count nos permite contar el número de veces que se ha llamado a count con la misma etiqueta, es muy útil para contar el número de veces que se ha llamado a count con la misma etiqueta.
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');

// .trace : trace nos permite mostrar la pila de llamadas a funciones que han llevado a la ejecución de la traza, es muy útil para mostrar la pila de llamadas a funciones que han llevado a la ejecución de la traza.
function funcion1(){
    funcion2();
}

function funcion2(){
    console.trace("Seguimiento de la traza");
}

funcion1();

// .clear : clear nos permite limpiar la consola, es muy útil para limpiar la consola.
//console.clear(); //limpia la consola.
