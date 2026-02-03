const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

function setup() {
  createCanvas(width, height);
  background("gainsboro");
}

function draw() {
  circle(mouseX, mouseY, 30);
}
