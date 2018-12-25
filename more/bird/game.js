var p;
var ps = [];
var gravity = 0.6;
var b_height = 650;
var b_width = 450;
var p_gap = 150;
var p_spacing = 250;
var p_width = 75;
var adjust = 5;
var maxPipe = 5;
var frames_per_second = 60;
var start = false;
var message = "Score: ";
var font;
var fontsize = 20;

function setup() {
  
  frameRate(frames_per_second);
  createCanvas(b_width, b_height);

  textSize(fontsize);

  //p = new Pipe(b_width)
  b = new Bird();
  g = new Ground();

  background(50);
  score();
  b.show();
  //p.show();
  g.show();
  //ps.push(p);
  noLoop();
}

function draw(){
  background(120, 190, 255);
  if(frameCount % 60 == 0){
      ps.push(new Pipe(b_width));
  }
  for (let i = ps.length-1; i >= 0; i--){
    if(ps[i].x < 0 - p_width){
        ps.splice(i, 1)
    } else {
        ps[i].update();
        ps[i].show();
        if(ps[i].hits()){
            noLoop();
        }
    }
  }

    if(b.y > b_height - 50){
        noLoop();
    }
    g.show();
    b.update();
    b.show();
    score();
}

function keyPressed(){

    if(!start){
        loop();
        start = true;
    }

    if(key === ' '){
        b.flap();
    }

}

function mousePressed() {
    if(!start){
        loop();
        start = true;
    }
    
    b.flap();
}

function score(){
  window.document.getElementById('score').innerHTML = 'Score: ' + b.score;
}

function reset(){
  draw();
  ps =  [];
  setup();
  draw();
  start = false;
}

