// Code goes here

var canvasWidth = 600;
var canvasHeight = 600;


function setup() {
  frameRate(10);
  canvasColor = color('black');
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
  imageData  = [];
  draw();

}

function draw() {
stroke('white')
     rect(50,50,500,500);
ellipse(300,300,500,500);
noFill();
triangle(50,550,300,50,550,550)
triangle(50,550,175,50,175,550)
triangle(425,550,425,50,550,550)
}




















