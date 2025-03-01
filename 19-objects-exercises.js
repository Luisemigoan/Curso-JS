// 1. Crea un objeto con 3 propiedades
let threeProperties = {
    name: "Luis",
    age: 34,
    alias: "Mastroik"
}
console.log(threeProperties);

// 2. Accede y muestra su valor
console.log(threeProperties.name);
console.log(threeProperties["age"]);

// 3. Agrega una nueva propiedad
threeProperties.email = "luisemigoan@hotmail.com"
console.log(threeProperties);

// 4. Elimina una de las 3 primeras propiedades
delete threeProperties.alias;
console.log(threeProperties);

// 5. Agrega una función e invócala
let objectFunction = {
    name: "Luis",
    age: 34,
    alias: "Mastroik",
    sayHello: function () {
        console.log(`Hello, ${this.name}`);
    }
}
    objectFunction.sayHello();

// 6. Itera las propiedades del objeto
for (let key in objectFunction) {
    console.log(key + ": " + objectFunction[key]);
}

// 7. Crea un objeto anidado
let nestedObject = {
    name: "Luis",
    lastName: "González",
    email: "luisemigoan@hotmail.com",
    work: {
        title: "Software Developer",
        company: "Faranda"
    }
}
console.log(nestedObject);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(nestedObject.lastName);
console.log(nestedObject.work.company);
console.log(nestedObject["work"]["title"]);

// 9. Comprueba si los dos objetos creados son iguales
console.log(objectFunction === nestedObject);
console.log(objectFunction.name === nestedObject.name);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objectFunction.name === nestedObject.name);
console.log(objectFunction.email === nestedObject.email);