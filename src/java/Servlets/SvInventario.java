package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.Statement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;


/**
 *
 * @author LENOVO
 */
@WebServlet(name = "SvInventario", urlPatterns = {"/SvInventario"})
public class SvInventario extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet SvInventario</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet SvInventario at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Obtener los parámetros del formulario
        String nombreProducto = request.getParameter("nombre_producto");
        String descripcion = request.getParameter("descripcion");
        int cantidad = Integer.parseInt(request.getParameter("cantidad"));
        double precio = Double.parseDouble(request.getParameter("precio"));
        
        System.out.println("Nombre del producto: " + nombreProducto);
        System.out.println("Descripcion: " + descripcion);
        System.out.println("Cantidad: " + cantidad);
        System.out.println("Presio: " + precio);
        
        

        Connection con = null;
        PreparedStatement ps = null;

        try {
            // Cargar el driver y conectar a la base de datos
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/inventario", "root", "");

            // Insertar los datos en la tabla
            String query = "INSERT INTO inventario (nombre_producto, descripcion, cantidad, precio) VALUES (?, ?, ?, ?)";
            ps = con.prepareStatement(query);
            ps.setString(1, nombreProducto);
            ps.setString(2, descripcion);
            ps.setInt(3, cantidad);
            ps.setDouble(4, precio);

            ps.executeUpdate();

            // Redirigir a otra página JSP tras la inserción
            //response.sendRedirect("confirmacion.jsp");
            
            // Mandar mensaje tras la insercion
            response.getWriter().write("Producto agregado correctamente al inventario.");

        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al insertar en la base de datos.");
        } finally {
            try {
                if (ps != null) ps.close();
                if (con != null) con.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    
    

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

class Conexion {
    Connection con;
    public Conexion(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/inventario","root","");
        } catch (Exception e) {
            System.err.println("Error:" +e);
        }
    }
}
