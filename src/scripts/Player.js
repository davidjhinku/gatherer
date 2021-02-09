
class Player {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 5
    }

    drawPlayer(ctx){
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.posX, this.posY, 20, 20)
    }

    moveHorizontal(movement){
        this.posX += movement
    }

    moveVertical(movement){
        this.posY += movement
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