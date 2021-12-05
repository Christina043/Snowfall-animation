var girl

function preload() {
 bgImg = loadImage("snow1.jpg")
 girlImg = loadImage("girl3.png")
}

function setup() {
  createCanvas(800,400);
  girl = createSprite(370, 250, 20, 20);
  girl.addImage(girlImg)
  girl.scale = 0.194
}

function draw() {
  background(bgImg);  
  
  drawSprites();
  
}