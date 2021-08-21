let numeros = [2,50,0,12,48,64,92,1,7,58,0,103]

numerosPares = numeros.filter(valor => {
    return valor % 2 === 0;
}).map(valor => {
    return valor * 2;
}).reduce((contador, value) => {
    return contador + value;
});

// filter()
// [
//     2, 50,  0, 12, 48,
//    64, 92, 58,  0
//  ]

// map()
// [
//     4, 100,   0, 24, 96,
//   128, 184, 116,  0
// ]

// reduce()
// 652

console.log(numerosPares)