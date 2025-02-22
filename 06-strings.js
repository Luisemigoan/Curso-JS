// Strings, es un tipo de dato que se usa bastante y debemos aprender a manipularlos de una manera más avanzada, veamos como concatenar o unir cadenas de texto

//Podemos concatenar cadenas de texto utilizando el operdor matemático "+"
let myName = "Luis"
let greeting = "Hola, " + myName + "!"
console.log(greeting) // Hola, Luis!
console.log(typeof greeting)// String

//Obtener longitud de la cadena de texto
console.log(greeting.length) // 11

//Acceder a caracteres, para ello dentro de la condición, agregamos el indice (ubicación) a la cual deseamos acceder, el indice comienza en 0.
console.log(greeting[0]) //H
console.log(greeting[1]) //o
console.log(greeting[2]) //l
console.log(greeting[3]) //a
console.log(greeting[11]) //undefined si bien tenemos 11 caracteres en el lenght como por índice se comienza a contar desde el "0" entonces el caracter final sería 10
console.log(greeting[10])//!

//Métodos comunes
console.log(greeting.toUpperCase())//Es una función por eso los parentesis HOLA, LUIS!
console.log(greeting.toLocaleLowerCase())//Similar a la anterior hola, luis!
console.log(greeting.indexOf("Luis"))//Encuentra el texto ingresado en el índice correspondiente (6)
console.log(greeting.includes("Luis"))//true la cadena incluye Luis
console.log(greeting.slice(0, 8))//Hola, Lu retorna el rango ingresado ente el i0 y el i8 i=indice
console.log(greeting.replace("Luis", "Mastroik"))// Hola, Mastroik! Reemplaza la palabra especificada por la segunda

//Template Literals, sirven para interpolar variables insertando variables y expresiones dentro de cadenas de texto de manera más legible, usando ${} o crear strings de varias líneas sin necesidad de usar secuencias de escape como \n.

//Interpolación de variables
let email = "Luisemigoan@hotmail.com"
console.log(`Hola, ${myName}! Tú email es: ${email}`)//Es como concatenar 

//String de varias líneas
let message = `Este es un mensaje 
de varias lineas
de texto`
/*Este es un mensaje
de varias lineas
de texto*/
console.log(message)

