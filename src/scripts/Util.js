export function objCollision(player, tree) {
    return (player.posX <= tree.posX &&
        tree.posX - tree.width <= player.posX + player.width &&
        player.posY <= tree.posY &&
        tree.posY - tree.height <= player.posY + player.height
    )
}

export function willCollide(player, trees){
    let newPlayer = {
        posX: player.posX,
        posY: player.posY,
        width: player.width,
        height: player.height
    }

    if (player.left) {
        newPlayer.posX -= player.speedX
    }
    if (player.right) {
        newPlayer.posX += player.speedX
    }
    if (player.up) {
        newPlayer.posY -= player.speedY
    }
    if (player.down) {
        newPlayer.posY += player.speedY
    }

    let collision = false;
    let treeCollision = null;
    trees.forEach((tree)=>{
        if (objCollision(newPlayer, tree))  {
            collision = true;
            treeCollision = tree;
            return;
        }       
    })

    return {collision, treeCollision}
}


export function randomObjectPosition(playerStartPos, mapSize, waterOffset) {
    let min = playerStartPos + 200;
    let max = mapSize - waterOffset;

    return Math.floor((Math.random() * (max-min)) + min)
}