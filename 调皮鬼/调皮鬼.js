//*****ICM *****Week 2 Assignment
//Created by CHENSHAN GAO on 2018/09/17
//Create a sketch that includes (all of these):
// One element controlled by the mouse.
// One element that changes over time, independently of the mouse.
// One element that is different every time you run the sketch.

var brow = {
  col: '#CB6064'
};

var eye = {
  col: '#020305'
};

var 白色 = 255;
var 身体颜色 = '#000002'

function setup() {
  createCanvas(600, 800);
  frameRate(60)
}

function 身体() {
  noStroke();
  fill(身体颜色);
  beginShape()
  curveVertex(345, 317);
  curveVertex(300, 329);
  curveVertex(257, 362);
  curveVertex(233, 407);
  curveVertex(225, 451);
  curveVertex(227, 519);
  curveVertex(223, 609);
  curveVertex(212, 754);
  vertex(182, 835);
  vertex(545, 837);
  vertex(514, 528);
  curveVertex(492, 410);
  curveVertex(447, 344);
  curveVertex(390, 318);
  endShape(CLOSE)
}

function 脸() {
  noStroke();
  fill(250);
  ellipse(360, 500, 200, 270)
}

function 嘴() {
  strokeWeight(13);
  stroke(身体颜色);
  noFill();
  arc(360, 580, 50, 15, 0.2, 3, OPEN);
  strokeWeight(3);
  arc(360, 600, 40, 10, 0.2, 3, OPEN);
}

var 左上睫毛起始点 = [317, 446]
var 左上睫毛各点位移 = [[0, 0], [-8, -15], [0, -14], [-12, 4], [0, 8], [2, 21]]

var 左下睫毛起始点 = [316, 481]
var 左下睫毛各点位移 = [[0, 0], [-6, 0], [-19, 6], [11, 27], [14, 19], [6, -3], [-4, -32]]
function 左上睫毛() {
  noStroke();
  fill(brow.col)
  画包络线(左上睫毛起始点, 左上睫毛各点位移);
}

function 左下睫毛() {
  noStroke();
  fill(brow.col)
  画包络线(左下睫毛起始点, 左下睫毛各点位移);
}

function 左眼() {
  noStroke();
  fill(0);
  ellipse(300, 465, 20 + mouseX / 26, 20)
}

function 右上睫毛() {
  noStroke();
  fill(brow.col);
  画包络线(右上睫毛起始点, 右上睫毛各点位移);
}

var 右上睫毛起始点 = [388, 417]
var 右上睫毛各点位移 = [[0, 0], [8, -7], [13, 17], [-1, 11], [-16, 6], [-2, -10]]

var 右下睫毛起始点 = [395, 473]
var 右下睫毛各点位移 = [[0, 0], [10, 46], [3, 12], [8, -25], [2, -14], [0, -21]]

function 右下睫毛() {
  noStroke()
  fill(brow.col);
  画包络线(右下睫毛起始点, 右下睫毛各点位移);
}

function 右眼() {
  noStroke()
  fill(eye.col);
  ellipse(403, 458, 20 + mouseX / 26, 20)
}

function 画包络线(起始点, 各点位移) {
  var 当前点 = 起始点;
  beginShape()
  for (序号 in 各点位移) {
    位移 = 各点位移[序号]
    当前点 = [当前点[0] + 位移[0], 当前点[1] + 位移[1]];
    console.log(当前点[0] + ", " + 当前点[1])
    curveVertex(当前点[0], 当前点[1]);
  }
  endShape(CLOSE)
}

var 手臂起始点 = [302, 701]
var 手臂各点位移 = [[0, 0], [-92, 55], [-26, -5], [-15, -25], [-11, -30], [-3, -55], [7, -42], [-10, -9],
    [2, -12], [13, -11], [14, -2], [10, 9], [0, 19], [0, 29], [4, 28], [16, 15], [74, -40]]

function 手臂() {
  noStroke()
  fill(身体颜色);
  var angle = {
      x: mouseX / 18000
  };
  if (angle.x > 35) {
      mouseX = 300
  }
  rotate(angle.x, 8000);
  画包络线(手臂起始点, 手臂各点位移);
}

function 手指() {
  noStroke();
  fill(身体颜色);
  ellipse(170, 560, mouseX / 64, mouseX / 21)
}

function draw() {
  背景色(白色);
  身体()
  脸()
  嘴()
  左上睫毛()
  左下睫毛()
  左眼()
  右上睫毛()
  右下睫毛()
  右眼()
  手臂()
  手指()
}