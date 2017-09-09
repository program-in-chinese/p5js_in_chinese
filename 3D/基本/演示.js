
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
  normalMaterial();
  
  偏移(-240, -100, 0);
  绘制三维物体(function() {
    plane(70);
  });

  偏移(240, 0, 0);
  绘制三维物体(function() {
    box(70, 70, 70);
  });

  偏移(240, 0, 0);
  绘制三维物体(function() {
    cylinder(70, 70);
  });
  
  偏移(-240 * 2, 200, 0);
  绘制三维物体(function() {
    cone(70, 70);
  });
  
  偏移(240, 0, 0);
  绘制三维物体(function() {
    torus(70, 20);
  });
  
  偏移(240, 0, 0);
  绘制三维物体(function() {
    sphere(70);
  });
}

function 绘制三维物体(绘制方法) {
  保存状态();
  三维旋转()
  绘制方法();
  恢复状态();
}

function 三维旋转() {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}