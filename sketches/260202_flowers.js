const stamenColors = getColorNames(
    "pink+lightyellow+lemonchiffon+papayawhip+moccasin+peachpuff+gold+palegoldenrod+khaki+cornsilk+blanchedalmond+beige+seashell+oldlace+floralwhite+ivory+antiquewhite+linen+lavenderblush+mistyrose",
  ),
  petalColors = getColorNames(
    "indianred+lightcoral+salmon+darksalmon+lightsalmon+lightpink+lightpink+hotpink+palevioletred+coral+tomato+orangered+darkorange+orange+gold+darkseagreen+mediumaquamarine+lightseagreen+paleturquoise+aquamarine+turquoise+mediumturquoise+darkturquoise+cadetblue+lightsteelblue+powderblue+lightblue+skyblue+lightskyblue+cornflowerblue+lavender+thistle+plum+violet+orchid+mediumorchid+mediumpurple+sandybrown+antiquewhite+mistyrose",
  ),
  petalSize = { min: 5, max: 120 },
  flowers = [],
  createRandomFlower = (x, y) => {
    flowers.push({
      x: x || random(width),
      y: y || random(height),
      size: petalSize.min,
      maxSize: random(60, petalSize.max),
      rotateDirection: random([1, -1]),
      stamenColor: random(stamenColors),
      petalColor: random(petalColors),
    });
  };

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("gainsboro");
  createRandomFlower();
}

function draw() {
  background("gainsboro");

  if (frameCount % parseInt(random(20, 50)) === 0) createRandomFlower();

  const maxNumberOfFlowers = parseInt(width / 50);

  for (let i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i]);
    const { x, y, size, maxSize } = flowers[i];
    if (i >= flowers.length - maxNumberOfFlowers) {
      flowers[i].size = lerp(size, maxSize, 0.1);
    } else {
      flowers[i].size = lerp(size, petalSize.min, 0.03);
      if (parseInt(flowers[i].size) === petalSize.min) flowers.splice(i, 1);
    }
  }
}

function mouseClicked() {
  createRandomFlower(mouseX, mouseY);
}

function drawFlower({
  x,
  y,
  size,
  maxSize,
  rotateDirection,
  stamenColor,
  petalColor,
}) {
  push();

  translate(x, y);
  rotate(
    lerp(petalSize.min / maxSize, size / maxSize, maxSize / petalSize.max) *
      rotateDirection,
  );
  fill(stamenColor);
  // ellipseMode(CENTER);
  ellipse(0, 0, size / 2.5);

  ellipseMode(CORNER);
  const numOfPetals = 16,
    h = 35;
  for (let i = 0; i < numOfPetals; i++) {
    fill(petalColor);
    const gap = size / 5;
    ellipse(gap, -h / 2, size, h);
    line(gap, 0, size + gap, 0);
    rotate(PI / (numOfPetals / 2));
  }

  pop();
}
