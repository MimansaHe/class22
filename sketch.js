const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var myEngine,myWorld; 
var ground;
var ball;

function setup(){ 
  createCanvas(400,400);
 myEngine=Engine.create();
  myWorld=myEngine.world;
var ground_options={ isStatic:true }
 ground=Bodies.rectangle(100,350,400,10,ground_options);
 World.add(myWorld,ground); 
 var ball_options = { restitution: 1.2}     
 ball=Bodies.circle(200,150,20,ball_options);
 World.add(myWorld,ball);
console.log(ground)
 } 

function draw(){
   background("black");
    Engine.update(myEngine);
    rectMode(CENTER) 
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y,25 ,25);
  

     
    }