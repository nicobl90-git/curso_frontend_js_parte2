/* Agregar descripción dinámica con botón

Pasos a seguir:

Al crear cada tarjeta, agrega un botón pequeño dentro de ella con el texto “Ver descripción”.

Para cada botón, agrega un listener de eventos (addEventListener) para detectar cuando se hace clic.

En la función que maneja el clic:

Verifica si la descripción ya está visible en la tarjeta para evitar que se duplique.

Si la descripción no está visible, crea un nuevo elemento <p> con el texto de la descripción del producto.

Agrega ese párrafo dentro de la tarjeta (usando appendChild o similar).

Si la descripción ya está visible, puedes decidir ocultarla o simplemente ignorar el clic.

Tips claves:

Para agregar eventos usá siempre addEventListener() en lugar de poner el evento directo en el HTML.

Antes de crear y agregar la descripción, chequeá si ya existe para no duplicar contenido.

Pensá en la experiencia del usuario: que el botón tenga una acción clara y no genere elementos repetidos.

Practicá crear y manejar elementos dinámicamente para ganar fluidez con el DOM y los eventos.
*/

// Array 
const productos = [
  { nombre: "Trascendencia", precio: 25000, descripcion: "Todo comienza con un sueño" },
  { nombre: "El tren de los sueños", precio: 35000, descripcion: "El viaje de Sam" },
  { nombre: "Los ojos de la serpiente", precio: 40000, descripcion: "Una familia. Una profecia. Una serpiente" }
];

const contenedor = document.getElementById("contenedor-productos");

productos.forEach((producto) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.textContent = "$" + producto.precio;

  // NUEVO: crear el botón
  const boton = document.createElement("button");
  boton.textContent = "Ver descripción";

  // NUEVO: variable para guardar la descripción de ESTA tarjeta
  let descripcion = null;

  // NUEVO: listener del clic
  boton.addEventListener("click", () => {
    if (descripcion === null) {
      // No existe: la creamos y la agregamos
      descripcion = document.createElement("p");
      descripcion.textContent = producto.descripcion;
      card.appendChild(descripcion);
    } else {
      // Ya existe: la ocultamos (la sacamos de la tarjeta)
      descripcion.remove();
      descripcion = null;
    }
  });

  card.appendChild(titulo);
  card.appendChild(precio);
  card.appendChild(boton); // NUEVO: el botón también va dentro de la tarjeta

  contenedor.appendChild(card);
});
