const formEl = document.querySelector('#form');


formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(altura, peso);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true);
})

function getNivelImc(imc){
    const nivel = ['abaixo do peso', 'peso normal','sobrepeso','obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(altura, peso) {
   const imc = peso / (altura * altura);
   return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p'); 
    return p;
}

function setResultado(msg, isValid) {
    const resultEl = document.querySelector('#result');
    resultEl.innerHTML = ``;
    
    const p = criaP();

    if (isValid) { 
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultEl.appendChild(p);
}











/*
Código destacado apenas para conferência de como adicionar conteúdos na página HTML pelo Javascript.

const resultEl = document.querySelector('#result');
const p = document.createElement('p'); // cria um elemento <p> na memória, mas não esta sendo exibido.
p.classList.add('paragrafo-resultado'); // cria uma class no elemento <p> criado.
p.innerHTML = 'Olá' // adiciona um valor no elemento <p> criado, mas ainda não esta sendo exibido.
resultEl.appendChild(p); // adiciona o elemento <p> criado ao resultEl e agora sim é exibido na tela.
*/