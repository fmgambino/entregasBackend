const productos = [
    {
        imagen: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1704385573-81DC-janmJL.jpg?crop=1xw:1xh;center,top&resize=980:*",
        nombre: "SPIDER-MAN 2",
        descripcion: "Los jugadores controlan a Peter Parker y Miles Morales mientras enfrentan nuevas amenazas en Nueva York, incluyendo a Venom y otros villanos.",
        precio: 70.00
    },
    {
        imagen: "https://i5.walmartimages.com/seo/Ratchet-and-Clank-A-Rift-Apart-Playstation-5_f708855f-c953-4db8-9284-f00b65c4dbc5.0937def836b17b002b3d8e73f946420e.png",
        nombre: "Ratchet & Clank: Una dimensión aparte",
        descripcion: "Ratchet y Clank atraviesan diferentes dimensiones para detener a un emperador maligno de otra realidad.",
        precio: 40.00
    },
    {
        imagen: "https://nextgames.com.ar/img/Public/1040/32421-producto-71h-61nx1pl-sl1361.jpg",
        nombre: "Mortal Kombat 11",
        descripcion: "Un juego de lucha brutal con una historia intensa y una amplia lista de personajes.",
        precio: 30.00
    },
    {
        imagen: "https://nextgames.com.ar/img/Public/1040-producto-ea-fc-24-ps5-4261.jpg",
        nombre: "EA Sports FC 24",
        descripcion: "La última entrega de la serie de simulación de fútbol con mejoras en gráficos y jugabilidad.",
        precio: 50.00
    },
    {
        imagen: "https://thebest.com.ar/images/product_image/10790/0?dpr=2.625&fit=contain&h=400&q=80&version=3ab91&w=400",
        nombre: "NBA 2K24",
        descripcion: "Simulador de baloncesto con modos de juego mejorados y gráficos realistas.",
        precio: 65.00
    },
    {
        imagen: "https://thebest.com.ar/images/product_image/10790/0?dpr=2.625&fit=contain&h=400&q=80&version=3ab91&w=400",
        nombre: "NBA 2K24",
        descripcion: "Simulador de baloncesto con modos de juego mejorados y gráficos realistas.",
        precio: 65.00
    }
];

// Función para agregar productos a la página principal
function agregarProductos() {
    const productList = document.getElementById('product-list');
    productos.forEach((producto, index) => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${index})">Añadir al carrito</button>
                    </div>
                </div>
                <br>
            </div>`;
        productList.innerHTML += card;
    });
}

// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    actualizarCarrito();
    guardarCarrito();
}

// Función para actualizar el icono del carrito
function actualizarCarrito() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = carrito.length;
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para mostrar los productos en la página del carrito
function mostrarCarrito() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ""; // Limpiar contenido anterior
    let total = 0;

    if (carrito.length > 0) {
        carrito.forEach(producto => {
            const item = `
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${producto.imagen}" class="card-img" alt="${producto.nombre}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <p class="card-text">$${producto.precio.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            cartItems.innerHTML += item;
            total += producto.precio;
        });
    } else {
        cartItems.innerHTML = '<p>No hay productos en el carrito.</p>';
    }

    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Función para manejar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Agregar productos a la página principal
    if (document.getElementById('product-list')) {
        agregarProductos();
    }

    // Mostrar productos en la página del carrito
    if (document.getElementById('cart-items')) {
        mostrarCarrito();
    }

    // Actualizar el icono del carrito
    actualizarCarrito();

    // Modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
