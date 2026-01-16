const [width, height] = [800, 800];

function setup() {
  createCanvas(width, height);
  background("rosybrown");
}

let gap = 8,
  h = 20,
  x = -10,
  y = height - h / 5;

function draw() {
  if (x < width && y > -h) {
    const n = Number(random() <= 0.25),
      w = random(h * 1.5, h * 4);
    let brickColor = "crimson";
    if (frameCount % 9 <= n) brickColor = "silver";
    else if (w > h * 3) brickColor = "darkred";
    else if (w > h * 2) brickColor = "firebrick";
    fill(brickColor);
    rect(x, y, w, h);
    x += w + gap;
  } else {
    y -= h + gap;
    x = random(-gap, -gap * 2);
  }
}
