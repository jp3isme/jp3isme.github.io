var grid = [];
var whites;
var blacks;
var chess;
var offsetX;
var offsetY;
var selected;
var startX;
var startY;
var cursX;
var cursY;
var turn = 1;
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
     // drag();
  }

  drawSprites();
  drawCursor();
  change = true;
}

function keyPressed(){

  if(!start){
    loop();
    start = true;
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
    cursX = mouseX;
    cursY = mouseY;

    let x = calcPosition(mouseX);
    let y = calcPosition(mouseY);

    // Did I click on a sprite?
    for(let i = 0; i < blacks.length; i++){
        if (blacks[i].mouseIsOver) {
            console.log("ran b");
            startX = mouseX;
            startY = mouseY;
            index = i;
            bOw = 1;
            selected = true;
        } 
    }
    for(let i = 0; i < whites.length; i++){
        if (whites[i].mouseIsOver){
            console.log("ran w");
            startX = mouseX;
            startY = mouseY;
            index = i;
            bOw = 2;
            selected = true;
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

        let calcX = calcPosition(startX);
        let calcY = calcPosition(startY);

        console.log(x1 + ", " + y1);
        console.log(calcX + ", " + calcY);

        if(checkMove(calcX,calcY,x1,y1)){
            blacks[index].position.x = x1 * 100 + 50;
            blacks[index].position.y = y1 * 100 + 50;

            for(let i = 0; i < whites.length; i++){
                if(blacks[index].overlap(whites[i])){
                    whites[i].remove();
                }
            }
        } else {
            blacks[index].position.x = calcX * 100 + 50;
            blacks[index].position.y = calcY * 100 + 50;
        }

    } else if (bOw == 2){
        x1 = whites[index].position.x;
        y1 = whites[index].position.y;

        x1 = calcPosition(x1);
        y1 = calcPosition(y1);

        let calcX = calcPosition(startX);
        let calcY = calcPosition(startY);

        //console.log(x1 + ", " + y1);

        if(checkMove(calcX,calcY,x1,y1)){
            whites[index].position.x = x1 * 100 + 50;
            whites[index].position.y = y1 * 100 + 50;

            for(let i = 0; i < blacks.length; i++){
                if(whites[index].overlap(blacks[i])){
                    blacks[i].remove();
                }
            }
        } else {
            whites[index].position.x = calcX * 100 + 50;
            whites[index].position.y = calcY * 100 + 50;
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

function drawCursor(){
    if(selected){
        let x = calcPosition(cursX) * 100;
        let y = calcPosition(cursY) * 100;

        strokeWeight(3);
        stroke('rgb(0,200,0)');
        fill('rgba(0,0,0,0)')
        rect(x,y,100,100);
    }
}