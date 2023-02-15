var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var backgroundSprite
var backgroundSpriteImg
var groundSprite
var groundSpriteImg
var ground2 
var ground3
var groundBridgeImg




function preload(){
backgroundSpriteImg = loadImage('assets/brickWall.jpg')
groundSpriteImg = loadImage('assets/grassImg.png')
groundBridgeImg = loadImage('assets/bridgeImg.png')
}

function setup(){

//background image
createCanvas(1500,800)

backgroundSprite = createSprite(750,400,1500,800)
backgroundSprite.addImage(backgroundSpriteImg)
groundSprite = createSprite(750,700,1500,10)
groundSprite.addImage(groundSpriteImg)
ground2 = createSprite(600,400,1500,10)
ground2.addImage(groundBridgeImg)

ground2.scale = 0.3

}

function draw() {
  
  background("black");
        
 
        drawSprites();
        
}