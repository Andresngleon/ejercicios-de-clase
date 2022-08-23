window.onload = function () {
    console.log('app running!')

    var precioBrutococaInput = document.getElementById('precioBrutococaInput');
    var precioBrutopapaInput = document.getElementById('precioBrutopapaInput');
    var precioBrutohieloInput = document.getElementById('precioBrutohieloInput');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(calcularBtn);



    calcularBtn.onclick = onCalcularBtn;


    function onCalcularBtn() {


        var precioBrutococa = Number(precioBrutococaInput.value);
        var precioBrutopapa = Number(precioBrutopapaInput.value);
        var precioBrutohielo = Number(precioBrutohieloInput.value);
        var impuesto = 13
        var precioImpuesto = (precioBrutococa + precioBrutopapa + precioBrutohielo) * (impuesto / 100);
        var precioNeto = (precioBrutococa + precioBrutopapa + precioBrutohielo) + precioImpuesto;
        console.log('Total: ' + precioNeto);
        resultadoLbl.innerHTML = 'Total' + ' ' + precioNeto;
        console.clear();

    }
}