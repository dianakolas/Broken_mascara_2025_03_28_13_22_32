let scene = 1;
let offset = 0;
function windowResized() {
  let width = document.querySelector("#sketch-div").clientWidth;
  let height = document.querySelector("#sketch-div").clientHeight;
  resizeCanvas(width, height);
  updateGrid(); // Пересчитываем сетку при изменении размера окна
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-div');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  rectMode(CENTER);
  noFill();
}






function draw() {
 if (frameCount % 50==0){
if (scene < 2){
  scene++;
} else {
  scene = 1;
}
 }
 if (scene ==1) { 
scene1();
 }
 if (scene== 2){
  scene2();
 }
}
function scene1(){

  background(255);
  stroke(0);
  
  offset += 0.02;

  for (let y = 50; y <= height; y += 50) {
    beginShape();
    for (let x = 0; x <= width; x += 20) {
      let wave = sin(TWO_PI * x / 100 + y * 0.1 + offset) * 20;
      vertex(x, y + wave);
    }
    endShape();
  }

  for (let x = 0; x <= width; x += 50) {
    beginShape();
    for (let y = 0; y <= height; y += 20) {
      let wave = cos(TWO_PI * y / 100 + x * 0.1 + offset) * 20;
      vertex(x + wave, y);
    }
    endShape();
  }




}

function scene2() {
  background(220);
  
  for (let x = 0; x < width; x += 20) {
    let offset = sin(frameCount * 0.05 + x * 0.1) * 20; 
    let weight = map(sin(frameCount * 0.05 + x * 0.1), -1, 1, 1, 5); // 
    strokeWeight(weight);
    line(x + offset, 0, x + offset, height);
  }
}
