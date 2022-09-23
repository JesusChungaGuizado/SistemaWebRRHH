/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencia;

import negocio.Personal;

/**
 *
 * @author Jesus
 */
public interface PersonalDao {
    public String registrarPersonal(Personal p);
    public Personal buscarPersonal(String personal);
    public String ActualizarPersonal(Personal p);
    public String EliminarPersonal(int id);
}
