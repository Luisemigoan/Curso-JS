// destructuring - spreading: ahora que hemos visto en concreto los objetos y los arrays, veamos como trabajar con sus valores d eu na manera distinta.

// Destructuring, es una forma de extraer valores de un objeto o array y asignarlos a otras variables de manera concisa.
let myArray = [1, 2, 3];
console.log(myArray);

let person = {
    name: 'Luis',
    age: 34,
    alias: 'Mastroik'
};
console.log(person);

// Sintaxis de destructuring en arrays, se desestructuran los valores por el orden en el que se encuentran en el array.
let [first, second, third, four] = myArray;
console.log(first);
console.log(second);
console.log(third);
console.log(four);

// sintaxys en arrays con valores predeterminados.
let [five, six, seven = 0, eight = 0] = myArray; // si no se encuentra el valor en la posición, se asigna el valor predeterminado.
console.log(five); // 1
console.log(six); // 2
console.log(seven); // 0
console.log(eight); // 0

// ignorar elementos en arrays, se pueden ignorar elementos, utilizando una coma y dejando un espacio en blanco.
let [nine, , eleven] = myArray;
console.log(nine); // 1
console.log(eleven); // 3

// Sintaxis de destructuring en objetos, se desestructuran los valores por el nombre de las propiedades del objeto.
let {name, age, alias} = person;
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis de destructuring en objetos con valores predeterminados, la unica forma de acceder a las propiedades de un objeto es por el nombre de la propiedad, para eso usamos dos puntos y el nombre de la propiedad, seguidamente creamos una variable con el nombre que queramos, luego asignamos un valor predeterminado a la variable que queramos y finalmente imprimimos en consola.
let {name: name2, age: age2, alias: alias2, country = 'Colombia'} = person;
console.log(name2);
console.log(age2);
console.log(alias2);
console.log(country);

// destructuracion de objetos anidados, para acceder a las propiedades de un objeto anidado, se debe seguir la misma sintaxis que en los objetos normales.
let person2 = {
    name: 'Luis',
    age: 34,
    alias: 'Mastroik',
    country: {
        name: 'Colombia',
        code: 'CO'
    }
};
let {name: name3, country: {name: countryName, code: countryCode}} = person2;
console.log(name3);
console.log(countryName);
console.log(countryCode);

// Spreading operator ( ... ), es una forma de combinar los valores de un objeto o array con los valores de otro objeto o array.

//sintaxis en arrays.
let myArray2 = [4, 5, 6];
let myArray3 = [7, 8, 9];

// copia de un array.
let myArrayCopy = [...myArray2];
console.log(myArrayCopy);

// combinación de arrays.
let myArray4 = [...myArray2, ...myArray3];
console.log(myArray4);

//sintaxis en objetos.
let person3 = {
    name: 'Luis',
    age: 34,
    alias: 'Mastroik'
};

let person4 = {
    country: 'Colombia',
    code: 'CO'
};

// copia de un objeto.
let personCopy = {...person3};  
console.log(personCopy);

// combinación de objetos.
let person5 = {...person3, ...person4};
console.log(person5);