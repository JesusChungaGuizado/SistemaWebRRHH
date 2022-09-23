/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import negocio.Personal;
import persistencia.PersonalDao;

/**
 *
 * @author Jesus
 */
public class PersonalServicioImp implements PersonalServicio{
     private PersonalDao pd;

    public void setPd(PersonalDao pd) {
        this.pd = pd;
    }
    

    @Override
    public String registrarPersonal(Personal p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Personal buscarPersonal(String personal) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String ActualizarPersonal(Personal p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String EliminarPersonal(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
