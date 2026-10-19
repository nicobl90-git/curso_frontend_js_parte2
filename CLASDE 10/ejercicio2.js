/*
Iterar una lista de productos y mostrarlos con alert()

Pasos a seguir:

Lo que harás:

Crear un array de al menos 5 productos (por ejemplo: "Remera", "Pantalón", "Gorra").

Recorrer el array con un bucle for o for...of.

En cada iteración, mostrar el producto con un alert().

Al finalizar, enviar por consola el mensaje: "Lista de productos mostrada correctamente."

Tips claves:

Definí el array como const para practicar buenas prácticas de variables constantes.

Podés sumar un contador para contar cuántos productos se muestran.

¡Recordá! Mostrar la información de forma dinámica con bucles es la base para crear interfaces interactivas más adelante.

const significa que no podés volver a asignar otro array a esa misma variable, pero sí podés modificar el contenido del array.

Podés agregar, quitar o modificar elementos dentro del array declarado con const.

Pero no podés decirle después que sea un array completamente nuevo.

Recordemos:

const = su referencia no cambia.

let = variable flexible, su valor puede cambiar.

var = forma más vieja, hoy se recomienda evitarla.
*/

const productos = [
  "Trascendencia",
  "El Tren de los Sueños",
  "Los Ojos de la Serpiente",
  "Próxima: Cuentos del Club de Literatura",
  "Próxima: El Incidente de Santo Tomás"
];

let contador = 0;


for (let i = 0; i < productos.length; i++) {
    console.log(`Vuelta ${i}: ${productos[i]}`);
    alert(`Producto ${contador + 1}: ${productos[i]}`);
    contador++;
}
  

/* Variante con for...of */

/*
for (const producto of productos) {
    alert(`Producto ${contador + 1}: ${producto}`);
    contador++;
}
    */


console.log("Lista de productos mostrada correctamente.");
console.log("Productos mostrados:", contador);