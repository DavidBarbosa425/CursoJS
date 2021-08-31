// const objA = {
//     chaveA: 'A',
// };

// const objB = {
//     chaveB: 'B',
// };

// const objC = {
//     chaveC: 'C',
// };

// Object.setPrototypeOf(objB,objA); // Dessa forma objA é pai de objB
// console.log(objB.chaveA); // A

// Object.setPrototypeOf(objC, objB); // Dessa forma objB é pai de objC
// console.log(objC.chaveA) // A

function Product(name, price){
    this.name = name;
    this.price = price;
};

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
}

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
}

const p1 = new Product('camiseta', 50);
// p1.discount(20) 
// console.log(p1) // Product { name: 'camiseta', price: 40 }
// p1.increase(30) 
// console.log(p1) // Product { name: 'camiseta', price: 65 }


const p2 = {
    product: 'caneca',
    price: 15
}

Object.setPrototypeOf(p2, Product.prototype)

p2.discount(10)
console.log(p2)

const p3 = Object.create(Product.prototype);
console.log(p3) // Product {}

p3.name = 'luvas';
p3.price = 25;
console.log(p3) // Product { name: 'luvas', price: 25 }

p3.increase(10)
console.log(p3) // Product { name: 'luvas', price: 27.5 }