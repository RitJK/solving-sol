// Code goes here
// Code goes here
// Code goes here

var canvasWidth = 600;
var canvasHeight = 600;
var numlines1= 24;
var numlines2= 12;

var x1,x2,y1,y2;

function setup() {
  frameRate(10);
  canvasColor = color('black');
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
  imageData  = [];
  draw1();

}

function draw1() {
stroke('white')
for(var i=0;i<numlines1;i++)
{
  var x2= random(50,700);
  var y2=random(0,700);
  line(300,300,x2,y2)
}
for(i=0;i<numlines2;i++)
{
  var x3= random(600);
  var y3=random(600);
  line(0,300,x3,y3)
}
for(i=0;i<numlines2;i++)
{
  var x4= random(0,600);
  var y4=random(700);
  line(600,300,x4,y4)
  var x5= random(0,600);
  var y5=random(0,705);
  line(0,0,x5,y5)
  var x6= random(0,500);
  var y6=random(0,600);
  line(600,0,x6,y6)
  var x7= random(0,600);
  var y7=random(0,600);
  line(0,600,x7,y7)
  var x8= random(0,500);
  var y8=random(0,600);
  line(600,600,x8,y8)
  var x9= random(0,500);
  var y9=random(0,60);
  line(0,300,x9,y9)
  var x10= random(0,500);
  var y10=random(0,60);
  line(300,600,x10,y10)
  var x11= random(0,800);
  var y11=random(0,400);
  line(300,0,x11,y11)
}
}






















