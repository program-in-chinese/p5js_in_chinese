function 构图(){
  新画布(710, 400, WEBGL);

  //saveFrames("3D_", "png", 10, 1);
}
/*
function mousePressed() {
  saveFrames("3D_", "png", 1, 1);
}
*/
function 绘制(){
  背景色(250);
  普通质地();
  
  绘制三维物体(-240, -100, function() {
    平面(70);
  });

  绘制三维物体(240, 0, function() {
    立方体(70, 70, 70);
  });

  绘制三维物体(240, 0, function() {
    圆柱(70, 70);
  });
  
  绘制三维物体(-240 * 2, 200, function() {
    圆锥(70, 70);
  });
  
  绘制三维物体(240, 0, function() {
    环体(70, 20);
  });
  
  绘制三维物体(240, 0, function() {
    球体(70);
  });
}

function 绘制三维物体(x偏移, y偏移, 绘制方法) {
  偏移(x偏移, y偏移);
  保存状态();
  三维旋转()
  绘制方法();
  恢复状态();
}

function 三维旋转() {
  var 旋转速度 = 帧序号() * 0.01;
  rotateZ(旋转速度);
  rotateX(旋转速度);
  rotateY(旋转速度);
}