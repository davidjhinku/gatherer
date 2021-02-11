import {objCollision, willCollide} from './Util'


class Player {
    constructor(posX, posY) {
        this.player = new Image();
        this.player.src = 'src/assets/images/sprite_player.png'
        this.posX = posX;
        this.posY = posY;
        this.width = 100;
        this.height = 100;
        this.speedX = 5;
        this.speedY = 5
        this.direction = 0;
        this.walkingAnimation = 0;
        this.treeTouching = {}
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    drawPlayer(ctx, width, height){
        // ctx.fillStyle = 'blue'

        let spriteWidth = this.player.width / 4
        let spriteHeight = this.player.height / 4
        let spriteAnimation = Math.floor(this.walkingAnimation % 4)

        ctx.drawImage(this.player, spriteAnimation * spriteWidth, this.direction*spriteHeight, spriteWidth, spriteHeight, width, height, this.width, this.height)
    }

    clearPlayer(ctx) {
        ctx.clearRect(this.posX, this.posY, this.width, this.height)
    }

    movePlayer(mapWidth, mapHeight, waterOffset, trees) {
        let directions = {
            "down": 0,
            "up": 1,
            "left": 2,
            "right": 3
        }

        // this.isColliding = false
        // console.log(this.treeTouching)
        
        if (this.left && this.posX > waterOffset+100) {
            let {collision, treeCollision} = willCollide(this, trees)
            // console.log(collision);
            if (!collision) {
                this.posX -= this.speedX
                this.treeTouching = {}
            } else {
                // console.log(treeCollision)
                this.treeTouching = treeCollision
            }
            this.direction = directions["left"]
            this.walkingAnimation += 0.1;
        }
        if (this.right && this.posX < mapWidth - this.width - waterOffset) {
            let { collision, treeCollision } = willCollide(this, trees)
            if (!collision) {
                this.posX += this.speedX
                this.treeTouching = {}
            } else {
                // console.log(treeCollision)
                this.treeTouching = treeCollision
            }
            this.direction = directions["right"]
            this.walkingAnimation += 0.1;
        }
        if (this.up && this.posY > waterOffset) {
            let { collision, treeCollision } = willCollide(this, trees)
            if (!collision) {
                this.posY -= this.speedY
                this.treeTouching = {}
            } else {
                // console.log(treeCollision)
                this.treeTouching = treeCollision
            }
            this.direction = directions["up"]
            this.walkingAnimation += 0.1;
        }
        if (this.down && this.posY < mapHeight - this.height - waterOffset) {
            let { collision, treeCollision } = willCollide(this, trees)
            if (!collision) {
                this.posY += this.speedY
                this.treeTouching = {}
            } else {
                // console.log(treeCollision)
                this.treeTouching = treeCollision
            }
            this.direction = directions["down"]
            this.walkingAnimation += 0.1;
        }
    }

    pickFruit(basket) {
        if (this.treeTouching.hasFruit) {
            basket.addItem(this.treeTouching.fruit)
        }
    }
}


export default Player;