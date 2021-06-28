var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var sound;
var score = ["10","20","30","40","50"];
var sc = 0;

var particle1;
function preload(){
  sound = ("ding.mp3.mp3")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(25);
  stroke("green");
  fill (random(0,255),random(0,255),random(0,255));
  text("Click Mouse to create Balls",300,450);
  textSize(30)
  for(var i  = 0;i < 6;i = i + 1){
  text(score[i],i * 80 +20,650);
  text(score[i],740-i*80,650);

  }
  
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
for(var m = 0;m < particles.length;m = m+1){
  particles[m].display();

}
}
function mousePressed(){
  if(mouseY < 200){
  particles.push(new particle(mouseX,mouseY));
  sound.play();
  
  }

}