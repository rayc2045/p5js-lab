function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
}

function draw() {
  background("black");
  colorMode(HSB);

  translate(width / 2, height / 2);

  for (let j = -height / 2; j < height / 2; j += 100) {
    for (let i = -width / 2; i < width / 2; i += 20) {
      const delta = map(i, -width / 2, width / 2, 0, 5 + mouseY / 50),
        ratio = map(
          sin(frameCount / 50 + delta + j + mouseY / 50),
          -1,
          1,
          0,
          0.5,
        ),
        d = (sin(frameCount / 50 + delta + j / 20) + 1) * 60 + 15; // 倍數 + 初始值;
      fill(360 * ratio, 80, 80);
      ellipse(i, ratio * 100 + j, d);
    }
  }
}
