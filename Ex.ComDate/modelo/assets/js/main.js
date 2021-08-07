/*
function showDate(){

    let pageWeb =  document.querySelector('.container h1');
    let showDateEl = new Date();
    let dayEl =  showDateEl.getDay();
    let dayMonthEl = showDateEl.getDate();
    let monthEl = showDateEl.getMonth() + 1;
    let yearEl = showDateEl.getFullYear();
    let hoursEl = showDateEl.getHours();
    let minutesEl = showDateEl.getMinutes();

  
    
    switch (dayEl){
        case 0:
            dayEl = 'Domingo';
            break;
            case 1:
            dayEl = 'Segunda - feira';
            break;
            case 2:
            dayEl = 'Terça - feira';
            break;
            case 3:
            dayEl = 'Quarta - feira';
            break;
            case 4:
            dayEl = 'Quinta - feira';
            break;
            case 5:
            dayEl = 'Sexta - feira';
            break;
            case 6:
            dayEl = 'Sábado';
            break;
    }

    switch (monthEl){
        case 0:
            monthEl = 'Janeiro';
            break;
            case 1:
            monthEl = 'Fevereiro';
            break;
            case 2:
            monthEl = 'Março';
            break;
            case 3:
            monthEl = 'Abril';
            break;
            case 4:
            monthEl = 'Maio';
            break;
            case 5:
            monthEl = 'Junho';
            break;
            case 6:
            monthEl = 'Julho';
            break;
            case 7:
            monthEl = 'Agosto';
            break;
            case 8:
            monthEl = 'Setembro';
            break;
            case 9:
            monthEl = 'Outubro';
            break;
            case 10:
            monthEl = 'Novembro';
            break;
            case 11:
            monthEl = 'Dezembro';
            break;
    }
    
    if (minutesEl < 10) {
        pageWeb.innerHTML = `<strong>${dayEl} , ${dayMonthEl} de ${monthEl} de ${yearEl}.<br> Horário: ${hoursEl}:0${minutesEl}</strong>`;
    } else if (hoursEl < 10){
        pageWeb.innerHTML = `<strong>${dayEl} , ${dayMonthEl} de ${monthEl} de ${yearEl}.<br> Horário: 0${hoursEl}:${minutesEl}</strong>`;
    } else {
        pageWeb.innerHTML = `<strong>${dayEl} , ${dayMonthEl} de ${monthEl} de ${yearEl}.<br> Horário: ${hoursEl}:${minutesEl}</strong>`;
    }
  
    console.log(`${dayEl} , ${dayMonthEl} de ${monthEl} de ${yearEl} ${hoursEl}:${minutesEl}`);

}

showDate();
*/

let h1El =  document.querySelector('.container h1');
let showDateEl = new Date();
h1El.innerHTML = showDateEl.toLocaleDateString('pt-BR' ,{dateStyle:"full"});
h1El.innerHTML += '<br> Horário: '
h1El.innerHTML += showDateEl.toLocaleTimeString('pt-BR', { timeStyle:"short"});