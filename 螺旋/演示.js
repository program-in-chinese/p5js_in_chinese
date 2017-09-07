var untwist = 2;

function 构图() {
  新画布(500, 500);
  角度模式(DEGREES);
  方形模式(CENTER);
  不填充();

  //保存帧("螺旋_", "png", 1, 22);
}

function 绘制() {
  背景色(255);
  偏移(250, 250);

  for (var i = 20; i > 0; i--) {
    保存状态();
    var sz = (frameCount + i * width / 20) % width;
    旋转(sz / untwist);
    笔宽(sz / 15);
    笔色(0, map(sz, 0, width * 1.2, 255, 0));
    长方形(0, 0, sz, sz);
    恢复状态();
  }
}