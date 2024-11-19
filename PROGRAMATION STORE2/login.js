// Función para validar el login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evitar que la página se recargue al hacer submit

    // Definir los valores válidos para ambos usuarios
    const usuarioAdmin = "roel";
    const contrasenaAdmin = "medellin123";
    const usuarioRegular = "user";  // Nombre del usuario regular
    const contrasenaRegular = "user123"; // Contraseña del usuario regular
    
    // Obtener los valores ingresados por el usuario
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Referencia para mostrar el mensaje
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = ""; // Limpiar cualquier mensaje previo

    // Validar las credenciales para admin o usuario regular
    if (usuario === usuarioAdmin && contrasena === contrasenaAdmin) {
        // Si las credenciales son del administrador, mostrar mensaje de éxito
        mensaje.style.color = "green";
        mensaje.textContent = "Inicio de sesión exitoso";

        // Guardar los datos del usuario en la sesión
        sessionStorage.setItem("usuario", JSON.stringify({ nombre: usuario, rol: "admin" }));

        // Redirigir al administrador después de un pequeño delay
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige a la página principal después de 1 segundo
        }, 1000);
    } else if (usuario === usuarioRegular && contrasena === contrasenaRegular) {
        // Si las credenciales son del usuario regular, mostrar mensaje de éxito
        mensaje.style.color = "green";
        mensaje.textContent = "Inicio de sesión exitoso";

        // Guardar los datos del usuario en la sesión
        sessionStorage.setItem("usuario", JSON.stringify({ nombre: usuario, rol: "user" }));

        // Redirigir al usuario regular después de un pequeño delay
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige a la página principal después de 1 segundo
        }, 1000);
    } else {
        // Si las credenciales son incorrectas, mostrar mensaje de error
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
});
