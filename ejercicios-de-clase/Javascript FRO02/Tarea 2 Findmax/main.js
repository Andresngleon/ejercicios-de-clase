//window.addEventListener('load', init, true);

window.onload = function init() {
    console.log('app running!')

    var primerNumeroInput = document.getElementById('primerNumeroInput');
    var segundoNumeroInput = document.getElementById('segundoNumeroInput');
    var maxBtn = document.getElementById('maxBtn');
    var minBtn = document.getElementById('minBtn');
    var clearBtn = document.getElementById('clearBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    console.dir(maxBtn);

    maxBtn.onclick = onMaxBtn;

    function onMaxBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result1 = Math.max(primerNumero, segundoNumero);
        console.log(resultadoLbl.innerHTML = 'Máximo de los números es' + ' ' + result1);
    }

    console.dir(minBtn);

    minBtn.onclick = onMinBtn;

    function onMinBtn() {

        var primerNumero = Number(primerNumeroInput.value);
        var segundoNumero = Number(segundoNumeroInput.value);
        var result1 = Math.min(primerNumero, segundoNumero);
        console.log(resultadoLbl.innerHTML = 'Mínimo de los números es' + ' ' + result1);
    }

    console.dir(clearBtn);

    clearBtn.onclick = onclearBtn;

    function onclearBtn() {

        document.getElementById('primerNumeroInput').value = '';
        document.getElementById('segundoNumeroInput').value = '';

    }
}






