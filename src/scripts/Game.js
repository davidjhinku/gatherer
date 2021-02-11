import Map from './scripts/Map';
import Player from './scripts/Player';
import Input from './scripts/Input';
import Tree from './scripts/Tree';
import Basket from './scripts/Basket';
import Decoration from './scripts/Decoration';

class Game {
    constructor(canvWidth, canvHeight, mapWidth, mapHeight) {
        this.canvWidth = canvWidth;
        this.canvHeight = canvHeight;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
    }

    startGame(){
        let map = new Map(this.mapWidth, this.mapHeight);
        let player = new Player(this.canvWidth/2, this.canvHeight/2);
        let basket = new Basket();
        new Input(player);
        let total_trees = [];
        let decorations = [];
    }
}

export default Game;