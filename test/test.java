
import java.sql.Connection;
import persistencia.Conexion;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Jesus
 */
public class test {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
           Conexion con =new Conexion();
        Connection cn=con.getConexion();
        if (cn!=null) {
            System.out.println("Si hay conexion RRHH");
        }else{
            System.out.println("No hay conexion");
                  
        }
    }
    
}
