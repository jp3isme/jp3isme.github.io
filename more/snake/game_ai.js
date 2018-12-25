/*jshint esversion: 6 */
const NUM_SNAKE = 500;
const gridScale = 20;
const gridNum = 31;
const frames_per_second = 60;
const m_rate = 0.1;
const _ray_length = 15;
const death_after = 150;

var gen = 1;

var sim_speed = 1;
var simm = true;

var showbest = false;
var showrays = false;

var modframe = 300;
var mod_count = 1;
var last_frame = 0;
var mod_ate = true;

var s = [];
var f = [];
var s_save = [];
var grid = [];
var change = true;
var start = false;
var freeze = false;
var message = "Score: ";
var font;
var fontsize = 20;

function setup() {
  // empty
  s = [];
  f = [];

  for(let x = 0; x < NUM_SNAKE; x++){
    var s_grid = [];
    for (i = 0; i < gridNum; i++){
      var gridRow = [];
      for (j = 0; j < gridNum; j++){
        gridRow.push(0);
      }
      s_grid.push(gridRow);
    }
    grid.push(s_grid);
  }

  console.log(grid);

  frameRate(frames_per_second);
  createCanvas(gridScale*gridNum, gridScale*gridNum);

  textSize(fontsize);

  let col = [];
  for(let i = 0; i < NUM_SNAKE; i++){
    col[0] = floor(Math.random()*255);
    col[1] = floor(Math.random()*255);
    col[2] = floor(Math.random()*255);

    s.push(new Snake(i, col));
    f.push(new Food(i, col));
  }


  background(50);
  score();
  for(let i = 0; i < s.length; i++){
    s[i].think();
    s[i].show();
    f[i].show();
  }
  //noLoop();
  loop();

}

function draw(){
  mod();
  background(50);
  checkNext();
  for(let x = 0; x < sim_speed; x++){
    for(let i = 0; i < s.length; i++){
      if(s[i] != 0){
        let dead = s[i].update();
        //console.log(i, " _ ", dead);
        if(!dead){
          s[i].think();
        }
      }
    }
  }
  for(let i = 0; i < s.length; i++){
    if(s[i] != 0){
      if(showbest){
        if(s[i].best){
          s[i].show();
          f[i].show();
        }
      } else {
        s[i].show();
        f[i].show();
      }
    }
  }
  score();
}

// function sim(){
//   simm = false;
//   for(let s = 0; s < sim_speed; s++){
//       redraw();
//   }
// }

function mod(){
  if((frameCount - last_frame) % modframe === 0){
    if(!mod_ate){
      nextGeneration();
      mod_ate = true;
    } else {
      for(let snake of s){
        if(snake.score < mod_count){
          snake.death();
        }
      }
      mod_count++;
      modframe = floor(modframe*2);
      mod_ate = false;
    }
  }
}

function keyPressed(){
  // if(change){
  //   if(keyCode === UP_ARROW && s.dir != 3){
  //     s.dir = 1;
  //     change = false;
  //   } else if(keyCode === RIGHT_ARROW && s.dir != 4){
  //     s.dir = 2;
  //     change = false;
  //   } else if(keyCode === DOWN_ARROW && s.dir != 1){
  //     s.dir = 3;
  //     change = false;
  //   } else if(keyCode === LEFT_ARROW && s.dir != 2){
  //     s.dir = 4;
  //     change = false;
  //   }
  // }

  if(!start){
    loop();
    start = true;
  }

  if(keyCode === UP_ARROW){
    if(freeze){
      loop();
      freeze = false;
    } else {
      noLoop();
      freeze = true;
    }
  }

}

function keyTyped(){
  if(key === 'k'){
    nextGeneration();
  }

  if(key === 'b'){
    showbest = true;
  }

  if(key === 'a'){
    showbest = false;
  }

  if(key === 'r'){
    if(showrays){
      showrays = false;
    } else {
      showrays = true;
    }
  }

  if(key === 'g'){
    sim_speed++;
  }

  if(key === 'f'){
    if(sim_speed > 1){
      sim_speed--;
    }
  }

}



function checkNext(){
  empty = true;
  for(let snake of s){
    if(snake instanceof Snake){
      empty = false;
    }
  }
  if(empty){
    nextGeneration();
  }
}

function score(){
  window.document.getElementById('score').innerHTML = 'Score: ' + s.score;
  var fpss = frameRate();
  window.document.getElementById('fps').innerHTML = "FPS: " + fpss.toFixed(2);
  window.document.getElementById('simul').innerHTML = "Speed: " + sim_speed;
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
