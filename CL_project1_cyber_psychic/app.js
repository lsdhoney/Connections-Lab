//background music by Idex Object LLC
// tarot API: https://github.com/ekelen/tarot-api/blob/main/static/card_data.json

window.addEventListener('load', function () {
  fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      tarotData = data;

    })
    .catch(error => {
      // handle what went wrong
    });
})



/*--------p5 codes----------*/

let tarotData;
let pickimg;
let cards = [];
let canvas;
let alpha = 255;
let myFont;



function preload() {
  myFont = loadFont("font/Nintendo-DS-BIOS.ttf");
  pickimg = loadImage("media/pick.gif");
}

function setup() {
  canvas = createCanvas(700, 300);

  for (let i = 0; i < 18; i++) {
    let x = random(56, width - 56);
    let y = random(96, height * 3);
    cards[i] = new Card(x, y);
  }

}



function draw() {
  background(12);

  //display name + meaning of a random card
  if (tarotData) {
    push();
    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    textFont(myFont);
    text(tarotData.cards[0].name, width / 2, 50);

    let s = tarotData.cards[0].meaning_up;
    text(s, width / 2, 300, 500, 400);
    pop();
  }

  //rect covering the text
  rectMode(CENTER);
  noStroke;
  fill(0, alpha);
  rect(350, 150, 700, 300);


  //displaying cards
  for (let i = 0; i < cards.length; i++) {

    cards[i].show(mouseX, mouseY);
    cards[i].move();

  }

  //rect white frame
  rectMode(CENTER);
  stroke(255);
  noFill();
  rect(350, 150, 700, 300);


  //pick a card text gif
  imageMode(CENTER);
  tint(255, alpha);
  image(pickimg, width / 2, 45, 90, 20);

  //text prompt
  stroke(255, alpha);
  fill(0, alpha);
  rectMode(CENTER);
  rect(width / 2, 20, 220, 20, 5);

  noFill();
  rect(width / 2, 45, 89, 20, 5);

  noStroke();
  textFont('nintendo');
  fill(255, alpha);
  textAlign(CENTER);
  textSize(20);
  text('meditate on your question and...', width / 2, 25);

}

function mousePressed() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].clicked(mouseX, mouseY);
  }

}

class Card {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  contains(mx, my) {
    return mx > this.x - 28 &&
      mx < this.x + 28 &&
      my > this.y - 48 &&
      my < this.y + 48
  }

  show(mx, my) {
    if (this.contains(mx, my)) {
      fill(122, 149, 152);
    } else {
      fill(20);
    }

    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, 56, 96, 5);

    noFill();
    rect(this.x, this.y, 50, 90, 5);
    circle(this.x, this.y - 8, 30);
    circle(this.x, this.y - 10, 30);
    circle(this.x, this.y - 12, 30);
    circle(this.x, this.y - 14, 30);
    circle(this.x, this.y + 8, 30);
    circle(this.x, this.y + 10, 30);
    circle(this.x, this.y + 12, 30);
    circle(this.x, this.y + 14, 30);
  }



  clicked(x, y) {

    if (this.contains(x, y)) {
      console.log("ja");
      cards = [];
      alpha = 0;

    }

  }

  move() {

    if (this.y > -95) {
      this.y = this.y - 0.1;
    } else {
      this.y = height + 95;
    }
  }

}



