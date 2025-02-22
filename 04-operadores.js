//Operadores: Los operadores se usan para relacionar, operar, realizar operaciones con los datos que ya vimos anteriormente, se puedne clasificar en bloques.

//Operadores aritmeticos

let a = 10
let b = 5

console.log(a + b)//Suma
console.log(a - b)//Resta
console.log(a * b)//Multiplicación
console.log(a / b)//División
console.log(a ** b)//Exponente
console.log(a % b)//División residual (Módulo)

a++ //Incremento aumenta en 1 el valor de la variable a, ahora vale 11
b-- //Decremento disminuye en 1 el valor de la variable b, ahora vale 4

console.log(a)
console.log(b)

//Operadores de asignación, Son los que permite asignar un valor a una variable, ya veniamos trabajando en un operador de este tipo y se trata del operador igual ( = ), sin embargo existen otros operadores que veremos a continuación.

//+= Este operador nos permite partir de un valor ya asignado a una variable e incrementarlo en la cantidad que deseemos

let myVariable = 2
console.log(myVariable)
myVariable += 2 //esto es lo mismo que tener myVariable = Myvariable + 2
console.log(myVariable)

//Asi mismo podemos utilizarlo para las demas operaciones, si bien en todas se utilizó el valor de 2 podrías ser cualquier valor que necesitemos

myVariable -= 2
console.log(myVariable)

myVariable *= 2
console.log(myVariable)

myVariable /= 2
console.log(myVariable)

//myVariable %= 2
console.log(myVariable)

myVariable **= 2
console.log(myVariable)

//Operadores de comparación, sirven para comparar variables, propiedades y el resultado nos dará un booleano.

console.log(a > b) //a es mayor que b = true

console.log(a < b)//a es menor que b = false

console.log(a >= b)//a es mayor o igual que b = true, si ambos valores fueran 10 tambien el resultado sería true ya que son iguales.

console.log(a <= b)//a es menor o igual que b = false, del mismo modo que el anterior si ambos números fueran iguales daría true.

console.log(a != b)//Desigualdad.

console.log(a !== b)//Desigualdad por identidad.

console.log(b == "4")//Igualdad por valor, JS sabe que el valor es igual así sea un string.

console.log(b === 4)//Igualdad por tipo y valor, tipo de dato número y su valor es 4.
console.log(b === "4")//Igualdadd sólo en valor, el tipo es diferente string y number.

//Curiosidades

console.log(0 == false)//true
console.log(1 == false)//false
console.log(2 == false)//false
console.log(0 == "")//true
console.log(0 == " ")//true
console.log(0 == '')//true
console.log(0 == "Hola")//false
console.log(0 === "")//false
console.log(undefined == null)//true
console.log(undefined === null)//false


/*
Truthy values (Valores verdaderos)

-Todos los números positivos y negativos menos el cero.
-Todas las cadenas de texto que no estén vacías.
-Todos los booleanos true
*/

/* 
Falsy values (Valores falsos)

-El cero
-El cero como BigInt
-null 
-undefined
-Nan
-Todos los booleanos false
-Cadenas de texto vacías
*/

//Operadores lógicos, sirven para comparar valores pero booleano, identificamos si una entidad es verdadera o falsa, podemos unir varias comparaciones, son 3 principalmente.

// and ( && )

console.log(5 > 10 && 15 > 20)//false, si todo es falso será falso
console.log(5 < 10 && 15 < 20)//true, si todo es verdadero será verdadero
console.log(5 < 10 && 15 > 20)//false, si alguna de las dos no se cumple será false

// or ( || ): Si se cumple almenos una de las comparaciónes que estamos realizando el resultado final será verdadero.

console.log(5 > 10 || 15 > 20)//false ninguna expresión es verdadera.
console.log(5 > 10 || 15 < 20)//true la segunda expresión es verdadera
console.log(5 < 10 || 15 > 20)//true la primera expresión es verdadera.
console.log(5 > 10 && 15 > 20 || 30 < 40)//true si bien no se cumple el and se cumple el or.

// not ( ! ): Podemos negar o en su defecto invertir un valor booleano utilizando el operador not, para ello debemos poner entre paréntesis todo el valor que queremos referenciar y agregar "!", esto es útil ya que algunas veces vamos a necesitar que el resultado sea negado o invertido.

console.log((5 > 10 && 15 > 20))//false
console.log((5 > 10 || 15 > 20))//false

console.log(!(5 > 10 && 15 > 20))//true
console.log(!(5 > 10 || 15 > 20))//true

// Operadores Ternarios: ( ? : ) Permiten escribir una condición, es otra forma de escribir condicionales pero con operadores como tal, si se cumple algo se hará algo, si no se cumple se hará otra. Para ello accedemos primero a la variable que queremos inspeccionar, declaramos los operadores ternarios, luego especificamos entre el signo de interrogación y los dos puntos lo que queremos que suceda si se cumple la instrucción, sino se cumple entonces especificaremos lo que sucederá despues de los dos puntos.

const isRaining = true //Está lloviendo

//accedemos, luego verificamos si se cumple y especificamos que se hará si se cumple.
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")









