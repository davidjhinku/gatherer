class Map {
    constructor(posX, posY) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background.jpg';
        this.posX = posX;
        this.posY = posY;
    }

    drawMap(ctx, offsetX, offsetY) {
        // ctx.drawImage(this.map, this.posX, this.posY)
        ctx.drawImage(this.map, this.posX, this.posY, 2000, 1500, offsetX, offsetY, 2000*3.5, 1500*3.5)
    }
}

export default Map;