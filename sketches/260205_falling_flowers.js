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
  flowers = [],
  appendFlower = (x, y) => {
    flowers.push({
      x: x || random(width),
      y: y || -120,
      size: random(sizes),
      stamenColor: random(stamenColors),
      petalColor: random(petalColors),
      angle: random(15),
      angularVelocity: random(0.002, 0.006) * random([1, -1]),
      velocity: random(1, 3),
    });
  };

function setup() {
  createCanvas(width, height);
  appendFlower();
}

function draw() {
  if (frameCount % 80 === 0) appendFlower();
  background("gainsboro");

  for (let i = 0; i < flowers.length; i++) {
    push();

    const {
      x,
      y,
      size,
      stamenColor,
      petalColor,
      angle,
      angularVelocity,
      velocity,
    } = flowers[i];

    translate(x, y);
    rotate(angle);
    flowers[i].angle += angularVelocity;

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
    fill(stamenColor);
    // ellipseMode(CENTER);
    ellipse(0, 0, w / 2.5);
    ellipseMode(CORNER);
    const numOfPetals = 16,
      gap = w / 4;
    for (let i = 0; i < numOfPetals; i++) {
      fill(petalColor);
      ellipse(gap, -h / 2, w, h);
      line(gap, 0, w + gap, 0);
      rotate(PI / (numOfPetals / 2));
    }

    flowers[i].y += velocity;
    if (flowers[i].y > height + w + gap) flowers.splice(i, 1);

    pop();
  }
}

const position = [0, 0];

function mouseMoved() {
  const [posX, posY] = position;
  if (
    mouseX >= 0 &&
    mouseX <= width &&
    mouseY >= 0 &&
    mouseY <= height &&
    dist(mouseX, mouseY, posX, posY) >= 160
  ) {
    appendFlower(mouseX, mouseY);
    position.length = 0;
    position.push(mouseX, mouseY);
  }
}
