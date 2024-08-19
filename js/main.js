//Funcion constructora de producto
function Producto(id, nombre, descripcion, categoria, precio, imgSrc, imgAlt, descripcionLarga) {
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.categoria = categoria;
  this.precio = precio;
  this.imgSrc = imgSrc;
  this.imgAlt = imgAlt;
  this.descripcionLarga = descripcionLarga;
}

//Definición de categorías
const Categoria = {
  PARTE_ARRIBA: 'parte_arriba',
  PARTE_ABAJO: 'parte_abajo',
  MONOPRENDA: 'monoprenda',
};

//Array de productos
const productos = [];


//Creación de productos
productos.push(
  new Producto(
    '1',
    'Camisa Aymee',
    'Camisa estampada por serigrafía de lino',
    Categoria.PARTE_ARRIBA,
    150000,
    '/img/producto-1-camisa-aimee.jpg',
    'Camisa estampada por serigrafía de lino',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, utilizando materiales sostenibles y técnicas artesanales como la serigrafía. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);
productos.push(
  new Producto(
    '2',
    'Bermuda Amani',
    'Bermuda estampada por serigrafía de lino',
    Categoria.PARTE_ABAJO,
    85000,
    '/img/producto-2-bermuda-amani.jpg',
    'Bermuda estampada por serigrafía de lino',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, utilizando materiales sostenibles y técnicas artesanales como la serigrafía. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);
productos.push(
  new Producto(
    '3',
    'Vestido Anahí',
    'Vestido largo de seda estampado sin hombros',
    Categoria.MONOPRENDA,
    250000,
    '/img/producto-3-vestido-anahi.jpg',
    'Vestido largo de seda estampado sin hombros',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, utilizando seda natural. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);
productos.push(
  new Producto(
    '4',
    'Remera Selvática',
    'Remera manga corta de algodón estampada',
    Categoria.PARTE_ARRIBA,
    50000,
    '/img/producto-4-camisa-con-hojas.jpg',
    'Remera manga corta de algodón estampada',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, su estampa fue diseñada por la ilustradora Samanta Rivera. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);
productos.push(
  new Producto(
    '5',
    'Mono Cítrico',
    'Mono largo estampado en serigrafía',
    Categoria.MONOPRENDA,
    250000,
    '/img/producto-5-vestido-seda.jpg',
    'Mono largo estampado en serigrafía',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, utilizando materiales sostenibles y técnicas artesanales como la serigrafía. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);
productos.push(
  new Producto(
    '6',
    'Conjunto Alegría',
    'Conjunto de pantalón y Blusa sin mangas en lino amarillo',
    Categoria.MONOPRENDA,
    300000,
    '/img/producto-6-blusa-lino.jpg',
    'Conjunto de pantalón y Blusa sin mangas en lino amarillo',
    'Este producto ha sido diseñado con cuidado y atención a cada detalle, utilizando lino y teñido naturalmente a base de plantas. Al elegirlo, estás apoyando una moda consciente que valora la calidad y la autenticidad. Lleva contigo una prenda que no solo realza tu estilo, sino que también cuenta una historia.',
  ),
);

//Array del carrito
const carrito = [];

//Función para manejar el agregado de propuctos al carrito
function clickBotonAgregarCarrito(idProducto, cantidad) {
  
  const producto = productos.find((producto) => producto.id === idProducto);

  if (producto) {
    const productoEnCarrito = carrito.find(
      (producto) => producto.id === idProducto,
    );
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
    } else {
      carrito.push({ ...producto, cantidad });
    }
    const contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.textContent = carrito.reduce(
      (acc, producto) => acc + producto.cantidad,
      0,
    );
    contadorCarrito.classList.remove('d-none');
  }
}

//Agregar un evento que se ejecuta cuando el DOM se ha cargado completamente - Agrega onload DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {

  const btnCarrito = document.getElementById('btn-carrito');

  btnCarrito.addEventListener('click', function () {
    createModalCheckout();
  }
  );

  // Obtener el contenedor de productos y agregar las tarjetas de productos
  const productosContainer = document.getElementById('productos-container');
  productos.forEach((producto) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-sm-10 col-md-6 col-lg-4 mx-auto';
    const carDiv = crearCardProducto(
      producto.id,
      producto.nombre,
      producto.descripcion,
      producto.precio,
      producto.categoria,
      producto.imgSrc,
      producto.imgAlt,
      producto.descripcionLarga,
    );

    colDiv.appendChild(carDiv);

    productosContainer.appendChild(colDiv);
  });
});
