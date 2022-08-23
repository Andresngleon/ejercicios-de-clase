//window.addEventListener('load', init, true);

window.onload = function init() {
    console.log('app running!')

    var primerNumeroInput = document.getElementById('primerNumeroInput');
    var segundoNumeroInput = document.getElementById('segundoNumeroInput');
    var clearBtn = document.getElementById('clearBtn');
    var sumarBtn = document.getElementById('sumarBtn');
    var restarBtn = document.getElementById('restarBtn');
    var multiplicarBtn = document.getElementById('multiplicarBtn');
    var dividirBtn = document.getElementById('dividirBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(sumarBtn);

    sumarBtn.onclick = onSumarBtn;

    function onSumarBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result1 = (primerNumero) + (segundoNumero);

        console.log(resultadoLbl.innerHTML = 'Resultado' + ' ' + result1);
    }

    console.dir(restarBtn);

    restarBtn.onclick = onRestarBtn;

    function onRestarBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result2 = (primerNumero) - (segundoNumero);

        console.log(resultadoLbl.innerHTML = 'Resultado' + ' ' + result2);
    }

    console.dir(multiplicarBtn);

    multiplicarBtn.onclick = onMultiplicarBtn;

    function onMultiplicarBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result3 = (primerNumero) * (segundoNumero);

        console.log(resultadoLbl.innerHTML = 'Resultado' + ' ' + result3);
    }

    console.dir(dividirBtn);

    dividirBtn.onclick = onDividirBtn;

    function onDividirBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result4 = (primerNumero) / (segundoNumero);

        console.log(resultadoLbl.innerHTML = 'Resultado' + ' ' + result4);
    }

    console.dir(clearBtn);

    clearBtn.onclick = onclearBtn;

    function onclearBtn() {

        document.getElementById('primerNumeroInput').value = '';
        document.getElementById('segundoNumeroInput').value = '';


    }

}






