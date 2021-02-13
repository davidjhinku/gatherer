class Decoration {
    constructor(posX, posY) {
        this.decoration = new Image();
        this.decoration.src = this.whichDecoration();
        this.posX = posX;
        this.posY = posY;
        // this.width = 100;
        // this.height = 100;
        // this.setDimensions();
    }
    
    drawDecoration(ctx, offsetX, offsetY) {
        let playerOffsetX = this.posX + offsetX - this.width;
        let playerOffsetY = this.posY + offsetY - this.height;
        this.width ||= this.decoration.width*2;
        this.height ||= this.decoration.height*2;
        
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

    // setDimensions(){
    //     this.width = this.decoration.width * 2;
    //     this.height = this.decoration.height * 2;
    // }
}

export default Decoration