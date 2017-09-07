var untwist = 2;

function 构图() {
  新画布(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();

  saveFrames("螺旋_", "png", 2, 22);
}

function 绘制() {
  背景色(255);
  translate(250, 250);

  for (var i = 20; i > 0; i--) {
    push();
    var sz = (frameCount + i * width / 20) % width;
    rotate(sz / untwist);
    strokeWeight(sz / 15);
    stroke(0, map(sz, 0, width * 1.2, 255, 0));
    rect(0, 0, sz, sz);
    pop();
  }
}