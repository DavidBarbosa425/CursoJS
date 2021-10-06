const nome = 'David';
const sobrenome = 'Barbosa';

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar.'
console.log(exports);