function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("darkslategray");
  noStroke();

  let count = 0;
  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      count++;
      fill(random(200, 255), random(255), random(255));
      stroke(random(200, 255), random(255), random(255));
      strokeWeight(3);

      if (count % 5 < 4) {
        rect(x, y, 40, 40, 5);

        if (random() < 0.5) {
          noStroke();
          fill("darkslategray");
          ellipse(x + 20, y + 20, 20);

          if (random() < 0.5) {
            fill(random(200, 255), random(255), random(255));
            ellipse(x + 20, y + 20, 10);
          }
        }
      }
    }
  }
}

function draw() {}
