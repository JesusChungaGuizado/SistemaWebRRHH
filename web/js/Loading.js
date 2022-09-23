$(document).ready(function() {
              $("#contenido").load("jsp/Module/ModuloBoleta.jsp");
            $("#empleado").click(function() {
              $("#contenido").load("jsp/Module/ModuloEmpleado.jsp");
            });
            $("#reporte").click(function() {
                $("#contenido").load("jsp/Module/ModuloReporte.jsp");
            });
        });
