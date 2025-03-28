function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(100);
  background(220);
}

function draw() {
  push();
  fill(random(0,255),random(0,255),random(0,255));
  translate(width/2,height/2);
  rotate(-radians(frameCount));
  rect(10,100,100,100);
  pop();
  
  push();
  translate(width/2,height/2);
  rotate(radians(frameCount));
  rect(random(0,10),random(0,10),random(0,10));
  pop();
}