function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("black");
}

function draw() {
  background(0, 10);
  translate(mouseX + 50, mouseY);
  rotate(frameCount / 10);
  scale(map(mouseX, 0, width, -PI / 2, PI / 2));
  shearX(map(mouseY, 0, height, -PI / 2, PI / 2));
  stroke(3);
  rect(0, 0, 200);

  // translate(width / 2, height / 2);
  // rotate(frameCount);
  // translate(frameCount, 0);
  // if (frameCount % 5 < 3) fill("gold");
  // else fill("royalblue");
  // scale(frameCount / 400);
  // rect(0, 0, 50);
}
