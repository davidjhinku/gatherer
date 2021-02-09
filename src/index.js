import './styles/index.scss';
import Player from './scripts/Player';
import Tree from './scripts/Tree';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

//Event Listeners
document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyRelease)


//Canvas Code
canvas.width = 1000;
canvas.height = 700;
canvas.style.background = "#52B788"
ctx.font = '50px Ariel';

ctx.fillText('Henlo', 10, 50);

window.requestAnimationFrame(animate)
function animate(){
    
    updatePlayer()
    window.requestAnimationFrame(animate)
}

function objCollision(obj1, obj2) {
    return (obj1.posX <= obj2.posX + obj2.width &&
        obj2.posX <= obj1.posX + obj1.width &&
        obj1.posY <= obj2.posY + obj2.height &&
        obj2.posY <= obj1.posY + obj1.height
    )
}

//For the player
let player = new Player(300, 450)
player.drawPlayer(ctx)

function updatePlayer() {

    //Check for tree collision
    total_trees.forEach((tree) => {
        let collision = objCollision(player, tree);
        if(collision) {
            console.log('Colliding!')
        }
    })

    player.clearPlayer(ctx)
    player.movePlayer();
    player.drawPlayer(ctx)
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



//For the trees
let total_trees = [];
for (let i = 0; i < 10; i++) {
    let randX = Math.random() * canvas.width;
    let randY = Math.random() * canvas.height;

    let constructTree = new Tree(randX, randY, false);
    total_trees.push(constructTree);
    constructTree.drawTree(ctx)
}



// const playerSprite = new Image()
// playerSprite.onload = function(){
//     // ctx.drawImage(playerSprite, 50, 50)
//     drawSprite(playerSprite, 0, 0)
// }
// playerSprite.src = '../../dist/images/sprite_player.png'
// // ctx.drawImage(playerSprite, 50, 50)

// const player = {
//     x: 0,
//     y: 0,
//     width: 32,
//     height: 32,
//     frameX: 0,
//     frameY: 0,
//     speed: 5,
//     moving: false
// }

// function drawSprite(img, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight) {
//     ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight)
// }

// function animate() {
//     ctx.clearRect(0,0, canvas.width, canvas.height)
//     drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0, player.width, player.height)
//     requestAnimationFrame(animate)
// }
// animate()