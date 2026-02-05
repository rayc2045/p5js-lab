const s = Math.min(innerWidth, innerHeight) * 0.9,
  width = s,
  height = s;

const sizes = ["XS", "S", "M", "L"],
  stamenColors = [
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
  createRandomFlower = (x, y) => {
    createFlower(x, y, {
      size: random(sizes),
      stamenColor: random(stamenColors),
      petalColor: random(petalColors),
    });
  };

let rate = 3;

function setup() {
  createCanvas(width, height);
  background("gainsboro");
  frameRate(rate);
  createRandomFlower();
}

function draw() {
  createRandomFlower();
  rate = random(1, 6);
  frameRate(rate);
}

function mouseClicked() {
  createRandomFlower(mouseX, mouseY);
}

function createFlower(x, y, config = {}) {
  push();

  x ||= random(width);
  y ||= random(height);
  translate(x, y);

  const { size = "M", stamenColor = "gold", petalColor = "pink" } = config;
  let w, h;
  if (size === "XS") {
    w = 30;
    h = 12;
  } else if (size === "S") {
    w = 50;
    h = 20;
  } else if (size === "M") {
    w = 80;
    h = 30;
  } else {
    w = 120;
    h = 40;
  }

  rotate(random(15));
  fill(stamenColor);
  // ellipseMode(CENTER);
  ellipse(0, 0, w / 2.5);

  ellipseMode(CORNER);
  const numOfPetals = 16;
  for (let i = 0; i < numOfPetals; i++) {
    fill(petalColor);
    const gap = w / 4;
    ellipse(gap, -h / 2, w, h);
    line(gap, 0, w + gap, 0);
    rotate(PI / (numOfPetals / 2));
  }

  pop();
}
