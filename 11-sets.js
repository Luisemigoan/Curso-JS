//sets, esta estructura de datos, los sets no se declaran con llaves, se declara como se muestra a continuación.

//Estructura
let mySet = new Set()

//Inicialización con datos
mySet = new Set("Luis", "Tiene", 34, "Años")
console.log(mySet)//Set(4) {'L', 'u', 'i', 's'}, si bien hay 4 elementos como se declaró, no es exactamente lo que declaramos en cada index, sino que se trata de la cantidad de letras que tiene el string "Luis" o primer elemento del set.

// La forma correcta de inicialización con datos sería.
mySet = new Set(["Luis", "Tiene", 34, "Años"])
console.log(mySet)//Set(4) {'Luis', 'Tiene', 34, 'Años'} ahora si veremos los datos, esta es la principal diferencia entre la declaración y la inicialización con datos. estos deben de ir entre corchetes.

//Ahora bien, podríamos declarar un set e inicializarlo sin datos de la siguiente manera.
let mySet2 = new Set ([])
console.log(mySet2)

//Métodos comunes

//add, permite añadir un dato final del set.
mySet.add("Mastroik")
console.log(mySet)// Set(5) [ "Luis", "Tiene", 34, "Años", "Mastroik" ]

//delete, se debe especificar cual es el elemento que queremos borrar ya que el set no maneja acceso a los elementos por índices, esta es una d elas diferencias entre un array y un set.
console.log(mySet.delete("Mastroik"))//true retorna true si el elemento existe y lo elimina, en caso contrario retorna false.
console.log(mySet)//Set(4) [ "Luis", "Tiene", 34, "Años" ] dado el regreso booleano del delete se podría utilizar un if para ejecutar algúna instrucción en caso de eliminarse o no.

// has, comprueba si existe un elemento en el set.
console.log(mySet.has("Luis"))//true indicando que el set si tiene el dato "Luis"

// size, muestra el tamaño del set.
console.log(mySet.size)//4 es el tamaño actual del set.

//Convertir un set en array
let myArray = Array.from(mySet)
console.log(myArray)//Array(4) [ "Luis", "Tiene", 34, "Años" ]

//Convertir un array en set
mySet = new Set(myArray)
console.log(mySet)//Set(4) [ "Luis", "Tiene", 34, "Años" ]

//La principal diferencia entre un set y un array es que el set no permite duplicados, por eso no hace falta acceder por un índice concreto ya que de todas las entradas sólo puede haber una y no se pueden repetir datos, aunque al no ser key sensitive si cambiamos una mayúscula o minúscula entonces lo aceptará
mySet.add("Años")
mySet.add("Años")
mySet.add("Años")
console.log(mySet)//Set(4) [ "Luis", "Tiene", 34, "Años" ] no agrega duplicados
