// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, , 4];

let [one, two] = myArray;
console.log(one);
console.log(two);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [three, four, five = 0] = myArray;
console.log(three);
console.log(four);
console.log(five);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "Luis",
    age: 34,
    alias: "Mastroik"
}

let {name, age} = person;
console.log(name);
console.log(age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: name2, age: age2} = person;
console.log(name2);
console.log(age2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person2 = {
    name: "Estefanía",
    age: 24,
    alias: "pingui",
    company: {
        name: "Mercy Corps"
    }
}
let {name: name3, company: {name: companyName}} = person2
console.log(name3);
console.log(companyName);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = ["Anita", "lava"];
let myArray3 = ["la", "tina"];

let myArray4 = [...myArray2, ...myArray3];
console.log(myArray4);

// 7. Usa propagación para crear una copia de un array
let myArray6 = ["Una", "Copia"];
let myArray7 = [...myArray6];
console.log(myArray6);
console.log(myArray7);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person4 = {
    name: "Maria",
    age: 14,
    alias: "Majo"
}

let person5 = { 
    name1: "Adriana", // Cambié el nombre de la propiedad para que no se repita.
    age2: 45,
    alias3: "Patri"
}

let person6 = {...person4, ...person5};
console.log(person6);

// 9. Usa propagación para crear una copia de un objeto
let person7 = {...person4};
console.log(person7);

// 10. Combina desestructuración y propagación.
let myArray8 = ["El", "es"];

let person8 = {
    name6: "Luis",
    age6: 34,
    alias6: "Mastroik"
}

let [a, b] = myArray8;

let {name6, ...rest} = person8;

console.log(`${a}, ${b}, ${name6}, tiene ${rest.age6} años y su alias es ${rest.alias6}` );