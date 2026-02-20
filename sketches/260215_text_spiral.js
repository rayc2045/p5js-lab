const txt = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
}

function draw() {
  background("gainsboro");
  translate(width / 2, height / 2);

  for (let i = 0; i < width; i++) {
    const ang = i / 10 + frameCount / 1000,
      r = i + noise(i / 10) * map(mouseX, 0, width, 0, 100);
    textFont("monospace");
    textSize(width / 50 + i / 20);
    // textWeight(700);
    text(txt[i % txt.length], r * cos(ang), r * sin(ang));
  }
}
