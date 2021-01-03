
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld,ball1;
var dustbin1, dustbinImage, ground1;



function setup() {
	createCanvas(800, 700);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
 ball1 = new Ball(56,46,55,55);
 dustbin1 = new Dustbin(650,620,50,70);
 
 ground1 = new Ground(400,650,800,40);
 ground1.shapeColor = color("yellow");
 Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display();
dustbin1.display();
ground1.display();
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:85, y:-85});
}

}