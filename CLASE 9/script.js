// 1. Pedir los datos al usuario
let entrada1 = prompt("Ingresá el primer número:");
let entrada2 = prompt("Ingresá el segundo número:");

// 2. Convertir los textos a números
let numero1 = parseFloat(entrada1);
let numero2 = parseFloat(entrada2);

// 3. Validar con isNaN()
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Error: ingresaste un valor que no es un número válido.");
} else {
  // 4. Operaciones aritméticas
  console.log("Número 1:", numero1);
  console.log("Número 2:", numero2);
  console.log("Suma:", numero1 + numero2);
  console.log("Resta:", numero1 - numero2);
  console.log("Multiplicación:", numero1 * numero2);

  // División: cuidado con dividir por cero
  if (numero2 === 0) {
    console.log("División: no se puede dividir por cero.");
    console.log("Módulo: no se puede calcular con divisor cero.");
  } else {
    console.log("División:", numero1 / numero2);
    console.log("Módulo:", numero1 % numero2);
  }

  // 5. Comparar la suma con un valor dado
  const valorDado = 50;
  const suma = numero1 + numero2;

  if (suma > valorDado) {
    console.log(`La suma (${suma}) es MAYOR que ${valorDado}.`);
  } else if (suma < valorDado) {
    console.log(`La suma (${suma}) es MENOR que ${valorDado}.`);
  } else {
    console.log(`La suma (${suma}) es IGUAL a ${valorDado}.`);
  }
}