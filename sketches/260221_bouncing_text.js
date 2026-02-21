const txts = [];

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("gainsboro");
}

function keyPressed() {
  if (/^[A-Za-z0-9]$/.test(key)) {
    txts.push({
      content: key.toUpperCase(),
      color: random(["indianred", "steelblue", "goldenrod"]),
      x: width / 2,
      y: height / 5,
      vx: random(-2, 2),
      vy: 0,
      bounceCount: 0,
    });
  }
}

function draw() {
  background("gainsboro");
  const s = min(innerWidth, innerHeight);
  textSize(s / 15);
  textStyle(BOLD);

  if (!txts.length) {
    const txt = "Press anys key to start";
    fill("dimgray");
    textSize(s / 20);
    text(txt, width / 2 - textWidth(txt) / 2, height / 2 + textSize() / 2);
    return;
  }

  txts.forEach((txt, idx) => {
    if (
      txt.x < -textSize() ||
      txt.x > width + textSize() ||
      txt.y > height + textSize()
    )
      return txts.splice(idx, 1);

    fill(txt.color);
    text(txt.content, txt.x, txt.y);
    txt.x += txt.vx;
    txt.y += txt.vy;
    txt.vy += 0.1;
    if (txt.y > height) {
      if (txt.bounceCount < 6) txt.vy = -abs(txt.vy / 1.5);
      txt.bounceCount++;
    }
  });
}
