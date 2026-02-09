function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("gainsboro");
}

function mousePressed() {
  let count = getRandomInt(5, 15),
    r = random(50, 200);
  for (let i = 0; i < count; i++) {
    fill(random(255), random(200, 255), random(100, 200));
    ellipse(mouseX + i * 10, mouseY, r);
    r *= 0.95;
  }
}
