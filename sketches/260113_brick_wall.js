const [width, height] = [800, 800];

function setup() {
  createCanvas(width, height);
  background("rosybrown");
}

let gap = 8,
  h = 20,
  x = -10,
  y = height - h / 4;

function draw() {
  let w = random(h * 1.5, h * 4);

  if (frameCount % 9 === 0) fill("silver");
  else if (w > h * 3) fill("darkred");
  else if (w > h * 2) fill("firebrick");
  else fill("crimson");

  if (x < width && y >= -gap - h) {
    rect(x, y, w, h);
    x += w + gap;
  } else {
    y -= h + gap;
    x = random(-gap, -gap * 2);
  }
}
