var path,Runner,Runner_running;
var power;
function preload(){
  //pre-load images
  pathImg=loadImage(path.png)
  Runner_running=loadAnimation("Runner-1.png","Runner-2.png")
  powerImg=loadImage(power.png)
}

function setup(){
  createCanvas(400,400);
  //create sprites here
Runner.createSprite(200,200,20,20)
Runner.addAnimation(Runner_running)
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2
}

function draw() {
  background(0);
drawSprites();


spawnpower();


if (frameCount % 60 === 0){
power=createSprite=(200,0,20,20)
power.addImage(powerImg)
    power.y = Math.round(random(10,60))
    power.scale = 0.4;
    power.velocityY = 3;


}
}
