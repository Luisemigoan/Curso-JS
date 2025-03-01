// 1. Imprime por consola tu nombre si una variable toma su valor
const myName = "Luis"

if (myName === "Luis") {
    console.log(myName)
} else {
    console.log("No es mi nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user = "Luis"
const pass = 104050

if (user === "Luis" && pass === 104050) {
    console.log("Las credenciales coinciden")
} else {
    console.log("Las credenciales no coinciden")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 5

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15

if (edad >= 18) {
    console.log("Puede votar")
} else {
    console.log(`No puedes votar te faltan ${18 - edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age = 15

resultado = age >= 18 ? "Es mayor de edad" : "Es menor de edad"
console.log(resultado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Enero"

if (mes === "Marzo" || mes === "Abril" || mes === "Mayo" || mes === "Junio") {
    console.log("Es primavera")
} else if (mes === "Julio" || mes === "Agosto") {
        console.log("Es Verano")
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre" || mes === "Diciembre") {
    console.log("Es Otoño")
} else {
    console.log("Es invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias

if (mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre") {
    dias = 31
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre" ) {
       dias = 30
} else if (mes === "Febrero") {
    dias = 28
} else {
    dias = "día invalido"
}

if (dias === "día invalido") {
    console.log("El mes introducido no es válido")
} else {
console.log(`El mes de ${mes} tiene ${dias} días`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Alemán"
let saludo

switch (idioma) {
    case "Inglés":
        saludo = "Hello" 
        break
    case "Francés":
        saludo = "Bonjour!" 
        break
    case "Portugués":
        saludo = "Olá"  
        break 
    case "Alemán":
    saludo = "Hallo!"    
    break
    default:
        saludo = "Elige un idioma válido."     
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month = "Agosto"
let estacionActual

switch (month) {
    case "Marzo":
    case "Abril":
    case "Mayo":
        estacionActual = "Primavera"
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        estacionActual = "Verano"
        break
    case "Septiembre":    
    case "Octubre":    
    case "Noviembre":
        estacionActual = "Otoño"
        break
    case "Diciembre":    
    case "Enero":    
    case "Febrero":
        estacionActual = "Invierno"
        break
    default:
        estacionActual = "Mes inválido"
}

console.log(`El mes de ${month} pertenece a la estación ${estacionActual}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes2 = "Enero"
let dias2

switch(mes2) {
    case "Enero":
    case "Marzo":
    case "Mayo":        
    case "Julio":        
    case "Agosto":        
    case "Octubre":        
    case "Diciembre":
        dias2 = 31
        break
    case "Febrero":
        dias2 = 28
        break
    case "Abril":    
    case "Junio":    
    case "Septiembre":    
    case "Noviembre":
        dias2 = 30
        break
    default:
        dias2 = "Introduzca un mes válido"        
}
console.log(`El mes de ${mes2} tiene ${dias2} días`)
