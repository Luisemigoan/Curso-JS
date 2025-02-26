// Bucles - loops, es una estructura de control que nos permite repetir un bloque de código mientras una condición sea verdadera, es una forma indirecta de aplicar condiciones, se usan para aplicar tareas repetitivas o automatizar procesos, se asocian con las estructuras de datos pero no estan ligados.

// Bucle for: se ejecuta cuando lo lanzamos, tiene una condición que se ejecutará cada vez que se realiza una iteración, es decir, cada vez que se recorre ese bucle y se ejecutará mientras la condición sea true, una vez sea false el bloque deja de ejecutarse, su sintaxis tiene la forma de una función y luego dentro de llaves será el bloque se ejecutará mientras la condición sea verdadera.

//Sintaxis, se declara for() con paréntesis dentro de estos, se declarará la variable y se le asignará lo que se espera, en este caso la variable let se llama i (índice) y se inicializará en cero ( 0 ), luego declaramos la condición para que se ejecute en este caso que i sea menor que cero, finalmente indicamos la condición para modificar el valor del índice, en este caso lo incrementamos  y luego dentro de llaves {} irá el bloque de código que se ejcutará mientras la condición sea verdadera, en este caso el console.log().
for(let i = 0; i < 5; i++) {
    console.log("Saludar")// Esto nos imprimirá en consola saludar (5) o saludar escrito 5 veces
}

for(let i = 0; i < 5; i++) {
    console.log(`Saludar ${i}`)// Esto nos imprimirá en consola saludar (5) o saludar escrito 5 veces, pero si adicionalmente interpolamos, veremos lo siguiente saludar 0, saludar 1, saludar 2. sañudar 3, saludar 4, una vez finalizada la instrucción el bloque termina de ejecutarse, entonces un for podría parecer un if que se ejecuta mientras se cumpla, y como el índice debe ser menor que 5 y comienza en 0 se ejecutará otras 4 veces.
}

//Ahora supongamos que necesitamos recorrer un Array, si bien podríamos irnos al array y acceder a cada uno de los indices [0], 
const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < 5; i++) {
    console.log(`Elemento: ${numbers[i]}`)//Esto recorre todos los elementos del array.
}

for(let i = 0; i < 7; i++) {
    console.log(`Elemento: ${numbers[i]}`)//Esto recorre todos los elementos del array, pero si agregamos por ejemplo en la condición otros dos elementos veremos en consola Elemento: undefined dos veces.
}

for(let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)//Esto recorre todos los elementos del array pero limita el recorrido al tamaño del array, ahora si agregaramos más elementos al array for los recorrería de manera automática ya que se actualizará su tamaño desde el índice 0 hasta n tamaño.
}

// Bucle while: Se evalua antes de cada iteración entonces, si es verdadero el bucle continua, si es falso el bucle se detiene, en este caso marcamos una condición que en realidad es externa.
let i = 0
while (i < 5) {
    console.log(`Elemento: ${numbers[i]}`)
    i++ //Siempre agregar el incremento para evitar un loop infinito ya que en la variable i vale 0 y siempre lo valdrá a menos que se cambie el valor.
}
//En este caso la condición la marcamos externamente mientras que en el for lo hicimos internamente.
let x = 6
while (x < 5) /*Depende de la condicion (variable externa */{
    console.log(`Elemento: ${numbers[x]}`)
    x++
}//podemos corroborar esto cambiando el valor de i en este caso x a 0 el código nisiquiera se ejecutará.    

//Bucle do while: se ejecuta por lo menos 1 vez y luego evalua la condición, por ejemplo, si tomamos el ejemplo anterior dónde modificamos el valor de x a 6 en este caso por lo menos ejecutará una vez.
let p = 6
do {
    console.log(`Saludar ${p}`)// Imprimirá saludar 6
    p++
} while (p < 5)
//Como podemos observar el bloque se ejcutará por lo menos una vez y luego que continue o no ejecutandose dependerá de la condición.

// Bucle for of: recorre valores de algo que sea iterable (estructura de datos o algún tipo de datos), su sintaxis es similar, dentro de los parentesis se declara una variable se agrega of y se agrega el valor que se quiere iterar, finalmente declaramos que queremos hacer, en este caso imprimir los valores de un array, un set y un map, para este ejemplo usaremos las estructuras de datos vistas en las clases anteriores.

newArray = ["Luis", "Tiene", 34, "Años", true]

mySet = new Set(["Estefa", "Tiene", 24, "Años"])

myMap = new Map([
    ["alias", "Mastroik"],
    ["email", "luisemigoan@hotmail.com"],
    ["Teléfono", "3136623146"]
])

for (let valor of newArray) {
    console.log(valor)// Imprimirá Luis Tiene 34 Años true
}

for (let valor of mySet) {
    console.log(valor)// Imprimirá Estefa Tiene 24 Años
}

for (let valor of myMap) {
    console.log(valor)// Imprimira los arrays de clave y valor dentro de map.
}

//Buenas prácticas: Revisar siempre que no se provoque un bucle infinito.

//Break y continue 
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(`Elemento: ${i}`)// Imprimira Elemento: 0,1,2,3,4,6,7,8,9, se saltará el 5 ya que le dimos la instrucción de continuar si en algún punto el indice valia 5.
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break
    }
    console.log(`Elemento: ${i}`)// Imprimira Elemento: 0,1,2,3,4ya no se ejecutará o iterará más ya que le dimos la instrucción de parar si en algún punto el indice valia 6.
}
//Esto nos ayuda a controlar los flujos de eejcución de los bucles.
