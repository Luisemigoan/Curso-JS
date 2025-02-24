//sets, esta estructura de datos, los sets no se declaran con llaves, se declara como se muestra a continuación.

//Estructura
let mySet = new Set()

//Inicialización con datos
mySet = new Set("Luis", "Tiene", 34, "Años")
console.log(mySet)//Set(4) {'L', 'u', 'i', 's'}, si bien hay 4 elementos como se declaró, no es exactamente lo que declaramos en cada index, sino que se trata de la cantidad de letras que tiene el string "Luis", y esto, entonces la forma correcta de inicialización sería.

mySet = new Set(["Luis", "Tiene", 34, "Años"])
console.log(mySet)//Set(4) {'Luis', 'Tiene', 34, 'Años'} ahora si veremos los datos, esta es la principal diferencia entre la declaración y la inicialización con datos.

//Ahora bien, podríamos declarar un set sin datos de la siguiente manera.
let mySet2 = new Set ([])
console.log(mySet2)

