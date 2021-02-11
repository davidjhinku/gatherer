class Decoration {
    constructor(posX, posY) {
        this.decoration = new Image();
        this.decoration.src = this.whichDecoration();
        this.posX = posX;
        this.posY = posY;
        this.width = this.decoration.width*2;
        this.height = this.decoration.height*2;
    }

    drawDecoration(ctx, offsetX, offsetY) {
        let playerOffsetX = Math.floor(this.posX + offsetX - this.width)
        let playerOffsetY = Math.floor(this.posY + offsetY - this.height)

        ctx.drawImage(this.decoration, 0, 0, this.decoration.width, this.decoration.height, playerOffsetX, playerOffsetY, this.width, this.height)
    }

    whichDecoration(){
        const sources = [
            'src/assets/images/decorations/Bush-2.png',
            'src/assets/images/decorations/Bush-4.png',
            'src/assets/images/decorations/Flower-1.png',
            'src/assets/images/decorations/Flower-2.png',
            'src/assets/images/decorations/Flower-3.png',
            'src/assets/images/decorations/Grass-1.png',
            'src/assets/images/decorations/Grass-2.png',
            'src/assets/images/decorations/Stone-1.png',
            'src/assets/images/decorations/Stone-2.png',
            'src/assets/images/decorations/Stump.png',
        ]

        return sources[Math.floor(Math.random() * sources.length)]
    }
}

export default Decoration