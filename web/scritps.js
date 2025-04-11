document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const NIP = document.getElementById('NIP').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const experiencia = document.querySelector('input[name="experiencia"]:checked');
        const mensajeDiv = document.getElementById('mensaje');

        // Limpiar mensajes previos
        mensajeDiv.innerHTML = '';

        let esValido = true;
        let mensajesError = [];

        // Validar que ningún campo esté vacío
        if (nombre === '' || NIP === '' || email === '' || password === '' || confirmPassword === '') {
            esValido = false;
            mensajesError.push("Todos los campos son obligatorios.");
        }

        // Validar NIF: 8 dígitos seguidos de una letra (mayúscula o minúscula)
        const nifRegex = /^\d{8}[A-Za-z]$/;
        if (!nifRegex.test(NIP)) {
            esValido = false;
            mensajesError.push("El NIF debe tener 8 dígitos seguidos de una letra.");
        }

        // Validar correo electrónico (formato básico que asegure que hay un dominio)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            esValido = false;
            mensajesError.push("El correo electrónico no es válido.");
        }

        // Validar que las dos contraseñas coincidan
        if (password !== confirmPassword) {
            esValido = false;
            mensajesError.push("Las contraseñas no coinciden.");
        }

        // Validar que se haya seleccionado una opción en la pregunta
        if (!experiencia) {
            esValido = false;
            mensajesError.push("Debe seleccionar al menos una opción en la pregunta de experiencia.");
        }

        // Mostrar errores en el DOM si existen
        if (!esValido) {
            let htmlErrores = '<div class="alert alert-danger" role="alert"><ul>';
            mensajesError.forEach(function(error) {
                htmlErrores += '<li>' + error + '</li>';
            });
            htmlErrores += '</ul></div>';
            mensajeDiv.innerHTML = htmlErrores;
            return;
        }

        // En caso de que la validación sea correcta, enviar los datos al servlet
        // Se incluye además el dato de experiencia
        fetch('SvRegistro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                nombre: nombre,
                NIP: NIP,
                email: email,
                password: password,
                experiencia: experiencia ? experiencia.value : ''
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Maneja la respuesta del Servlet
            window.location.href = "inventario.jsp";
        })
        .catch(error => {
            console.error('Error:', error);
            mensajeDiv.innerHTML = '<div class="alert alert-danger" role="alert">Ocurrió un error en el envío.</div>';
        });
    });
});


//});