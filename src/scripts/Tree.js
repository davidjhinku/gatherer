
class Tree {
    constructor(posX, posY, fruit) {
        this.tree = new Image();
        this.tree.src = this.randomTree();
        this.posX = posX;
        this.posY = posY;
        this.width = 170;
        this.height = 236;
        this.fruit = fruit;
    }

    drawTree(ctx, offsetX, offsetY) {
        // ctx.fillStyle = 'brown'
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
        let playerOffsetX = this.posX - offsetX - self.width
        let playerOffsetY = this.posY - offsetY - self.height
        console.log(offsetX)

        // ctx.drawImage(this.tree, this.posX, this.posY, this.width, this.height)

        // ctx.drawImage(this.tree, this.posX, this.posY, this.width, this.height, playerOffsetX, playerOffsetY, this.width, this.height)
        ctx.drawImage(this.tree, 0, 0, this.width, this.height, playerOffsetX, playerOffsetY, this.width, this.height)
    }

    randomTree(){
        const sources = [
            'src/assets/images/trees/Tree-2-2.png',
            'src/assets/images/trees/Tree-2-3.png',
            'src/assets/images/trees/Tree-2-4.png'
        ]
        
        return sources[Math.floor(Math.random()*sources.length)]
    }   
}

export default Tree;