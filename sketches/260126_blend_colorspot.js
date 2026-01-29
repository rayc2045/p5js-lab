const width = 950,
  height = 950;

const colors = ["tomato", "darkturquoise", "gold", "black", "forestgreen"];

function setup() {
  createCanvas(width, height);
  background("black");
  // frameRate(10);
}

function draw() {
  blendMode(SCREEN);
  const clr = random(colors); // colors[int(frameCount / 2) % 5];
  fill(clr);
  ellipse(mouseX, mouseY, random(0, 100));
}
