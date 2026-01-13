function setup() {
  createCanvas(800, 800);
  background(220);
}

let r = 100,
  d = r * 2;
let x = 50,
  y = 50,
  vx = 10,
  vy = 10;
const w = 0.5, // 常量重力
  bounce = 0.9, // 彈性係數，小於 1 以損失能量
  drag = 0.001, // 空氣阻力係數
  friction = 0.99, // 地面摩擦
  threshold = 0.1; // 停止閾值

function draw() {
  background("gainsboro");
  ellipse(x, y, d);
  vy += w;

  // 施加空氣阻力 (反向於速度，比例於速度平方)
  const s = sqrt(vx ** 2 + vy ** 2);
  if (s > 0) {
    let dragForce = drag * s ** 2;
    vx -= (vx / s) * dragForce;
    vy -= (vy / s) * dragForce;
  }

  x += vx;
  y += vy;

  if (x - r < 0) {
    x = r;
    vx *= -bounce;
  } else if (x + r > width) {
    x = width - r;
    vx *= -bounce;
  }

  if (y - r < 0) {
    y = r;
    vy *= -bounce;
  } else if (y + r > height) {
    y = height - r;
    vy *= -bounce;
    vx *= friction;
  }

  // 若速度過小，停止以模擬靜止
  if (abs(vx) < threshold && abs(vy) < threshold && y + r >= height)
    vx = vy = 0;
}
