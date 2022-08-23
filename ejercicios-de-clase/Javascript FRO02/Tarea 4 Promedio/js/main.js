/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {
    var lunesIn = document.getElementById('lunesIn');
    var martesIn = document.getElementById('martesIn');
    var miercolesIn = document.getElementById('miercolesIn');
    var juevesIn = document.getElementById('juevesIn');
    var viernesIn = document.getElementById('viernesIn');
    var sabadoIn = document.getElementById('sabadoIn');
    var domingoIn = document.getElementById('domingoIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var tempInfoLbl = document.getElementById('tempInfoLbl');

    console.dir(calcularBtn);
    //registrarBtn.onclick = onRegistrarBtn;
    calcularBtn.onclick = onCalcularBtn;

    var indexDeTemperatura = 6;
    lunesIn = Number(lunesIn.value);
    martesIn = Number(martesIn.value);
    miercolesIn = Number(miercolesIn.value);
    juevesIn = Number(juevesIn.value);
    viernesIn = Number(viernesIn.value);
    sabadoIn = Number(sabadoIn.value);
    domingoIn = Number(domingoIn.value);
    var temperaturas = [20, 21, 24, 26, 28, 29, 30];

    //lunesIn, martesIn, miercolesIn, juevesIn, viernesIn, sabadoIn, domingoIn


    function onCalcularBtn() {
        var total = (lunesIn + martesIn + miercolesIn + juevesIn + viernesIn + sabadoIn + domingoIn);
        for (let i = 0; i < temperaturas.length; i++) {
            total += temperaturas[i];
        }
        var promedio = total / temperaturas.length;
        console.log(tempInfoLbl.innerHTML = 'Temperatura promedio' + ' ' + promedio);

    }
}