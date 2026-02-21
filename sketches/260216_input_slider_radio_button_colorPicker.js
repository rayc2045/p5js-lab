let inputEl,
  sliderEl,
  buttonEl,
  shakeValue = 0,
  colorPickerEl,
  radioEl;

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);

  inputEl = createInput(random(["Hello", "🐝 嗡嗡"]));
  inputEl.position(width / 20, height / 20);
  inputEl.input(userInput);

  sliderEl = createSlider(36, 114, 48, 0.1); // min, max, default, step
  sliderEl.position(width / 20, height / 20 + 50);

  buttonEl = createButton("Shake!");
  buttonEl.style("padding", ".25em .75em");
  buttonEl.style("font-size", ".9em");
  buttonEl.style("cursor", "pointer");
  buttonEl.position(width / 20, height / 20 + 100);
  buttonEl.mousePressed(() => {
    shakeValue = shakeValue === 0 ? random(5, 15) : 0;
  });

  colorPickerEl = createColorPicker("deepskyblue");
  colorPickerEl.style("cursor", "pointer");
  colorPickerEl.position(width / 20, height / 20 + 150);

  radioEl = createRadio();
  radioEl.option("normal");
  radioEl.option("rotate");
  radioEl.option("scale");
  radioEl.style("padding", ".1em .5em .1em.25em");
  radioEl.style("color", "black");
  radioEl.style("background-color", "gainsboro");
  radioEl.style("border-radius", "3px");
  radioEl.position(width / 20, height / 20 + 200);
}

function userInput() {
  if (inputEl.value() === "hello") inputEl.value("✋");
}

function draw() {
  background("black");

  let txt = inputEl.value();
  const fontSize = sliderEl.value(),
    textLength = textWidth(txt) + 10,
    clr = colorPickerEl.value(),
    mode = radioEl.value();

  textSize(fontSize);
  textStyle(BOLD);

  let rowIdx = 0;
  for (let y = 0; y < height; y += 60) {
    push();

    if (rowIdx % 2 === 0) {
      fill(clr);
      translate(textLength / 2, 0);
    } else {
      fill("gold");
    }
    rowIdx++;

    for (let x = 0 - textLength; x < width; x += textLength) {
      push();
      const value = random(-shakeValue, shakeValue);
      translate(x + value, y + value);
      if (mode === "rotate") {
        rotate(sin(frameCount / 20 + y / 10));
      } else if (mode === "scale") {
        scale(sin(frameCount / 20 + y / 10) + 1);
      }
      text(txt, 0, 0);
      pop();
    }

    pop();
  }
}
