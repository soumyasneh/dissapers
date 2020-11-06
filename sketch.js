const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var box1,box2,box3,box4;
var box5,box6,box7;
var box8,box9,box10;
var shooter;

var score=0;

function preload() {
  time();   
}

function setup() {
  createCanvas(1000,580);
  engine = Engine.create();
  world = engine.world;

 

 // createSprite(400, 200, 50, 50);
//base = new Ground(500,600,100);
base2 = new Ground2(500,610,1000,200);
box1 = new Box(600,450,100,100);
box2 = new Box(700,450,100,100);
box3 = new Box(800,450,100,100);
box4 = new Box(900,450,100,100);
box5 = new Box(750,350,100,100);
box6 = new Box(850,350,100,100);
box7 = new Box(650,350,100,100);
box8 = new Box(750,250,100,100);
shooter = new Stone(100,200,25);
spring = new SlingShot(shooter.body,{x:150,y:180});
}

function draw() {
  background("rgb(115,194,251)"); 

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  Engine.update(engine);
  //base.display();
  base2.display();
  box1.display(); 
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  spring.display();
  shooter.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
    spring.fly();  
  }
  
  function keyPressed(){
    if(keyCode===32) {
      spring.attach(shooter.body);  
    }  
   }
   

   async function time(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJ = await response.json();
    console.log(responseJ);
    var datetime = responseJ.datetime;
    console.log(datetime);
    var r = datetime.slice(11,13);
    console.log(r);
    
    if (r>=18 && r<=23){
    background("black");   
    }
    else{
        background("rgb(115,194,251)");
    }
    
    
    
    }