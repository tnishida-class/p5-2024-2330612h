// チェッカー
function setup() {
  createCanvas(200, 200);
  background(255);
  noStroke();
  let s = width / 8;
  let d =s*4/5
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let x =s*i;
      let y =s*j;
      if ((i+j)%2===1){
        fill(122);
      rect(x,y,s,s);
      }
      if(((i+j)%2===1)&&(j<3)){
        fill(255,0,0);
        ellipse(x+s/2,y+s/2,d);
      }
      else if(((i+j)%2===1)&&(j>4)){
        fill(0);
        ellipse(x+s/2,y+s/2,d)
      }
    }
  }
}
