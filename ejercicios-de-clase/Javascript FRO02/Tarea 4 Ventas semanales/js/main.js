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
    var ventaInfoLbl = document.getElementById('ventaInfoLbl');
    var ventaSemanaInfoLbl = document.getElementById('ventaSemanaInfoLbl');

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
    var ventasDiarias = [20000, 21000, 24000, 26000, 28000, 29000];

    //lunesIn, martesIn, miercolesIn, juevesIn, viernesIn, sabadoIn, domingoIn


    function onCalcularBtn() {
        var total = 0;
        for (let i = 0; i < ventasDiarias.length; i++) {
            total += ventasDiarias[i];
        }
        var promedio = total / ventasDiarias.length;
        console.log(ventaInfoLbl.innerHTML = 'Ventas promedio' + ' ' + promedio);
        console.log(ventaSemanaInfoLbl.innerHTML = 'Ventas totales semana' + ' ' + total);

    }
}