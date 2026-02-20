let inputEl,
  sliderEl,
  buttonEl,
  randomValue = 0,
  colorPickerEl,
  radioElement;

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);

  inputEl = createInput(random(["Hello", "🐝 嗡嗡"]));
  inputEl.position(width / 20, height / 20);

  sliderEl = createSlider(36, 114, 48, 0.1); // min, max, default, step
  sliderEl.position(width / 20, height / 20 + 50);

  buttonEl = createButton("Shake!");
  buttonEl.position(width / 20, height / 20 + 100);
  buttonEl.mousePressed(() => {
    randomValue = randomValue === 0 ? random(5, 15) : 0;
  });

  colorPickerEl = createColorPicker("deepskyblue");
  colorPickerEl.position(width / 20, height / 20 + 150);

  radioElement = createRadio();
  radioElement.option("normal");
  radioElement.option("rotate");
  radioElement.option("scale");
  radioElement.style("padding", ".1em .25em");
  radioElement.style("color", "black");
  radioElement.style("background-color", "gainsboro");
  radioElement.position(width / 20, height / 20 + 200);
}

function draw() {
  background("black");

  let txt = inputEl.value();
  const sliderValue = sliderEl.value(),
    selectedColor = colorPickerEl.value(),
    textLength = textWidth(txt) + 10,
    mode = radioElement.value();

  if (txt === "hello") txt = "✋";
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
      push();
      const value = random(-randomValue, randomValue);
      translate(x + value, y + value);
      if (mode === "rotate") rotate(sin(frameCount / 20 + y / 10));
      else if (mode === "scale") scale(sin(frameCount / 20 + y / 10) + 1);
      text(txt, 0, 0);
      pop();
    }

    pop();
  }
}
