const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML  = `Seu nome é: <strong>${nome}</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('a')}</strong><br>`;
document.body.innerHTML += `Qual o ultimo índice da letra a no seu nome <strong>${nome.lastIndexOf('a')}</strong><br>`;
document.body.innerHTML += `As ultimas 3 letras no seu nome são: <strong>${nome.slice(-3, nome.length)}</strong><br>`;
document.body.innerHTML += `As palavras no seu nome são: <strong>${nome.split(' ')} </strong><br> `;
document.body.innerHTML += `Seu nome com letras maiúsculas <strong>${nome.toUpperCase()}</strong> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br>`;