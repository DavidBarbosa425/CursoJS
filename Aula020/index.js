function maxNumber(n1, n2) {

    if (n1 > n2) {
        return n1
    } 
        else {
        return n2
    }
}

let resMaxNumber = maxNumber(40,80);

console.log(resMaxNumber)

// Solução com melhoria de código

let maxNumber2 = (n3, n4) => n3 > n4 ? n3 : n4;
let resMaxNumber2 = maxNumber2(15, 18);

console.log(resMaxNumber2);