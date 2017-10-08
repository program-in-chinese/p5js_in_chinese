function setup() {
  createCanvas(500,500);
  background(99,82,129);
}

function draw() {

fill(137,100,61);
noStroke();	
rect(80,150,330,300,20);
//hair

var c = color(255,235,205);
fill(c);
noStroke();
ellipse(250,250,270,360);
//face
ellipse(120,250,60,80);
//ear

fill(137,100,61);
noStroke();	
rect(110,150,10,150);
arc(245,170,330,260,PI,0,CHORD);
fill(255,235,205);
ellipse(265,150,100,100);
fill(137,100,61);
ellipse(300,150,100,100);
fill(255,235,205);
rect(250,170,100,30);
//hair

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

fill(255,128,128);
noStroke();
arc(235,360,50,25,PI,0,CHORD);
arc(265,360,50,25,PI,0,CHORD);
arc(250,random(362,370),80,30,0,PI,CHORD);
//lips

fill(255,195,195);
noStroke();
ellipse(180,300,70,30);
ellipse(320,300,70,30);
//blush

noFill();
strokeWeight(2);
stroke(74,44,0);
curve(160,230,160,240,150,220,170,200);
curve(170,230,170,240,160,220,180,200);
curve(340,230,340,240,350,220,330,200);
curve(330,230,330,240,340,220,320,200);
//eyelashes

fill(255,249,250);
strokeWeight(2);
stroke(82,63,35);
ellipse(180,240,60,25);
ellipse(320,240,60,25);
fill(74,44,0);
noStroke();
ellipse(160,240,22,22);
ellipse(300,240,22,22);
fill(0);
noStroke();
ellipse(160,240,15,15);
ellipse(300,240,15,15);
fill(255,249,250);
noStroke();
ellipse(155,235,5,5);
ellipse(295,235,5,5);
//eyes

fill(250,250,250);
noStroke();
ellipse(10,10,200,200);
triangle(100,100,70,70,50,100);
//textbubble

fill(0,102,153);
textSize(15);
text("Hi My name is",5,30);
textSize(24);
text("Min",20,60);
//text
}