function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("black");
}

function draw() {
  // background(0, 1);
}

let isNoise = true;

function mousePressed() {
  isNoise = !isNoise;
}

function mouseMoved() {
  let count = getRandomInt(100, 200),
    delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY)) * 5,
    r = random(2, 20);
  for (let i = 0; i < count; i++) {
    noStroke();
    if (isNoise) {
      fill(
        random((frameCount % 255) + mouseY),
        random(200, 255),
        random(100, 200),
      );
      ellipse(
        mouseX + random(-delta, delta),
        mouseY + random(-delta, delta),
        r,
      );
      r *= 0.9;
    } else {
      ellipse(mouseX, mouseY, 50, 50);
    }
  }
}
