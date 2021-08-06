

function clicar() {
let pesoEl = document.querySelector('#peso');
let alturaEl = document.querySelector('#altura')
let res = document.querySelector('#res')



let imc = Number(pesoEl.value) / (Number(alturaEl.value) * Number(alturaEl.value));

if (imc < 18.5) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , esta abaixo do peso`
} else if (imc >= 18.5 && imc <= 24.9) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , peso normal`
} else if (imc >= 25.0 && imc <=29.99) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , sobrepeso`
} else if (imc >= 30.0 && imc <=34.9) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , obesidade grau 1`
} else if (imc >= 35.0 && imc <= 39.9) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , obesidade grau 2`
} else if (imc >= 40.0) {
    res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , obesidade grau 3`
} else {
    res.innerHTML = `${imc.toFixed(1)} ERROR - Fora do padrão!!!`
}
    
    console.log(imc.toFixed(1))
}

