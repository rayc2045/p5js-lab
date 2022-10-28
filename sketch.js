function setup() {
  createCanvas(500, 500)
  // background(220)
}

function draw() {
  background(mouseX, 207, 150 + frameCount / 5, 20)
  fill(255, mouseX - 200, 255 - mouseY)
  ellipse(mouseX, mouseY, 80, 80)
}