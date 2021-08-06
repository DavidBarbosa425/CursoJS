let pontuaçãoUsuario = 1000;
let nivelUsuario = pontuaçãoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal';
console.log(nivelUsuario) // Usuario Vip
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao) // preto
/* Sera adiciona uma cor na variável corPadrao se ousuario escolher
 uma cor, ou (||) sera usada a cor previamente selecionada que no caso é o preto.
*/ 