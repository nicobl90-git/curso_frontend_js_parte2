const contadorCarrito = document.getElementById("contador-carrito");

// ---------- FUNCIONES DEL CARRITO ----------

// Recuperar el carrito guardado, o crear uno vacío
function obtenerCarrito() {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
}

// Guardar el carrito actualizado
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar la cantidad total en pantalla
function actualizarContador() {
    if (contadorCarrito) {
        contadorCarrito.textContent = obtenerCarrito().length;
    }
}

// Añadir un producto, guardar, actualizar y avisar
function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador();
    alert(`"${producto.title}" se agregó al carrito`);
}

// Al cargar la página, inicializar el contador
actualizarContador();

// ---------- BOTONES DE TUS LIBROS (hechos a mano en el HTML) ----------

const botonesLibros = document.querySelectorAll("#contenedor-productos .tarjeta-boton");

botonesLibros.forEach(boton => {
    boton.addEventListener("click", () => {
        const tarjeta = boton.closest(".tarjeta");
        const libro = {
            title: tarjeta.querySelector(".tarjeta-nombre").textContent,
            price: tarjeta.querySelector(".tarjeta-precio").textContent
        };
        agregarAlCarrito(libro);
    });
});