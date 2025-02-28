// objects:Es el segundo tipo de dato de JS, podría decirse que todo lo que no sea un dato primitivo dentro de JS es un objeto, entonces un objeto es una colección de propiedades que se estructura parecido a como entendemos maps, es decir, se compone de una clave y un valor asociado a esa clave, los valores de las propiedades pueden ser de cualquier tipo de dato, incluso otros objetos, funciones, arreglos, etc.

// sintaxis de un objeto.
let person = {
    name: "John",
    age: 34,
    alias: "Mastroik",
    email: "luisemigoan@hotmail.com"
}//La instancia de un objeto es unica, es decir, no se pueden crear dos objetos con la misma estructura y que sean diferentes, aunque tengan los mismos valores.

// Acceder a las propiedades de un objeto, podemos acceder a las propiedades de un objeto de dos formas, la primera es usando la notación de punto y la segunda es usando la notación de corchetes.
console.log(person.name);
console.log(person["name"]);
console.log(typeof person.age);
console.log(person["age"]);

// Modificar las propiedades de un objeto, podemos modificar las propiedades de un objeto de dos formas, la primera es usando la notación de punto y la segunda es usando la notación de corchetes.
person.name = "Luis";
person["age"] = "25";
console.log(person.name);
console.log(person.age);
console.log(typeof person["age"]);

// Eliminar propiedades de un objeto, podemos eliminar las propiedades de un objeto de dos formas, la primera es usando la notación de punto y la segunda es usando la notación de corchetes.
delete person.name;
delete person["age"];
console.log(person);

// Agregar propiedades a un objeto, podemos agregar propiedades a un objeto de dos formas, la primera es usando la notación de punto y la segunda es usando la notación de corchetes.
person.lastName = "González";
person["phone"] = "1234567890";
person.age = 37;
console.log(person);

// Métodos de los objetos, los objetos pueden tener métodos, que son funciones que se ejecutan dentro del contexto del objeto, es decir, pueden acceder a las propiedades del objeto y modificarlas, para definir un método dentro de un objeto, simplemente se asigna una función a una propiedad del objeto.
let person2 = {
    name: "John",
    age: 34,
    alias: "Mastroik",
    walk: function(){
        console.log("I'm walking");
    }
}
person2.walk();

// Anidar objetos, los objetos pueden tener propiedades que sean otros objetos, es decir, se pueden anidar objetos dentro de otros objetos.
let person3 = {
    name: "John",
    age: 34,
    alias: "Mastroik",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    job: {
        title: "Software Developer",
        company: "Google",
        work: function () {
            console.log("I'm working");
        }
    }
}
console.log(person3)
// Como podemos observar estamos modelando una entidad no sólo datos primitivos simples, sino también datos más complejos, como direcciones y trabajos, esto nos permite modelar entidades más complejas y con más información.

// acceder a todos estos elementos anidados, podemos acceder a las propiedades de un objeto anidado de dos formas, la primera es usando la notación de punto y la segunda es usando la notación de corchetes.
console.log(person3.address.street);    
console.log(person3["address"]["city"]);
console.log(person3.job.title);
console.log(person3["job"]["company"]);
person3.job.work();

// Igualdad de objetos, en JS los objetos son comparados por referencia, es decir, si dos objetos tienen la misma estructura y los mismos valores, pero son instancias diferentes, JS los considera diferentes, para comparar dos objetos en JS, se debe hacer una comparación de sus propiedades.
let person4 = {
    name: "John",
    age: 34,
    alias: "Mastroik"
}
let person5 = {
    name: "John",
    age: 34,
    alias: "Mastroik"
}
console.log(person4 === person5);
console.log(person4 == person5);
console.log(person4.name === person5.name);
console.log(person4.age === person5.age);

// Iterar sobre las propiedades de un objeto, podemos iterar sobre las propiedades de un objeto de dos formas, la primera es usando un ciclo for y la segunda es usando un ciclo for...in, es muy útil cuando no sabemos cuántas propiedades tiene un objeto y queremos iterar sobre todas ellas, en ambos casos se agrega key como variable para acceder a las propiedades del objeto.
for (let key in person4) {
    console.log(key + ": " + person4[key]);
}

for (let key in person5) {
    console.log(key + ": " + person5[key]);
}

// También podemos hacer referencia a los métodos que tenemos dentro de un objeto con this, this es una palabra reservada que hace referencia al objeto que contiene el método que se está ejecutando, es decir, si tenemos un método dentro de un objeto, this hace referencia a ese objeto.
let person6 = {
    name: "John",
    age: 34,
    alias: "Mastroik",
    walk: function(){
        console.log(this.name + " is walking"); //this hace referencia al objeto person6.
    }
}
person6.walk();

// funciones como objetos, en JS las funciones son objetos, es decir, las funciones pueden tener propiedades y métodos, por lo que podemos asignar propiedades y métodos a una función.
function greet(name, age){ /* JS nos sugiere que se haga como clase ya que es una constructora */
    this.name = name;
    this.age = age;
}
let person7 = new greet("John", 34);
console.log(person7);