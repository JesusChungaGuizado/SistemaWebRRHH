<%-- 
    Document   : ModuloEmpleado
    Created on : 10-sep-2022, 19:16:35
    Author     : Jesus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>RRHH</title>
    </head>
    <body>
     
                    <div class="page-header mb-3">
                        <div>
                            <h1>PERSONAL</h1>
                        </div>
                        <div class="header-actions">
                            <button id="export">
                                <span  class="far fa-file-pdf" ></span>
                                Export PDF
                            </button>
                        </div>
                    </div>
                   <div class="botones-crud">
                       <button type="button" class="btn btn-primary mb-3" id="myBtn"><img src="img/plus.svg">Nuevo Personal</button>
                       <input class="form-control mb-3" id="myInput" type="text" placeholder="Search..">
                   </div>
                     <!-- The Modal de Regsitro -->
                     <div class="modal fade" id="myModal">
                         <div class="modal-dialog">
                             <div class="modal-content">

                                 <!-- Modal Header -->
                                 <div class="modal-header">
                                     <h4 class="modal-title">Nuevo Personal</h4>
                                     <button type="button" class="close" data-dismiss="modal">×</button>
                                 </div>

                                 <!-- Modal body -->
                                 <div class="modal-body">
                                     <form id="form-regis-emp" class="form-row "  method="POST" >
                                         
                                             
                                             <div class="row mb-3" >
                                             <div class="col-sm-6 d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="nombre">Nombre</label>
                                                <input type="text" id="nombre" name="nombre" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                              <div class="col-sm-6 d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="apellido">Apellido</label>
                                                <input type="text" id="apellido" name="apellido" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                             </div>
                                             <div class="row mb-3" >
                                              <div class="col-sm-6  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="sexo">Sexo</label>
                                                 <select name="sexo" class="custom-select" required="true">
                                                    <option selected></option>
                                                    <option value="H">Hombre</option>
                                                    <option value="M">Mujer</option>
                                                  </select>
                                                
                                             </div>
                                              <div class="col-sm-6  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="fechaNac">Fecha de Nacimiento</label>
                                                 <input type="date" id="fechaNac" name="fechaNac" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                             </div>
                                             <div class="row mb-3" >
                                              <div class="col-sm-6  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="document">N° Documento</label>
                                                <input type="text" id="document" name="document" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                                  <div class="col-sm-6  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="edad">Edad</label>
                                                <input type="text" id="edad" name="edad" minlength="2" class="form-control "  required="true"  >
                                             </div>
                                              
                                             </div>
                                              
                                              <div class="col-sm-12  d-flex justify-content-between align-items-center mb-3" >
                                                 <label class="label-input mr-1" for="dirActual">Dirección Actual</label>
                                                <input type="text" id="dirActual" name="dirActual" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                                  
                                             
                                             <div class="col-sm-12  d-flex justify-content-between align-items-center mb-3" >
                                                 <label class="label-input mr-1" for="dirSunat">Dirección SUNAT</label>
                                                <input type="text" id="dirSunat" name="dirSunat" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                             
                                              <div class="row mb-3" >
                                              <div class="col-sm-4  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="area">Área</label>
                                                 <select name="area" class="custom-select" required="true">
                                                    <option selected></option>
                                                    <option value="H">Hombre</option>
                                                    <option value="M">Mujer</option>
                                                  </select>
                                             </div>
                                              <div class="col-sm-4  d-flex justify-content-between align-items-center"  >
                                                 <label class="label-input mr-1" for="cargo">Cargo</label>
                                                  <select name="cargo" class="custom-select" required="true">
                                                    <option selected></option>
                                                    <option value="H">Hombre</option>
                                                    <option value="M">Mujer</option>
                                                  </select>
                                             </div>
                                                  <div class="col-sm-4  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="pension">Fondo de Pensión</label>
                                                <input type="text" id="pension" name="pension" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                              </div>
                                              <div class="row mb-3" >
                                             <div class="col-sm-4  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="sueldo">Sueldo</label>
                                                <input type="text" id="sueldo" name="sueldo" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                           <div class="col-sm-4  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="banco">Banco</label>
                                                  <select name="banco" class="custom-select" required="true">
                                                    <option selected></option>
                                                    <option value="H">Hombre</option>
                                                    <option value="M">Mujer</option>
                                                  </select>
                                                 </div>
                                              <div class="col-sm-4  d-flex justify-content-between align-items-center" >
                                                 <label class="label-input mr-1" for="cuenta">Cuenta</label>
                                                <input type="text" id="cuenta" name="cuenta" minlength="3" class="form-control "  required="true"  >
                                             </div>
                                              </div>
                                            
                                             
                                             
                                         <button type="submit" class="btn btn-primary input-item"  id="btn-empleado" >Registrar</button>


                                     </form> 
                                 </div>
                             </div>
                         </div>
                     </div>
                <!-- The Modal  de Actualizar-->
                <div class="modal fade" id="myModal2">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Actualizar Cliente</h4>
                                <button type="button" class="close" data-dismiss="modal">×</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body">
                              
                                <form id="formulario-update-cliente" class="container-inputs2"   method="POST" >
                                         
                                             <input type="hidden" id="cod2" name="cod"  class="form-control mb-3" value="" >
                                             <div class="input-item" >
                                                 <label class="label-input" for="nombre">Nombre</label>
                                                <input type="text" id="nombre2" name="nombre" minlength="3" class="form-control mb-3"  required="true"  >
                                             </div>
                                             <div class="input-item">
                                                <label  class="label-input" for="email">Email</label>
                                                <input type="email" id="email2" name="email"  class="form-control mb-3"  required="true" >
                                             </div>
                                       
                                        
                                             <div class="input-item">
                                                <label  class="label-input" for="cel">Celular</label>
                                                <input type="tel" id="cel2" name="cel" pattern="[0-9]{9}"  class="form-control mb-3"   required="true" >
                                             </div>
                                            <div class="input-item">
                                                <label  class="label-input" for="usu">Usuario</label>
                                                <input type="text" id="usu2" name="usu" minlength="3"  class="form-control mb-3"   required="true" >
                                              </div>
                                         <div class="input-item">
                                                <label  class="label-input" for="pass">Contraseña</label>
                                                <input type="password" id="pass2" name="pass" minlength="6"   class="form-control mb-3"   required="true" >
                                              </div>
                                              <div class="input-item">
                                                <label  class="label-input" for="dir">Dirección</label>
                                                <input type="text" id="dir2" name="dir" minlength="3"  class="form-control mb-3"   required="true" >
                                              </div>
                                             
                                         
                                           
                                             
                                         <button type="submit" class="btn btn-primary"  id="actualizarCliente" >Actualizar</button>


                                     </form> 

                            </div>
                        </div>
                    </div>
                </div>
            <div class="row">

                <div class="col-sm-12 title-report">
                    <table class="table table-hover table-light">
                        <thead >
                            <tr>
                                <th>idCliente</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Celular</th>
                                <th>Dirección</th>
                                <th>Usuario</th>
                                <th>Password</th>
                                <th colspan="2" class="operation">Operación</th>
                            </tr>
                        </thead>
                        <tbody id="tabla-cliente" >

                        <template id="template-cliente">
                            <tr >
                                <td class="codigo"></td>
                                <td class="nombre"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="btn btn-primary update" ><i class="fas fa-edit"></i></button></td>
                                <td><button type="button" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button></td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>
            </div>
               
        
    </body>
    <script src="js/Empleado.js" ></script>
   
    
</html>
