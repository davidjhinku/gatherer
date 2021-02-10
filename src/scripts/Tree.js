
class Tree {
    constructor(posX, posY, hasFruit, fruit) {
        this.posX = posX;
        this.posY = posY;
        this.width = 170;
        this.height = 236;
        this.hasFruit = hasFruit;
        this.fruit = fruit
        this.tree = new Image();
        this.tree.src = this.whichTree();
    }

    drawTree(ctx, offsetX, offsetY) {
        let playerOffsetX = Math.floor(this.posX - offsetX - this.width)
        let playerOffsetY = Math.floor(this.posY - offsetY - this.height)

        ctx.drawImage(this.tree, 0, 0, this.tree.width, this.tree.height, playerOffsetX, playerOffsetY, this.width, this.height)
    }

    whichTree(){
        const plainTree = [
            'src/assets/images/trees/Tree-2-2.png',
            'src/assets/images/trees/Tree-2-3.png',
            'src/assets/images/trees/Tree-2-4.png'
        ]
        const fruitTree = {
            "apple": 'src/assets/images/fruit_trees/apple-tree.png',
            "orange": 'src/assets/images/fruit_trees/orange-tree.png',
            "peach": 'src/assets/images/fruit_trees/peach-tree.png'
        }

        if (this.hasFruit) {
            return fruitTree[this.fruit]
        } else {
            return plainTree[Math.floor(Math.random()*plainTree.length)]
        }
    }   
}

export default Tree;