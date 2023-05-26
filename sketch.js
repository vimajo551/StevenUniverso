var p1, p1img;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p9;
var p10;
var p11;
var p12;
var p13;
var p14;
var p15;
var p16;
var p17;
var p18;
var bg1;

function preloaded(){
  bgi = loadImage("bg.jpg")
  p1img = loadImage("../assets/personagens/Steven_Universo.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  p1 = createSprite(100,50,30,30);
  p1.addImage(p1img)
  p2 = createSprite(100,50,30,30);
  p3 = createSprite(100,50,30,30);
  p4 = createSprite(100,50,30,30);
  p5 = createSprite(100,50,30,30);
  p6 = createSprite(100,50,30,30);
  p7 = createSprite(100,50,30,30);
  p8 = createSprite(100,50,30,30);
  p9 = createSprite(100,50,30,30);
  p10 = createSprite(100,50,30,30);
  p11 = createSprite(100,50,30,30);
  p12 = createSprite(100,50,30,30);
  p13 = createSprite(100,50,30,30);
  p14 = createSprite(100,50,30,30);
  p15 = createSprite(100,50,30,30);
  p16 = createSprite(100,50,30,30);
  p17 = createSprite(100,50,30,30);
  p18 = createSprite(100,50,30,30);

}

function draw() 
{
  background(30);

  

  
  drawSprites();

}




