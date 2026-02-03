const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

function setup() {
  createCanvas(width, height);
  background("gainsboro");
}

function draw() {
  background(0);
  for (let i = 0; i < 50; i++) {
    noFill();
    strokeWeight(5);
    stroke(map(i, 0, 10, 0, 255), 0, 255);
    ellipse(
      width / 2,
      height / 2,
      800 - i * 25 - i * map(mouseX, 0, width, 0, 20),
    );
  }
}
