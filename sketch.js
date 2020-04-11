let bubbles = [];

function setup() {
  createCanvas(600, 400);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');

}

function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, );
  bubbles.push(b);
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].show();
  
}
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
//this.x = this.x + random(-5, 5);
   this.y = this.y + random(-5, 50);
 }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    rect(this.x, this.y,20,20);
  }
}