// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let numbers = 1; numbers <= 20; numbers++) {
    console.log(numbers)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0
let add = 1
while (add <= 100) {
    sum += add
    add++
}
console.log(sum)//5050

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let num = 1; num <= 50; num++) {
    if(num % 2 === 0 ) {
        console.log(num)
    }
}

//Optimizado
for (let num = 2; num <= 50; num += 2) {
    console.log(num)
}

//Muestra pares e impares
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log(`Iteración: ${num} es PAR`);
    } else {
        console.log(`Iteración: ${num} es IMPAR`);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const arrayNames = ["Lucía", "José", "Juan", "Felipe", "Ana"]

for (let valor of arrayNames) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const textString = "Cadena de texto"
const vowels = "aeiouAEIOU"
let count = 0

for (let char of textString) {
    if (vowels.includes(char)) {
        count++
    }
}
console.log(`EL número de vocales es ${count}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
const arrayNumbers = [10, 25, 36, 8, 6]
let product = 1

for (let multipli of arrayNumbers) {
    product *= multipli;
}

console.log(`El producto total es: ${product}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10