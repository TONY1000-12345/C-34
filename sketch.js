const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ball1;

function setup() 
{
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;
  ball1= new Wball(200,200,80,80)
  ground= new Ground(600,600,1200,20)
  building= new Building(900,100,70,70)
  constraint= new Control(ball1.body,{x:500, y:50})
}

function draw()
 {
  background(220);
  
  Engine.update(engine);
  ball1.display()
  ground.display()
  building.display()
  constraint.display()
}

function mouseDragged(){
  
     Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
 
}