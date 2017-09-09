
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
  
  绘制三维物体(-240, -100, function() {
    plane(70);
  });

  绘制三维物体(240, 0, function() {
    box(70, 70, 70);
  });

  绘制三维物体(240, 0, function() {
    cylinder(70, 70);
  });
  
  绘制三维物体(-240 * 2, 200, function() {
    cone(70, 70);
  });
  
  绘制三维物体(240, 0, function() {
    torus(70, 20);
  });
  
  绘制三维物体(240, 0, function() {
    sphere(70);
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
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}