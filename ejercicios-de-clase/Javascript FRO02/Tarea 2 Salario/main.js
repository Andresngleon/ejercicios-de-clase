//window.addEventListener('load', init, true);

window.onload = function init() {
    console.log('app running!')

    var cantidadHoraInput = document.getElementById('cantidadHoraInput');
    var precioHoraInput = document.getElementById('precioHoraInput');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');
    var resultadoLblextras = document.getElementById('resultadoLblextras');

    console.dir(calcularBtn);



    calcularBtn.onclick = onCalcularBtn;


    function onCalcularBtn() {

        var cantidadHora = Number(cantidadHoraInput.value);
        var precioHora = Number(precioHoraInput.value);
        var tiempoExtra = (0.5) * (precioHora)
        var jornadaCompleta = 40
        var salarioNormal = (cantidadHora * precioHora)
        var salarioExtra = (cantidadHora - jornadaCompleta) * (tiempoExtra);
        var salarioConextras = (salarioNormal) + (salarioExtra);

        if (cantidadHora > jornadaCompleta) {
            console.log(resultadoLbl.innerHTML = 'Salario con extras' + ' ' + (salarioConextras));
        } else {
            console.log(resultadoLbl.innerHTML = 'Salario regular' + ' ' + salarioNormal);
        }

        resultadoLblextras.innerHTML = 'Salario regular' + ' ' + salarioNormal
    }
}    
