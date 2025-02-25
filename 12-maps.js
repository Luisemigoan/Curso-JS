// maps, o diccionario se trata de una colección de elementos y cada elemento no es único, cada elemento se conforma por un par (dos elementos) una clave (key) y el otro por un valor (value), podremos tener claves y valores de cualquier tipo de dato, el mapa nos sirve para relacionar estos dos datos (clave y valor), la clave es por el elemento en el que buscamos dentro de esta estructura y un valor que veremos qu eestá asociado a esa clave.

// declaración
let myMap = new Map()
console.log(myMap)//Map(0)

// Inicialización
myMap = new Map([
    ["name", "Luis"],
    ["email", "luisemigoan@hotmail.com"],
    ["age", "34"]
])
console.log(myMap) // Map(3) { name → "Luis", email → "luisemigoan@hotmail.com", age → "34" }, podemos observar que tenemos 3 datos y que esta asociando la clave y el -> valor, es una asociación directa.

//Métodos y propiedades 

// set, sirve para agregar o actualizar un elemento, para ello debe seguir su estructura de clave y valor.
myMap.set("alias", "Mastroik")
console.log(myMap)// Map(4) { name → "Luis", email → "luisemigoan@hotmail.com", age → "34", alias → "Mastroik" }, ahora tenemos un cuarto elemento.

myMap.set("alias", "Luchito")
console.log(myMap)// Map(4) { name → "Luis", email → "luisemigoan@hotmail.com", age → "34", alias → "Luchito" }, ahora se modificó el cuarto elemento. No pueden haber claves repetidas pero si pueden haber valores repetidos.

// get, nos ayuda para recueprar el valor de una clave, para la busqueda agregaremos la clave y nos retornará el valor.
console.log(myMap.get("name"))//Luis
console.log(myMap.get("lastName"))//undefined

// has nos permite validar si una clave existe o no
console.log(myMap.has("lastName"))//false ahora la respuesta es un booleano.
console.log(myMap.has("name"))//true

// delete, permite eliminar un dato por su clave.
myMap.delete("alias")
console.log(myMap)// Map(3) { name → "Luis", email → "luisemigoan@hotmail.com", age → "34" } ahora el alias se eliminó.

//clear, sirve para borrar todo el mapa.
//myMap.clear()
//console.log(myMap)// Map(0), ahora se elimina todo el mapa.

//Propiedades: recordar siempre que podemos validar todas las propiedades de un elemento agregando un punto y mirando las opciones que salen.
//myMap. (Todas las opciones que salen)

// keys, retorna las claves que tenemos dentro del mapa.
console.log(...myMap.keys())// [Map Iterator] { 'name', 'email', 'age' }, se puede evitar que salga iterator agregando tres puntos ... antes de myMap, lo que imprimirá sólo las claves name email age

// values, retorna los valores dentro del mapa funciona similar a keys.
console.log(...myMap.values())// [Map Iterator] { 'Luis', 'luisemigoan@hotmail.com', '34' } de igual forma si agregamos los tres puntos mostrará sólo los valores, Luis luisemigoan@hotmail.com 34.

// entries, nos muestra el listado todal de claves con su value.
console.log(...myMap.entries())// [ 'name', 'Luis' ] [ 'email', 'luisemigoan@hotmail.com' ] [ 'age', '34' ]

// size, nos dice el tamaño del mapa
console.log(myMap.size)//3
