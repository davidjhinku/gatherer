class Map {
    constructor(posX, posY) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background.jpg';
        this.posX = posX;
        this.posY = posY;
    }

    drawMap(ctx) {
        // ctx.drawImage(this.map, this.posX, this.posY)
        ctx.drawImage(this.map, this.posX, this.posY)
    }
}

export default Map;