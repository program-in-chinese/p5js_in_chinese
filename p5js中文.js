function setup() {
	构图();
}

function 构图() {};

function draw() {
	绘制();
}

function 绘制() {};

function 椭圆(中心x位置, 中心y位置, 宽, 高) {
	ellipse(中心x位置, 中心y位置, 宽, 高);
}

function 新画布(宽, 高) {
	createCanvas(宽, 高);
}

function 背景色(灰度) {
	background(灰度);
}

function 填色(r, g, b, alpha) {
	fill(r, g, b, alpha);
}

function 笔色(r, g, b) {
	stroke(r, g, b);
}

function 长方形(x位置, y位置, 宽, 高) {
	rect(x位置, y位置, 宽, 高);
}

function 三角形(x1, y1, x2, y2, x3, y3) {
	triangle(x1, y1, x2, y2, x3, y3);
}

function 偏移(x, y) {
	translate(x, y);
}

function 无边界() {
	noStroke();
}

function 旋转(角度) {
	rotate(角度);
}