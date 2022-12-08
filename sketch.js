var bgimg,bg
var player;
function preload(){
bgimg = loadImage("SPACE.jpg")
playerimg = loadImage("ufo1.png")
obstacleimg = loadImage("obstacle.png")
moonimg = loadImage("moon.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(width/2,0,width,height*8)
  moon = createSprite(width/2,height*8-100)
  moon.addImage("moonimg",moonimg)
  moon.scale = 0.05;

bg.addImage(bgimg)
bg.velocityY= 9;

player = createSprite(780,height-100)
player.addImage(playerimg)
player.scale = 0.08
}


function draw(){
  background (0)

  // if(bg.position.y>500){
  //   bg.position.y = height/2


  // }

camera.position.y = player.y
  spawnObstacles();
  drawSprites();
}
function keyPressed(){
  if(keyCode==38){
    player.velocityY=-2
  }
  if(keyCode==37){
    player.velocityX=-2
  }
  if(keyCode==39){
    player.velocityX=2
  }
}
function spawnObstacles(){
  if(frameCount % 40 == 0){
    obstacles = createSprite(random(20,width-20),0,50,50)
    obstacles.velocityY = 3;
    obstacles.addImage("obstacleimg",obstacleimg)
    obstacles.scale = 0.1;
  }

}