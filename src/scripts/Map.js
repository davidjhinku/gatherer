class Map {
    constructor(width, height) {
        this.map = new Image();
        this.map.src = 'src/assets/images/map/map_background2.jpg';
        this.posX = 0;
        this.posY = 0;
        this.width = width;
        this.height = height
    }

    drawMap(ctx) {
        ctx.drawImage(this.map, 0, 0, this.map.width, this.map.height, this.posX, this.posY, this.width, this.height)
    }

    updateMap(offsetX, offsetY){
        this.posX = offsetX;
        this.posY = offsetY
    }

}

export default Map;