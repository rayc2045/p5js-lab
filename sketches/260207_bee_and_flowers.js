const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

const stamenColors = [
    "pink",
    "lightyellow",
    "lemonchiffon",
    "papayawhip",
    "moccasin",
    "peachpuff",
    "gold",
    "palegoldenrod",
    "khaki",
    "cornsilk",
    "blanchedalmond",
    "beige",
    "seashell",
    "oldlace",
    "floralwhite",
    "ivory",
    "antiquewhite",
    "linen",
    "lavenderblush",
    "mistyrose",
  ],
  petalColors = [
    "indianred",
    "lightcoral",
    "salmon",
    "darksalmon",
    "lightsalmon",
    "lightpink",
    "lightpink",
    "hotpink",
    "palevioletred",
    "coral",
    "tomato",
    "orangered",
    "darkorange",
    "orange",
    "gold",
    "darkseagreen",
    "mediumaquamarine",
    "lightseagreen",
    "paleturquoise",
    "aquamarine",
    "turquoise",
    "mediumturquoise",
    "darkturquoise",
    "cadetblue",
    "lightsteelblue",
    "powderblue",
    "lightblue",
    "skyblue",
    "lightskyblue",
    "cornflowerblue",
    "lavender",
    "thistle",
    "plum",
    "violet",
    "orchid",
    "mediumorchid",
    "mediumpurple",
    "sandybrown",
    "antiquewhite",
    "mistyrose",
  ],
  petalSize = { min: 5, max: 120 },
  flowers = [],
  createRandomFlower = () => {
    flowers.push({
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.1, height * 0.9),
      size: petalSize.min,
      maxSize: random(60, petalSize.max),
      rotateDirection: random([1, -1]),
      stamenColor: random(stamenColors),
      petalColor: random(petalColors),
    });
  },
  position = {
    mouse: { x: 0, y: 0 },
    bee: { x: 0, y: 0 },
  };

function setup() {
  createCanvas(width, height);
  background("gainsboro");
  const num = parseInt(width / 50);
  for (let i = 0; i < num; i++) createRandomFlower();
  position.mouse.x = position.bee.x = -width / 10;
  position.mouse.y = position.bee.y = height / 2;
}

function mouseMoved() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    position.mouse.x = mouseX;
    position.mouse.y = mouseY;
  }
}

function draw() {
  background("gainsboro");

  for (let i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i]);
    const { x, y, size, maxSize } = flowers[i];
    if (dist(position.bee.x, position.bee.y, x, y) <= maxSize)
      flowers[i].size = lerp(size, maxSize, 0.1);
    else flowers[i].size = lerp(size, petalSize.min, 0.05);
  }

  position.bee.x = lerp(position.bee.x, position.mouse.x, 0.05) + random(-3, 3);
  position.bee.y = lerp(position.bee.y, position.mouse.y, 0.05) + random(-3, 3);
  drawBee(position.bee);
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

function drawBee({ x, y }) {
  push();

  translate(x, y);

  strokeWeight(2);
  stroke("dimgray");
  fill("silver");
  ellipse(-7, -20, 20, 30);
  ellipse(5, -20, 20, 30);

  strokeWeight(3);
  stroke("saddlebrown");
  fill("gold");
  ellipse(0, 0, 50, 30);

  strokeWeight(5);
  stroke("sienna");
  line(-12, -10, -12, 10);
  line(0, -12, 0, 12);
  line(12, -10, 12, 10);

  pop();
}
