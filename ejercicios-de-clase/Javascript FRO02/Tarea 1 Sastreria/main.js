window.onload = function () {

    console.log('app running!')

    var cantidadDepersonasIn = document.getElementById('cantidadDepersonasIn');
    var cantidadDetelaPorpersonasIn = document.getElementById('cantidadDetelaPorpersonasIn');
    var precioDetelaIn = document.getElementById('precioDetelaIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(calcularBtn);



    calcularBtn.onclick = onCalcularBtn;


    function onCalcularBtn() {

        var cantidadDepersonas = Number(cantidadDepersonasIn.value);
        var cantidadDetelaPorpersonas = Number(cantidadDetelaPorpersonasIn.value);
        var precioDetela = Number(precioDetelaIn.value);
        var precioTotal = (cantidadDepersonas * cantidadDetelaPorpersonas * precioDetela);
        console.log('Total: ' + precioTotal);
        resultadoLbl.innerHTML = 'Total' + ' ' + precioTotal;
        console.clear();

    }
}
