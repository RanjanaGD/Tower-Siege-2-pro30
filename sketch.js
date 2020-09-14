const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ground1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;
var slingShot;
var poly;
 
function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
    world = engine.world;





  //createSprite(400, 200, 50, 50);
  poly=new Stone(200,400,40);
  World.add(world,poly);
  
  ground= new Ground(610,375,250,10);
ground1=new Ground(960,220,220,10);

  block1= new Box(530,350,30,40);
  block2= new Box(560,350,30,40);
  block3= new Box(590,350,30,40);
  block4= new Box(620,350,30,40);
  block5= new Box(650,350,30,40);
  block6= new Box(680,350,30,40);
  block7= new Box(560,310,30,40);
  block8= new Box(590,310,30,40);
  block9= new Box(620,310,30,40);
  block10= new Box(650,310,30,40);
  block11= new Box(590,270,30,40);
  block12= new Box(620,270,30,40);
  //second part
  block13= new Box(900,195,30,40);
  block14= new Box(930,195,30,40);
  block15= new Box(960,195,30,40);
  block16= new Box(990,195,30,40);
  block17= new Box(1020,195,30,40);
  block18= new Box(930,155,30,40);
  block19= new Box(960,155,30,40);
  block20= new Box(990,155,30,40);
  block21= new Box(960,115,30,40);
//first part last one
block22=new Box(605,230,30,40)

slingShot=new Slingshot(poly.body,{x:250,y:150});



Engine.run(engine);

}

function draw() {
  background(230);  

ground.display();
ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
slingShot.display();
poly.display();

text("Press SPACE to Restart",50,50);



  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly()
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(poly.body,{x:100,y:390})
		slingShot.attach(poly.body);
	}
}