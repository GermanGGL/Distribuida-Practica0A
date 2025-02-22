document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío por defecto

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre');
    const NIP = document.getElementById('NIP');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const terminos = document.getElementById('terminos');
    const mensaje = document.getElementById('mensaje');

    let esValido = true;

    // Validar nombre
    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        esValido = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    // Validar NIP
    const regexNIP = /^\d{8}[A-Za-z]$/; // 8 dígitos seguidos de una letra

    if (!regexNIP.test(NIP.value.trim())) {
        NIP.classList.add('is-invalid');
        esValido = false;
    } else {
        NIP.classList.remove('is-invalid');
    }


    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        email.classList.add('is-invalid');
        esValido = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validar contraseña
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!regexPassword.test(password.value)) {
        password.classList.add('is-invalid');
        esValido = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validar términos
    if (!terminos.checked) {
        terminos.classList.add('is-invalid');
        esValido = false;
    } else {
        terminos.classList.remove('is-invalid');
    }

    // Mensaje final
    if (esValido) {
        mensaje.innerHTML = `<div class="alert alert-success">✅ ¡Bienvenido, ${nombre.value}!</div>`;
    } else {
        mensaje.innerHTML = `<div class="alert alert-danger">❌ Revisa los campos e intenta nuevamente.</div>`;
    }
    
    fetch('practica0A', {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre.value.trim(),
            NIP: NIP.value.trim(),
            email: email.value.trim,
            password: password.value.trim()
        })        
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        if(data.sucess){
            mensaje.innerHTML = `<div class="alert alert-success">✅ ¡Bienvenido, ${data.nombre}!</div>`;        
        } else{
            mensaje.innerHTML = `<div class="alert alert-danger">⚠️ ${data.message}</div>`;
        }
    })
    .catch(error =>{
        ('Error', error);
        mensaje.innerHTML = `<div class="alert alert-danger">❌ Ocurrió un error al procesar tu solicitud.</div>`;
        
    });
});
