
class Basket  {
    constructor() {
        this.basket = new Image();
        this.basket.src = 'src/assets/images/basket/basket.png'
        this.width = 120;
        this.height = 130;
        this.items = []
    }

    drawBasket(ctx, canvWidth, canvHeight, goalFruit) {
        ctx.drawImage(this.basket, 0, 0, this.basket.width, this.basket.height, canvWidth-120, canvHeight-720, this.width, this.height)
        ctx.fillStyle = "white";
        ctx.font = "bold 24px Sans-Serif"
        ctx.fillText(`Collect:`, canvWidth-105, canvHeight-580)
        ctx.drawImage(goalFruit.image, 0, 0, goalFruit.image.width, goalFruit.image.height, canvWidth - 110, canvHeight-570, 100, 100)
    }

    addItem(fruit) {
        this.items.push(fruit)
    }

    hasItem(fruit){
        // return !!this.items[fruit]
        return this.items.includes(fruit)
    }

    emptyBasket(){
        this.items = [];
    }
}

export default Basket;