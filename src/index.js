import './styles/index.scss';
import Player from './scripts/Player';
import Tree from './scripts/Tree';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 700;
canvas.style.background = "#52B788"
ctx.font = '50px Ariel';

ctx.fillText('Henlo', 10, 50);

let test_player = new Player(100, 100)
test_player.drawPlayer(ctx)

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
//     heigh: 32,
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