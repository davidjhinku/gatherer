
class Player {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.width = 20;
        this.height = 20;
        this.speedX = 5;
        this.speedY = 5
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    drawPlayer(ctx){
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    clearPlayer(ctx) {
        ctx.clearRect(this.posX, this.posY, this.width, this.height)
    }

    movePlayer() {
        if (this.left) {
            this.posX -= this.speedX
        }
        if (this.right) {
            this.posX += this.speedX
        }
        if (this.up) {
            this.posY -= this.speedY
        }
        if (this.down) {
            this.posY += this.speedY
        }
    }
}

// const playerSprite = new Image()
// playerSprite.src = '../assets/sprite_player'


export default Player;