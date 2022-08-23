/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {
    var tempInL = document.getElementById('tempInL');
    var tempInK = document.getElementById('tempInK');
    var tempInM = document.getElementById('tempInM');
    var tempInJ = document.getElementById('tempInJ');
    var tempInV = document.getElementById('tempInV');
    var tempInS = document.getElementById('tempInS');
    var tempInD = document.getElementById('tempInD');
    var calcularBtn = document.getElementById('calcularBtn');
    var eliminarBtn = document.getElementById('eliminarBtn');


    calcularBtn.onclick = onCalcularBtn;
    eliminarBtn.onclick = onEliminarBtn;

    var indexDetemperatura = 6;
    var temperatura = ['20', '21', '21', '21', '21', '21', '21'];
    var dia = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    function onCalcularBtn() {
        var tempL = Number(tempInL.value);
        var tempK = Number(tempInK.value);
        var tempM = Number(tempInM.value);
        var tempJ = Number(tempInJ.value);
        var tempV = Number(tempInV.value);
        var tempS = Number(tempInS.value);
        var tempD = Number(tempInD.value);
        var tempSuma = (tempL + tempK + tempM + tempJ + tempV + tempS + tempD);
        var intervaloSemana = (7);
        var promedio = number((tempSuma) / (intervaloSemana));
        console.log(climaLbl.innerHTML = 'Temperatura promedio' + ' ' + (promedio));
    }


    function onEliminarBtn() {
        tempLIn.value = '';
        tempKIn.value = '';
        tempMIn.value = '';
        tempJIn.value = '';
        tempVIn.value = '';
        tempSIn.value = '';
        tempDIn.value = '';

    }



}