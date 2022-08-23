//window.addEventListener('load', init, true);

window.onload = function init() {
    console.log('app running!')

    var precioNochehotelInput = document.getElementById('precioNochehotelInput');
    var cantidadNochesInput = document.getElementById('cantidadNochesInput');
    var clientehotelInput = document.getElementById('clientehotelInput');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');
    var resultadoLblconDescuento = document.getElementById('resultadoLblconDescuento');

    console.dir(calcularBtn);



    calcularBtn.onclick = onCalcularBtn;


    function onCalcularBtn() {


        var precioNochehotel = Number(precioNochehotelInput.value);
        var cantidadNoches = Number(cantidadNochesInput.value);
        var clienteHotel = String(clientehotelInput.value);
        var clientePreferencial = 'Frecuente';
        var clienteNormal = 'Normal';
        var descuentoNormal = 0.05
        var descuentoPreferencial = 0.1
        var precioSindescuento = (precioNochehotel * cantidadNoches)
        var precioNormal = (precioSindescuento) - (precioNochehotel * cantidadNoches * descuentoNormal);
        var precioPreferencial = (precioSindescuento) - (precioNochehotel * cantidadNoches * descuentoPreferencial);
        var result1 = clienteHotel === clientePreferencial;
        result1 = true;

        if (clienteHotel === clientePreferencial) {
            console.log(resultadoLblconDescuento.innerHTML = 'Precio con descuento' + ' ' + precioPreferencial);
        } else {
            console.log(resultadoLblconDescuento.innerHTML = 'Precio con descuento' + ' ' + precioNormal);
        }

        resultadoLbl.innerHTML = 'Precio Total' + ' ' + precioSindescuento
    }
}


var indexDebusqueda = Number(estudiantesSlt.value)
if (indexDebusqueda = -1 || nombres === ' ') {
    console.log(estudianteInfo.innerHTML = 'Estudiante no encontrado');
} else {
    console.log(estudianteInfo.innerHTML = 'Estudiante:' + ' ' + nombres[indexDebusqueda] + ' ' + apellidos[indexDebusqueda] + ' ' + notas[indexDebusqueda] + ' ' + emails[indexDebusqueda]);
    //TODO: Mostar la informacion del estudiante en estudianteInfo estudiantesSlt.value
}