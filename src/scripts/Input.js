class Input {
    constructor(player) {
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
            }

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
            }
        })
    }
}

export default Input;