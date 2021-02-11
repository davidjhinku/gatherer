import './styles/index.scss';
import Game from './scripts/Game'

////Canvas Dimensions
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
let mapWidth = 2000 * 2;
let mapHeight = 1500 * 2;
let mapWaterOffset = 400

let game = new Game(canvas.width, canvas.height, mapWidth, mapHeight, mapWaterOffset, ctx);
// game.startGame(ctx);

// canvas.style.background = "#52B788"
// ctx.font = '50px Ariel';
// setInterval(animate, 1000)
window.requestAnimationFrame(animate)

function animate(){
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    game.updateGame()
    game.drawGame(ctx)

    window.requestAnimationFrame(animate)
}





//Code to be deleted
// import Map from './scripts/Map';
// import Player from './scripts/Player';
// import Input from './scripts/Input';
// import Tree from './scripts/Tree';
// import Basket from './scripts/Basket';
// import Decoration from './scripts/Decoration';
// import {randomObjectPosition} from './scripts/Util'

////Objects
// let map = new Map(mapWidth, mapHeight);
// let player = new Player(canvas.width/2, canvas.height/2);
// let basket = new Basket();
// new Input(player, basket);
// let total_trees = [];
// let decorations = [];

    //For objects to move around the player
    // let playerOffsetX = canvas.width / 2 - player.posX
    // let playerOffsetY = canvas.height / 2 - player.posY
    // map.updateMap(playerOffsetX, playerOffsetY)
    // map.drawMap(ctx);
    // updateDecorations(decorations, playerOffsetX, playerOffsetY)
    // updateTrees(total_trees, playerOffsetX, playerOffsetY);
    // basket.drawBasket(ctx, canvas.width, canvas.height)
    // // Tree.updateTrees(total_trees, ctx, playerOffsetX, playerOffsetY);
    // updatePlayer();

    // ////For the player
// function updatePlayer() {
//     player.movePlayer(mapWidth, mapHeight, mapWaterOffset, total_trees);
//     player.drawPlayer(ctx, canvas.width/2, canvas.height/2)
// }

// ////For the trees
// for (let i = 0; i < 10; i++) {
//     let randX = randomObjectPosition(player.posX, mapWidth, mapWaterOffset)
//     let randY = randomObjectPosition(player.posY, mapHeight, mapWaterOffset)

//     let constructTree = new Tree(randX, randY, false, "");
//     total_trees.push(constructTree);
//     constructTree.drawTree(ctx)
// }

// //Fruit Trees
// for (let i = 0; i < 3; i++) {
//     const fruits = ["apple", "orange", "peach"]

//     let randX = randomObjectPosition(player.posX, mapWidth, mapWaterOffset)
//     let randY = randomObjectPosition(player.posY, mapHeight, mapWaterOffset)

//     let fruitTree = new Tree(randX, randY, true, fruits[i])
//     total_trees.push(fruitTree);
//     fruitTree.drawTree(ctx)
// }

// function updateTrees(treeArr, offsetX, offsetY) {
//     treeArr.forEach((tree)=>{
//         tree.drawTree(ctx, offsetX, offsetY)
//     })
// }

// ////Decorations
// for (let i = 0; i < 100; i++) {
//     let randX = randomObjectPosition(player.posX, mapWidth, mapWaterOffset)
//     let randY = randomObjectPosition(player.posY, mapHeight, mapWaterOffset)

//     let constructDecoration = new Decoration(randX, randY);
//     decorations.push(constructDecoration);
//     constructDecoration.drawDecoration(ctx)
// }

// function updateDecorations(decorationArr, offsetX, offsetY) {
//     decorationArr.forEach((dec) => {
//         dec.drawDecoration(ctx, offsetX, offsetY)
//     })
// }