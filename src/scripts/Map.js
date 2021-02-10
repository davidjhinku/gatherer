class Map {
    constructor(posX, posY) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background.jpg';
        this.posX = posX;
        this.posY = posY;
        // this.imgWidth = 2000;
        // this.imgHeight = 1500;
    }

    drawMap(ctx, width, height, offsetX, offsetY) {
        // ctx.drawImage(this.map, this.posX, this.posY)
        // console.log(height)
        // ctx.drawImage(this.map, this.posX, this.posY, this.width, this.height, offsetX, offsetY, width, height)

        // ctx.drawImage(this.map, 0, 0, this.imgWidth, this.imgHeight, offsetX, offsetY, width, height)
        ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, offsetX, offsetY, width, height)
    }
}

export default Map;