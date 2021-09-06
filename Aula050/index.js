function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject(false);
        return;
        }
        setTimeout(()=> {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo)
    })

}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', random(1, 3)),
    esperaAi('Promise 2', random(1, 3)),
    esperaAi('Promise 3', random(1, 3)),
    //'Outro valor'
];

// Promise.all(promises)
//  .then( valores => {
//      console.log(valores)
//  })
//  .catch(erro => {
//     console.log(erro)
//  })

Promise.race(promises)
 .then( valores => {
     console.log(valores)
 })
 .catch(erro => {
    console.log(erro)
 })