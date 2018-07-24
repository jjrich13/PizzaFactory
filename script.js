class Pizza {
    constructor(ingredients = ['cheese']){
        this.ingredients = ingredients;
        
    }
};

class smallPizza extends Pizza{
    constructor(ingredients = ['cheese']){
        super(ingredients);
        this.price = ((this.ingredients.length - 1) * 0.99) + 8.99;
    }
}

class mediumPizza extends Pizza{
    constructor(ingredients = ['cheese']){
        super(ingredients);
        this.price = ((this.ingredients.length - 1) * 0.99) + 10.99;
    }
}

class largePizza extends Pizza{
    constructor(ingredients = ['cheese']){
        super(ingredients);
        this.price = ((this.ingredients.length - 1) * 0.99) + 12.99;
    }
}

let jeffsPizza = new smallPizza (['cheese', 'pepperoni']);
let caseysPizza = new smallPizza (['cheese', 'sausage', 'peppers']);
let millersPizza = new largePizza (['cheese', 'onion', 'chicken', 'barbeque sauce'])



class Order {
    constructor(){
        this.list = [];
        this.total = 0;
    }
    addToOrder(newPizza){
        this.list.push(newPizza);
    }
    totalOrder(){
        for (let i = 0; i < this.list.length; i++) {
            this.total += this.list[i].price;
            
        }
        return this.total;
    }
}

let myOrder = new Order

myOrder.addToOrder(jeffsPizza);
myOrder.addToOrder(caseysPizza);
myOrder.addToOrder(millersPizza)

console.log(myOrder.totalOrder());

