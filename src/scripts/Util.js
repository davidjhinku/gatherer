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


// export function willCollide(player, tree) {
//     let clonePlayer = {...player}
//     if (clonePlayer.left) {
//         clonePlayer.posX -= clonePlayer.speedX
//         // newX = player.posX - player.speedX;
//     }
//     if (clonePlayer.right) {
//         clonePlayer.posX += clonePlayer.speedX
//         // newX = player.posX + player.speedX;
//     }
//     if (clonePlayer.up) {
//         clonePlayer.posY -= clonePlayer.speedY
//         // newY = player.posY - player.speedY;
//     }
//     if (clonePlayer.down) {
//         clonePlayer.posY += clonePlayer.speedY
//         // newY = player.posY - player.speedY;
//     }
//     // console.log(player)
//     // console.log(clonePlayer)
//     return objCollision(clonePlayer, tree)
// }