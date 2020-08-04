const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var h, m, s;
var h_ang, m_ang, s_ang;
var h_hand, m_hand, s_hand;
var h_arc, m_arc, s_arc;

function setup() {
  

  engine = Engine.create();
  world = engine.world;

  createCanvas(600,800);

 

}

function draw() {

  Engine.update(engine);
  angleMode(DEGREES);

  background(0);  

  h = hour();
  m = minute();
  s = second();

 if(h>12)
{
 h_ang = map(h, 12, 24, 0, 360);
} else 
{
  h_ang = map(h, 0, 12, 0, 360);
}

  m_ang = map(m, 0, 60, 0, 360);

  s_ang = map(s, 0, 60, 0, 360);



  s_hand = new Hand(300,300,10, 150, s_ang, 0, 255, 255);
  s_hand.display();

  m_hand = new Hand(300,300,10, 100, m_ang, 255, 0, 255);
  m_hand.display();

  h_hand = new Hand(300,300,10, 50, h_ang, 255, 255, 0);
  h_hand.display();

  fill("yellow");
  textSize(50);
  if(h<10)
  {
  text("0"+h+" : ", 150, 700);
  } else if(h === 24)
  {
    text("00 :", 150, 700);
  } else 
  {
    text(h+" : ", 150, 700);
  }

  fill("magenta");
  textSize(50);
  if(m<10)
  {
  text("0"+m+" : ", 250, 700);
  } else
  {
    text(m+" : ", 250, 700);
  }

  fill("cyan");
  textSize(50);

   if(s<10)
  {
  text("0"+s, 350, 700);
  } else
  {
    text(s, 350, 700);
  }




  strokeWeight(10);
  noFill();
  stroke("cyan");
  arc(300, 300, 440, 440, -90, s_ang - 90);
  stroke("magenta");
  arc(300, 300, 470, 470, -90, m_ang - 90);
  stroke("yellow");
  arc(300, 300, 500, 500, -90, h_ang - 90);
  





  drawSprites();
}