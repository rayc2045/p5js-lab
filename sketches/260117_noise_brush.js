function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  // background(0, 1);
}

function mouseMoved() {
  let count = getRandomInt(100, 200),
    r = random(2, 20);
  for (let i = 0; i < count; i++) {
    noStroke();
    fill(
      random((frameCount % 255) + mouseY),
      random(200, 255),
      random(100, 200),
    );
    ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), r);
    r *= 0.9;
  }
}
