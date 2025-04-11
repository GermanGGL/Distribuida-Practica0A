<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Formulario de Registro</h2>
        <form id="loginForm">
            <!-- Nombre completo -->
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre completo" required>
            </div>
            <!-- NIF -->
            <div class="mb-3">
                <label for="NIP" class="form-label">NIF</label>
                <input type="text" class="form-control" id="NIP" placeholder="12345678G" required>
            </div>
            <!-- Correo electrónico -->
            <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com" required>
            </div>
            <!-- Contraseña -->
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña" required>
            </div>
            <!-- Confirmar Contraseña -->
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Repite tu contraseña" required>
            </div>
            <!-- Pregunta con opciones -->
            <div class="mb-3">
                <label class="form-label">¿Cuál es tu nivel de experiencia?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="experiencia" id="experienciaBaja" value="Baja">
                    <label class="form-check-label" for="experienciaBaja">Baja</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="experiencia" id="experienciaMedia" value="Media">
                    <label class="form-check-label" for="experienciaMedia">Media</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="experiencia" id="experienciaAlta" value="Alta">
                    <label class="form-check-label" for="experienciaAlta">Alta</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Registrarse</button>
        </form>
        <!-- Contenedor para mostrar mensajes de error -->
        <div id="mensaje" class="mt-3"></div>
    </div>

    <!-- Bootstrap 5 JS y dependencias -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Archivo de validación y envío -->
    <script src="scritps.js"></script>
</body>
</html>
