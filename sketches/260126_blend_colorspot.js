const colors = ["tomato", "darkturquoise", "gold", "black", "forestgreen"];

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("black");
  // frameRate(10);
}

function draw() {
  blendMode(SCREEN);
  const clr = random(colors); // colors[int(frameCount / 2) % 5];
  fill(clr);
  ellipse(mouseX, mouseY, random(0, 100));
}
