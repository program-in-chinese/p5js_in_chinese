var 画布边长 = 500;
var 正方形个数 = 20;
var 白色 = 255;
var 黑色 = 0;

var 截取帧秒数 = 0.5;
var 截取帧速 = 22;

function 构图() {
  新画布(画布边长, 画布边长);
  角度模式(角度());
  方形模式(中心());
  不填充();

  保存帧("螺旋_", "png", 截取帧秒数, 截取帧速);
}

function 绘制() {
  背景色(白色);
  偏移(画布边长 / 2, 画布边长 / 2);

  for (var i = 正方形个数; i > 0; i--) {
    保存状态();
    var 边长 = (帧序号() + i * 宽度() / 正方形个数) % 宽度();
    旋转(边长 / 2);  // 旋转角度
    笔宽(边长 / 15);
    笔色(0, 按比例放缩(边长, 0, 宽度(), 白色, 黑色));
    长方形(0, 0, 边长, 边长);
    恢复状态();
  }
}