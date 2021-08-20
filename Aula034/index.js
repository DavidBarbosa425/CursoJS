// let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let numerosEmDorbo = numeros.map(valor => {
//     return `-> ${valor}`;
// })

// console.log(numerosEmDorbo)
// [
//     '-> 5',  '-> 50',
//     '-> 80', '-> 1',
//     '-> 2',  '-> 3',
//     '-> 5',  '-> 8',
//     '-> 7',  '-> 11',
//     '-> 15', '-> 22',
//     '-> 27'
//   ]


//   let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let numerosEmDorbo = numeros.map(valor => {
//     return valor * 2;
// })

// console.log(numerosEmDorbo)
// [
//     10, 100, 160,  2,  4,  6,
//     10,  16,  14, 22, 30, 44,
//     54
//   ]
  

// let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let numerosEmDorbo = numeros.map((valor, indice) => {
//     return indice;
// })

// console.log(numerosEmDorbo)
// [
//     0, 1, 2, 3,  4,  5,
//     6, 7, 8, 9, 10, 11,
//    12
//  ]

    // let pessoas = [
    //     {nome: 'David', idade: 34,},
    //     {nome: 'João', idade: 90},
    //     {nome: 'Patricio', idade: 105},
    //     {nome: 'Marcos', idade: 138},
    // ];

    // let pessoasNomes = pessoas.map(value => {
    //     return value.nome;
    // })

    // console.log(pessoasNomes)
    // [ 'David', 'João', 'Patricio', 'Marcos' ]


    // let pessoas = [
    //     {nome: 'David', idade: 34,},
    //     {nome: 'João', idade: 90},
    //     {nome: 'Patricio', idade: 105},
    //     {nome: 'Marcos', idade: 138},
    // ];

    // let pessoasNomesRemovidos = pessoas.map(value => {
    //     delete value.nome;
    //     return value;
    // })

    // console.log(pessoasNomesRemovidos)


    let pessoas = [
        {nome: 'David', idade: 34,},
        {nome: 'João', idade: 90},
        {nome: 'Patricio', idade: 105},
        {nome: 'Marcos', idade: 138},
    ];

    let comId = pessoas.map((valor, indice) => {
        valor.id = (indice + 1) * 1000
        return valor
    })

    console.log(comId)