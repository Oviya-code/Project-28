
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg;
var stoneObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

stoneObj = new stone(235,420,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);

	}
}



