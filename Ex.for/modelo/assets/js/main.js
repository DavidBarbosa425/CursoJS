const elementos = [
    {tag: 'p',texto:'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Fraser 4'},
];

const sectionEl = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
}

sectionEl.appendChild(div);