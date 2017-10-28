// Code goes here

var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  frameRate(10);
  canvasColor = color('white');
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
  imageData  = [];
  draw1();
draw2();
draw3();
draw4();
draw5();
  }

function draw1() {
for(var i=0;i<30;i++)
{
  stroke('black')
  var offset=20*i; 
  var x1=0;
  var y1=0;
  var x2=0;
  var y2=600;
  line(x1+offset,y1,x2+offset,y2);
}
}

function draw2(){
  for(var i=0;i<30;i++)
{
  stroke('black')
  var offset=20*i; 
  var x1;
  var y1=0;
  var x2=600;
  var y2=0;
  if(i<15)
  {
    x1=300
  }
  else
  {
    x1=0;
  }
  line(x1,y1+offset,x2,y2+offset);
}
}

function draw3()
{
    for(var i=0;i<60;i++)
{
  stroke('black')
  var offset=20*i; 
  var x1=0;
  var y1=300;
  var x2=0;
  var y2=300;
 
  line(x1,y1+offset,x2+offset,y2);
}
}

function draw4()
{
    for(var i=0;i<=15;i++)
{
  stroke('black')

  var offset=20*i;
  var x1=300;
  var y1=600;
  var x2=600;
  var y2=300;
   x1=300;
   y1=600;
line(x1,y1-offset,x1+offset,y1)

}
}



function draw5()
{
    for(var i=0;i<15;i++)
{
  stroke('black')

  var offset=20*i;
  var x1=600;
  var y1=300;

line(x1,y1+offset,x1-offset,y1)

}
}













