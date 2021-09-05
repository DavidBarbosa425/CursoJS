function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(()=> {
            resolve(msg);
        }, tempo)
    })

}

esperaAi( 1, random(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', random(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 3', random(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.catch(e => {
    console.log(e)
})