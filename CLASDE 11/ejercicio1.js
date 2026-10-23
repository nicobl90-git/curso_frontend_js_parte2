/* Pasos a seguir:

Definí cuatro funciones diferentes: una para sumar, otra para restar, otra para multiplicar y otra para dividir.

Cada función recibirá dos parámetros numéricos y devolverá el resultado de la operación correspondiente.

En el caso de la función dividir, acordate de verificar que el divisor no sea cero. Si lo es, mostrá un mensaje de error en la consola.

Probá el correcto funcionamiento creando dos variables numéricas de ejemplo y llamando a las cuatro funciones con ellas.

Tips claves:

Uso de parámetros: Pasar los números como argumentos a la función.

Condicionales: Usar un if...else para determinar opciones.

Consola del navegador: Utilizá console.log() para mostrar los resultados en la consola.

Recordá la sintaxis de function para declarar funciones. Podés cambiar los valores de prueba para verificar distintos resultados. Usá comentarios si te ayuda a organizar el código.
*/

// Función para sumar
function sumar(a, b) {
  return a + b;
}

// Función para restar
function restar(a, b) {
  return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir (verifica que el divisor no sea cero)
function dividir(a, b) {
  if (b === 0) {
    console.error("Error: no se puede dividir por cero");
    return;
  } else {
    return a / b;
  }
}

// Pruebas con dos variables de ejemplo
let numero1 = 10;
let numero2 = 5;

console.log("Suma:", sumar(numero1, numero2));                    // 15
console.log("Resta:", restar(numero1, numero2));                  // 5
console.log("Multiplicación:", multiplicar(numero1, numero2));    // 50
console.log("División:", dividir(numero1, numero2));              // 2