// Definir un array de objetos
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 }
  ];
  
  // Función flecha para filtrar productos por precio
  const filtrarPorPrecio = (productos, precioMaximo) => {
    return productos.filter(producto => producto.precio <= precioMaximo);
  };
  
  // Función anónima para calcular el precio total de una lista de productos
  const calcularPrecioTotal = function(listaProductos) {
    let total = 0;
    listaProductos.forEach(producto => {
      total += producto.precio;
    });
    return total;
  };
  
  // Parámetros para la función filtrarPorPrecio y calcularPrecioTotal
  const precioMaximo = 40;
  
  // Filtrar productos por precio máximo
  const productosFiltrados = filtrarPorPrecio(productos, precioMaximo);
  
  // Calcular el precio total de los productos filtrados
  const precioTotalFiltrado = calcularPrecioTotal(productosFiltrados);
  
  // Mostrar resultados
  console.log('Productos filtrados por precio máximo de', precioMaximo, 'USD:');
  console.log(productosFiltrados);
  console.log('Precio total de los productos filtrados:', precioTotalFiltrado, 'USD');