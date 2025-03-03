// Las clases podría decirse que son un objeto pero un poco más complejo, nos sirven para crear plantillas de objetos, es decir, si queremos crear varios objetos con las mismas propiedades y métodos, podemos crear una clase y a partir de ella crear los objetos que necesitemos, es una forma mucho mas clara y ordenada de crear objetos y manejar diferentes caracteristicas como la herencia, polimorfismo, encapsulamiento, etc. los objetos como tal no permiten reutilizar una estructura o plantilla, algo que si es posible con las clases.

// Para crear una clase en JavaScript se utiliza la palabra reservada class seguido del nombre de la clase, por convención el nombre de la clase debe empezar con mayúscula (Uppercamelcase), luego de la definición de la clase se abre un bloque de código donde se definen las propiedades y métodos de la clase, dentro va un constructor que es un método especial que se ejecuta al momento de instanciar la clase, este método se utiliza para inicializar las propiedades de la clase, el constructor se define con la palabra reservada constructor, seguido de paréntesis y llaves, dentro de las llaves se definen las propiedades de la clase, para acceder a las propiedades de la clase se utiliza la palabra reservada this seguido de un punto y el nombre de la propiedad.
class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
// Para instanciar una clase se crea una variabe, se utiliza la palabra reservada new seguido del nombre de la clase y paréntesis, dentro de los paréntesis se pasan los argumentos que recibe el constructor de la clase.
const person1 = new Person('John', 30, 'John Doe');
console.log(person1);

// Podemos crear múltiples instancias de la clase y cada una tendrá sus propias propiedades.
const person2 = new Person('Jane', 25, 'Jane Doe'); 
console.log(person2);

const person3 = new Person('Mike', 35, 'Mike Doe');
console.log(person3);

//valores por defecto en las propiedades.
class Person2 {
    constructor(name = 'John', age, alias = 'John Doe') {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
const person4 = new Person2("Luis", 34, "Mastroik"); //cuidado con los valores por defecto, si no se pasan los argumentos en el orden correcto, se asignarán a las propiedades incorrectas.
console.log(person4);//Se modifican los valores por defecto.

// acceso a las propiedades de la clase, es similar a los objetos, se usa la notación de punto o corchetes.
console.log(person4.name);
console.log(person4["age"]);
console.log(person4.alias);


// modificar propiedades de la clase, se hace de la misma forma que los objetos, se accede a la propiedad y se asigna un nuevo valor.
person4.name = "Luis Fernando";
console.log(person4.name);

// Métodos en las clases, los métodos son funciones que se definen dentro de una clase, para definir un método se escribe el nombre del método seguido de paréntesis y llaves, dentro de las llaves se escribe el código del método, para acceder a las propiedades de la clase se utiliza la palabra reservada this seguido de un punto y el nombre de la propiedad.
class Person3 {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person5 = new Person3('John', 30, 'John Doe');
person5.sayHello();

// propiedades privadas, en JavaScript no existe un modificador de acceso privado como en otros lenguajes de programación, pero se puede simular utilizando el prefijo # antes del nombre de la propiedad, esto hace que la propiedad sea privada y no se pueda acceder desde fuera de la clase.
class Person4 {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person6 = new Person4('Mike', 30, 'John Doe', 1000);
console.log(person6.name);
//console.log(person6.#bank); //Error, no se puede acceder a la propiedad privada.

// Si se intenta acceder a una propiedad privada se lanzará un error, indicando que la propiedad no está definida, solamente la clase puede acceder a las propiedades privadas y solo dentro de la clase, podemos acceder a las propiedades privadas desde los métodos de la clase, pero no desde fuera de la clase, tampoco se puede asignar un nuevo valor a una propiedad privada desde fuera de la clase, finalmente esto lo que haría sería crear una nueva variable con el mismo nombre pero no modificaría la propiedad privada.

// es posible dejar que se acceda a una propiedad privada, o que se pueda visualizar pero no modificar, para ello se pueden crear métodos get y set, estos métodos se utilizan para obtener y asignar valores a las propiedades de la clase, respectivamente, para definir un método get se escribe la palabra reservada get seguido del nombre del método, para definir un método set se escribe la palabra reservada set seguido del nombre del método, ambos métodos se definen como si fueran una propiedad, pero sin paréntesis, para acceder a una propiedad privada se utiliza la palabra reservada this seguido de un punto y el nombre de la propiedad.
class Person5 {

    #name
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    get name() {
        return this.#name; //Se puede acceder a la propiedad privada pero no modificarla.
    }
    /*get bank() {
        return this.#bank; //Se puede acceder a la propiedad privada pero no modificarla.
    }*/
    set bank(bank) {
        this.#bank = bank; //Se puede modificar la propiedad privada, pero no se puede acceder a ella.
    }
}
const person7 = new Person5('John', 30, 'John Doe', 1000);
console.log(person7.name);
person7.bank = 2000;
console.log(person7.bank);

// Herencia en las clases, la herencia es una característica de la programación orientada a objetos que permite crear una clase a partir de otra clase, la clase que se hereda se conoce como clase padre o superclase, la clase que hereda se conoce como clase hija o subclase, la clase hija hereda todas las propiedades y métodos de la clase padre, además puede tener sus propias propiedades y métodos, para heredar una clase se utiliza la palabra reservada extends seguido del nombre de la clase padre, luego de la definición de la clase hija se llama al constructor de la clase padre utilizando la palabra reservada super seguido de paréntesis, dentro de los paréntesis se pasan los argumentos que recibe el constructor de la clase padre.
class Person6 {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}   
class Employee extends Person6 {
    constructor(name, age, alias, salary) {
        super(name, age, alias);
        this.salary = salary;
    }
    showSalary() {
        console.log(`My salary is ${this.salary}`);
    }
}
const employee1 = new Employee('John', 30, 'John Doe', 1000);
employee1.sayHello();
employee1.showSalary();

// Métodos estáticos, los métodos estáticos son métodos que se pueden llamar sin necesidad de instanciar la clase, es decir, se pueden llamar directamente desde la clase, para definir un método estático se utiliza la palabra reservada static seguido del nombre del método, para llamar a un método estático se utiliza el nombre de la clase seguido de un punto y el nombre del método.
class Math {    
    static sum(a, b) {
        return a + b;
    }
}
console.log(Math.sum(5, 3));
// Los métodos estáticos son útiles cuando se necesita un método que no dependa de las propiedades de la clase, es decir, un método que no necesite acceder a las propiedades de la clase, por ejemplo, un método que realice una operación matemática simple, en este caso no es necesario instanciar la clase para llamar al método, se puede llamar directamente desde la clase.

// Cuando usar objetos y cuando clases, los objetos son útiles cuando se necesita crear un solo objeto con propiedades y métodos, por ejemplo, un objeto que represente un usuario, un objeto que represente un producto, etc., las clases son útiles cuando se necesita crear múltiples objetos con las mismas propiedades y métodos, por ejemplo, una clase que represente un usuario, una clase que represente un producto, etc., en resumen, si se necesita crear un solo objeto se puede utilizar un objeto, si se necesita crear múltiples objetos se puede utilizar una clase.



