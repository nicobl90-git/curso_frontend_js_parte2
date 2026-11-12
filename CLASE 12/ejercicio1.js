/* Pasos a seguir:

En tu archivo HTML, crea un contenedor para las tarjetas de productos. Por ejemplo, un <div> con un id como contenedor-productos.

Decide cómo quieres que se muestren las tarjetas:

Puedes crear un botón para mostrar la lista al hacer clic.

O hacer que las tarjetas se muestren automáticamente al cargar la página.

En tu archivo JavaScript, accede al contenedor creado en el HTML usando un selector (getElementById o similar).

Recorre el array de productos que generaste en la clase anterior.

Por cada producto del array:

Crea un nuevo elemento div que servirá como tarjeta y asígnale una clase (por ejemplo, .card).

Dentro de esa tarjeta, agrega elementos que contengan el nombre del producto (por ejemplo, un <h3>) y el precio (por ejemplo, un <p>).

No agregues la descripción por ahora.

Inserta cada tarjeta dentro del contenedor en el HTML usando un método adecuado (como appendChild).

Tips claves:

Usá createElement() para crear cada nuevo elemento HTML (como divs, h3, p).

Para agregar cada tarjeta al contenedor, utilizá appendChild().

Recordá que manipular el DOM es más sencillo si trabajás paso a paso: primero creás el elemento, luego le agregás contenido, y por último lo insertás en el documento.
*/



