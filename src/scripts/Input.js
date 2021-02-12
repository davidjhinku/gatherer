class Input {
    constructor(player, basket, game) {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    player.left = true
                    break
                case 39:
                    player.right = true
                    break
                case 38:
                    player.up = true
                    break
                case 40:
                    player.down = true
                    break
                case 32:
                    player.pickFruit(basket)
                    break
                case 13:
                    game.startGame();
                    break
            }
            // console.log(e.keyCode)
        });

        document.addEventListener('keyup', e => {
            switch (e.keyCode) {
                case 37:
                    player.left = false
                    break
                case 39:
                    player.right = false
                    break
                case 38:
                    player.up = false
                    break
                case 40:
                    player.down = false
                    break
                case 32:
                    if (basket.hasItem(game.goalFruit.name)) {
                        game.won()
                    }
                    // console.log(basket.items)
                    break
            }
        })
    }
}

export default Input;