let botones = document.getElementsByClassName("tarjeta-boton");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    alert("¡Producto agregado al carrito!");
  });
}