var bg;
var bunny, bunnyImage; 
var carrot, carrotImage;
var obstacle1, obstacle1Image, obstacle2, obstacle2Image;

var ground;

function preload() {
    bg = loadImage("assets/background.jpeg");

    bunnyImage = loadImage("assets/bunny.gif");
    carrotImage = loadImage("assets/carrot.gif");
    obstacle1Image = loadImage("assets/obstacle1.gif");
    obstacle2Image = loadImage("assets/obstacle2.gif");
}

function setup() {
     createCanvas(900, 300);
   scene= createSprite(0,0,500,500);
   scene.addImage(bg);
   scene.velocityX = -4;
     bunny = createSprite(45, 250, 20, 50);
     bunny.addImage(bunnyImage);
     bunny.scale = 0.5;

     carrot = createSprite(800, 270, 20, 20);
     carrot.addImage(carrotImage);
     carrot.scale = 0.3;

     obstacle1 = createSprite(700, 270, 20, 20);
     obstacle1.addImage(obstacle1Image);
     obstacle1.scale = 0.5

     obstacle2 = createSprite(750, 280, 20, 20);
     obstacle2.addImage(obstacle2Image); 
     obstacle2.scale = 0.3

     ground = createSprite(0,280,500,10);
     ground.visible = false;
}
 
function draw() {
    background(0);
  
    if(scene.x < 400){
scene.x = scene.width/2
    }
    if(keyDown("space")){
bunny.velocityY = -10;
    }
  bunny.velocityY = bunny.velocityY + 0.8;

  bunny.collide(ground);
  drawSprites()
 }

function spawnObstacles() {
    if(frameCount%60 === 0) {
        obstacle = createSprite(Math.random(200,500),350,20,20);
        obstacle.velocityX = -4;
        var rand = Math.round(random(1,2));
        switch (rand) {
            case 1: obstacle.addImage(obstacle1Image);
        
                break; 
            case 2: obstacle.addImage(obstacle2Image);
          break;  
         
          default:
                break;
        }
    }
}

function spawnCarrots() {

}