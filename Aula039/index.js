// function Store(products, price, inventory){
//     this.products = products,
//     this.price = price,
//     this.inventory = inventory

// }

// let showStore = new Store('shirt', 10.50, 15)
// console.log(showStore)
// // Store { products: 'shirt', price: 10.5, inventory: 15 }

// console.log(showStore.products, showStore.price, showStore.inventory)
// // shirt 10.5 15


function Store(products, price, inventory){
    this.products = products,
    this.price = price,
    this.inventory = inventory;

    Object.defineProperty(this, 'inventory', {
        enumerable: true, // mostra a chave
        value: inventory,// valor
        writable: false, // pode alterar
        configurable: false // configurável
    });

}


let showStore = new Store('shirt', 10.50, 15)
console.log(showStore)