
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
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    drawPlayer(ctx){
        ctx.fillStyle = 'blue'
        // ctx.fillRect(this.posX, this.posY, this.width, this.height)
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
        ctx.drawImage(this.player, 0, 0, 32, 32, this.posX, this.posY, this.width, this.height)
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


export default Player;