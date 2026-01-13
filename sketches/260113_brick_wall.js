function setup() {
  createCanvas(800, 800);
  background("rosybrown");
}

let x = -10,
  y = 10,
  h = 20,
  gap = 8;

function draw() {
  let w = random(h * 1.5, h * 4);

  if (frameCount % 5 === 0) fill("silver");
  else if (w > h * 3) fill("darkred");
  else if (w > h * 2) fill("firebrick");
  else fill("crimson");

  rect(x, y, w, h);
  x += w + gap;

  if (x >= 800 - gap && y < 800 - h - gap * 2) {
    x = random(-gap, -gap * 2);
    y += h + gap;
  }
}
