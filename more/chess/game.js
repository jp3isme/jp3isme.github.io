var grid = [];
var whites;
var blacks;
var chess;
var offsetX;
var offsetY;
var startX;
var startY;
var dragging = false;
var index = 0;
var bOw = 0;
var gridScale = 100;
var gridNum = 8;
var frames_per_second = 30;
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

  background(171,103,40);
  score();
  //noLoop();

  whites = new Group();
  blacks = new Group();
  chess = new Chess();
  chess.setup();
}

function draw(){
  background(171,123,60);
  drawSquares();

  if(dragging){
      drag();
  }

  drawSprites();
  change = true;
}

function keyPressed(){

  if(!start){
    loop();
    start = true;
  }

  if(key === ' '){
    // if(freeze){
    //   loop();
    //   freeze = false;
    // } else {
    //   noLoop();
    //   freeze = true;
    // }
  }

}

function score(){
  //window.document.getElementById('score').innerHTML = 'Score: ' + 10;
}

function reset(){
  grid = [];
  setup();
  draw();
  start = false;
}

function mousePressed() {
    // Did I click on a sprite?
    startX = mouseX;
    startY = mouseY;

    for(let i = 0; i < blacks.length; i++){
        if (blacks[i].mouseIsOver) {
            dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            offsetX = blacks[i].position.x - mouseX;
            offsetY = blacks[i].position.y - mouseY;
            index = i;
            bOw = 1;
        } 
    }
    for(let i = 0; i < whites.length; i++){
        if (whites[i].mouseIsOver){
            dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            offsetX = whites[i].position.x - mouseX;
            offsetY = whites[i].position.y - mouseY;
            index = i;
            bOw = 2;
        }
    }
}

function mouseReleased() {
    // Quit dragging
    dragging = false;

    var x1 = 0;
    var y1 = 0;

    if(bOw == 1){
        x1 = blacks[index].position.x;
        y1 = blacks[index].position.y;

        x1 = calcPosition(x1);
        y1 = calcPosition(y1);

        startX = calcPosition(startX);
        startY = calcPosition(startY);

        console.log(x1 + ", " + y1);

        if(checkMove(startX,startY,x1,y1)){
            blacks[index].position.x = x1 * 100 + 50;
            blacks[index].position.y = y1 * 100 + 50;

            for(let i = 0; i < whites.length; i++){
                if(blacks[index].overlap(whites[i])){
                    whites[i].remove();
                }
            }
        } else {
            blacks[index].position.x = startX * 100 + 50;
            blacks[index].position.y = startY * 100 + 50;
        }

    } else if (bOw == 2){
        x1 = whites[index].position.x;
        y1 = whites[index].position.y;

        x1 = calcPosition(x1);
        y1 = calcPosition(y1);

        startX = calcPosition(startX);
        startY = calcPosition(startY);

        //console.log(x1 + ", " + y1);

        if(checkMove(startX,startY,x1,y1)){
            whites[index].position.x = x1 * 100 + 50;
            whites[index].position.y = y1 * 100 + 50;

            for(let i = 0; i < blacks.length; i++){
                if(whites[index].overlap(blacks[i])){
                    blacks[i].remove();
                }
            }
        } else {
            whites[index].position.x = startX * 100 + 50;
            whites[index].position.y = startY * 100 + 50;
        }
    }
}

function calcPosition(a) {
    let b = Math.floor(a/100);
    
    if(b < 0)
        b = 0;
    else if(b > 7)
        b = 7;

    return b;   
}

function drag() {
    if(bOw == 1){
        blacks[index].position.x = mouseX + offsetX;
        blacks[index].position.y = mouseY + offsetY;
    } else if (bOw == 2){
        whites[index].position.x = mouseX + offsetX;
        whites[index].position.y = mouseY + offsetY;
    }
}

function drawSquares(){
    for(let x = 0; x < gridNum/2; x++){
        for(let y = 0; y < gridNum; y++){
            strokeWeight(0);
            stroke(0);
            fill('rgb(235,204,109)');
            a = x*200;
            if(y % 2 == 1){
                a += 100;
            }
            b = y*100;
            rect(a, b, gridScale, gridScale);
        }
    }
}