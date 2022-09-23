// Create by: Miguel Salinas Nicoletti
// Date: 2022-04-15
// Description: This file contains the functions to create the MSalert

"use strict";
class MSalert{
    constructor(){
        this.principalResponse = false;
        this.principalOption = null;
        let $this = this;
        $(function(){
            let styleContainer = document.createElement("div");
            styleContainer.setAttribute("id", "MSalertStyleContainer");
            styleContainer.setAttribute("style", "display: none;");
            $("body").append(styleContainer);
            $("#MSalertStyleContainer").append($this.cssPrincipal());
            $("#MSalertStyleContainer").append($this.cssAlertas());
        })  

        console.log("MSalert inicializado")
    }
    cssPrincipal(){
        return `
        <style>

        
            .MSalert-principal{
                position: fixed;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 99999;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #545454;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;

            }

            .MSalert-principal-ventana{
                position: absolute;
                width: 50%;
                height: fit-content;
                background-color: white;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-size: border-box;
                padding: 20px;
                padding-bottom: 30px;
                gap: 10px;
            }

            .MSalert-principal-ventana h2{
                font-size: 35px;
                margin-top: 0;
                width: 100%;
                text-align: center;
            }

            .MSalert-principal-ventana span{
                font-size: 20px;
                margin-top: -30px;
                margin-bottom: 20px;
                width: 100%;
                text-align: center;
            }

            
            .MSalert-principal-ventana-icon {
                -webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
            .MSalert-principal-buttons{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 10px;
            }

            .MSalert-principal-button-blue{
                border: 0;
                border-radius: 5px;
                background-color: #00a1ff;
                color: white;
                font-size: 20px;
                padding: 10px;
                cursor: pointer;
                transition: 0.3s;
            }
            .MSalert-principal-button-blue:hover{
                transform: scale(1.05);
            }
            .MSalert-principal-button-red{
                border: 0;
                border-radius: 5px;
                background-color: #D61384;
                color: white;
                font-size: 20px;
                padding: 10px;
                cursor: pointer;
                transition: 0.3s;
            }
            .MSalert-principal-button-red:hover{
                transform: scale(1.05);
            }

            .MSalert-principal-button-extraPadding{
                padding-left: 30px;
                padding-right: 30px;
            }
            .Msalert-principal-extra{
                width: 100%;
                height: fit-content;
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: center;
                margin-top: -20px;
                margin-bottom: 20px;
            }

            

            @keyframes slide-in-elliptic-top-fwd {
            0% {
                -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
                        transform: translateY(-600px) rotateX(-30deg) scale(0);
                -webkit-transform-origin: 50% 100%;
                        transform-origin: 50% 100%;
                opacity: 0;
            }
            100% {
                -webkit-transform: translateY(0) rotateX(0) scale(1);
                        transform: translateY(0) rotateX(0) scale(1);
                -webkit-transform-origin: 50% 1400px;
                        transform-origin: 50% 1400px;
                opacity: 1;
            }
            }
            
        </style>
        `;

    }

    static closePrincipal(){
        $("#MSalert").remove();
    }

    static confirmationPrincipal(confirm){
        this.principalResponse = true;
        this.principalOption = confirm;
        this.closePrincipal();
    }

