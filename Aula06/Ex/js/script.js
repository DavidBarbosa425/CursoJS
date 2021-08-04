let num = prompt('Digite um número: ');

let spanEl = document.querySelector('#title');

spanEl.innerHTML = num;

let divEl = document.querySelector('#text');

divEl.innerHTML  = `Raiz quadrada: ${(num / 0.5) **9}`;
