const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

function setup() {
  createCanvas(width, height);
  background("gainsboro");
}

let x = 0,
  y = 0,
  d = 0;

function draw() {
  // x = random(width);
  // y = random(height);
  d = mouseX / 30;
  x += random(-d, d);
  y += random(-d, d);
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  const R = map(mouseX, 0, width, 0, 255, true);
  // log(R);
  fill(R, 0, 0);
  circle(x, y, 50);
}
