import './styles/index.scss';
import Map from './scripts/Map'
import Player from './scripts/Player';
import Tree from './scripts/Tree';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

////Event Listeners
document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyRelease)

////Canvas Dimensions
canvas.width = 1000;
canvas.height = 700;
let mapWidth = 2000 * 2;
let mapHeight = 1500 * 2;

////Objects
let map = new Map(1000, 750, mapWidth, mapHeight);
let player = new Player(500, 350);
let total_trees = [];

// canvas.style.background = "#52B788"
// ctx.font = '50px Ariel';

window.requestAnimationFrame(animate)

function animate(){
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //For objects to move around the player
    let playerOffsetX = canvas.width / 2 - player.posX
    let playerOffsetY = canvas.height / 2 - player.posY
    
    map.drawMap(ctx, playerOffsetX, playerOffsetY);
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

////For the map
// let map = new Map(1000, 750, mapWidth, mapHeight)
// function drawMap(){
//     let playerOffsetX = canvas.width/2 - player.posX
//     let playerOffsetY = canvas.height/2 - player.posY
//     map.drawMap(ctx, playerOffsetX, playerOffsetY)
// }

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

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

function keyPressed(e) {
    switch(e.keyCode){
        case LEFT_KEY:
            player.left = true
            break
        case RIGHT_KEY:
            player.right = true
            break
        case UP_KEY:
            player.up = true
            break
        case DOWN_KEY:
            player.down = true
            break
    }
}

function keyRelease(e) {
    switch (e.keyCode) {
        case LEFT_KEY:
            player.left = false
            break
        case RIGHT_KEY:
            player.right = false
            break
        case UP_KEY:
            player.up = false
            break
        case DOWN_KEY:
            player.down = false
            break
    }
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

