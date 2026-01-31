const width = 950,
  height = 950;

function setup() {
  createCanvas(width, height);
  background("black");
}

function draw() {
  // background(0, 10);
  // translate(mouseX, mouseY);
  // translate(50, 0);
  // rotate(frameCount / 10);
  // scale(map(mouseX, 0, width, -PI / 2, PI / 2));
  // shearX(map(mouseY, 0, height, -PI / 2, PI / 2));
  // stroke(3);
  // rect(0, 0, 200);

  translate(width / 2, height / 2);
  rotate(frameCount);
  translate(frameCount, 0);
  if (frameCount % 5 < 3) fill("gold");
  else fill("royalblue");
  scale(frameCount / 400);
  rect(0, 0, 50);
}
