class Map {
    constructor(posX, posY, width, height) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background.jpg';
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height
    }

    drawMap(ctx, offsetX, offsetY) {
        ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, offsetX, offsetY, this.width, this.height)
    }

}

export default Map;