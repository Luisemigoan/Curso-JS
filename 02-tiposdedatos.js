//Tipos de datos primitivos son en los que se fundamenta la interaación con el lenguaje, son datos básicos e inmutables, representan un sólo valor, no son objetos, no tienen funciones ni métodos, estos tipos de datos son 7:

// 1 - Strings (Cadenas de texto, van en comillas)

let myName = "Luis Emilio"
let alias = 'Mastroik'
let lastName = "González Ángel" 
let email = `Luisemigoan@hotmail.com`

// 2 - Numbers (Números, van sin comillas)

let age = 34 //Enteros
let height = 1.83 //Decimales

// 3 - Boolean (Booleanos) se usan para saber si algo es verdadero o falso para un determinado comportamiento

let isStudent = true
let isWoman = false

// 4 - Undefined (Indefinido) Es una variable declarada pero que no se le ha asignado ningún valor, en consola podremos observar que aparecerá undefined en un color claro.

let undefinedValue

// 5 - Null es un valorque se asigna a una variable según una necesidad específica, la diferencia con undefined es que le agrego intencionalmente un valor nulo, aunque en un futuro puede tener un valor real, o una variable real llega a tener un valor nulo, al igual que undefined mostrará en consola null en un color claro.

let nullValue = null

// 6 - Symbol (Símbolo) Se crea con la palabra reservada Symbol, dentro de los paréntesis ingresa la clave del símbolo, representan valores únicos que pueden ser usados como identificadores de propiedades de futuros objetos, evitan colisiones entre otras propiedades

let mySymbol = Symbol("mySymbol")

// 7 - BigInt (Entero grande), se usa cuando se quiere representar un número exageradamente grande que no puede ser representado por el tipo de dato númber y sobre pasa los 64 bits, podemos usarlos en función de la memoria de nuestra maquina.

let myBigint = BigInt("9987826574268765272257")
let myBigInt2 = 9987826574268765272257n

//Mostrar el tipo de dato que estamos utilizando en cualquier tipo de variable, su sintaxis se basa en agregar la palabra reservada typeof antes de la variable que normalmente queremos imprimir en una función console.log

console.log(typeof myName)

//Nota null es un tipo de dato primitivo que en consola aparece como objeto, sin embargo, cuando asignamos null a una variable toma este tipo de dato primitivo así sea como objeto.

