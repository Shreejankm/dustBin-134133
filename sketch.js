
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var s1,s2,s3;
var waste;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-65, width,10);
	groundSprite.shapeColor=color("brown")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	ground.x = groundSprite.x;
	ground.y = groundSprite.y;

	s1 = new DustBin(width/1.34,625,100,15);
	fill("green");
	s2 = new DustBin(655,595,15,70);
	s3 = new DustBin(542,595,15,70);

	waste = new Paper(width/9,500);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  s1.display();
  s2.display();
  s3.display();

  waste.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(waste.body,waste.body.position,{x:120,y:-155});
	}
}