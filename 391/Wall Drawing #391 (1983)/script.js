var canvasWidth = 700;
var canvasHeight = 700;

function setup() {
  frameRate(10);
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight);
  background(canvasColor);
  draw1();
  draw2();
  draw4();
  draw6();
}

function draw1() {
  noFill();
  stroke('black');
  strokeWeight(20);
  rect(0, 0, 300, 300);
  for (i = 0; i < 6; i++) {
    var x1 = 0,
      y1 = 0;
    var x2 = 300;
    var offset = 50 * i;
    line(x1, y1 + offset, x2, y1 + offset);
  }


}

function draw2() {
  noFill();
  for (var i = 0; i < 7; i++) {
    stroke('red');
    strokeWeight(20);
    var offset = 50 * i;
    var x1 = 300;
    var y1 = 0;
    var y2 = 300;
    line(x1 + offset, y1, x1 + offset, y2);
  }
  stroke('black');
  rect(300, 0, 300, 300);
}


function draw4() {
  noFill();

  for (var i = 0; i < 7; i++) {
    stroke('yellow');
    strokeWeight(20);
    var offset = 50 * i;
    var x1 = 600;
    var y1 = 300;
    line(x1, y1 + offset, x1 - offset, y1);
  }
  for (i = 0; i < 6; i++) {
    stroke('yellow');
    strokeWeight(20);
    offset = 50 * i;
    x1 = 300;
    y1 = 600;
    line(x1, y1 - offset, x1 + offset, y1);
  }
  stroke('black')
  rect(300, 300, 300, 300);
}


function draw6() {
  noFill();
  for (var i = 0; i < 7; i++) {
    stroke('blue');
    strokeWeight(20);
    var offset = 50 * i;
    var x1 = 0;
    var y1 = 300;
    line(x1 + offset, y1, x1, y1 + offset);
  }
  for (i = 0; i < 7; i++) {
    stroke('blue');
    strokeWeight(20);
    offset = 50 * i;
    x1 = 300;
    y1 = 600;
    line(x1 - offset, y1, x1, y1 - offset);
  }
  stroke('black');
  rect(0, 300, 300, 300);
}