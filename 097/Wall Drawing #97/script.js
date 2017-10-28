
var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  frameRate(10);
  canvasColor = color('black');
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
  imageData  = [];
  draw1();
  draw2();
  }

function draw1() {
stroke('white')
     rect(0,0,300,600);
curvedLines();
noFill();
}

function draw2(){
  stroke('white')
     rect(300,0,300,600);
straightLines();
noFill();

}

function curvedLines(){
 
  for(var i=0; i<10000; i++)
{
  var color1= random(12,255);
   var color2= random(45,40);
    var color3= random(56,255);
   stroke(color1,color2,color3);
    strokeWeight(1.1);
  var x1= random(0,140);
  var y1= random(0,550);
  var x2= random(0,290);
  var y2= random(0,600);
  var x3= random(100,250);
  var y3= random(300,600);
  var x4= random(150,290);
  var y4= random(550,600);
 curve(x1,y1,x2,y2,x3,y3,x4,y4);
}
}

function straightLines(){
  for(var i=0; i<10000; i++)
{
  var color1= random(12,235);
   var color2= random(0,255);
    var color3= random(0,255);
   stroke(color1,color2,color3);
   strokeWeight(0.1);
  var x1= random(300,600);
  var y1= random(0,1100);
  var x2= random(300,600);
  var y2= random(0,1100);

 line(x1,y1,x2,y2);
}

}

















