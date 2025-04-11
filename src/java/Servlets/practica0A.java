/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author LENOVO
 */
@WebServlet(name = "practica0A", urlPatterns = {"/practica0A"})
public class practica0A extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        
        try {
            //Leemos el cuerpo de la solicitud.
            BufferedReader reader = request.getReader();
            StringBuilder jsonBuilder = new StringBuilder();
            String linea;

            while((linea = reader.readLine()) != null){
                jsonBuilder.append(linea);
            }

            String jsonRecibido = jsonBuilder.toString();
            System.out.println("Json recivido" + jsonRecibido);

            String nombre = extraerValor(jsonRecibido, "nombre");
            String nip = extraerValor(jsonRecibido, "NIP");
            String email = extraerValor(jsonRecibido, "email");
            String password = extraerValor(jsonRecibido, "password");

            Usuario usuario = new Usuario(nombre, email, nip, password);
            
            
            response.setContentType("application/json");
            //PrintWriter out = response.getWriter();
            out.print("{\"success\": true, \"nombre\": \"" + nombre + "\"}");
            out.flush();


        // Convertimos el JSON recivido en un objeto de java
        } catch (Exception e) {
        e.printStackTrace(); // 🔴 Imprime el error en la consola del servidor
        out.print("{\"status\":\"❌ Ocurrió un error al procesar tu solicitud. Detalles: " + e.getMessage() + "\"}");
        out.flush();
        }
        


        
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    
    private String extraerValor(String json, String clave){
        String patron = "\"" + clave + "\":\"";
        int inicio = json.indexOf(patron);
        
        if(inicio == -1) 
            return null;
        
        inicio += patron.length();
        int fin = json.indexOf("\"", inicio);
        return json.substring(inicio, fin);
    }
     
    
    //Clase que almacenara que contedra los datos del usuario.
    class Usuario{
        private String nombre;
        private String NIP;
        private String email;
        private String password;
        
        public Usuario(String nombre, String NIP, String email, String password){
            this.nombre = nombre;
            this.NIP = NIP;
            this.email = email;
            this.password = password;
        }
        
        public String getNombre(){
            return nombre;
        }
        
        public String getNIP(){
            return NIP;
        }
        
        public String getEmail(){
            return email;
        }
        
        public String getPassword(){
            return password;
        }
        
    }
   
}
