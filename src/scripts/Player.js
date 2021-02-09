
class Player {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.width = 20;
        this.height = 20;
        this.speedX = 5;
        this.speedY = 5
    }

    drawPlayer(ctx){
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    // clearPlayer(ctx) {
    //     let prevX = this.posX - this.speedX;
    //     let prevY = this.posY - this.speedY;
    //     ctx.clearRect(prevX, prevY, this.width, this.height)
    // }

    moveHorizontal(ctx, movement){
        console.log(movement)
        this.posX += movement
        let prevX = this.posX - this.speedX;
        ctx.clearRect(prevX, this.posY, this.width, this.height)
        this.drawPlayer(ctx)
    }

    moveVertical(ctx, movement){
        console.log(movement)
        this.posY += movement
        let prevY = this.posY - this.speedY;
        ctx.clearRect(this.posX, prevY, this.width, this.height)
        this.drawPlayer(ctx)
    }
}

// const playerSprite = new Image()
// playerSprite.src = '../assets/sprite_player'

// const player = {
//     x: 0,
//     y: 0,
//     width: 32,
//     heigh: 32,
//     frameX: 0,
//     frameY: 0,
//     speed: 5,
//     moving: false

// }

export default Player;