// 1. Captura una excepción utilizando try-catch
try {
    let num = 5;
    num.toUpperCase();
} catch (error) {
    console.error("TypeError: ", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    let num = 5;
    num.toUpperCase();
} catch (error) {
    console.error("TypeError: ", error.message);
} finally {
    console.log("Se ejecuta el bloque finally.");
}

// 3. Lanza una excepción genérica
let num = 10;
try {
    if (typeof num !== "string") {
        throw new Error("El valor no es una cadena.");
    }
} catch (error) {
    console.error("Error: ", error.message);
}

// 4. Crea una excepción personalizada
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

// 5. Lanza una excepción personalizada
try {
    let product = { name: "Laptop", price: 1000 };
    if (!product.stock) {
        throw new CustomError("El producto debe tener stock.");
    }
    console.log("Producto: ", product);
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Error personalizado: ", error.message);
    } else {
        console.error("Ocurrió un error: ", error.message);
    }
}

// 6. Lanza varias excepciones según una lógica definida
try {
    let value = "abc";
    if (typeof value !== "number") {
        throw new TypeError("El valor debe ser un número.");
    }

    let result = value / 2;
    if (isNaN(result)) {
        throw new Error("El resultado no es un número válido.");
    }

    if (result < 0) {
        throw new RangeError("El resultado no puede ser negativo.");
    }

    console.log("Resultado: ", result);
} catch (error) {
    if (error instanceof TypeError) {
        console.error("TypeError: ", error.message);
    } else if (error instanceof RangeError) {
        console.error("RangeError: ", error.message);
    } else {
        console.error("Error: ", error.message);
    }
}

// 7. Captura varias excepciones en un mismo try-catch
let values = [1, 2, 3, "four", 5];
values.forEach(value => {
    try {
        let result = value.toUpperCase();
        console.log("Resultado: ", result);
    } catch (error) {
        console.error("Error: ", error.message);
    }
});
    
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let value = [1, 2, 3, "four", 5];
value.forEach(value => {
    try {
        let result = parseFloat(value);
        console.log("Resultado: ", result);
    } catch (error) {
        console.error("Error: ", error.message);
    }
});

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.
function verifyProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new CustomError(`La propiedad '${property}' es requerida.`);
    }
    return true;
}

try {
    let car = { brand: "Toyota", model: "Corolla" };
    verifyProperty(car, "year");
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Error personalizado: ", error.message);
    } else {
        console.error("Ocurrió un error: ", error.message);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.
function retryOperation(operation, maxRetries) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            operation();
            break;
        } catch (error) {
            console.error("Error: ", error.message);
            retries++;
        }
    }
}
