<p align="center"> 
  <img width="250" height="100.26" src="https://raw.githubusercontent.com/davidjhinku/gatherer/main/src/assets/readme_logo.png">
</p>

## Background and Overview
Gather is an overhead exploration game designed for relaxation in the time of COVID. Users will receive a random list of fruit then set out to explore terrain to collect items on their list with a relaxing soundtrack in the background. 

[Play Live](https://davidjhinku.github.io/gatherer/)

## Functionality and MVPs
In Gatherer, users will be able to: 
* `User` navigates using arrow keys
* `User` clicks spacebar to pick fruit
* `Tree` can hold fruits, one will be the fruit users are searching for
* `User` is tasked with collecting certain fruits and must add them to their `Basket`
* `Basket` starts empty and will hold fruits collected
          
## Wireframes
<p align="center"> 
  <img src="https://raw.githubusercontent.com/davidjhinku/gatherer/main/src/assets/wireframe_splash.png">
</p>

* Splash page will have screen from the game
    * Potential for character to be walking around world
* Button to toggle sound
* Button for `How to play`

<p align="center"> 
  <img src="https://raw.githubusercontent.com/davidjhinku/gatherer/main/src/assets/wireframe_game.png">
</p>

* Game board larger than view for user
* Tree with fruit spawns randomly on the board
* User will need to find the tree
* Toggle for music
* Tree's with no fruit also load
* Basket to see what fruit is collected
    * Will be more useful with bonus feature of multiple fruits/longer list to collect
* Bonus for environmental barriers

## Code Snips
Decorations, trees, and the map offset their rending coordinates based on players movements that are passed in.. While the character remains in the center of the screen, movement updates the position of the world around giving the illusion of movement. In the tree snippet below, we pass in offsetting coordinates that factor into the tree's own position and size to determine where on the canvas it should be drawn.

```javascript
constructor(posX, posY, hasFruit, fruit) {
    this.posX = posX;
    this.posY = posY;
    this.width = 170;
    this.height = 236;
    this.collisionX = this.posX - this.width
    this.collisionY = this.posY - this.height
    this.hasFruit = hasFruit;
    this.fruit = fruit
    this.tree = new Image();
    this.tree.src = this.whichTree();
}

drawTree(ctx, offsetX, offsetY) {
    let playerOffsetX = this.posX + offsetX - this.width;
    let playerOffsetY = this.posY + offsetY - this.height;

    ctx.drawImage(this.tree, 0, 0, this.tree.width, this.tree.height, playerOffsetX, playerOffsetY, this.width, this.height)
}
```

## File Structure
* /dist
    * ...
* /src
    * /assets
        * themesong.mp3
    * /scripts (js)
        * map.js
        * player.js
        * tree.js (incl fruits?)
        * basket.js
        * util.js
    * /styles (scss)
        * Various stylesheets
    * index.js
* .gitignore
* index.html
* package-lock.json
* package.json
* postcss.config.js
* README.md
* webpack.common.js
* webpack.dev.js
* webpack.prod.js

## Architecture and Technology
* Canvas JS - Visuals
* JavaScript - Game logic
* Sprites - Animation
* SCSS - Styling (would I still need this if everythings build in canvas?)

## Bonus Features
* Different objects can be added for the users to find ingredients on (bushes, gardens, etc)
* Environmental barriers (rocks, multiple levels) that user will need to find a way around
