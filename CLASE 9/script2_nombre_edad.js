// 1. Pedir nombre y edad al usuario
let entrada1 = prompt("Ingresá tu nombre:");
let entrada2 = prompt("Ingresá tu edad:");

// 2. Validar que la edad sea un número válido con isNaN().

if (isNaN(entrada2)) {
  console.log("Error: ingresaste un valor que no es un número válido.");
}

// 3. Convertir la edad de texto a número con parseInt() o Number().

let edad = parseInt(entrada2);

// 4. Concatenar los datos para formar un mensaje descriptivo y mostrarlo en consola.

let mensaje = "Hola, " + entrada1 + ". Tenés " + edad + " años.";
console.log(mensaje);

// 5. Comparar la edad para decir si la persona es mayor de edad o no.

if (edad >= 18) {
  console.log("Sos mayor de edad.");
}

