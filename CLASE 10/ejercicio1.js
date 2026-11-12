/* Validación de campos de un formulario (simulado con variables)

Pasos a seguir:

Lo que harás:

Declarar tres variables: nombre, correo y mensaje, asignándoles valores de prueba.

Crear una función que valide que ninguna de estas variables esté vacía.

Si todos los campos tienen texto, mostrar por consola:'Formulario completo. Listo para enviar.'

Si falta completar alguno, mostrar:'Faltan completar campos obligatorios.'

Tips claves:

 Usá el operador && para verificar que todas las variables contengan texto.

Jugá cambiando los valores de prueba para ver cómo responde tu validación.

¡Importante! Esta práctica te va a servir para entender la validación de datos antes de enviarlos a un servidor, algo fundamental en cualquier aplicación web. 
*/

let nombre = "Nico";
let correo = "nico@mail.com";
let mensaje = "Hola, quiero más información.";

function validarFormulario(nombre, correo, mensaje) {
  if (nombre.trim() !== "" && correo.trim() !== "" && mensaje.trim() !== "") {
    console.log("Formulario completo. Listo para enviar.");
  } else {
    console.log("Faltan completar campos obligatorios.");
  }
}

validarFormulario(nombre, correo, mensaje);