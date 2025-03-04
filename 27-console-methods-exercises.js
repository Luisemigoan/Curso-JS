// 1. Crea un función que utilice error correctamente
function errorFunction(){
    console.error('Error en la función');
}
errorFunction();

// 2. Crea una función que utilice warn correctamente
function warnFunction() {
    console.warn("Advertencia en la función");
}
warnFunction();

// 3. Crea una función que utilice info correctamente
function infoFunction() {
    console.info("Información importante")
}
infoFunction();

// 4. Utiliza table
let datos = [
    { nombre: "Juan", edad: 30},
    { nombre: "Pedro", edad: 40},
    { nombre: "Maria", edad: 50}
]
console.table(datos);

// 5. Utiliza group
console.group("Datos")
console.log("Nombre: Luis");
console.log("Edad: 34");
console.groupEnd()

// 6. Utiliza time
console.time("Tiempo de ejecución");

console.table(datos);

console.timeEnd("Tiempo de ejecución");

// 7. Valida con assert si un número es positivo
let number = -1;
console.assert(number > 0, "El número debe ser positivo");

// 8. Utiliza count
console.count("Llamado");
console.count("Llamado");

// 9. Utiliza trace
console.trace("Hola");


// 10. Utiliza clear
//console.clear();