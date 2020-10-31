var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  speed = random(123,321);
  weight = random(32,52);
  thickness = random(22,83);
  

 wall = createSprite(750, 200, thickness, 300);
 bullet = createSprite(50, 200, 50, 5);
 bullet.shapeColor = "white";
bullet.velocityX = speed;
 
}

function draw() {
  background(0);  

if (hasCollided(bullet,wall)){
bullet.velocityX = 0;

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){

wall.shapeColor=color(255,0,0)


}
if (damage<10){
  
wall.shapeColor=color(0,255,0)


}
}

  drawSprites();
}
