//Condicionales o estructuras de control: Permiten ejecutar diferentes bloques de código en función de si una condición es verdadera o falsa, se agrupan en 3 bloques if, else if, else.

//if (si) Si una condición (Variable o condición) es verdadera se ejecuta una instrucción {Instrucción o bloque de código a ejecutar si la condición se cumple} 
let age = 37

if(age >= 18) {
    console.log("Es mayor de edad")
}

//else (sino) Sino se cumple esa condición entonces se ejecutará otra instrucción {Instrucción o bloque de código en caso de que no se cumpla la condición}.

else {
    console.log("No es mayor de edad")
}

//else if (sino si) Si queremos hacer una validación adicional debe ir entre el if y el else, esta condicional también debe llevar otra condición diferente a evaluar (), y la secuencia validará primeramente el if, sino se cumple validará si existe otra condición a evaluar en este caso estamos validando si la edad ingresada es menor a 18, de ser cierto, ejecutará la instrucción {}, en el momento en que se cumpla una condición, ya no revisará más condiciones y en caso de que no se cumpla ninguno se ejecutará el else que actuará como caso por defecto en caso de qu eninguna de las codiciones se cumpla.
if(age == 34) {
    console.log("La edad es 34")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 34 ni es menor de edad")
}

//Operadores Ternarios: ( ? : ) Adicionalmente de lo que vimos en el apartado de "operadores", como bien sabemos se trata de un operador que hace comprobaciones pero finalmente terminamos operando, entonces podríamos decir que este operador es una forma rápida de tener o utilizar un if/else. 

//En este caso no usaremos console.log sino que el resultado lo asignaremos a una constante llamada resultado directamente que tendrá como resultado la condición y finalmente lo imprimiremos combinando operadores con condicionales.

const resultado = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(resultado)

//switch es la mejor opción cuando vamos a comparar una única variable con diferentes valores posibles, evitando el uso de muchos else if.

let day = 5
let dayName

//se declara la condición y en el parentesis se agrega la variable que se va a comparar, dentro de llaves {} irán los casos o valores a comparar, se deben finalizar las instrucciones con un break que romperá la ejecución del bloque impidiendo que revise los siguientes cases, finalmente se agrega una instrucción por default que ejecute una instrucción en caso de que ninguna de las validaciones sea correcta.

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break            
    case 6:
        dayName = "Domingo"
        break
    default: 
     dayName = "Número de día no válido"    
}
console.log(dayName)

//Ventajas y limitaciones del switch: Es fácil de entender, es eficiente para que se ejecute más rápido, es menos flexible que if/else a la hora de concatenar condiciones complejas, si no se coloca el break al final de cada instrucción el switch no funcionará correctamente.