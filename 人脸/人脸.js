var 白色 = 255;

function setup() {
  createCanvas(1000,500);
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
  背景色(白色);
  var 帧号 = 帧序号();
  var 小春0 = 600;
  var 小春1 = 800;
  var 小春2 = 1000;
  var 小春3 = 1200;
  if (帧号 < 小春0) {
    画脸(Math.ceil(帧号 / 50) % 4, true,  帧号/ 2, "", "");
    画脸(3, false, 帧号 + 200, "Hurry up. Hurry up!", "Don't look!");
  } else if (帧号 > 小春0 && 帧号 < 小春1) {
    画脸(1, true,  帧号/ 2, "I know", "What's wrong with you?");
    画脸(3, false, 小春0 + 200, "What's wrong with you?", "Hurry up!");
  } else if (帧号 > 小春1 && 帧号 <小春2) {
    画脸(1, true,  帧号/ 2, "can you stop", "angry now?");
    画脸(3, false, 小春0 + 200, "Sorry??", "");
  } else if (帧号 > 小春2 && 帧号 <小春3) {
    画脸(1, true,  帧号/ 2, "I say...CAN YOU", "STOP ANGRY NOW?");
    画脸(3, false, 小春0 + (帧号 - 小春2)/2 + 200, "...OK", "Sorry.");
  } else if (帧号 > 小春3){
    画脸(2, true,  帧号/ 2, "", "");
    画脸(0, false, 小春0 + (帧号 - 小春2)/2 + 200, "", "");
  }

}

// 眼睛方向: 0 - 左, 1 - 上, 2 - 右, 3 - 下
// 小孩: true 则额头大, 脸小
function 画脸(眼睛方向, 小孩, 附加x偏移, 行1, 行2) {
  var x偏移 = -300 + 附加x偏移;
  var y偏移 = 小孩 ? 100 : 0;
  
  var 比例 = 小孩 ? 0.8 : 1;
  var 额头位移 = 小孩 ? 0 : 20;
  // 脸
  var c = color(255,235,205);
  fill(c);
  noStroke();
  ellipse(250 + x偏移, 250 + y偏移, 270 * 比例, 360 * 比例);

  //左耳
  ellipse(120 + x偏移, 230 + 额头位移 * 2 + y偏移, 60,80);
  //右耳
  ellipse(380 + x偏移, 230 + 额头位移 * 2 + y偏移, 60,80);

  // 宽额头(头部)
  rect(115 + x偏移, 150 + y偏移, 270,80);

  // 头发
  fill(0);
  noStroke();	
  arc(250 + x偏移, 150 + 额头位移 + y偏移, 270, 240,PI,0,CHORD);

  // 前额
  fill(255,235,205);
  arc(250 + x偏移, 150 + 额头位移 + y偏移, 270, 170,PI,0,CHORD);

  // 左眉
  fill(78,61,54);
  noStroke();
  quad(145 + x偏移,205 + y偏移,175 + x偏移,185 + y偏移,175 + x偏移,200 + y偏移,145 + x偏移,208 + y偏移);
  quad(175 + x偏移,185 + y偏移,175 + x偏移,200 + y偏移,220 + x偏移,200 + y偏移,220 + x偏移,185 + y偏移);

  // 右眉
  quad(270 + x偏移,185 + y偏移,270 + x偏移,200 + y偏移,315 + x偏移,200 + y偏移,315 + x偏移,185 + y偏移);
  quad(315 + x偏移,200 + y偏移,315 + x偏移,185 + y偏移,345 + x偏移,205 + y偏移,345 + x偏移,208 + y偏移);

  // 鼻子
  noFill();
  strokeWeight(3);
  stroke(82,63,35);
  beginShape();
  curveVertex(250 + x偏移, 250 + y偏移);
  curveVertex(250 + x偏移, 250 + y偏移);
  curveVertex(230 + x偏移, 290 + y偏移);
  curveVertex(230 + x偏移, 300 + y偏移);
  curveVertex(260 + x偏移, 305 + y偏移);
  curveVertex(260 + x偏移, 320 + y偏移);
  endShape();

  var 五官位移 = 小孩 ? 10 : 0;
  // 嘴唇
  fill(200,80,80);
  noStroke();
  arc(235 + x偏移,360 - 五官位移 + y偏移,50 * 比例,25 * 比例,PI,0,CHORD);
  arc(265 + x偏移,360 - 五官位移 + y偏移,50 * 比例,25 * 比例,PI,0,CHORD);
  arc(250 + x偏移,365 - 五官位移 + y偏移,80 * 比例,30 * 比例,0,PI,CHORD);

  // 睫毛
  noFill();
  strokeWeight(2);
  stroke(74,44,0);
  curve(160 + x偏移,230 + y偏移,160 + x偏移,240 + y偏移,150 + x偏移,220 + y偏移,170 + x偏移,200 + y偏移);
  curve(170 + x偏移,230 + y偏移,170 + x偏移,240 + y偏移,160 + x偏移,220 + y偏移,180 + x偏移,200 + y偏移);
  curve(340 + x偏移,230 + y偏移,340 + x偏移,240 + y偏移,350 + x偏移,220 + y偏移,330 + x偏移,200 + y偏移);
  curve(330 + x偏移,230 + y偏移,330 + x偏移,240 + y偏移,340 + x偏移,220 + y偏移,320 + x偏移,200 + y偏移);

  // 双眼
  var 眼睛位移 = 取眼睛位移(眼睛方向);
  fill(255,249,250);
  strokeWeight(2);
  stroke(82,63,35);
  ellipse(180 + x偏移,240 + 五官位移 + y偏移,60,25);
  ellipse(320 + x偏移,240 + 五官位移 + y偏移,60,25);
  fill(74,44,0);
  noStroke();
  ellipse(180 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 22,22);  // 160, 240 -> 180 235 (左)
  ellipse(320 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 22,22);
  fill(0);
  noStroke();
  ellipse(180 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 15,15);
  ellipse(320 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 15,15);
  fill(255,249,250);
  noStroke();
  ellipse(175 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 5,5);
  ellipse(315 + x偏移 + 眼睛位移.x, 240 + 眼睛位移.y + 五官位移 + y偏移, 5,5);

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
  textSize(20);
  text(行1,5 + x偏移,30);
  textSize(20);
  text(行2,20 + x偏移,60);
  //text
}