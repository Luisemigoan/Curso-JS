//Las variables sirven para almacenar valores o referencias en memoria para utilizarlsa despues .

// Tipos de variables, su sintaxis se basa en declaración de la palabra reservada, luego el nombre de la variable que debe ser descriptivo y usando lowerCamelcase el signo igual = y el valor de la variable

//var
var helloWorld = "¡Hello JavaScript con var!" //Ahora que está creada podemos trabajar con la variable, por ejemplo podemos usar la función console.log
console.log(helloWorld) 
//En este ejemplo usamos el nombre de la variable para llamarla
//var fue la forma original para declarar, a hoy existen las otras dos ya que funciona como variable, es decir puedo cambiarla más adelante:
var helloWorld = "¡Hola de nuevo JS con var!"
console.log(helloWorld) //Esto imprimirá el valor inicial y el valor modificado en consola, no crear variables mediante esta palabra reservada (Hoisting) se pueden acceder aún sin declararlas es decir se podría acceder a un console.log sin definir una var.

//let, esta es la variable que reemplaza var se deben declarar todas las variables que estén pensadas para ser modificadas más adelante mediante esta palabra reservada.

let helloWorld2 = "Hello JavaScript con let"
console.log(helloWorld2)
//Al ser el reemplazo de var, también puede ser reasignada más adelante, sin embargo, para reasignar el valor en una variable creada con let no se puede volver a colocar la palabra reservada let, sólo el nombre de la variable y su nuevo valor.
helloWorld2 = "Hola JavasCript de nuevo con let"
console.log(helloWorld2)


 
//const esta variable se utiliza para declarar datos que no serán modificados más adelante
const nombreCompleto = "Luis Emilio González Ángel"
console.log(nombreCompleto)

nombreCompleto = "Michael"
console.log(nombreCompleto)
//Si observamos en consola al tratar de reasignar un valor a la variable const nos arrojará un error, ya que como se indicó anteriormente este tipo de variable se utiliza para datos que no pueden ser modificados y en este caso el hoisting no aplica, aunque en un array por ejemplo si pueden modificarse su contenido, aunque el nombre de la variable no cambia.

