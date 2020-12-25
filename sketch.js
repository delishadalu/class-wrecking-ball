const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint


var engine,world,obj

function preload()
{
  backgroundImage= loadImage("sprites/n8.jpg")
}


function setup() {
  createCanvas(800,400);

  engine= Engine.create();
  world=engine.world;
  
  ground= new Ground();

 bob= new Bob()
  
  box1= new Box(550,340);
  box2= new Box(600,340);
  box3= new Box(650,340)
  box4= new Box(550,280)
  box5= new Box(650,280)
  box6=new Box(600,280)
  box7= new Box(550,240)
  box8= new Box(600,240)
  box9= new Box(550,190);
  box10= new Box(600,190)
  box11= new Box(550,140);
  box12= new Box(550,90)

  rope= new Rope(bob.body,{x:450,y:80})

  getbackgroundImage();

 
  
}

function draw() {
  background(backgroundImage);  

  Engine.update(engine)

 
  

  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display()
  box10.display();
  box11.display();
  box12.display()


bob.display()
rope.display()

  text (mouseX+":"+mouseY,mouseX,mouseY)
}

function mouseDragged()
{
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}


async function getbackgroundImage()
{
  var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson= await response.json();

  var time=responsejson.datetime.slice(11,13);
console.log(time)

  if (time>=6 && time<= 18)
  {
    backgroundImage= loadImage("sprites/day.jpg")

  }
  else
  {
    backgroundImage= loadImage("sprites/n8.jpg")
  }
}
