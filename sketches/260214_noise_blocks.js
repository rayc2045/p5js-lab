function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  frameRate(20);
}

function draw() {
  noStroke();

  const w = 40,
    s = 50;

  for (let i = 0; i < width; i += w) {
    for (let j = 0; j < height; j += w) {
      fill(int((noise(i / 200, j / 200, frameCount / 100) * 255) / s) * s);
      rect(i, j, w, 200);
    }
  }
}
