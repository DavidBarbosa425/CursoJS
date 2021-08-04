let num = Number(prompt('Digite um número: '));
/**
 * Todo valor retornado pelo prompt() vem como string 
 * com o Number() é possível fazer a conversão.
 */

let spanEl = document.querySelector('#title');

spanEl.innerHTML = num;

let divEl = document.querySelector('#text');

divEl.innerHTML  = `<p>Raiz quadrada: ${num ** 0.5}</p>`;
divEl.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
divEl.innerHTML += `<p>${num} é NaN: ${Number.isNaN(num)}</p>`;
divEl.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
divEl.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
divEl.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`