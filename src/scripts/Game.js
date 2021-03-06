import Map from './Map';
import Player from './Player';
import Input from './Input';
import Tree from './Tree';
import Basket from './Basket';
import Decoration from './Decoration';
import { randomObjectPosition } from './Util'

const GAMESTATUS = {
    START_SCREEN: 0,
    PLAYING: 1,
    WON: 2
}

const FRUITS = [
    "apple",
    "orange",
    "peach"
]

class Game {
    constructor(canvasWidth, canvasHeight, mapWidth, mapHeight, mapWaterOffset, ctx) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.mapWaterOffset = mapWaterOffset;
        this.gameStatus = GAMESTATUS.START_SCREEN;
        this.map = new Map(this.mapWidth, this.mapHeight);
        this.player = new Player(this.canvasWidth / 2, this.canvasHeight / 2);
        this.basket = new Basket();
        new Input(this.player, this.basket, this);
        this.total_trees = [];
        this.decorations = [];
        this.createMapObjects(ctx);
    }

    startGame(ctx){
        this.gameStatus = GAMESTATUS.PLAYING;
        this.basket.emptyBasket();
        document.getElementById('start-instructions').style.visibility = 'hidden';
        let randFruit = FRUITS[Math.floor(Math.random() * FRUITS.length)]
        let randFruitImg = new Image();
        randFruitImg.src = `src/assets/images/fruits/${randFruit}.png`

        this.goalFruit = {
            name: randFruit,
            image: randFruitImg
        }
    }

    drawGame(ctx) {
        if (this.gameStatus === GAMESTATUS.START_SCREEN) {
            let start_screen = new Image()
            start_screen.src = "src/assets/images/blank_screen.png"
            ctx.drawImage(start_screen, 0, 0, start_screen.width, start_screen.height)
            return
        } else if (this.gameStatus === GAMESTATUS.WON) {
            let end_screen = new Image()
            end_screen.src = "src/assets/images/blank_screen.png"
            ctx.drawImage(end_screen, 0, 0, end_screen.width, end_screen.height)
            return
        }

        let playerOffsetX = this.canvasWidth / 2 - this.player.posX
        let playerOffsetY = this.canvasHeight / 2 - this.player.posY

        this.map.drawMap(ctx);
        this.drawDecorations(this.decorations, playerOffsetX, playerOffsetY, ctx)
        this.drawTrees(this.total_trees, playerOffsetX, playerOffsetY, ctx)
        this.basket.drawBasket(ctx, this.canvasWidth, this.canvasHeight, this.goalFruit)
        this.player.drawPlayer(ctx, this.canvasWidth/2, this.canvasHeight/2)

        
    }

    updateGame() {
        if (this.gameStatus === GAMESTATUS.START_SCREEN || this.gameStatus === GAMESTATUS.WON) return;

        let playerOffsetX = canvas.width / 2 - this.player.posX
        let playerOffsetY = canvas.height / 2 - this.player.posY

        this.map.updateMap(playerOffsetX, playerOffsetY)
        this.player.movePlayer(this.mapWidth, this.mapHeight, this.mapWaterOffset, this.total_trees)
    }

    won() {
        this.gameStatus = GAMESTATUS.WON
        document.getElementById('end-instructions').style.visibility = 'visible';
    }

    createMapObjects(ctx) {
        //Plain Trees
        for (let i = 0; i < 15; i++) {
            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let constructTree = new Tree(randX, randY, false, "");
            this.total_trees.push(constructTree);
            constructTree.drawTree(ctx)
        }

        //Fruit Trees
        for (let i = 0; i < 3; i++) {
            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let fruitTree = new Tree(randX, randY, true, FRUITS[i])
            this.total_trees.push(fruitTree);
            fruitTree.drawTree(ctx)
        }

        //Decorations
        for (let i = 0; i < 150; i++) {
            let randX = randomObjectPosition(this.player.posX, this.mapWidth, this.mapWaterOffset)
            let randY = randomObjectPosition(this.player.posY, this.mapHeight, this.mapWaterOffset)

            let constructDecoration = new Decoration(randX, randY);
            this.decorations.push(constructDecoration);
            constructDecoration.drawDecoration(ctx)
        }
    }

    drawTrees(treeArr, offsetX, offsetY, ctx) {
        treeArr.forEach((tree) => {
            tree.drawTree(ctx, offsetX, offsetY)
        })
    }
    
    drawDecorations(decorationArr, offsetX, offsetY, ctx) {
        decorationArr.forEach((dec) => {
            dec.drawDecoration(ctx, offsetX, offsetY)
        })
    }
}

export default Game;