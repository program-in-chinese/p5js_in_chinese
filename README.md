已经中文化的API可以支持例程如下([原官方例程](https://p5js.org/examples/hello-p5-simple-shapes.html)):
```
function 构图() {
  新画布(720, 400);
  背景色(200);

  填色(204, 101, 192, 127);
  笔色(127, 63, 120);

  长方形(40, 120, 120, 40);
  椭圆(240, 240, 80, 80);
  三角形(300, 100, 320, 100, 310, 80);

  // 小花
  偏移(580, 200);
  无边界();
  for (var i = 0; i < 10; i ++) {
    椭圆(0, 30, 20, 80);
    旋转(PI/5);
  }
}
```
