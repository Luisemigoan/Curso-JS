// 1. Concatena dos cadenas de texto
let myName = "Luis Emilio "
let myLastName = "González Ángel"
console.log(myName + myLastName)

// 2. Muestra la longitud de una cadena de texto
console.log(myName.length)

// 3. Muestra el primer y último carácter de un string
console.log(myName[0])
console.log(myName[10])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase())
console.log(myLastName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Cadena de texto
de varias
líneas`
console.log(variasLineas)

// 6. Interpola el valor de una variable en un string
console.log(`Mi Nombre es: ${myName} y mi apellido es: ${myLastName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(myName.replace(/ /g, "_"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myName.includes("Luis"))

// 9. Comprueba si dos strings son iguales
console.log(myName == myLastName)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length === myLastName.length)