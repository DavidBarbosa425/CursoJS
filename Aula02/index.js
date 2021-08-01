let res = document.querySelector('#usuario');

let gostaria = confirm('Gostaria de realizar um calculo de adição? ');

if (gostaria == true) {

    let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');
alert(`O valor da soma entre os dois números digitados é ${Number(num1) + Number(num2)}`);

res.innerHTML = `<strong>O valor da soma entre os dois números digitados é ${Number(num1) + Number(num2)}</strong>`;

} else {
    alert('Adeus!');
}

