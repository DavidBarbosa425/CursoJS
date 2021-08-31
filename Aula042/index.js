function Product(name, price) {
    this.name = name;
    this.price = price
}

Product.prototype.discount = function(percentage){
    this.price = this.price - (this.price * (percentage /100))
};

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price *(percentage / 100))
};

function Short(name, price,color){
    Product.call(this, name, price)
    this.color = color
}

Short.prototype = Object.create(Product.prototype);
Short.prototype.constructor = Short;
const product = new Product('Gen', 111);

const short1 = new Short('regata', 25, 'preto');

function Caneca(name, price, color, material, inventory){
    Product.call(this, name, price),
    this.color = color,
    this.material = material

    Object.defineProperty(this, inventory, {
        enumerable: true,
        configurable: false,
        get: function(params) {
            return inventory;
        },
        set: function(inventory) {
            if(typeof inventory !== 'number') return;
            inventory = inventory
        }
    })
}
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;
const caneca1 = new Caneca('Guns n Roses', 25, 'red', 'porcelana')

console.log(short1)
console.log(product)
caneca1.increase(10)
console.log(caneca1)
