
class Tree {
    constructor(posX, posY, fruit) {
        this.posX = posX;
        this.posY = posY;
        this.fruit = fruit;
    }

    drawTree(ctx) {
        ctx.fillStyle = 'brown'
        ctx.fillRect(this.posX, this.posY, 30, 70)
    }
}

export default Tree;