<%-- 
    Document   : home
    Created on : 09-sep-2022, 18:33:59
    Author     : Jesus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
         <link rel="stylesheet" href="styles/styleLoginAdmin.css">
         <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
            
    </head>
    <body>
   
        
            <main class=" container form-container login-box">
                <form id="login"  class="sign-in-container " >
               <div class="imagen">
                 <img src="img/user.jpg"  alt="user">
              </div>
              <div>
            
                  <h5>Bienvenido a Invent Shod</h5>
                   <h2>Iniciar Sesión</h2>
                
              </div>
              <div class="user-box">
                <input type="text" name="user" required="true">
                <label>Username</label>
              </div>
              <div class="user-box">
                <input type="password" name="pass" required="true">
                <label>Password</label>
              </div>
                    <input type="button" id="btn-login" value="Sign In" class="btn solid" />
           
            </form>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://kit.fontawesome.com/64d58efce2.js"crossorigin="anonymous"></script> 
    
    <script src="js/Admin.js" ></script>
    
</html>
