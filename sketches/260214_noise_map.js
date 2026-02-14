function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  frameRate(20);
}

function draw() {
  noStroke();
  colorMode(HSB);

  const w = 10;

  for (let i = 0; i < width; i += w) {
    for (let j = 0; j < height; j += w) {
      fill(noise(i / 100, j / 100, frameCount / 100) * 400, 80, 80);
      rect(i, j, noise(i / 100, j / 100, frameCount / 100) * 20);
    }
  }
}
