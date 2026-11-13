const contadorCarrito = document.getElementById("contador-carrito");

// Al cargar: leer lo guardado (si no hay nada, empezar en 0)
let cantidadCarrito = Number(localStorage.getItem("cantidadCarrito")) || 0;

function mostrarContador() {
    if (contadorCarrito) {
        contadorCarrito.textContent = cantidadCarrito;
    }
}

mostrarContador();

// Listener para cada botón de agregar al carrito
let botones = document.getElementsByClassName("tarjeta-boton");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        cantidadCarrito++;                                        // sumar 1
        localStorage.setItem("cantidadCarrito", cantidadCarrito); // guardar
        mostrarContador();                                        // actualizar pantalla
        alert("¡Producto agregado al carrito!");                  // aviso
    });
}