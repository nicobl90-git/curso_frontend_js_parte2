const contenedor = document.getElementById("productos-container");

fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(productos => {
    productos.forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      tarjeta.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>$${producto.price}</p>
        <button class="btn-carrito" data-id="${producto.id}">Añadir al carrito</button>
      `;

      contenedor.appendChild(tarjeta);
    });
  })
  .catch(error => {
    contenedor.innerHTML = "<p>No pudimos cargar los productos. Intentá de nuevo más tarde.</p>";
    console.error("Error:", error);
  });