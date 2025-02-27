// functions: Son bloques de código diseñados para realizar una tarea específica, a las funciones se les debe llamar o invocar, gracias a las funciones podremos escribir clean code, una de las principales caracteristicas para crear clean code es que se pueda reutilizar, modularizar, que se pueda leer de una forma simple, incluso, acabar manejando un programa en partes más simples.

//Estructura por defecto de una funsión simple, dentro de las llaves va el código que queremos ejecutar.
function myFunction() {
    console.log("Hello function!")
}
myFunction()//Se llama a la funsión, ahora si se imprime en pantalla lo que se declaró en {}, podríamos incluso llamar varias veces una función con ayuda de un bucle por ejemplo.

for (let i = 0; i < 5; i++) {
    myFunction()//Mostrará en pantalla Hello Function 5 veces.
}

//Además de ejecutar código, las instrucciones pueden llevar parámetros, en este caso irán dentro de los paréntesis en los que podemos definir requisitos, por ejemplo podemos agregar una variable que se llame name, despues al momento de de llamar la función se debe asignar un argumento a ese parametro.
function functionWithParameters(name) {
    console.log(`Hola, ${name}!`)
}
functionWithParameters("Luis")//Con paréntesis vación imprimirá Hola, undefined!, es por esto que cuando se llame una función con parámetros se le debe asignar un argumento(valor) a ese parámetro.

//Ahora también es posible asignar varios parametros dentro de la función concatenados con comas para luego asignarle varios argumentos.
function functionWithMultipleParameters(nombre, apellido, edad, correo)/*Parámetros*/ {
    console.log(`Hola ${nombre}, tú primer apellido es: ${apellido}, tienes ${edad} años, tú correo es: ${correo}`)
} 
functionWithMultipleParameters("Luis", "González", 34, "luisemigoan@hotmail.com")//Argumentos

// anonymous functions: Son funciones que no tienen un nombre definido, es decir podemos crear una función con la palabra function reservada, sin embargo una función de este tipo debe terminar asignandose a una variable o constante porque sino no existiría manera de invocarla, 
const func = function (name2) { /*La función no tiene nombre, pero la variable si*/ 
    console.log(`Hola, ${name2}!`)
}
func("Emilio")//Hola, Emilio!

// arrow functions: Es una forma concisa(Breve y clara) de escribir funciones, se introdujo con ES6, al igual que las anonymous functions deben asignarse a una variable o constante.

const arrowFunction = (name3) => {
    console.log(`Hola, ${name3}`)
}
arrowFunction("Mastroik")

// Una de las principales ventajas de usar arrow functions es que si la función sólo llevará un parametro se puede incluso omitir las llaves {}, esto reduce considerablemente el código.
const funct = (name) => console.log(`Hola ${name}!`)
funct("Luis González")

// Parametros: Aprendamos más sobre todo lo que podemos hacer, por ejemplo podemos hacer una suma con una función agregando dos parametros.
function suma (a, b) {
    console.log(a + b)
}
suma(4, 1)//Esto imprimirá en consola 5

// Valores por defecto, se utilizan para asignar un valor a un parámetro en caso de que no se pase un argumento al invocar la función. Esto garantiza que los parámetros siempre tengan un valor válido, incluso si no se proporcionan los argumentos necesarios, evitando errores y asegurando resultados consistentes.
function sumDefault (a = 0, b = 0) {
    console.log(a + b)
}
sumDefault()
sumDefault(5)

// retorno de valores: Una función puede terminar desencadenando lógica dentro de la función, pero puedo obtener el resultado d euna lógic para lulego utilizarlo.

function mult(a, b) {
    return a * b
}
mult(5, 10)//EL resultado no se mostrará en consola ya que estamos retornando el resultado.

//podemos obtener ese resultado de dos formas
let result = mult(5, 10)
console.log(result)//Mostrará en consola 50

// O podríamos poner
console.log(mult(5, 10))//También retornará 50

// nested functions:  
function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }//scope de función interna
    intern()//así se llama una función anidada, ahora si imprimirá función interna despues de externa
}//scope de funcion externa
extern()//Esto imprimirá función externa sin problemas
//intern()//Esto nos dirá que intern no se ha definido, aquí entra en juego el scope o alcance, en este caso el scope está marcado por las llaves {}, es decir extern se conoce porque está dentro del fihchero raíz, pero lo que está interno no se conoce, el único que sabe sobre la existencia de intern es extern, en este caso entonces debemos llamar a intern dentro de extern, aunque si que se puede invocar una función interna desde afuera, y agregar parámetros pero se verá más adelante.

// higher-order functions: Son funciones que reciben otras funciones como argumentos.
function applyFunction(fnct, param) {/* debemos pasar la funcion y un paremetro */ 
    fnct(param)
}
applyFunction(arrowFunction, "Función de orden superior")//Esto recibirá una función, en este caso traeremos una arrowfunction vista anteriormente, de esta manera anidamos la ejecución de funciones, es decir, una función que recibe otra función y un parámetro, dentro ejecuta la otra función.

// forEach: Es una función que nos sirve para ejecutar bucles asociados a elementos iterables, podría decirse que forEach es una función, una operación, un método que tienen los array de JS y finalmente ejecuta un for directamente

myArray = [1, 2, 3, 4, 5, 6]

myArray.forEach(function(value) {
    console.log(value)
})// forma normal sin arrow function

mySet = new Set(["Estefa", "Tiene", 24, "Años"])

myMap = new Map([
    ["alias", "Mastroik"],
    ["email", "luisemigoan@hotmail.com"],
    ["Teléfono", "3136623146"]
])

myArray.forEach((value) => console.log(value)) //arrow function
mySet.forEach((value) => console.log(value)) //arrow function
myMap.forEach((value) => console.log(value)) //arrow function
