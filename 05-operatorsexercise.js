// 1. Crea una variable para cada operación aritmética
let add = (5 + 4)
let substract = (5 - 4)
let multiplicacion = (5 * 4)
let division = (5 / 4)
let potencia = (5 ** 4)
let residuo = (5 % 4)

console.log(add)
console.log(substract)
console.log(multiplicacion)
console.log(division)
console.log(potencia)
console.log(residuo)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
add += 1
console.log(add)

substract -= 1
console.log(substract)

multiplicacion *= 2
console.log(multiplicacion)

division /= 1
console.log(division)

potencia **= 2
console.log(potencia)

residuo %= 5
console.log(residuo)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 1)
console.log(5 == 5)
console.log(4 != 1)
console.log(7 == "7")
console.log(4 === 4)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1 > 5)
console.log(1 == 4)
console.log(3 != 3)
console.log( 1 == "4")
console.log("4" === 4)

// 5. Utiliza el operador lógico and
console.log(1 > 2 && 2 > 3)
console.log(8 > 7 && 10 > 9)
console.log(3 < 4 && 4 < 3)

// 6. Utiliza el operador lógico or
console.log(1 > 2 || 2 > 1)
console.log(9 < 10 || 4 > 5)


// 7. Combina ambos operadores lógicos
console.log(1 > 2 && 4 > 5 || 5 > 4)
console.log(1 < 2 && 2 < 3 || 8 < 7)

// 8. Añade alguna negación
console.log(!(5 > 4))

// 9. Utiliza el operador ternario
let age = 17
age >=18 ? console.log("Es mayor de edad") : console.log("No es mayor de edad")

let techBuy = true
let compra = 50000
let iva = compra * 0.19
compra += iva 
techBuy ? console.log(`Paga IVA de $${iva} y el valor total de su compra es $${compra}`) : console.log("No paga IVA")

//Agregando if/else
if (techBuy) {
    console.log("Si hay IVA")
} else {
    console.log('No hay IVA')
}
// 10. Combina operadores aritméticos, de comparáción y lógicas

let edad = 18
let dinero = 50000
let costo = 48000

let puedeComprar = (edad >= 18 && dinero >= costo)
puedeComprar ? console.log("Puedes comprar, eres mayor de edad y tienes suficiente dinero") : console.log("No puedes comprar, eres menor de edad o no tienes suficiente dinero")