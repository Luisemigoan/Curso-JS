// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios


// 1. Crea una función que reciba dos números y devuelva su suma
function addFunction (a, b) {
    return a + b
}
console.log(addFunction(10, 10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
arrayNumbers = [14, 25, 36, 8, 4, 90]

function greater (arrayNumbers) {
    let higherNumber = arrayNumbers[0]

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > higherNumber) {
            higherNumber = arrayNumbers[i]
        }
    }
    return higherNumber
}
console.log(`dentro del array ${arrayNumbers}, el número más grande es ${greater(arrayNumbers)}`)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const textString = "Luis Emilio Gonzalez Angel"

function numberOfVowels (textString) {
    let count = 0
    textString = textString.toLowerCase()

    for (let i = 0; i < textString.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(textString[i])) {
            count += 1
        }
    }
    return count
}
console.log(`${textString} tiene ${numberOfVowels(textString)} vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const stringsArray = ["Hola Mundo!", "JavaScript", "Cocodrilo", "Evangelion" ]

function toUpperCaseArray (stringsArray) {
    let upperCaseArray = []
    for(let i = 0; i < stringsArray.length; i++) {
        upperCaseArray.push(stringsArray[i].toUpperCase())
    }
    return upperCaseArray;
}
console.log(toUpperCaseArray(stringsArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let num = 6

function isPrime(num) {
    if (num <= 1) return false;  // Números ≤ 1 no son primos
    if (num <= 3) return true;   // 2 y 3 son primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Descarta múltiplos de 2 y 3

    for (let i = 5; i * i <= num; i += 6) { // Verifica desde 5 hasta √num
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
console.log(`¿El número ${num} es primo? ${isPrime(num)}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 6, 7, 8, 9];

function commonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}
console.log(`Los elementos comunes en los arrays ${array1} y ${array2}, son ${commonElements(array1, array2)}`);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const arrayNums = [1, 2, 4, 6, 7, 9, 10, 20]

function addEvenNumbers (arrayNums) {
    let sum = 0
    for(let i = 0; i < arrayNums.length; i++) {
        if (arrayNums[i] % 2 === 0) {
            sum += arrayNums[i]
        }
    }
    return sum;
}
console.log(`La suma de todos los números pares es ${addEvenNumbers(arrayNums)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const numbersArray = [1, 2, 4, 6, 7, 9, 10, 20]

function potNumbers (numbersArray) {
    let potArray = []
    for(let i = 0; i < numbersArray.length; i++) {
        potArray.push(numbersArray[i] ** 2)
    }
    return potArray;
}
console.log(`La potencia de los números es [${potNumbers(numbersArray).join(", ")}]`)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const string = "anit al aval atinA"

function reverseString (string) {
    let inverted = ""

    for (let i = string.length - 1; i >= 0; i--) {
        inverted += string[i]
    }
    return inverted
}
console.log(`El texto: ${string}, al revés es: ${reverseString(string)} `)

// 10. Crea una función que calcule el factorial de un número dado
const number = 5;

function factorial(num) {
    if (num < 0) return "No existe factorial para números negativos"; // Manejo de error
    if (num === 0 || num === 1) return 1; // Caso base

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(`El factorial de ${number} es: ${factorial(number)}`);
