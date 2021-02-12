!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e),i.d(e,"playMusic",(function(){return S}));i(0);function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.map=new Image,this.map.src="src/assets/images/map/map_background2.jpg",this.posX=0,this.posY=0,this.width=e,this.height=i}var e,i,a;return e=t,(i=[{key:"drawMap",value:function(t){t.drawImage(this.map,0,0,this.map.width,this.map.height,this.posX,this.posY,this.width,this.height)}},{key:"updateMap",value:function(t,e){this.posX=t,this.posY=e}}])&&s(e.prototype,i),a&&s(e,a),t}();function r(t,e){var i={posX:t.posX,posY:t.posY,width:t.width,height:t.height};t.left&&(i.posX-=t.speedX),t.right&&(i.posX+=t.speedX),t.up&&(i.posY-=t.speedY),t.down&&(i.posY+=t.speedY);var s=!1,a=null;return e.forEach((function(t){if(function(t,e){return t.posX<=e.posX&&e.posX-e.width<=t.posX+t.width&&t.posY<=e.posY&&e.posY-e.height<=t.posY+t.height}(i,t))return s=!0,void(a=t)})),{collision:s,treeCollision:a}}function n(t,e,i){var s=t+200,a=e-i;return Math.floor(Math.random()*(a-s)+s)}function h(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.player=new Image,this.player.src="src/assets/images/sprite_player.png",this.posX=e,this.posY=i,this.width=100,this.height=100,this.speedX=5,this.speedY=5,this.direction=0,this.walkingAnimation=0,this.treeTouching={},this.left=!1,this.right=!1,this.up=!1,this.down=!1}var e,i,s;return e=t,(i=[{key:"drawPlayer",value:function(t,e,i){var s=this.player.width/4,a=this.player.height/4,r=Math.floor(this.walkingAnimation%4);t.drawImage(this.player,r*s,this.direction*a,s,a,e,i,this.width,this.height)}},{key:"clearPlayer",value:function(t){t.clearRect(this.posX,this.posY,this.width,this.height)}},{key:"movePlayer",value:function(t,e,i,s){var a=0,n=1,h=2,o=3;if(this.left&&this.posX>i+100){var c=r(this,s),u=c.collision,p=c.treeCollision;u?this.treeTouching=p:(this.posX-=this.speedX,this.treeTouching={}),this.direction=h,this.walkingAnimation+=.1}if(this.right&&this.posX<t-this.width-i){var l=r(this,s),g=l.collision,d=l.treeCollision;g?this.treeTouching=d:(this.posX+=this.speedX,this.treeTouching={}),this.direction=o,this.walkingAnimation+=.1}if(this.up&&this.posY>i){var f=r(this,s),m=f.collision,w=f.treeCollision;m?this.treeTouching=w:(this.posY-=this.speedY,this.treeTouching={}),this.direction=n,this.walkingAnimation+=.1}if(this.down&&this.posY<e-this.height-i){var v=r(this,s),y=v.collision,b=v.treeCollision;y?this.treeTouching=b:(this.posY+=this.speedY,this.treeTouching={}),this.direction=a,this.walkingAnimation+=.1}}},{key:"pickFruit",value:function(t){this.treeTouching.hasFruit&&t.addItem(this.treeTouching.fruit)}}])&&h(e.prototype,i),s&&h(e,s),t}();var c=function t(e,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.addEventListener("keydown",(function(t){switch(t.keyCode){case 37:e.left=!0;break;case 39:e.right=!0;break;case 38:e.up=!0;break;case 40:e.down=!0;break;case 32:e.pickFruit(i);break;case 13:s.startGame(),S()}})),document.addEventListener("keyup",(function(t){switch(t.keyCode){case 37:e.left=!1;break;case 39:e.right=!1;break;case 38:e.up=!1;break;case 40:e.down=!1;break;case 32:i.hasItem(s.goalFruit.name)&&(s.won(),S())}}))};function u(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var p=function(){function t(e,i,s,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.posX=e,this.posY=i,this.width=170,this.height=236,this.collisionX=this.posX-this.width,this.collisionY=this.posY-this.height,this.hasFruit=s,this.fruit=a,this.tree=new Image,this.tree.src=this.whichTree()}var e,i,s;return e=t,(i=[{key:"drawTree",value:function(t,e,i){var s=this.posX+e-this.width,a=this.posY+i-this.height;t.drawImage(this.tree,0,0,this.tree.width,this.tree.height,s,a,this.width,this.height)}},{key:"whichTree",value:function(){var t=["src/assets/images/trees/Tree-2-2.png","src/assets/images/trees/Tree-2-3.png","src/assets/images/trees/Tree-2-4.png"];return this.hasFruit?{apple:"src/assets/images/fruit_trees/apple-tree.png",orange:"src/assets/images/fruit_trees/orange-tree.png",peach:"src/assets/images/fruit_trees/peach-tree.png"}[this.fruit]:t[Math.floor(Math.random()*t.length)]}}])&&u(e.prototype,i),s&&u(e,s),t}();function l(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.basket=new Image,this.basket.src="src/assets/images/basket/basket.png",this.width=120,this.height=130,this.items=[]}var e,i,s;return e=t,(i=[{key:"drawBasket",value:function(t,e,i,s){t.drawImage(this.basket,0,0,this.basket.width,this.basket.height,e-120,i-720,this.width,this.height),t.fillStyle="white",t.font="bold 24px Sans-Serif",t.fillText("Collect:",e-105,i-580),t.drawImage(s.image,0,0,s.image.width,s.image.height,e-110,i-570,100,100)}},{key:"addItem",value:function(t){this.items.push(t)}},{key:"hasItem",value:function(t){return this.items.includes(t)}},{key:"emptyBasket",value:function(){this.items=[]}}])&&l(e.prototype,i),s&&l(e,s),t}();function d(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var f=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.decoration=new Image,this.decoration.src=this.whichDecoration(),this.posX=e,this.posY=i,this.width=2*this.decoration.width,this.height=2*this.decoration.height}var e,i,s;return e=t,(i=[{key:"drawDecoration",value:function(t,e,i){var s=Math.floor(this.posX+e-this.width),a=Math.floor(this.posY+i-this.height);t.drawImage(this.decoration,0,0,this.decoration.width,this.decoration.height,s,a,this.width,this.height)}},{key:"whichDecoration",value:function(){var t=["src/assets/images/decorations/Bush-2.png","src/assets/images/decorations/Bush-4.png","src/assets/images/decorations/Flower-1.png","src/assets/images/decorations/Flower-2.png","src/assets/images/decorations/Flower-3.png","src/assets/images/decorations/Grass-1.png","src/assets/images/decorations/Grass-2.png","src/assets/images/decorations/Stone-1.png","src/assets/images/decorations/Stone-2.png","src/assets/images/decorations/Stump.png"];return t[Math.floor(Math.random()*t.length)]}}])&&d(e.prototype,i),s&&d(e,s),t}();function m(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var w=0,v=1,y=2,b=["apple","orange","peach"],k=function(){function t(e,i,s,r,n,h){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvasWidth=e,this.canvasHeight=i,this.mapWidth=s,this.mapHeight=r,this.mapWaterOffset=n,this.gameStatus=w,this.map=new a(this.mapWidth,this.mapHeight),this.player=new o(this.canvasWidth/2,this.canvasHeight/2),this.basket=new g,new c(this.player,this.basket,this),this.total_trees=[],this.decorations=[],this.createMapObjects(h)}var e,i,s;return e=t,(i=[{key:"startGame",value:function(t){this.gameStatus=v,this.basket.emptyBasket();var e=b[Math.floor(Math.random()*b.length)],i=new Image;i.src="src/assets/images/fruits/".concat(e,".png"),this.goalFruit={name:e,image:i}}},{key:"drawGame",value:function(t){if(this.gameStatus===w){var e=new Image;return e.src="src/assets/images/start_screen.png",void t.drawImage(e,0,0,e.width,e.height)}if(this.gameStatus===y){var i=new Image;return i.src="src/assets/images/end_screen.png",void t.drawImage(i,0,0,i.width,i.height)}var s=this.canvasWidth/2-this.player.posX,a=this.canvasHeight/2-this.player.posY;this.map.drawMap(t),this.drawDecorations(this.decorations,s,a,t),this.drawTrees(this.total_trees,s,a,t),this.basket.drawBasket(t,this.canvasWidth,this.canvasHeight,this.goalFruit),this.player.drawPlayer(t,this.canvasWidth/2,this.canvasHeight/2)}},{key:"updateGame",value:function(){if(this.gameStatus!==w&&this.gameStatus!==y){var t=canvas.width/2-this.player.posX,e=canvas.height/2-this.player.posY;this.map.updateMap(t,e),this.player.movePlayer(this.mapWidth,this.mapHeight,this.mapWaterOffset,this.total_trees)}}},{key:"won",value:function(){this.gameStatus=y}},{key:"createMapObjects",value:function(t){for(var e=0;e<15;e++){var i=n(this.player.posX,this.mapWidth,this.mapWaterOffset),s=n(this.player.posY,this.mapHeight,this.mapWaterOffset),a=new p(i,s,!1,"");this.total_trees.push(a),a.drawTree(t)}for(var r=0;r<3;r++){var h=n(this.player.posX,this.mapWidth,this.mapWaterOffset),o=n(this.player.posY,this.mapHeight,this.mapWaterOffset),c=new p(h,o,!0,b[r]);this.total_trees.push(c),c.drawTree(t)}for(var u=0;u<200;u++){var l=n(this.player.posX,this.mapWidth,this.mapWaterOffset),g=n(this.player.posY,this.mapHeight,this.mapWaterOffset),d=new f(l,g);this.decorations.push(d),d.drawDecoration(t)}}},{key:"drawTrees",value:function(t,e,i,s){t.forEach((function(t){t.drawTree(s,e,i)}))}},{key:"drawDecorations",value:function(t,e,i,s){t.forEach((function(t){t.drawDecoration(s,e,i)}))}}])&&m(e.prototype,i),s&&m(e,s),t}(),T=document.getElementById("canvas"),X=T.getContext("2d");T.width=1e3,T.height=700;var Y=document.getElementById("game-bgm"),I=document.getElementById("start-bgm"),O=!0,M=new Image;function S(){1!==W.gameStatus||O?O||(Y.pause(),Y.currentTime=0,I.play()):(I.pause(),I.currentTime=0,Y.play()),document.removeEventListener("mousemove",S)}M.src="src/assets/images/util/mute.png",document.addEventListener("click",(function(t){var e=t.clientX,i=t.clientX;e>975&&i>975&&((O=!O)?(M.src="src/assets/images/util/mute.png",Y.pause(),I.pause()):(M.src="src/assets/images/util/sound.png",S()),console.log("HIT BUTTON"))}));var W=new k(T.width,T.height,4e3,3e3,400,X);window.requestAnimationFrame((function t(){X.imageSmoothingEnabled=!1,X.clearRect(0,0,T.width,T.height),W.updateGame(),W.drawGame(X),X.drawImage(M,0,0,M.width,M.height,T.width-40,T.height-40,30,30),window.requestAnimationFrame(t)}))}]);
//# sourceMappingURL=main.js.map