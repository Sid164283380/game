var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload() {
  bgImg = loadImage("assets/bgw.png")

  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
}

function setup() {
  createCanvas(1720,520)
  console.log(windowWidth,windowHeight)
  //background image
  bg = createSprite(7500,260);
  bg.addImage(bgImg);
  bg.scale = 1
  bg.velocityX = -20
  
  
  
  //creating PC    
  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.4;



}

function draw() {

  background("black");

  //making the hot air balloon jump
  if (keyDown("space")) {
    balloon.velocityY = -6;

  }

  //adding gravity
  balloon.velocityY = balloon.velocityY + 2;
  if(bg.x<-6000){
    bg.x=7500;

  }
  drawSprites();

}