/* Generación y visualización de un array de productos

Pasos a seguir:

Creá una función llamada generarProductos() que no reciba parámetros.

Dentro de la función, armá un array llamado productos con al menos 5 objetos. Cada producto debe tener:

id: un identificador numérico único

name: nombre del producto

description: descripción breve

amount: precio en formato numérico

Retorná el array completo desde la función.

Tips claves:

Repasá la estructura de un objeto JavaScript (pares de clave/valor).

Usá nombres de propiedades claros y coherentes.

Probá agregar un producto más si querés practicar.
*/

// Función para sumar
// Función que genera y devuelve el array de productos
function generarProductos() {
  const productos = [
    {
      id: 1,
      name: "Trascendencia",
      description: "Primera novela de acceso al Universo de los Seres",
      amount: 30000
    },
    {
      id: 2,
      name: "El tren de los sueños",
      description: "Segunda novela con trama de autodescubrimiento",
      amount: 40000
    },
    {
      id: 3,
      name: "Los ojos de la serpiente",
      description: "Una historia del pasado sobre secretos heredados",
      amount: 30000
    },
    {
      id: 4,
      name: "Próxima: Cuentos del Club de Literatura",
      description: "Colección de cuentos cortos del club perteneciente al instituto Santo Tomás",
      amount: 0
    },
    {
      id: 5,
      name: "Próxima: El Incidente de Santo Tomás",
      description: "Una historia de misterio y suspenso que involucra a los estudiantes del instituto",
      amount: 100
    }
  ];

  return productos;
}

// Llamamos a la función y guardamos el resultado
const listaProductos = generarProductos();

// Visualización en consola
console.log(listaProductos);
console.table(listaProductos);