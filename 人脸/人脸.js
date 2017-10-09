function setup() {
  createCanvas(1000,500);
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
  画脸(1, true, 0, "Can you stop", "angry now?");
  画脸(3, false, 500, "...OK", "Sorry.");
}

// 眼睛方向: 0 - 左, 1 - 上, 2 - 右, 3 - 下
// 小孩: true 则额头大, 脸小
function 画脸(眼睛方向, 小孩, x偏移, 行1, 行2) {

  var 比例 = 小孩 ? 0.8 : 1;
  var 额头位移 = 小孩 ? 0 : 20;
  // 脸
  var c = color(255,235,205);
  fill(c);
  noStroke();
  ellipse(250 + x偏移,250,270 * 比例, 360 * 比例);

  //左耳
  ellipse(120 + x偏移, 230 + 额头位移 * 2, 60,80);
  //右耳
  ellipse(380 + x偏移, 230 + 额头位移 * 2, 60,80);

  // 宽额头(头部)
  rect(115 + x偏移,150,270,80);

  // 头发
  fill(0);
  noStroke();	
  arc(250 + x偏移, 150 + 额头位移, 270, 240,PI,0,CHORD);

  // 前额
  fill(255,235,205);
  arc(250 + x偏移, 150 + 额头位移, 270, 170,PI,0,CHORD);

  // 左眉
  fill(78,61,54);
  noStroke();
  quad(145 + x偏移,205,175 + x偏移,185,175 + x偏移,200,145 + x偏移,208);
  quad(175 + x偏移,185,175 + x偏移,200,220 + x偏移,200,220 + x偏移,185);

  // 右眉
  quad(270 + x偏移,185,270 + x偏移,200,315 + x偏移,200,315 + x偏移,185);
  quad(315 + x偏移,200,315 + x偏移,185,345 + x偏移,205,345 + x偏移,208);

  // 鼻子
  noFill();
  strokeWeight(3);
  stroke(82,63,35);
  beginShape();
  curveVertex(250 + x偏移, 250);
  curveVertex(250 + x偏移, 250);
  curveVertex(230 + x偏移, 290);
  curveVertex(230 + x偏移, 300);
  curveVertex(260 + x偏移, 305);
  curveVertex(260 + x偏移, 320);
  endShape();

  var 五官位移 = 小孩 ? 10 : 0;
  // 嘴唇
  fill(200,80,80);
  noStroke();
  arc(235 + x偏移,360 - 五官位移,50 * 比例,25 * 比例,PI,0,CHORD);
  arc(265 + x偏移,360 - 五官位移,50 * 比例,25 * 比例,PI,0,CHORD);
  arc(250 + x偏移,365 - 五官位移,80 * 比例,30 * 比例,0,PI,CHORD);

  // 睫毛
  noFill();
  strokeWeight(2);
  stroke(74,44,0);
  curve(160 + x偏移,230,160 + x偏移,240,150 + x偏移,220,170 + x偏移,200);
  curve(170 + x偏移,230,170 + x偏移,240,160 + x偏移,220,180 + x偏移,200);
  curve(340 + x偏移,230,340 + x偏移,240,350 + x偏移,220,330 + x偏移,200);
  curve(330 + x偏移,230,330 + x偏移,240,340 + x偏移,220,320 + x偏移,200);

  // 双眼
  var 眼睛位移 = 取眼睛位移(眼睛方向);
  fill(255,249,250);
  strokeWeight(2);
  stroke(82,63,35);
  ellipse(180 + x偏移,240 + 五官位移,60,25);
  ellipse(320 + x偏移,240 + 五官位移,60,25);
  fill(74,44,0);
  noStroke();
  ellipse(180 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 22,22);  // 160, 240 -> 180 235 (左)
  ellipse(320 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 22,22);
  fill(0);
  noStroke();
  ellipse(180 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 15,15);
  ellipse(320 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 15,15);
  fill(255,249,250);
  noStroke();
  ellipse(175 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 5,5);
  ellipse(315 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移, 5,5);

  对话框(x偏移, 行1, 行2);
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

function 对话框(x偏移, 行1, 行2) {
  fill(250,250,250);
  noStroke();
  ellipse(10 + x偏移,10,200,200);
  triangle(100 + x偏移,100,70 + x偏移,70,50 + x偏移,100);
  //textbubble

  fill(0,102,153);
  textSize(15);
  text(行1,5 + x偏移,30);
  textSize(15);
  text(行2,20 + x偏移,60);
  //text
}