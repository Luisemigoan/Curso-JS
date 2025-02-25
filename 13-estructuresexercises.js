// 1. Crea un array que almacene cinco animales
let animals = ["Perro", "Gato", "León", "Zorro", "Lobo"];
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("Jirafa")
animals.push("Zebra")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let bookSet = new Set(["Opio en las nubes", "Cien años de soledad", "Aladdin", "Crepúsculo", "El principito"]);
console.log(bookSet)

// 5. Añade dos más. Uno de ellos repetido
bookSet.add("La Metamorfosis")
bookSet.add("La Metamorfosis")
console.log(bookSet)

// 6. Elimina uno concreto a tu elección
console.log(bookSet.delete("Crepúsculo"))
console.log(bookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let monthMap = new Map([
    ["0", "Enero"],
    ["1", "Febrero"],
    ["2", "Marzo"],
    ["3", "Abril"],
    ["4", "Mayo"],
    ["5", "Junio"]
])
console.log(monthMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(monthMap.has("5"))
console.log(monthMap.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
monthMap.set("6", ["Enero", "Febrero", "Marzo"])
console.log(monthMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let transformArray = ["Nombre", "edad", 54, true]
let transformSet = new Set(transformArray)
let saveMap = new Map([
    ["Global",transformSet]
])
console.log(saveMap)

