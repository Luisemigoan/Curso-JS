// 1. Crea una clase que reciba dos propiedades
class Twoproperties {
    constructor(name1, age1) {
        this.name1 = name1;
        this.age1 = age1; 
    }
}

// 2. Añade un método a la clase que utilice las propiedades
class Metod {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    sayHello () {
        console.log(`Hola, me llamo ${this.name} y mi edad es ${this.age}, mi alias es ${this.alias}`);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const Withmetod = new Metod("Luis2", 342);
console.log(Withmetod);
Withmetod.sayHello();

// 4. Añade un método estático a la primera clase
class Sumar {
    constructor(name1, age1) {
        this.name1 = name1;
        this.age1 = age1; 
    }
    static Math (a, b) {
        return a + b
    } 
}

// 5. Haz uso del método estático
console.log(Sumar.Math(5, 5));

// 6. Crea una clase que haga uso de herencia
class Person extends Metod {
    constructor(name, age, alias) {
        super(name, age, alias)
    }
}
const person = new Person("Eduardo", 23, "Edu");

// 7. Crea una clase que haga uso de getters y setters
class Person2 {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    sayHello() {
        console.log(`${this.name} saluda`)
    }
    get name() {
        return this.name;
    }
    set name(newName) {
        this._name = newName
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Person3 {

    #name
    #age

    constructor(name, age, alias) {
        this.#name = name;
        this.#age = age;
        this.alias = alias;
    }
    sayHello() {
        console.log(`${this.#name} saluda`)
    }
    get name() {
        return this.#name;
    }
    set age(newAge) {
        this.#age = newAge;
    }
}

// 9. Utiliza los get y set y muestra sus valores.
const person3 = new Person3("Eduardo 3", 23, "Edu3");
console.log(person3.name);  
person3.age = 24;
console.log(person3.age);

// 10. Sobrescribe un método de una clase que utilice herencia.
class Person4 extends Metod {
    constructor(name, age, alias) {
        super(name, age, alias)
    }
    sayHello() {
        console.log(`${this.name} saluda`)
    }
}
const person4 = new Person4("Eduardo4", 23, "Edu4");
person4.sayHello();
