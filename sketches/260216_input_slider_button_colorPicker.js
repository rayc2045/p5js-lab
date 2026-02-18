let inputEl,
  sliderEl,
  buttonEl,
  randomValue = 0,
  colorPickerEl;

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);

  inputEl = createInput("Hello");
  inputEl.position(width / 20, height / 20);

  sliderEl = createSlider(36, 114, 48, 0.1); // min, max, default, step
  sliderEl.position(width / 20, height / 20 + 50);

  buttonEl = createButton("Shake!");
  buttonEl.position(width / 20, height / 20 + 100);
  buttonEl.mousePressed(() => {
    randomValue = randomValue === 0 ? random(5, 15) : 0;
  });

  colorPickerEl = createColorPicker("crimson");
  colorPickerEl.position(width / 20, height / 20 + 150);
}

function draw() {
  background("black");

  const txt = inputEl.value(),
    sliderValue = sliderEl.value(),
    selectedColor = colorPickerEl.value(),
    textLength = textWidth(txt) + 10;

  textSize(sliderValue);
  textStyle(BOLD);

  let rowIdx = 0;
  for (let y = 0; y < height; y += 60) {
    push();

    rowIdx++;
    if (rowIdx % 2 === 0) {
      fill(selectedColor);
      translate(textLength / 2, 0);
    } else {
      fill("gold");
    }

    for (let x = 0 - textLength; x < width; x += textLength) {
      const value = random(-randomValue, randomValue);
      text(txt, x + value, y + value);
    }

    pop();
  }
}