    static principal( datos2 = {}){
        //limpiamos datos de confirmacion
        this.principalResponse = false;
        this.principalOption = null;

        let datos = {
            icon : datos2.icon,
            iconColor: "#545454",
            iconWidth: 120,
            iconHeight: 120,
            title : datos2.title,
            description: datos2.description,
            button:false,
            extra:''
        }

        //comprobacion de datos ingresados
        if(datos2.iconColor){
            datos.iconColor = datos2.iconColor;
        }
        if(datos2.iconWidth){
            datos.iconWidth = datos2.iconWidth;
        }
        if(datos2.iconHeight){
            datos.iconHeight = datos2.iconHeight;
        }
        if(datos2.button){
            datos.button = true;
        }
        if(datos2.extra){
            datos.extra = datos2.extra;
        }
        
        
        // create te alert
        
        //console.log('datos',datos)
        let icono = this.icons(datos.icon,datos.iconColor,datos.iconWidth,datos.iconHeight)
        $(function(){
            // crear el item principal que se encuentra en el body
            let alert = document.createElement("div");
            alert.setAttribute("id", "MSalert");
            alert.classList.add("MSalert-principal");
            alert.classList.add("MSalert-principal-hide");
            $("body").append(alert);

            // crear item con la descripcion

            let ventana = document.createElement("div");
            ventana.setAttribute("id", "MSalert-principal-ventana");
            ventana.classList.add("MSalert-principal-ventana");
            $("#MSalert").append(ventana);

            let content = `
            ${icono}
            <h2>${datos.title}</h2>
            <span>${datos.description}</span>
            ${datos.extra ? `<div class="Msalert-principal-extra">${datos.extra}</div>` : ''}
            ${datos.button
                    ? `
                    <div class="MSalert-principal-buttons">
                    <button type="button" class="MSalert-principal-button-blue MSalert-principal-button-extraPadding" onclick="MSalert.confirmationPrincipal(true)">Yes</button>
                    <button type="button" class="MSalert-principal-button-red MSalert-principal-button-extraPadding" onclick="MSalert.confirmationPrincipal(false)">No</button>
                    </div>` 
                    : `<button type="button" class="MSalert-principal-button-blue" onclick="MSalert.closePrincipal()">Accept</button>`}
            
            `
            $("#MSalert-principal-ventana").append(content);
        })
        
        if(datos.button){
            let $this = this;
            return new Promise((resolve, reject) => {
                let timer = setInterval(function(){
                    if($this.principalResponse){
                        clearInterval(timer)
                        resolve($this.principalOption)
                    }
                },500)
            });
        }
    }

    static icons(name,color='#000',width=24,height=24){
        let atributes1 = `fill="${color}"`;
        let content = '';

        switch(name){
            case "gear": content = `<path ${atributes1} fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>`;break;

            case "error" : content = `<g ">
            <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
            <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
            <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
            </g>`;break;

            case "warning" : content = `<g style="transform: scale(0.6)">
            <path d="m12 1031.4c-0.985-0.1-1.715 0.7-2.0313 1.6-2.6053 5.2-5.2088 10.4-7.8125 15.6-0.6178 1.3 0.5802 2.9 2 2.8h7.8438 7.844c1.42 0.1 2.618-1.5 2-2.8-2.604-5.2-5.207-10.4-7.813-15.6-0.316-0.9-1.046-1.7-2.031-1.6z" fill="#f39c12"/>
            <path d="m12 2c-0.985-0.0372-1.715 0.7682-2.0312 1.625-2.6054 5.2106-5.2089 10.418-7.8126 15.625-0.6178 1.307 0.5802 2.919 2 2.75 2.6101-0.003 5.2337-0.001 7.8438 0 2.61-0.001 5.234-0.003 7.844 0 1.42 0.169 2.618-1.443 2-2.75-2.604-5.207-5.207-10.414-7.813-15.625-0.316-0.8568-1.046-1.6622-2.031-1.625z"" fill="#f1c40f"/>
            <path d="m12 8c-0.552 0-1 0.4477-1 1l0.5 7h1l0.5-7c0-0.5523-0.448-1-1-1zm0 9c-0.552 0-1 0.448-1 1s0.448 1 1 1 1-0.448 1-1-0.448-1-1-1z" " fill="#34495e"/>
            </g>`; break;

            case "success" : content = `<g
            id="layer1">
            <path
                d="M 8,1 C 4.1340066,1 1,4.1340066 1,8 c 0,3.865993 3.1340066,7 7,7 3.865993,0 7,-3.134007 7,-7 C 15,4.1340066 11.865993,1 8,1 z m 3.3125,3.0625 1.5625,1.40625 -5.25,6.9375 -4.0625,-3.5 1.34375,-1.78125 2.375,2.0625 4.03125,-5.125 z"
                inkscape:connector-curvature="0"
                id="path2922-6-6-0"
                style="color:#000000;fill:#32DE14;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.84323651;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" />
            </g>`;break;
        }

        return `<svg xmlns="http://www.w3.org/2000/svg" class="MSalert-principal-ventana-icon" width="${width}" height="${height}" viewBox="0 0 14 16">${content}</svg>`
    }

