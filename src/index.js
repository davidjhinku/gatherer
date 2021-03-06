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

//Game Audio
let gameBGM = document.getElementById('game-bgm');
let startBGM = document.getElementById('start-bgm');
let muted = true;
let soundIcon = new Image();
soundIcon.src = 'src/assets/images/util/mute.png'

canvas.addEventListener('click', e => {
    const mousePos = {
        posX: e.offsetX,
        posY: e.offsetY
    }

    if (mousePos.posX > 950 && mousePos.posX < 1000 &&
        mousePos.posY > 650 && mousePos.posY < 700) {
        muted = !muted
        if (!muted) {
            soundIcon.src = 'src/assets/images/util/sound.png'
            playMusic()
        } else {
            soundIcon.src = 'src/assets/images/util/mute.png'
            gameBGM.pause();
            startBGM.pause();
        }
    }
})

export function playMusic() {
    if (game.gameStatus === 1 && !muted) {
        startBGM.pause();
        startBGM.currentTime = 0;
        gameBGM.play();
    } else if (!muted) {
        gameBGM.pause();
        gameBGM.currentTime = 0;
        startBGM.play();
    }
}

export function newGame() {
    game = new Game(canvas.width, canvas.height, mapWidth, mapHeight, mapWaterOffset, ctx);
    document.getElementById('start-instructions').style.visibility = 'visible';
    document.getElementById('end-instructions').style.visibility = 'hidden';
    game.gameStatus = 0
}

//Gameplay
let game = new Game(canvas.width, canvas.height, mapWidth, mapHeight, mapWaterOffset, ctx);

window.requestAnimationFrame(animate)
function animate(){
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    
    game.updateGame()
    game.drawGame(ctx)

    ctx.drawImage(soundIcon, 0, 0, soundIcon.width, soundIcon.height, canvas.width-40, canvas.height-40, 30, 30)

    window.requestAnimationFrame(animate)
}
