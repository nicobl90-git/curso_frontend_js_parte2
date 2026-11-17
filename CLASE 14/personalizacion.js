const form = document.getElementById("form-preferencias");
const inputNombre = document.getElementById("nombre");
const selectColor = document.getElementById("color");
const saludo = document.getElementById("saludo");
const btnReset = document.getElementById("btn-reset");

function aplicarPreferencias(nombre, color) {
    saludo.textContent = "¡Hola, " + nombre + "!";
    document.body.style.backgroundColor = color;
}

// Al cargar la página: ¿hay algo guardado?
const nombreGuardado = localStorage.getItem("nombre");
const colorGuardado = localStorage.getItem("color");

if (nombreGuardado && colorGuardado) {
    aplicarPreferencias(nombreGuardado, colorGuardado);
}

// Al enviar el formulario: capturar y guardar
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = inputNombre.value;
    const color = selectColor.value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("color", color);

    aplicarPreferencias(nombre, color);
});

function restablecerPreferencias() {
    // 1) Borrar lo guardado
    localStorage.removeItem("nombre");
    localStorage.removeItem("color");

    // 2) Deshacer lo visible
    if (saludo) {
        saludo.textContent = "";
    }
    document.body.style.backgroundColor = ""; // vuelve al color del CSS

    // 3) Vaciar el formulario
    if (form) {
        form.reset();
    }
}

if (btnReset) {
    btnReset.addEventListener("click", restablecerPreferencias);
}