var s, f;
var grid = [];
var gridScale = 20;
var gridNum = 30;
var frames_per_second = 12;
var change = true;
var start = false;
var freeze = false;
var message = "Score: ";
var font;
var fontsize = 20;

function setup() {
  for (i = 0; i < gridNum; i++){
    var gridRow = [];
    for (x = 0; x < gridNum; x++){
      gridRow.push(0);
    }
    grid.push(gridRow);
  }
  grid[1][1] = 1;
  console.log(grid);


  frameRate(frames_per_second);
  createCanvas(gridScale*gridNum, gridScale*gridNum);

  textSize(fontsize);

  s = new Snake();
  f = new Food();

  background(50);
  score();
  s.show();
  f.show();
  noLoop();

}

function draw(){
  background(50);
  s.update();
  s.show();
  f.show();
  //score();
  change = true;
}

function keyPressed(){
  if(change){
    if(keyCode === UP_ARROW && s.dir != 3){
      s.dir = 1;
      change = false;
    } else if(keyCode === RIGHT_ARROW && s.dir != 4){
      s.dir = 2;
      change = false;
    } else if(keyCode === DOWN_ARROW && s.dir != 1){
      s.dir = 3;
      change = false;
    } else if(keyCode === LEFT_ARROW && s.dir != 2){
      s.dir = 4;
      change = false;
    }
  }

  if(!start){
    loop();
    start = true;
  }

  if(key === ' '){
    if(freeze){
      loop();
      freeze = false;
    } else {
      noLoop();
      freeze = true;
    }
  }

}

/*function score(){
  strokeWeight(0);
  fill('rgba(164, 160, 160, 1)');
  rect(0, height-50, width, 50);

  fill(0);
  message = "Score: " + s.score + "\tFPS: " + frameRate();
  text(message, 30, height-20);

  button = createButton('Reset');
  button.position(width - 60, height-25);
  button.mousePressed(reset);
}*/

function score(){
  window.document.getElementById('score').innerHTML = 'Score: ' + s.score;
}

function reset(){
  grid = [];
  setup();
  draw();
  start = false;
}

/*
function mouseClicked(){
  s.eat();
  console.log('clicked');
}
*/
