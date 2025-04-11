Este proyecto usa una conexion a apache tomcat version 9.0.98.
Para que funcione debe de haber una base de datos creada, modificando las respecticas credenciales en el archivo Servlet  SvInventario.
Para la base de dato usamos MySQL 

El codigo SQL de la DB usada es el siguiente. 

CREATE DATABASE dbInventario;

USE dbInventario;

CREATE TABLE inventario (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
