
function meuEscopo() { 
    let form = document.querySelector('.form');
    let resEl = document.querySelector('#res');

    let pessoas = [];
    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        let nome = document.querySelector('.nome');
        let sobrenome = document.querySelector('.sobrenome');
        let peso = document.querySelector('.peso');
        let altura = document.querySelector('.altura')
        
        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        });
        console.log(pessoas);
        resEl.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}KG ${altura.value} de altura</p>`
}
    

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()