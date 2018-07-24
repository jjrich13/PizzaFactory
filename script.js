class Pizza {
    constructor(ingredients = ['cheese']){
        this.ingredients = ingredients;
        this.price = ((this.ingredients.length - 1) * 0.99) + 10;
    }
};

// class smallPizza extends Pizza{
//     constructor(){
//         this.price 
//     }
// }

let jeffsPizza = new Pizza (['cheese', 'pepperoni']);
let caseysPizza = new Pizza (['cheese', 'sausage', 'peppers']);

console.log(jeffsPizza);


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

console.log(myOrder.totalOrder());

