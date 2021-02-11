import Map from './Map';
import Player from './Player';
import Input from './Input';
import Tree from './Tree';
import Basket from './Basket';
import Decoration from './Decoration';
import { randomObjectPosition } from './Util'

class Game {
    constructor(canvasWidth, canvasHeight, mapWidth, mapHeight, mapWaterOffset) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.mapWaterOffset = mapWaterOffset
    }

    startGame(ctx){
        this.map = new Map(this.mapWidth, this.mapHeight);
        this.player = new Player(this.canvasWidth / 2, this.canvasHeight / 2);
        this.basket = new Basket();
        new Input(this.player, this.basket);
        this.total_trees = [];
        this.decorations = [];
        this.createMapObjects(ctx);
    }

    drawGame(ctx) {
        let playerOffsetX = this.canvasWidth / 2 - this.player.posX
        let playerOffsetY = this.canvasHeight / 2 - this.player.posY

        this.map.drawMap(ctx);
        this.updateDecorations(this.decorations, playerOffsetX, playerOffsetY, ctx)
        this.updateTrees(this.total_trees, playerOffsetX, playerOffsetY, ctx)
        this.basket.drawBasket(ctx, this.canvasWidth, this.canvasHeight)
        this.player.drawPlayer(ctx, this.canvasWidth/2, this.canvasHeight/2)
    }

    updateGame() {
        let playerOffsetX = canvas.width / 2 - this.player.posX
        let playerOffsetY = canvas.height / 2 - this.player.posY

        this.map.updateMap(playerOffsetX, playerOffsetY)
        this.player.movePlayer(this.mapWidth, this.mapHeight, this.mapWaterOffset, this.total_trees)
    }

    createMapObjects(ctx) {
        //Plain Trees
        for (let i = 0; i < 10; i++) {
            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let constructTree = new Tree(randX, randY, false, "");
            this.total_trees.push(constructTree);
            constructTree.drawTree(ctx)
        }

        //Fruit Trees
        for (let i = 0; i < 3; i++) {
            const fruits = ["apple", "orange", "peach"]

            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let fruitTree = new Tree(randX, randY, true, fruits[i])
            this.total_trees.push(fruitTree);
            fruitTree.drawTree(ctx)
        }

        //Decorations
        for (let i = 0; i < 100; i++) {
            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let constructDecoration = new Decoration(randX, randY);
            this.decorations.push(constructDecoration);
            constructDecoration.drawDecoration(ctx)
        }
    }

    updateTrees(treeArr, offsetX, offsetY, ctx) {
        treeArr.forEach((tree) => {
            tree.drawTree(ctx, offsetX, offsetY)
        })
    }
    
    updateDecorations(decorationArr, offsetX, offsetY, ctx) {
        decorationArr.forEach((dec) => {
            dec.drawDecoration(ctx, offsetX, offsetY)
        })
    }
}

export default Game;