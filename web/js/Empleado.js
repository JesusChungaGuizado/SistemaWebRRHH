/* global MSalert */

$(document).ready(function () {
    abrirModal();
    RegistrarEmpleado();

     $("#export").click(function () {
         Alerta();
        
    });
});
function abrirModal(){
    $("#myBtn").click(function () {
        $('#formulario').trigger('reset');
        $("#myModal").modal();
    });
}
function Alerta(){
   MSalert.principal({

  // 'gear', 'error', 'warning', 'success'
  icon:'warning', 

  // dialog title
  title: 'Are You Sure',

  // dialog content
  description: 'Are you sure to delete this entry?',

  // footer content
  extra: 'Check Out the Console Log (F12)',

  // enable confirm/cancel buttons
  button: true, 

}).then(result =>{
    
        
 
})
}
function RegistrarEmpleado(){
     var btnRegistro=document.getElementById("btn-empleado");
    $("#form-regis-emp").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "../../EmpleadoControl?acc=lista",
            type: 'POST',
            data: $("#form-regis-emp").serialize(), // Al atributo data se le asigna el objeto FormData.
            success: function (resultado) {
//                if (resultado=="Registro Exitoso"){
//                    $("#registro").trigger('reset');;
//                     Swal.fire(
//                        'Successful!',
//                         resultado,
//                        'success'
//                      ).then((result) => {
//                        if (result.isConfirmed) {
//                            parent.location.href = "../Module/ModuloEmpleado.jsp";
//                        }
//                        });
//                }else{
//                    Swal.fire({
//                        icon: 'error',
//                        title: 'Oops...',
//                        text: resultado+"!",
//                        
//                      })
//                }
                console.log(resultado);
            }
        });
    });
}
//function ListarPedidos(){
//         $.ajax({
//        type: 'GET',
//        url: 'EmpleadoControl?acc=lista',
//        async: true,
//        cache: false,
//        success: function (resp) {
//            console.log(resp);
//            var tabla_products = document.getElementById("formEmpleado");
//            var text="";
//              text='  <h1>'+resp+'</h1>';
//           
//            tabla_products.innerHTML=text;
//         
//        }
//    }); 
//}
