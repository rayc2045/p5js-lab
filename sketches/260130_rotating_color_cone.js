const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

function setup() {
  createCanvas(width, height);
  // background("gainsboro");
}

function draw() {
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(frameCount);

  colorMode(HSB);
  const clr1 = color("gold"),
    clr2 = color(frameCount % 360, 80, 80);

  for (let i = 0; i < 8; i++) {
    rotate((i / 8) * 360);
    push();

    const scaleDelta = random(0.9, 0.98);
    for (let i = 0; i < 100; i++) {
      fill(lerpColor(clr1, clr2, i / 80));
      circle(0, 0, 100);
      translate(10, 10);
      scale(scaleDelta);
    }

    pop();
  }
}
