// Estructuras de datos, permiten almacenar varios valores en una sola variable, existen 3 estructuras de datos diferentes.

//Arrays, son utiles cuando necesitamos manejar listados de elementos, numeros, cadenas de texto, booleanos, etc, existen dos formas de crear un array.

//Esta es la forma antigua de crear arrays, puede ser un poco confusa en su comportamiento, por ejemplo si asignamos un único valor númerico este no guardará ese número, sino que guardará el valor ingresado en espacios reservados
let oldArray = new Array(3)
console.log(oldArray)//Imprimirá Array(3) [<3 empty solots>], reserva 3 espacios en memoria para ingresar datos.

//Esta es la forma más común de utilizarlos, ya que es más corto de declarar y evita errores.
let newArray = [3]
console.log(newArray)//Imprimirá Array [3], en este caso si almacenó el valor.

//Sin embargo al momento de ingresar más datos ambos se comportarán de la misma manera. 
oldArray = new Array("Luis", "Tiene", 34, "Años", true)
newArray = ["Luis", "Tiene", 34, "Años", true]
console.log(oldArray)// Array(5) [ "Luis", "Tiene", 34, "Años", true ]
console.log(newArray)// Array(5) [ "Luis", "Tiene", 34, "Años", true ]

//Al momento de que se elimine algún dato del array este mostrará en consola <1 empty slot>.
oldArray = new Array(3)
oldArray[0] = "Luis"
//oldArray[1] = "Tiene"
oldArray[2] = 34
console.log(oldArray)// Imprimirá Array(3) [ "Luis", <1 empty slot>, 34 ]

newArray = []
newArray[0] = "Luis"
//newArray[1] = "Tiene"
newArray[2] = 34
console.log(newArray)// Imprimirá Array(3) [ "Luis", <1 empty slot>, 34 ]

//Si bien los arrays manejan el orden declarado en sus elementos, estos pueden ser alterados según nuestra necesidad.
oldArray = new Array(3)
oldArray[2] = "Luis"
oldArray[1] = "Tiene"
oldArray[0] = 34
console.log(oldArray)// Array(3) [ 34, "Tiene", "Luis" ]

newArray = []
newArray[2] = "Luis"
newArray[1] = "Tiene"
newArray[0] = 34
console.log(newArray)// Array(3) [ 34, "Tiene", "Luis" ]

//Métodos comunes aplicado al array por defecto.
myArray = []

//push es la función para introducir elementos con un orden creciente en el array.
myArray.push("Luis")
myArray.push("González")
myArray.push("Mastroik")
myArray.push(34)
console.log(myArray)//Imprimirá Array(4) [ "Luis", "González", "Mastroik", 34 ]

//pop es la función para eliminar elementos de un array de manera decreciente partiendo del último elemento del array, aparte de eliminarlo también lo devuelve por si queremos asignar ese elemento a alguna variable.
myArray.pop()
console.log(myArray.pop())//Mastroik sería el proximo elemento a eliminar, en este punto podríamos almacenarlo en otra variable de ser necesario.
console.log(myArray)//Imprimirá Array(3) [ "Luis", "González", "Mastroik" ]

//shift elimina el primer elemento del array y también lo devuelve.
console.log(myArray.shift())//Muestra Luis que es lo que elimina y devuelve
console.log(myArray)//Imprimirá [ "González" ]

//unshift Sirve para agregar uno o más elementos al principio del array, es decir, los elementos que se agreguen lo harán desde la izquierda [0] en orden.
myArray.unshift("Luis", "Emilio")
console.log(myArray)//Array(3) [ "Luis", "Emilio", "González" ]

//lenght muestra la longitud del array, es una propiedad no una función y por ello no requiere o no lleva parentesis.
console.log(myArray.length)// Imprimirá 3

//clear, como borrar o eliminar un array, basta con inicializarlo de nuevo vacío, o también se le puede dar a la propiedad de length el valor cero.
myArray = []
myArray.length = 0//ALternativa no usarlo.
console.log(myArray) //Array []

//slice devuelve una copia superficial de una porción del array, es decir, se crea un nuevo array con los elementos especificados, se debe tener en cuenta que el ultimo elemento sirve como referencia y no se incluirá.
myArray = ["Luis", "Tiene", 34, "Años", true]
console.log(myArray)//Imprimirá Array(5) [ "Luis", "Tiene", 34, "Años", true ]

let sliceArray = myArray.slice(1, 3)
console.log(sliceArray)// Imprimirá Array [ "Tiene", 34 ]

//splice sirve para eliminar elementos del array en el rango que le especifiquemos por ejemplo si queremos eliminar 1 elemento en la segunda posición lo dfiniremos (2, 1)en la izquierda se indica apartir o en que posición queremos eliminar, en la derecha se define cuantos elementos se van a eliminar, si se especifican 3 parametros eliminara en el rango de los dos primeros número y agrgará el ultimo parametro que le asignemos.
myArray.splice(1, 3, 8)// Imprimirá (3) ['Luis', 8, true], eliminando los índices 1, 2 y 3 y agregando el elemento 8.
console.log(myArray)//Imprimirá Array [ "Luis", true ], en este casi si tendrá en cuenta el rango final y lo eliminará.

//Nota: Todos los métodos vistos pueden hacer mucha sotras cosas que se pueden ir estudiando a futuro, sin embargo, estas son las mas frecuentes.