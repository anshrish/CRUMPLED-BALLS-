const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
 paper = new Paper(50,600,20);
 rectangle1 = new Rectangle(600,620,20,100);
 rectangle2 = new Rectangle(700,620,20,100);
 rectangle3 = new Rectangle(650,670,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}