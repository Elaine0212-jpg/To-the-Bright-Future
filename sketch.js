let stars = [];
let bigstars = [];
let offsetX = 0;
let mainScreen = "main";
let baseSize = 100;
let sizeBoost;
let starColor;
let rotation2 = 0;
let mainImg;
let star1Snd;
let star1Img1;
let star1Img2;
let star1Img3;
let star1Img4;
let star2Snd;
let star2Img;
let star3Snd;
let star3Img;
let star4Snd;
let star4Img;
let star5Snd;
let star5Img;
let star6Snd1;
let star6Snd2;
let star6Snd3;
let star6Snd4;
let star6Snd5;
let time1 = 0;

function preload(){
  mainImg = loadImage('doji.png');
  star1Snd = loadSound('star1Snd.mp3');
  star1Img1 = loadImage('小孩.jpg');
  star1Img2 = loadImage('cook.jpg');
  star1Img3 = loadImage('TV.jpg');
  star1Img4 = loadImage('飞屋环游记.jpg');
  star1Img5 = loadImage('irasutoya.jpg');
  star2Snd = loadSound('star2Snd.mp3')
  star2Img = loadImage('卫星.jpg');
  star3Snd = loadSound('star3Snd.MP3');
  star3Img = loadImage('生命.jpg');
  star4Snd = loadSound('star4Snd.mp3');
  star4Img = loadImage('history.jpg');
  star5Snd = loadSound('star5Snd.mp3');
  star5Img = loadImage('AI.jpg');
  star6Snd1 = loadSound('star6Snd1.mp3');
  star6Snd2 = loadSound('star6Snd2.mp3');
  star6Snd3 = loadSound('star6Snd3.MP3');
  star6Snd4 = loadSound('star6Snd4.mp3');
  star6Snd5 = loadSound('star6Snd5.mp3');
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent('main-wrapper');
  background(10, 10, 30);
  starColor = color(231, 231, 156);
  noStroke();

  for (let i = 0; i < 500; i++) {
    stars.push(new Star());
  }

  addBigstar(190, 150, 60, "star1");
  addBigstar(400, 80, 45, "star2");
  addBigstar(650, 170, 90, "star3");
  addBigstar(580, 350, 60, "star4");
  addBigstar(240, 390, 73, "star5");
}

function addBigstar(x, y, size, ScreenNum) {
  bigstars.push(new Bigstar(x, y, size, ScreenNum));
}

function draw() {
  background(10, 10, 30);
  if (mouseX < width / 3 && mouseY < height - 100 && mouseY >= 200) {
    offsetX += 2; 
  } else if (mouseX > 2 * width / 3 && mouseY < height - 100 && mouseY >= 200) {
    offsetX -= 2; 
  }

  
  if (mainScreen === "main") {
    drawMainScreen();
  } else if (mainScreen === "star1") {
    drawStar1Screen();
  } else if (mainScreen === "star2") {
    drawStar2Screen();
  } else if (mainScreen === "star3") {
    drawStar3Screen();
  } else if (mainScreen === "star4") {
    drawStar4Screen();
  } else if (mainScreen === 'star5') {
    drawStar5Screen();
  } else if (mainScreen === 'star6') {
    drawStar6Screen();
  }
}

function mousePressed() {
  if (mainScreen === "main") {
    if (mouseX > width/ 2 - 60 + offsetX && mouseX < width / 2 + 90 + offsetX && mouseY > height / 2 - 80 && mouseY < height / 2 + 70) {
      mainScreen = 'star6'; 
      return;
    } 
}
    
    if (mouseX > 160 + offsetX && mouseX < 220 + offsetX && mouseY <= 150) {
        mainScreen = 'star1';
        return;
      } else if (mouseX > 377.5 + offsetX && mouseX < 425 + offsetX && mouseY < 80) {
        mainScreen = 'star2';
        return;
      } else if (mouseX > 605 + offsetX && mouseX < 695 + offsetX && mouseY < 170) {
        mainScreen = 'star3';
        return;
      } else if (mouseX > 550 + offsetX && mouseX < 610 + offsetX && mouseY < 350) {
        mainScreen = 'star4';
        return;
      } else if (mouseX > 205 + offsetX && mouseX < 275 + offsetX && mouseY < 390 && mouseY > 150) {
        mainScreen = 'star5';
        return;
      } else {
      mainScreen = "main";
}
}

function keyPressed() {
  if (mainScreen === 'star6') {
    starColor = color(random(255), random(255), random(255));
  }
  let audio = random[star6Snd1, star6Snd2, star6Snd3, star6Snd4, star6Snd5];
  if(key === '1' && !star6Snd1.isPlaying()){
    star6Snd1.play();
  } else if (key === '2' && !star6Snd2.isPlaying()){
    star6Snd2.play();
  } else if (key === '3' && !star6Snd3.isPlaying()){
    star6Snd3.play();
  } else if (key === '4' && !star6Snd4.isPlaying()){
    star6Snd4.play();
  } else if (key === '5' && !star6Snd5.isPlaying()){
    star6Snd5.play();
  }
}

