// Manejo de Errores en JavaScript, El manejo de errores (Excepciones) en JavaScript permite a los desarrolladores controlar y gestionar los errores que pueden ocurrir durante la ejecución del código, evitando que la aplicación se detenga y proporcionando información útil sobre lo que salió mal, para que se pueda corregir.

// Excepción: Una excepción es un evento anómalo que ocurre durante la ejecución de un programa y que interrumpe el flujo normal de las instrucciones del programa. Las excepciones pueden ser causadas por errores en el código, condiciones inesperadas o problemas externos.

console.log("Definición de Excepción: Una excepción es un evento anómalo que ocurre durante la ejecución de un programa y que interrumpe el flujo normal de las instrucciones del programa.");

// Ejemplos de Excepciones y cómo solucionarlas:

// 1. TypeError: Ocurre cuando se intenta realizar una operación en un valor del tipo incorrecto.
try {
    let num = 5;
    num.toUpperCase(); // Esto lanzará un TypeError porque num es un número y no tiene el método toUpperCase.
} catch (error) {
    console.error("TypeError: ", error.message);
}

// Solución: Asegurarse de que el valor es del tipo correcto antes de realizar la operación.
try {
    let str = "hello";
    console.log(str.toUpperCase()); // Esto funcionará correctamente porque str es una cadena.
} catch (error) {
    console.error("Error: ", error.message);
}

// 2. ReferenceError: Ocurre cuando se intenta acceder a una variable que no está definida.
try {
    console.log(nonExistentVariable); // Esto lanzará un ReferenceError porque nonExistentVariable no está definida.
} catch (error) {
    console.error("ReferenceError: ", error.message);
}

// Solución: Asegurarse de que la variable está definida antes de acceder a ella.
try {
    let definedVariable = "I exist!";
    console.log(definedVariable); // Esto funcionará correctamente porque definedVariable está definida.
} catch (error) {
    console.error("Error: ", error.message);
}

// 3. SyntaxError: Ocurre cuando hay un error en la sintaxis del código.
try {
    eval("let a = 5; let b = ;"); // Esto lanzará un SyntaxError debido a la sintaxis incorrecta.
} catch (error) {
    console.error("SyntaxError: ", error.message);
}

// Solución: Asegurarse de que el código tiene la sintaxis correcta.
try {
    eval("let a = 5; let b = 10;"); // Esto funcionará correctamente porque la sintaxis es correcta.
    console.log("Código ejecutado correctamente.");
} catch (error) {
    console.error("Error: ", error.message);
}

// try...catch: La estructura try...catch permite capturar errores que ocurren dentro del bloque try y manejarlos en el bloque catch.

try {
    // Código que puede lanzar un error
    let result = 5 / "a";
    console.log(result);
} catch (error) {
    // Código para manejar el error
    console.error("Ocurrió un error: ", error.message);
}

// Ejemplo de try...catch...finally:
// La estructura try...catch...finally permite ejecutar un bloque de código después de que se haya ejecutado el bloque try y el bloque catch, independientemente de si se lanzó un error o no.

try {
    // Código que puede lanzar un error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Código para manejar el error
    console.error("Ocurrió un error: ", error.message);
} finally {
    // Código que siempre se ejecuta
    console.log("El bloque finally siempre se ejecuta.");
}

// Ejemplo de throw:
// La declaración throw permite lanzar un error personalizado. Esto puede ser útil para manejar errores específicos de la aplicación.

try {
    // Código que puede lanzar un error
    let age = -5;
    if (age < 0) {
        throw new Error("La edad no puede ser negativa.");
    }
    console.log("La edad es: ", age);
} catch (error) {
    // Código para manejar el error
    console.error("Ocurrió un error: ", error.message);
}

// Ejemplo de errores personalizados (Custom Errors):
// Podemos crear nuestras propias clases de errores personalizados para manejar situaciones específicas en nuestra aplicación.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    // Código que puede lanzar un error personalizado
    let user = { name: "John", age: 25 };
    if (!user.email) {
        throw new CustomError("El usuario debe tener un email.");
    }
    console.log("Usuario: ", user);
} catch (error) {
    // Código para manejar el error personalizado
    if (error instanceof CustomError) {
        console.error("Error personalizado: ", error.message);
    } else {
        console.error("Ocurrió un error: ", error.message);
    }
}

try {
    // Código que puede lanzar un error si el valor no es un número
    let input = 5; // Cambia esto para probar diferentes valores
    if (isNaN(input)) {
        throw new Error("El valor debe ser un número.");
    }
    console.log("El número es: ", input);
} catch (error) {
    // Código para manejar el error
    console.error("Ocurrió un error: ", error.message);
}