<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Producto al Inventario</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Agregar Producto al Inventario</h2>
        <form id="inventarioForm">
            <!-- Nombre del Producto -->
            <div class="mb-3">
                <label for="nombre_producto" class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="nombre_producto" placeholder="Nombre del producto" required>
            </div>
            <!-- Descripción -->
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" rows="3" placeholder="Descripción del producto"></textarea>
            </div>
            <!-- Cantidad -->
            <div class="mb-3">
                <label for="cantidad" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad en stock" required>
            </div>
            <!-- Precio -->
            <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input type="number" class="form-control" id="precio" placeholder="Precio unitario" step="0.01" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Agregar Producto</button>
        </form>
        <!-- Contenedor para mostrar mensajes -->
        <div id="mensajeInventario" class="mt-3"></div>
    </div>

    <!-- Bootstrap 5 JS y dependencias -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="inventariodb.js"></script>
</body>
</html>
