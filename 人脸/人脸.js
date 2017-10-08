function setup() {
  createCanvas(500,500);
  background(99,82,129);
}

/*
小春: hurry up, hurry up, don't look(拉开距离)
小春: 哎! Hurry up! hurry up~
jasper: I know. What's wrong with you?
小春: huh? What's wrong with you? hurry up
jasper: umm can you stop angry now?
小春: sorry?
jasper: I say (喇叭) can you stop angry now?
小春: ok, sorry, sorry 
*/
function draw() {
  画脸(3, false);
}

// 眼睛方向: 0 - 左, 1 - 上, 2 - 右, 3 - 下
// 小孩: true 则额头大, 脸小
function 画脸(眼睛方向, 小孩) {

var c = color(255,235,205);
fill(c);
noStroke();
ellipse(250,250,270,360);
//face
ellipse(120,250,60,80);
//ear

// 宽额头(头部)
rect(115,150,270,80);

// 头发
fill(0);
noStroke();	
arc(250,170,270,240,PI,0,CHORD);

// 前额
fill(255,235,205);
arc(250,170,270,170,PI,0,CHORD);
//fill(137,100,61);
//ellipse(300,150,100,100);
fill(255,235,205);
//rect(250,170,100,30);

fill(78,61,54);
noStroke();
quad(145,205,175,185,175,200,145,208);
quad(175,185,175,200,220,200,220,185);
//left eyebrow
quad(270,185,270,200,315,200,315,185);
quad(315,200,315,185,345,205,345,208);
//right eyebrow

noFill();
strokeWeight(3);
stroke(82,63,35);
beginShape();
curveVertex(250, 250);
curveVertex(250, 250);
curveVertex(230, 290);
curveVertex(230, 300);
curveVertex(260, 305);
curveVertex(260, 320);
endShape();
//nose

fill(200,80,80);
noStroke();
arc(235,360,50,25,PI,0,CHORD);
arc(265,360,50,25,PI,0,CHORD);
arc(250,365,80,30,0,PI,CHORD);
//lips

/*fill(255,195,195);
noStroke();
ellipse(180,300,70,30);
ellipse(320,300,70,30);*/
//blush

noFill();
strokeWeight(2);
stroke(74,44,0);
curve(160,230,160,240,150,220,170,200);
curve(170,230,170,240,160,220,180,200);
curve(340,230,340,240,350,220,330,200);
curve(330,230,330,240,340,220,320,200);
//eyelashes

var 眼睛位移 = 取眼睛位移(眼睛方向);
fill(255,249,250);
strokeWeight(2);
stroke(82,63,35);
ellipse(180,240,60,25);
ellipse(320,240,60,25);
fill(74,44,0);
noStroke();
ellipse(180 + 眼睛位移.x, 240 + 眼睛位移.y, 22,22);  // 160, 240 -> 180 235 (左)
ellipse(320 + 眼睛位移.x, 240 + 眼睛位移.y, 22,22);
fill(0);
noStroke();
ellipse(180 + 眼睛位移.x, 240 + 眼睛位移.y, 15,15);
ellipse(320 + 眼睛位移.x, 240 + 眼睛位移.y, 15,15);
fill(255,249,250);
noStroke();
ellipse(175 + 眼睛位移.x, 240 + 眼睛位移.y, 5,5);
ellipse(315 + 眼睛位移.x, 240 + 眼睛位移.y, 5,5);
//eyes

fill(250,250,250);
noStroke();
ellipse(10,10,200,200);
triangle(100,100,70,70,50,100);
//textbubble

fill(0,102,153);
textSize(15);
text("Can you stop",5,30);
textSize(15);
text("angy now?",20,60);
//text
}

// 眼睛方向: 0 - 左, 1 - 上, 2 - 右, 3 - 下
function 取眼睛位移(眼睛方向) {
  var 位移 = {x: 0, y: 0};
  if (眼睛方向 == 0) {
    位移.x = -20;
    位移.y = 0;
  } else if (眼睛方向 == 1) {
    位移.x = 0;
    位移.y = -5;
  } else if (眼睛方向 == 2) {
    位移.x = 20;
    位移.y = 0;
  } else if (眼睛方向 == 3) {
    位移.x = 0;
    位移.y = 5;
  }
  return 位移;
}