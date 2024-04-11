const form = document.getElementById('form-calculo');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
let formEValido = false;

function validaNumero(a, b) {
    return a > b;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroAValue = parseFloat(numeroA.value); 
    const numeroBValue = parseFloat(numeroB.value); 
    const mensagemSucesso = `O número inserido <b>${numeroAValue}</b> é maior que <b>${numeroBValue}</b> respectivamente`;
    const mensagemErrado = `O número inserido <b>${numeroAValue}</b> não é maior que <b>${numeroBValue}</b> respectivamente`;

    formEValido = validaNumero(numeroAValue, numeroBValue);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        const mensagemErro = `O número <b>${numeroBValue}</b> não é maior que <b>${numeroAValue}</b>`;
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        document.querySelector('.success-message').style.display = 'none';
        }
});

numeroA.addEventListener(function(e) {
    const numeroAValue = parseFloat(numeroA.value); 
    const numeroBValue = parseFloat(numeroB.value); 

    formEValido = validaNumero(numeroAValue, numeroBValue);

    if (!formEValido) {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});
