// 最終課題を制作しよう
let A = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for(let i = 0; i < 225; i++){
    A[i] = Math.random() < 0.5 ? 0 : 1;
  }
}

function draw(){
  background(255);
 
  moon(100,100,-3,90);
  moon(95,95,5,75);

  for(let i = 0; i <225; i++){
    fill(255);
    let n = 15;
    let d = i%n;
    let l = Math.floor(i/n);
    noStroke();
    textSize(15);
    textFont("gothick");
    text(A[i], 10+10*d,15*(l+1));
  }

  fill(102,205,170);
  ellipse(70, 105, 40, 38, 0, 0, 2 * Math.PI);
  fill(255);
  ellipse(70, 105, 32, 30, 0, 0, 2 * Math.PI);
  fill(102,205,170);
  ellipse(70, 105, 22, 32, 0, 0, 2 * Math.PI);
  fill(255);
  ellipse(70, 105, 12, 30, 0, 0, 2 * Math.PI);

  stroke(102,205,170);
  h = 105;
  line(45,h,130,h);
  line(130,h,135,h-15);
  line(135,h-15,140,h+10);
  line(140,h+10,150,h);
  line(150,h,165,h);

  fill(0);
  textSize(32);
  textFont("serif");
  text("IT",60,125);
}

function moon(cx, cy, s, r){
  noStroke();
  fill(105,105,105);
  ellipse(cx, cy, r);
  fill(255);
  ellipse(cx-5,cy+s,r-5);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
