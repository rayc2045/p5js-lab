class Ball {
  constructor(args) {
    const {
      r = 50,
      p = {
        x: random(width),
        y: random(height),
      },
      v = {
        x: random(-2, 2),
        y: random(-2, 2),
      },
      clr = random(["steelblue", "crimson", "gold", "snow"]),
    } = args;
    this.r = r;
    this.p = p;
    this.v = v;
    this.clr = clr;
  }
  draw() {
    fill(this.clr);
    ellipse(this.p.x, this.p.y, this.r);
  }
  update() {
    this.v.x *= 0.997;
    this.v.y *= 0.997;
    this.p.x += this.v.x;
    this.p.y += this.v.y;
  }
}

const balls = [];

function setup() {
  const s = min(innerWidth, innerHeight) * 0.9;
  createCanvas(s, s);
  background("gainsboro");

  for (let i = 0; i < width / 30; i++)
    balls.push(
      new Ball({
        r: random(50, 100),
        p: {
          x: width / 2,
          y: height / 2,
        },
      }),
    );
}

function draw() {
  background("black");
  // noStroke();

  for (const ball of balls) {
    ball.draw();
    ball.update();
    // fill(ball.clr);
    // ellipse(ball.p.x, ball.p.y, ball.r);
    // ball.p.x += ball.v.x;
    // ball.p.y += ball.v.y;
  }
}
