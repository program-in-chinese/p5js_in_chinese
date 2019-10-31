//*****ICM *****Week 2 Assignment
//Created by CHENSHAN GAO on 2018/09/17
//Create a sketch that includes (all of these):
// One element controlled by the mouse.
// One element that changes over time, independently of the mouse.
// One element that is different every time you run the sketch.

var brow = {
  col: '#CB6064'
};

var body = {
  col: '#000002'
};

var eye = {
  col: '#020305'
};

var heart = {
  col: '#EFCBD7'
}

var 白色 = 255;

function setup() {
  createCanvas(600, 800);
  BgColR = random(200, 255);
  BgColG = random(180, 220);
  BgColB = random(100, 200);
  frameRate(60)
}
function 身体() {
  noStroke();
  fill(body.col);
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
  stroke(body.col);
  noFill();
  arc(360, 580, 50, 15, 0.2, 3, OPEN);
  strokeWeight(3);
  arc(360, 600, 40, 10, 0.2, 3, OPEN);
}

function 左上睫毛() {
  noStroke();
  fill(brow.col)
  beginShape()

  curveVertex(307 + 10, 446);
  curveVertex(299 + 10, 431);
  curveVertex(299 + 10, 417);
  curveVertex(287 + 10, 421);
  curveVertex(282 + 10, 429);
  curveVertex(280 + 10, 450);
  endShape(CLOSE)
}

function 左下睫毛() {
  noStroke();
  fill(brow.col)
  beginShape()
  curveVertex(316, 476 + 5);
  curveVertex(310, 476 + 5);
  curveVertex(291, 482 + 5);
  curveVertex(302, 509 + 5);
  curveVertex(316, 528 + 5);
  curveVertex(322, 525 + 5);
  curveVertex(318, 498);
  endShape(CLOSE)
}

function 左眼() {
  noStroke();
  fill(0);
  ellipse(300, 465, 20 + mouseX / 26, 20)
}

function 右上睫毛() {
  noStroke();
  fill(brow.col);
  beginShape()
  curveVertex(388, 407 + 10);
  curveVertex(396, 400 + 10);
  curveVertex(409, 417 + 10);
  curveVertex(408, 428 + 10);
  curveVertex(392, 434 + 10);
  curveVertex(390, 424 + 10);
  endShape(CLOSE);
}

function 右下睫毛() {
  noStroke()
  fill(brow.col);
  beginShape()
  curveVertex(395, 468 + 5);
  curveVertex(405, 514 + 5);
  curveVertex(408, 526 + 5);
  curveVertex(416, 501 + 5);
  curveVertex(418, 487 + 5);
  curveVertex(418, 466 + 5);
  endShape(CLOSE)
}

function 右眼() {
  noStroke()
  fill(eye.col);
  ellipse(403, 458, 20 + mouseX / 26, 20)
}

function 手臂() {
  noStroke()
  fill(body.col);
  var angle = {
      x: mouseX / 18000
  };
  if (angle.x > 35) {
      mouseX = 300
  }
  rotate(angle.x, 8000);
  beginShape()
  curveVertex(302, 701);
  curveVertex(210, 756);
  curveVertex(184, 751);
  curveVertex(169, 726);
  curveVertex(158, 696);
  curveVertex(155, 641);
  curveVertex(162, 599);
  curveVertex(152, 590);
  curveVertex(154, 578);
  curveVertex(167, 567);
  curveVertex(181, 565);
  curveVertex(191, 574);
  curveVertex(191, 593);
  curveVertex(191, 622);
  curveVertex(195, 650);
  curveVertex(211, 665);
  curveVertex(285, 625);
  endShape(CLOSE)
}

function 手指() {
  noStroke();
  fill(body.col);
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