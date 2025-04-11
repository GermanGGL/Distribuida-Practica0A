document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('inventarioForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre_producto = document.getElementById('nombre_producto').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;
        const mensajeDiv = document.getElementById('mensajeInventario');

        // Limpiar mensajes previos
        mensajeDiv.innerHTML = '';

        let esValido = true;
        let errores = [];

        // Validar que los campos obligatorios no estén vacíos
        if (nombre_producto === '' || cantidad === '' || precio === '') {
            esValido = false;
            errores.push("El nombre del producto, cantidad y precio son obligatorios.");
        }

        // Validación adicional: se puede agregar validación numérica para cantidad y precio
        if (isNaN(cantidad) || parseInt(cantidad) <= 0) {
            esValido = false;
            errores.push("La cantidad debe ser un número mayor que 0.");
        }
        if (isNaN(precio) || parseFloat(precio) <= 0) {
            esValido = false;
            errores.push("El precio debe ser un número mayor que 0.");
        }

        if (!esValido) {
            let htmlErrores = '<div class="alert alert-danger" role="alert"><ul>';
            errores.forEach(function(error) {
                htmlErrores += '<li>' + error + '</li>';
            });
            htmlErrores += '</ul></div>';
            mensajeDiv.innerHTML = htmlErrores;
            return;
        }

        // Enviar los datos al servlet encargado de insertar en la base de datos (SvInventario)
        fetch('SvInventario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                nombre_producto: nombre_producto,
                descripcion: descripcion,
                cantidad: cantidad,
                precio: precio
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Manejo de la respuesta del servlet
            mensajeDiv.innerHTML = '<div class="alert alert-success" role="alert">' + data + '</div>';
            // Opcional: reiniciar el formulario
            document.getElementById('inventarioForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            mensajeDiv.innerHTML = '<div class="alert alert-danger" role="alert">Ocurrió un error en el envío.</div>';
        });
    });
});

