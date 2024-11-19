// script.js

// Almacenar el carrito
let carrito = [];

// Verificar si hay productos en el localStorage
if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
}

// Función para actualizar el carrito en el localStorage
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Seleccionar todos los botones de agregar al carrito
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

// Añadir evento a cada botón
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const nombreProducto = e.target.getAttribute('data-nombre');
        const precioProducto = e.target.getAttribute('data-precio');
        
        // Crear un objeto con el producto
        const producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1
        };
        
        // Revisar si el producto ya está en el carrito
        const existe = carrito.some(item => item.nombre === producto.nombre);
        if (existe) {
            // Actualizar cantidad si ya está en el carrito
            carrito = carrito.map(item => {
                if (item.nombre === producto.nombre) {
                    item.cantidad++;
                }
                return item;
            });
        } else {
            // Si no está en el carrito, agregarlo
            carrito.push(producto);
        }

        // Actualizar el carrito en localStorage
        actualizarCarrito();

        alert(`${producto.nombre} añadido al carrito!`);
    });
});

// EVENTO 1: Hover sobre los productos para cambiar el fondo
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0'; // Cambiar color de fondo al hacer hover
    });
    producto.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Volver al fondo original
    });
});

// EVENTO 2: Cambiar la cantidad de productos en el carrito
document.querySelectorAll('.cantidad-producto').forEach(inputCantidad => {
    inputCantidad.addEventListener('change', function() {
        const cantidad = this.value;
        const nombreProducto = this.getAttribute('data-nombre');
        carrito = carrito.map(item => {
            if (item.nombre === nombreProducto) {
                item.cantidad = parseInt(cantidad);
            }
            return item;
        });
        actualizarCarrito();
        console.log(`Producto: ${nombreProducto}, Nueva cantidad: ${cantidad}`);
    });
});

// EVENTO 3: Botón para vaciar el carrito
const botonVaciarCarrito = document.querySelector('#vaciar-carrito');
if (botonVaciarCarrito) {
    botonVaciarCarrito.addEventListener('click', () => {
        carrito = []; // Vaciar el carrito
        actualizarCarrito();
        alert('Carrito vaciado');
    });
}


