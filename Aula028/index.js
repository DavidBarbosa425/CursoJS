function* geradora1() {
    // código qualquer
    yield 'Valor 1';
    // código qualquer
    yield 'Valor 2';
    // código qualquer
    yield 'Valor 3';
    

};

let g1 = geradora1();

//console.log(g1.next().value); // Valor 1
//console.log(g1.next().value); // Valor 2
//console.log(g1.next().value); // Valor 3

for (let valor of g1){
    console.log(valor)
}
// Valor 1
// Valor 2
// Valor 3

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

let g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

let g4 = geradora4();

for (let valor of g4){
    console.log(valor)
}

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    };

    yield function(){
        console.log('vim do y2')
    }
}

let g5 = geradora5();

let func1 = g5.next().value;
let func2 = g5.next().value;

func1();
func2();