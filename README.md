# Gatherer

## Background and Overview
Gather is an overhead (Orthographic, top-down, isometric, pokemon-style?) exploration game designed for relaxation in the time of COVID. Users will receive a random list of fruit (potential for other things built upon this plants/ingredients) then set out to explore terain to collect items on their list with a relaxing soundtrack in the background (potential to have sound at areas or random tracks). 

## Functionality and MVPs
In Gatherer, users will be able to: 
* `User` navigates using arrow keys
* `User` clicks spacebar to pick fruit
* `Tree` can hold fruits, one will be the fruit users are searching for
* `User` is tasked with collecting certain fruits and must add them to their basket

In addition, this project will include:
* 

## Wireframes
To be added

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

## Implementation Timeline
Feb 6-7
* Readme and game structure planning

Day 1 - Feb 8
* Construct Map
* Handle sizing/movement

Day 2 - Feb 9
* Build player
* Build trees
* Start logic

Day 3 - Feb 10
* Create splash/instructions page
* Continue logic

Day 4 - Feb 11
* Complete logic
* Finishing sound
* Adding styling upgrades

Day 5 - Feb 12
* Host and sort out bugs

## Bonus Features
* Different objects can be added for the users to find ingredients on (bushes, gardens, etc)
