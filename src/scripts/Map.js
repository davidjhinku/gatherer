class Map {
    constructor(posX, posY) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background.jpg';
        this.posX = posX;
        this.posY = posY;
    }

    drawMap(ctx, width, height, offsetX, offsetY) {
        ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, offsetX, offsetY, width, height)
    }
}

export default Map;