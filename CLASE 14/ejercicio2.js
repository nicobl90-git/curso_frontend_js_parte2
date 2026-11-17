/* 
Carrito dinámico con productos de la API

Pasos a seguir:

Partí del ejercicio anterior donde ya tienes los productos cargados con fetch.

Añadí un botón “Añadir al carrito” en cada tarjeta de producto.

Implementá funciones para:

Recuperar el carrito guardado en localStorage o crear uno vacío si no existe.

Añadir productos nuevos al carrito (podés guardar solo el ID o el objeto completo).

Guardar el carrito actualizado en localStorage.

Mostrar la cantidad total de productos en el carrito en un elemento visible de la página (por ejemplo, un <div id="contador-carrito"></div>).

Actualizar ese contador cada vez que se agregue un producto.

Al cargar la página, inicializar el contador leyendo el carrito guardado en localStorage.

Confirmá cada agregado al carrito con un mensaje breve (por ejemplo un alert()).

Tips claves:

Usá innerHTML o createElement para generar dinámicamente las tarjetas y botones.

Recordá siempre convertir los objetos a texto con JSON.stringify() para guardarlos, y JSON.parse() para leerlos.

No rehagas la carga de productos del ejercicio 1, construí sobre esa base para mantener orden y claridad.
*/