const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var box,button,box2;
var ball;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  button =createButton("click to blow")
  button.position(width/2,height-100)
  
  button.mousePressed(air)


  box = new Rectangle(650,180,190,90)
  box2 = new Rectangle(480,200,150,50)
  
  

  var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
  ball = Bodies.circle(650,10,20,ball_options);
  World.add(world,ball);

  
  ellipseMode(RADIUS);
  
}

function draw() {
  background("black");
    
  Engine.update(engine)
  box.show()
  
  box2.show()
  ellipse(ball.position.x,ball.position.y,20);
  

}



function air() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.01})
}