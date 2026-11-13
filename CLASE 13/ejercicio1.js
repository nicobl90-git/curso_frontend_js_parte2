/* 
Guardar Preferencias de Usuario

Pasos a seguir:

Crear el formulario

Armá en tu HTML un formulario con dos campos:

un campo para el nombre (input).

un selector (select) con diferentes colores de fondo.

Sumale un botón de enviar para guardar las preferencias.

Capturar los datos

En JavaScript, usá un evento submit para capturar el nombre y el color cuando el usuario envía el formulario.

Recordá usar preventDefault() para evitar que el formulario recargue la página.

Guardar en LocalStorage

Usá localStorage.setItem() para guardar el nombre y el color.

Recuperar y aplicar preferencias

Cada vez que la página se cargue, verificá si hay datos guardados en LocalStorage.

Si existen, aplicá automáticamente:

el saludo con el nombre del usuario.

el color de fondo elegido.

Tips claves:

Usá localStorage.getItem() para leer los datos

Manipulá el DOM con document.body.style.backgroundColor para cambiar el color

Probá recargando la página para chequear que la preferencia se mantiene
*/