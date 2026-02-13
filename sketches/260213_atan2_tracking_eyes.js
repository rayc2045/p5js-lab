function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("gainsboro");
}

function draw() {
  for (let i = 50; i < width; i += 100) {
    for (let j = 50; j < height; j += 100) {
      drawEye({ x: i, y: j, size: 80 });
    }
  }
}

function drawEye({ x, y, size }) {
  push();

  translate(x, y);

  fill("white");
  ellipse(0, 0, size);

  fill("black");
  const angle = atan2(mouseY - y, mouseX - x);
  rotate(angle);
  ellipse(size / 4, 0, size / 2);

  pop();
}