function drawMainScreen() {
  image(mainImg, width / 2 - 60 + offsetX, height / 2 - 80, 150, 150);
  
  for (let star of stars) {
    star.twinkle();
    star.display();
  }
  for (let bigstar of bigstars) {
    bigstar.update();
    bigstar.display();
  }
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("Move your mouse to the left or right to scroll through the stars ✨", width / 2, height - 40);
  text('Click the star to hear their words.', width / 2, height - 10);
  if(mainScreen != 'star1'){
    star1Snd.stop();
  }
  if(mainScreen != 'star2'){
    star2Snd.stop();
  }
  if(mainScreen != 'star3'){
    star3Snd.stop();
  }
  if(mainScreen != 'star4'){
    star4Snd.stop();
  }
  if(mainScreen != 'star5'){
    star5Snd.stop();
  }
  if(mainScreen != 'star6'){
    star6Snd1.stop();
    star6Snd2.stop();
}
}

function drawStar1Screen() {
  background(10, 10, 30);
  noFill();
  if(!star1Snd.isPlaying()){
    star1Snd.play();
  } 
  time1 += 1;
  //console.log(time1);
  if(time1 <= 492){
    image(star1Img1, 0, 0, 800, 500);
  } else if(time1 > 492 && time1 <= 1092){
    image(star1Img2, 0, 0, 800, 500);
  } else if (time1 > 1092 && time1 <= 1519){
    image(star1Img3, 0, 0, 800, 500);
  } else if (time1 > 1519 && time1 <= 2314){
    image(star1Img4, 0, 0, 800, 500);
  } else {
  image(star1Img5, 0, 0, 800, 500);
  }
  }

function drawStar2Screen() {
  background(20, 30, 40);
  noFill();
  if(!star2Snd.isPlaying()){
    star2Snd.play();
  }
  image(star2Img, 0, 0, 800, 500);
}

function drawStar3Screen(){
  background(20, 30, 40);
  if(!star3Snd.isPlaying()){
    star3Snd.play();
  }
  image(star3Img, 0, 0, 800, 500);
}


function drawStar4Screen(){
  background(20, 30, 40);
  if(!star4Snd.isPlaying()){
    star4Snd.play();
  }
  image(star4Img, 0, 0, 800, 500);
}


function drawStar5Screen(){
  background(20, 30, 40);
  if(!star5Snd.isPlaying()){
    star5Snd.play();
  }
  image(star5Img, 0, 0, 800, 500);
}

function drawStar6Screen() {
  background(10, 10, 30);
  rotation2 += 0.02;
  starSize1 = baseSize;
  push();
  translate(width / 2, height / 2);
  rotate(rotation2);
  fill(starColor);
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let l = 0; l < 10; l++) {
    let angle3 = (PI / 5) * l;
    let r1;
    if (l % 2 == 0) {
      r1 = starSize1;
      } else {
      r1 = starSize1 / 2;
      }
    let lx = cos(angle3) * r1;
    let ly = sin(angle3) * r1;
    vertex(lx, ly);
  }
  endShape(CLOSE);
  pop();
}

class Star {
    constructor() {
      this.x = random(-1000, 1000);
      this.y = random(-1000, 1000);
      this.size = random(1, 3);
      this.baseBrightness = random(150, 255);
      this.brightness = this.baseBrightness;
      this.speed = random(0.01, 0.05);
      this.angle = random(2 * PI);
    }

    twinkle() {
      this.angle += this.speed;
      this.brightness = this.baseBrightness + sin(this.angle) * 100;
    }

    display() {
      noStroke();
      fill(this.brightness);
      circle(this.x + offsetX, this.y, this.size);
    }
  }

class Bigstar {
    constructor(x, y, size, ScreenNum) {
      this.x1 = x;
      this.y1 = y;
      this.size1 = size;
      this.screen = ScreenNum;
      this.angle1 = random(2 * PI);
      this.rotation = random(2 * PI);
      this.speed1 = random(0.02, 0.07);
      this.rotationSpeed = random(0.005, 0.01);
    }

    update() {
      this.angle1 += this.speed1;
      this.rotation += this.rotationSpeed;
    }

    display() {
      push();
        translate(this.x1 + offsetX, this.y1);
        for(let i = 0; i < 15; i++){
          noFill();
          let op = map(i, 0, 15, 255, 0);
          stroke(231, 231, 156, op);
          strokeWeight(10);
          circle(0, 0, i * this.size1 / 10);
      }
      pop();
      
      let brightness = map(sin(this.angle1), -1, 1, 100, 255);
      fill(231, 231, 156, brightness);
      noStroke();
      push();
        translate(this.x1 + offsetX, this.y1);
        rotate(this.rotation);
        beginShape();
          let s = 5;
          for (let p = 0; p < 2 * s; p++) {
            let angle2 = (PI / 5) * p;
            let r;
            if (p % 2 == 0) {
              r = this.size1;
            } else {
              r = this.size1 / 2;
            }
          let sx = cos(angle2) * r;
          let sy = sin(angle2) * r;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      pop();
    }
  }
  
  

