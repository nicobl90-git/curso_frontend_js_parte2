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


// Array 
const productos = [
  { nombre: "Trascendencia", precio: 25000, descripcion: "Todo comienza con un sueño" },
  { nombre: "El tren de los sueños", precio: 35000, descripcion: "El viaje de Sam" },
  { nombre: "Los ojos de la serpiente", precio: 40000, descripcion: "Una familia. Una profecia. Una serpiente" }
];

// 1) Acceder al contenedor
const contenedor = document.getElementById("contenedor-productos");

// 2) Recorrer el array
productos.forEach((producto) => {

  // 3) Crear la tarjeta
  const card = document.createElement("div");
  card.classList.add("card");

  // 4) Crear el título
  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  // 5) Crear el precio
  const precio = document.createElement("p");
  precio.textContent = "$" + producto.precio;

  // 6) Armar la tarjeta: meter título y precio adentro
  card.appendChild(titulo);
  card.appendChild(precio);

  // 7) Meter la tarjeta en el contenedor
  contenedor.appendChild(card);
});
