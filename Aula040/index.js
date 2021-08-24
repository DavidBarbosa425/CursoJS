function Store(products, price, inventory){
    this.products = products,
    this.price = price,
    this.inventory = inventory;

    let inventoryPrivate = inventory;

    Object.defineProperty(this, 'inventory', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável


        get: function(){
            return inventoryPrivate;
        },

        set: function(value){
            if (typeof value !== 'number'){
                console.log('ERROR, invalid value!')
                return;
            } 

                inventoryPrivate += value;
            
            
        }
    });

}


let showStore = new Store('shirt', 10.50, 15)
console.log(showStore)

showStore.inventory = 2;
console.log(showStore.inventory)