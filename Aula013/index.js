/*
const data = new Date();
console.log(data); 2021-08-07T00:35:15.326Z
console.log(data.toString());  Fri Aug 06 2021 21:35:46 GMT-0300 (Horário Padrão de Brasília)
console.log(data.toLocaleDateString('sp-BR'))  06/08/2021 MELHOR OPÇÃO E MAIS MODERNA
console.log(data.toLocaleTimeString('sp-BR'))  21:35:46   MELHOR OPÇÃO E MAIS MODERNA 
*/
/*
const data = new Date(2021, 07, 06, 21, 50, 100, 1000);
console.log(data.toString()); // Fri Aug 06 2021 21:51:41 GMT-0300 (Horário Padrão de Brasília)

const data1 = new Date('2021-07-06 22:02:10');
console.log(data1.toString()); // Tue Jul 06 2021 22:02:10 GMT-0300 (Horário Padrão de Brasília)

const data2 = new Date(1628299264326);
console.log(Date.now()) // 1628299264326 Retorna data atual em milesegundos
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1);
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Seg', data2.getSeconds());
console.log('MS', data2.getUTCMilliseconds());
console.log('Dia da semana', data2.getDay() + 1);
*/

function formataData(data) {
    
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)