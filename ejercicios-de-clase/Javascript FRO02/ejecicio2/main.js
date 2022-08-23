window.onload = function () {
    console.log('app running!')

    var precioBrutoInput = document.getElementById('precioBrutoInput');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(calcularBtn);



    calcularBtn.onclick = onCalcularBtn;


    function onCalcularBtn() {
        //Algoritmo de calcular precio neto
        var precioNeto = 0; //con los impuestos
        var precioBruto = Number(precioBrutoInput.value);
        var impuesto = 13;
        var impuestoAcobrar = precioBruto * (impuesto / 100);
        precioNeto = precioBruto + impuestoAcobrar;
        console.log('Total: ' + precioNeto);
        resultadoLbl.innerHTML = 'Total' + precioNeto;
        console.clear();

    }
}