    cssAlertas(){
        return `
        <style>
            .MSalert-alert{
                position: absolute;
                z-index: 99998;
                width: fit-content;
                height: fit-content;
                transform: translateY(11px);
                display:block;
                padding: 10px;
                color: white;
                opacity: 0.95;
                border-radius:2px;
                animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                
            }

            @keyframes fade-in-fwd {
                0% {
                    -webkit-transform: translateZ(-80px);
                            transform: translateZ(-80px);
                    opacity: 0;
                }
                100% {
                    -webkit-transform: translateZ(0);
                            transform: translateZ(0);
                    opacity: 1;
                }
            }

            @keyframes fade-out {
                0% {
                    -webkit-transform: translateZ(0);
                            transform: translateZ(0);
                    opacity: 1;
                }
                100% {
                    -webkit-transform: translateZ(-80px);
                            transform: translateZ(-80px);
                    opacity: 0;
                }
                
            }
        </style>
        `;
    }

    static alerta(info){

        let datos = {
            id : info.id,
            position : info.position,
            status : info.status,
            text : info.text,
            duration : 0,
        }

        if(info.duration == '' || info.duration < 2000){
            datos.duration = '3000';
        }else{
            datos.duration = info.duration;
        }
        
        $(function(){
            if($('#'+datos.id).length){
                console.log("alerta",datos.id)
                let element = $('#'+datos.id)
                let posicion = element.position()
                let width = element.width()
                let height = element.height()
                let tipo = element.prop('nodeName');

                console.log('posicion',posicion)
                console.log('width',width)
                console.log('height',height)
                console.log('tipo',tipo)
                
                let posAbajo = {
                    top: posicion.top + height + 15,
                    left: posicion.left 
                }

                let posArriba = {
                    top: posicion.top - (height*2) + 18,
                    left: posicion.left
                }

                let posDerecha = {
                    top: posicion.top + 7,
                    left: posicion.left + width + 8
                }

                if(tipo == "DIV"){
                    posAbajo.top = posAbajo.top + 40;
                    posArriba.top = posicion.top - 45;
                    posDerecha.left = posDerecha.left + 40;
                }

                //STYLE CONTROL POS
                let marginTop = element.css("margin-top");
                let marginLeft = element.css("margin-left");
                let marginRight = element.css("margin-right");
                let marginBottom = element.css("margin-bottom");

                posArriba.top = posArriba.top + parseInt(marginTop);


                // status colors
                let color = "#fff";
                let fontColor = "#000";
                switch(datos.status){
                    case "success" :
                            color = "#32DE14"
                            fontColor = "#114B07"
                            ; break;
                    case "warning" : 
                            color = "#F1C40F"
                            fontColor = "#2B2B2B"
                            ; break;
                    case "error" : 
                            color = "#E74C3C"; 
                            fontColor = "#fff";
                            break;
                }

                // control de posicion

                let posSelected = ''
                switch(datos.position){
                    case 'down' : posSelected = posAbajo; break;
                    case 'up' : posSelected = posArriba; break;
                    case 'right' : posSelected = posDerecha; break;
                }

                let divAlerta = `
                    <div id="MSalert-${datos.id}" class="MSalert-alert"
                    style="
                    position: absolute;
                    top: ${posSelected.top}px;
                    left: ${posSelected.left}px;
                    max-width: ${width}px;
                    background-color: ${color};
                    color : ${fontColor};
                    border: 1px solid ${fontColor};
                    "
                    >${datos.text}</div>
                `
                $("body").append(divAlerta);

                let timer = datos.duration
                
                let contadorAnimation = setTimeout(function(){
                    $("#MSalert-"+datos.id).css("animation","fade-out 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
                    clearTimeout(contadorAnimation);
                },timer-1000);

                let contador = setTimeout(function(){
                        $("#MSalert-"+datos.id).remove();
                        clearTimeout(contador);
                },timer);

            }else{
                console.error("MSalert: You must enter a valid ID!")
            }
        })
        
        
    }


}

globalThis.MSalert = new MSalert();
