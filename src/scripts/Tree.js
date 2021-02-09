
class Tree {
    constructor(posX, posY, fruit) {
        this.posX = posX;
        this.posY = posY;
        this.width = 30;
        this.height = 70;
        this.fruit = fruit;
    }

    drawTree(ctx) {
        ctx.fillStyle = 'brown'
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}

export default Tree;