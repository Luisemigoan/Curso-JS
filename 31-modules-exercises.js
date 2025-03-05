// 1. Exporta una función
export function multiply(a, b) {
    return a * b;
}

// 2. Exporta una constante
export const E = 2.718281828459045;

// 3. Exporta una clase
export class Person {
    constructor(name, age, alias) {
        this.name = name,
        this.age = age,
        this.alias = alias
    }
}

// 4. Importa una función
import { multiply } from './31-modules-exercises.js';
console.log(multiply(5, 10));

// 5. Importa una constante
import { E } from './31-modules-exercises.js';
console.log(E);

// 6. Importa una clase
import { Person } from './31-modules-exercises.js';
const person = new Person('Juan', 25, 'Juanito');

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function divide(a, b) {
    return a / b;
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import divide from './31-modules-exercises.js';
console.log(divide(10, 2));

// 9. Exporta una función, una constante y una clase desde una carpeta
export function add(a, b) {
    return a + b;
}

export const PI = 3.1416;

export class Person {
    constructor(name) {
        this.name = name;
    }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { add, PI, Person } from './31-modules-exercises.js';
console.log(add(5, 1));