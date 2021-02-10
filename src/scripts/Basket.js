
class Basket  {
    constructor() {
        this.items = []
    }

    addItem(fruit) {
        this.items.push(fruit)
    }

    hasItem(fruit){
        return !!this.items[fruit]
    }
}

export default Basket;