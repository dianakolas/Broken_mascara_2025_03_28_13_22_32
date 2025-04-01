
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
  noFill();
  frameRate(2)
}










function draw() {
  background(220);
  offset += 0.02;

  for (let i = 0; i < 7; i++) {
    let x = random(50, width - 50);
    let y = random(150, height - 50);
    drawFlower(x, y, floor(random(5, 10)), random(30, 50));
  }
}

function drawFlower(x, y, petals, size) {
  stroke(0, 150, 0);
  strokeWeight(4);
  line(x, y, x, height);

  noStroke();
  for (let i = 0; i < petals; i++) {
    let angle = TWO_PI / petals * i + sin(offset + i) * 0.2;
    let petalX = x + cos(angle) * size;
    let petalY = y + sin(angle) * size;
    fill(random(150, 255), random(100, 200), random(50, 150));
    ellipse(petalX, petalY, size, size * 1.5);
  }
  
  fill(255, 200, 0);
  ellipse(x, y, size / 2, size / 2);
}
