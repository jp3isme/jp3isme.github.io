/*jshint esversion: 6 */
var fitnesses = [];


function nextGeneration(){
  gen++;
  console.log("Generation: "+ gen);
  kill();
  normalizeFitnesses();
  modframe = 300;
  mod_count = 1;
  last_frame = frameCount;
  let snek;
  let col = [];

  var top = pickTop();
  // for(let i = 0; i < top.length; i++){
  //   col[0] = floor(Math.random()*255);
  //   col[1] = floor(Math.random()*255);
  //   col[2] = floor(Math.random()*255);
  //
  //   snek = new Snake(i, col, s_save[top[i][1]].brain, true);
  //   f.push(new Food(i, col));
  //   snek.think();
  //   s.push(snek);
  // }

  for(let i = 0; i < NUM_SNAKE; i++){
    col[0] = floor(Math.random()*255);
    col[1] = floor(Math.random()*255);
    col[2] = floor(Math.random()*255);

    snek = new Snake(i, col, pickFrom(top), false);
    snek.mutate(m_rate);
    f.push(new Food(i, col));
    snek.think();
    s.push(snek);
  }
  s_save = [];
}

function pickOne(){
  var index = 0;
  var r = random(1);

  while(r > 0){
    r = r - s_save[index].fitness;
    index++;
  }
  index--;

  let snake = s_save[index];
  return snake.brain;
}

function pickFrom(x){
  let y = x;
  let index = 0;
  let r = random(1);

  let sum = 0;

  for(let i = 0; i < x.length; i++){
    sum += x[i][0];
  }
  for(let i = 0; i < x.length; i++){
    y[i][0] /= sum;
  }

  //console.log('pick from (normalized): ', y);

  while(r > 0){
    r = r - y[index][0];
    index++;
  }
  index--;

  let snake = s_save[y[index][1]];
  return snake.brain;
}

function pickBest(){
  let best_fitness = 0;
  let best_index = 0;
  let i = 0;
  for(i = 0; i < s_save.length; i++){
    if(s_save[i].fitness > best_fitness){
      best_fitness = s_save[i].fitness;
      best_index = i;
    }
  }
  i--;
  //console.log("Best fitness: ", best_fitness, best_index);
  return s_save[i].brain;
}

function pickTop(){
  let sorted_fitnesses = fitnesses;

  sorted_fitnesses.sort(sortFunction);
  //console.log(sorted_fitnesses);

  let len = sorted_fitnesses.length;
  let top10 = sorted_fitnesses.slice(len-10,len);
  console.log(top10);

  return top10;
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function normalizeFitnesses(){
  fitnesses = [];
  let sum = 0;
  for(let snake of s_save){
    let x = snake.calc_score;

    if(x < 0){
      x = abs(1.0/x);
    } else if (x >= 0){
      x++;
    }
    x++;
    //x = Math.pow(x,snake.score+1);
    //x += snake.frames/1000;
    x += (20 * snake.score);
    //x = 1000 - 1000/x;

    snake.fitness = x; //+ (snake.score * 25);

    sum += snake.fitness;
  }
  for(let i = 0; i < s_save.length; i++){
    s_save[i].fitness = s_save[i].fitness/sum;
    fitnesses.push([s_save[i].fitness, i]);
  }
  console.log(fitnesses);
}

function kill(){
  for(let snake of s){
    if(snake instanceof Snake){
      snake.death();
    }
  }
  s = [];
  f = [];
  resetGrid();
}

function resetGrid(){
  grid = [];
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
}
