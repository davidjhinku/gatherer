import './styles/index.scss';
import Map from './scripts/Map'
import Player from './scripts/Player';
import Input from './scripts/Input'
import Tree from './scripts/Tree';
import Basket from './scripts/Basket';
import Decoration from './scripts/Decoration'

////Canvas Dimensions
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
let mapWidth = 2000 * 2;
let mapHeight = 1500 * 2;

////Objects
let map = new Map(mapWidth, mapHeight);
let player = new Player(500, 350);
let basket = new Basket();
new Input(player);
let total_trees = [];
let decorations = [];

// canvas.style.background = "#52B788"
// ctx.font = '50px Ariel';

window.requestAnimationFrame(animate)

function animate(){
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //For objects to move around the player
    let playerOffsetX = canvas.width / 2 - player.posX
    let playerOffsetY = canvas.height / 2 - player.posY
    
    map.updateMap(playerOffsetX, playerOffsetY)
    map.drawMap(ctx);
    updateDecorations(decorations, playerOffsetX, playerOffsetY)
    updateTrees(total_trees, playerOffsetX, playerOffsetY);
    // Tree.updateTrees(total_trees, ctx, playerOffsetX, playerOffsetY);
    updatePlayer();

    window.requestAnimationFrame(animate)
}

function objCollision(player, tree) {
    return (player.posX <= tree.posX + tree.width &&
        tree.posX <= player.posX + player.width &&
        player.posY <= tree.posY + tree.height &&
        tree.posY <= player.posY + player.height
    )
}

////For the player
function updatePlayer() {

    //Check for tree collision
    let colliding
    total_trees.forEach((tree) => {
        let collision = objCollision(player, tree);
        if(collision) {
            // console.log('Colliding!')
            colliding = true
        }
    })

    // if (!colliding){
        player.movePlayer(mapWidth, mapHeight);
        player.drawPlayer(ctx, canvas.width/2, canvas.height/2)
    // }
}

////For the trees
for (let i = 0; i < 10; i++) {
    let randX = Math.floor(Math.random() * mapWidth);
    let randY = Math.floor(Math.random() * mapHeight);

    //to spawn away from edge by size of tree
    if (randX < 170) randX += 170
    if (randY < 236) randY += 236

    let constructTree = new Tree(randX, randY, false);
    total_trees.push(constructTree);
    constructTree.drawTree(ctx)
}

//Fruit Trees
for (let i = 0; i < 3; i++) {
    const fruits = ["apple", "orange", "peach"]

    let randX = Math.floor(Math.random() * mapWidth);
    let randY = Math.floor(Math.random() * mapHeight);

    if (randX < 170) randX += 170
    if (randY < 236) randY += 236

    let fruitTree = new Tree(randX, randY, true, fruits[i])
    total_trees.push(fruitTree);
    fruitTree.drawTree(ctx)
}

function updateTrees(treeArr, offsetX, offsetY) {
    treeArr.forEach((tree)=>{
        tree.drawTree(ctx, offsetX, offsetY)
    })
}

//Decorations
for (let i = 0; i < 100; i++) {
    let randX = Math.floor(Math.random() * mapWidth);
    let randY = Math.floor(Math.random() * mapHeight);

    //to spawn away from edge by size of tree
    if (randX < 170) randX += 170
    if (randY < 236) randY += 236

    let constructDecoration = new Decoration(randX, randY);
    decorations.push(constructDecoration);
    constructDecoration.drawDecoration(ctx)
}

function updateDecorations(decorationArr, offsetX, offsetY) {
    decorationArr.forEach((dec) => {
        dec.drawDecoration(ctx, offsetX, offsetY)
    })
}