// 1. Objeto producto1 con sus propiedades (clave: valor)
const producto1 = {
  nombre: "Trascendencia",
  precio: 28000,
  stock: 10
};

// Mostrar nombre y precio por separado, accediendo a las propiedades
console.log("Nombre:", producto1.nombre);
console.log("Precio:", producto1.precio);

// 2. Array catalogo con tres objetos de productos diferentes
const catalogo = [
  { nombre: "Trascendencia", precio: 28000, stock: 10 },
  { nombre: "El tren de los sueños", precio: 40000, stock: 8 },
  { nombre: "Los ojos de la serpiente", precio: 30000, stock: 30 }
];

// 3. Mostrar el array completo para ver su estructura
console.log(catalogo);

// 4. Mostrar el nombre del segundo producto (posición 1)
console.log("Segundo producto:", catalogo[1].nombre);