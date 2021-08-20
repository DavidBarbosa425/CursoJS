// Filter, Map e Reduce

// Retorne os números maiores que 10
//let numeros = [2,50,40,30,20,2,9,1,0,45,63,80];

    

// let numerosFiltrados = numeros.filter((value, index, array) =>{
   
//     if (value > 10) return true;
// })

// console.log(numerosFiltrados)
// [
//     50, 40, 30, 20,
//     45, 63, 80
//   ]


//let numeros = [2,50,40,30,20,2,9,1,0,45,63,80];

// let numerosFiltrados = numeros.filter((value, index, array) =>{
//     console.log(value, index)
    
// })

// console.log(numerosFiltrados)
// 2 0
// 50 1
// 40 2
// 30 3
// 20 4
// 2 5
// 9 6
// 1 7
// 0 8
// 45 9
// 63 10
// 80 11
// []

// let pessoas = [
//     {nome: 'David', idade: 34,},
//     {nome: 'João', idade: 90},
//     {nome: 'Patricio', idade: 105},
//     {nome: 'Marcos', idade: 138},
// ]

// let pessoasNome = pessoas.filter( obj => {
//     return obj.nome.length >= 7 
        
    
// })

// console.log(pessoasNome)
// [ { nome: 'Patricio', idade: 105 } ]

let pessoas = [
    {nome: 'David', idade: 34,},
    {nome: 'João', idade: 90},
    {nome: 'Patricio', idade: 105},
    {nome: 'Marcos', idade: 138},
]

let pessoasIdade = pessoas.filter(obj => {
    return obj.idade > 50
})


// console.log(pessoasIdade)
// [
//     { nome: 'João', idade: 90 },
//     { nome: 'Patricio', idade: 105 },
//     { nome: 'Marcos', idade: 138 }
//   ]


let nomesTerminaComO = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('o');
})

console.log(nomesTerminaComO)
//[ { nome: 'João', idade: 90 }, { nome: 'Patricio', idade: 105 } ]