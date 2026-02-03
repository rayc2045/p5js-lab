// const s = Math.min(innerWidth, innerHeight) * 0.9,
//   width = s,
//   height = s;

const width = 950,
  height = 950;

function setup() {
  createCanvas(width, height);
  background("gainsboro");
}

function draw() {
  flower(width / 2, height / 2, 120, 40, "lightpink");
  flower(mouseX, mouseY, 60, 25);
}

function flower(x, y, w, h, color = "mistyrose") {
  push();
  translate(x, y);
  // ellipseMode(CENTER);
  fill("gold");
  ellipse(0, 0, w / 2.5);
  ellipseMode(CORNER);
  const numOfPetals = 16;
  for (let i = 0; i < numOfPetals; i++) {
    fill(color);
    const gap = w / 4;
    ellipse(gap, -h / 2, w, h);
    line(gap, 0, w + gap, 0);
    rotate(PI / (numOfPetals / 2));
  }
  pop();
}
