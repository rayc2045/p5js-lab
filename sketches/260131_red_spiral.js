function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("black");
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount);
  translate(frameCount, 0);
  const reds = ["crimson", "firebrick"],
    pinks = ["pink", "lightpink"];
  if (frameCount % 5 < 3) fill(random(reds));
  else fill(random(pinks));
  scale(frameCount / 400);
  circle(0, 0, 50);
}
