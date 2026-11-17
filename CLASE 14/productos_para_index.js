const contenedorApi = document.getElementById("productos-container");

fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(productos => {
    productos.forEach(producto => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("tarjeta");

      tarjeta.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" width="150" class="tarjeta-img">
        <h3 class="tarjeta-nombre">${producto.title}</h3>
        <p class="tarjeta-precio">$${producto.price}</p>
        <button class="tarjeta-boton">
            <i class="fa-solid fa-cart-shopping"></i> Añadir al carrito
        </button>
      `;

      tarjeta.querySelector("button")
        .addEventListener("click", () => agregarAlCarrito(producto));

      contenedorApi.appendChild(tarjeta);
    });
  })
  .catch(error => {
    contenedorApi.innerHTML = "<p>No pudimos cargar los productos. Intentá de nuevo más tarde.</p>";
    console.error("Error:", error);
  });