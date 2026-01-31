const width = 950,
  height = 950;

function setup() {
  createCanvas(width, height);
  background("black");
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount);
  translate(frameCount, 0);
  const reds = ["crimson", "firebrick"],
    pinks = ["pink", "lightpink"];
  if (frameCount % 5 < 3) fill(getRandomItem(reds));
  else fill(getRandomItem(pinks));
  scale(frameCount / 400);
  circle(0, 0, 50);
}
