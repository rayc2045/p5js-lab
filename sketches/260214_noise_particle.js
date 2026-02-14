const particles = [];

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("black");
  colorMode(HSB);

  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      particles.push({
        x,
        y,
        clr: color(noise(x / 50, y / 50) * 360, 100, 80),
      });
    }
  }
}

function draw() {
  noStroke();
  background(0, 0.01);

  for (let i = 0; i < particles.length; i++) {
    const { x, y, clr } = particles[i],
      weight = 3,
      speed = 1;
    fill(clr);
    circle(x, y, weight);
    particles[i].x += (noise(x / 200, y / 200, 1000) - 0.5) * speed;
    particles[i].y += (noise(x / 200, y / 200, 10000) - 0.5) * speed;
  }
}
