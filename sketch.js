 const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;



function preload(){
  backgroundImage=loadImage("snowfall1.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


}

function draw() {
  
  background(backgroundImage);
  Engine.update(engine);
if(frameCount%10===0){
  snowflakes=new Snowflakes(random(0,400),random(0,20))
console.log("1")
  snowflakes.display()
}
  drawSprites();
}
