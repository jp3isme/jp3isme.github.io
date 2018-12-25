function Food(i, col) {
  this.index = i;
  this.r = col[0];
  this.g = col[1];
  this.b = col[2];

  var gridX, gridY;
  do {
    this.x = Math.floor(Math.random() * gridNum) * gridScale;
    this.y = Math.floor(Math.random() * gridNum) * gridScale;

    gridX = floor(this.x / gridScale);
    gridY = floor(this.y / gridScale);

    if (grid[i][gridY][gridX] === 0) {
      break;
    }
  } while (true);

  this.row = gridY;
  this.col = gridX;
  grid[this.index][gridY][gridX] = 'f';

  this.update = function() {
    do {
      this.x = Math.floor(Math.random() * gridNum) * gridScale;
      this.y = Math.floor(Math.random() * gridNum) * gridScale;

      gridX = floor(this.x / gridScale);
      gridY = floor(this.y / gridScale);

      if (grid[this.index][gridY][gridX] === 0) {
        break;
      }
    } while (true);

    grid[this.index][gridY][gridX] = 'f';

  };

  this.show = function() {
    strokeWeight(1);
    stroke('rgba(255,255,255,0.2)');
    fill(this.r,this.g,this.b);
    rect(this.x + 5, this.y + 5, 10, 10);
  };
}

function snakeNode(x, y) {
  this.x = x;
  this.y = y;
}

function Snake(i, col, brain, best) {
  this.index = i;
  this.best = false;
  this.r = col[0];
  this.g = col[1];
  this.b = col[2];
  this.turns = 0;
  this.frames = 0;
  this.fitness = 0;
  this.calc_score = 0;
  this.starve = 0;

  this.went_l = false;
  this.went_r = false;

  this.x = gridScale * (Math.floor(gridNum/2)-0);
  this.y = gridScale * (Math.floor(gridNum/2)-0);
  this.col = 0;
  this.row = 1;
  this.dir = 1;
  this.ray_length = _ray_length;
  this.ray_dirs = [1, 1.5, 2, 2.5, 3];
  this.inputs = [];

  this.score = 0;
  this.total = 4;
  this.tail = [];
  this.dead = this.eaten = false;

  if(best){
    this.best = best;
  }
  if(brain){
    this.brain = brain.copy();
  } else {
    var arr = [10,10];
    this.brain = new NeuralNetwork(23, arr, 1);
  }

  var newX = 0;
  var newY = 0;
  var gridX, gridY;
  var temp;

  this.mutate = function(x){
    this.brain.mutate(x);
  };

  this.think = function(){
    //console.log('thinking ', this.index);
    this.inputs = this.getInputs();
    guess = this.brain.feedforward(this.inputs);


    // if(guess[0] <= 0.25){
    //   this.dir = 1;
    //   //this.ray_dirs = [4, 1, 2];
    // } else if(guess[0] > 0.25 && guess[0] <= 0.5){
    //   this.dir = 2;
    //   //this.ray_dirs = [1, 2, 3];
    // } else if(guess[0] > 0.5 && guess[0] <= 0.75){
    //   this.dir = 3;
    //   //this.ray_dirs = [2, 3, 4];
    // } else if(guess[0] > 0.75){
    //   this.dir = 4;
    //   //this.ray_dirs = [3, 4, 1];
    // }


    if(this.dir === 1){
      if(guess[0] <= 0.33333){
        this.dir = 4;
        this.turns++;
        this.went_l = true;
        this.ray_dirs = [3, 3.5, 4, 0.5, 1];
      } else if(guess[0] > 0.33333 && guess[0] <= 0.66666){
        this.dir = 1;
      } else if(guess[0] > 0.66666){
        this.dir = 2;
        this.turns++;
        this.went_r = true;
        this.ray_dirs = [1, 1.5, 2, 2.5, 3];
      }
    } else if(this.dir === 2){
      if(guess[0] <= 0.33333){
        this.dir = 1;
        this.turns++;
        this.went_l = true;
        this.ray_dirs = [4, 0.5, 1, 1.5, 2];
      } else if(guess[0] > 0.33333 && guess[0] <= 0.66666){
        this.dir = 2;
      } else if(guess[0] > 0.66666){
        this.dir = 3;
        this.turns++;
        this.went_r = true;
        this.ray_dirs = [2, 2.5, 3, 3.5, 4];
      }
    } else if(this.dir === 3){
      if(guess[0] <= 0.33333){
        this.dir = 2;
        this.turns++;
        this.went_l = true;
        this.ray_dirs = [1, 1.5, 2, 2.5, 3];
      } else if(guess[0] > 0.33333 && guess[0] <= 0.66666){
        this.dir = 3;
      } else if(guess[0] > 0.66666){
        this.dir = 4;
        this.turns++;
        this.went_r = true;
        this.ray_dirs = [3, 3.5, 4, 0.5, 1];
      }
    } else if(this.dir === 4){
      if(guess[0] <= 0.33333){
        this.dir = 3;
        this.turns++;
        this.went_l = true;
        this.ray_dirs = [2, 2.5, 3, 3.5, 4];
      } else if(guess[0] > 0.33333 && guess[0] <= 0.66666){
        this.dir = 4;
      } else if(guess[0] > 0.66666){
        this.dir = 1;
        this.turns++;
        this.went_r = true;
        this.ray_dirs = [4, 0.5, 1, 1.5, 2];
      }
    }

  };

  this.getInputs = function(){
    var inputs = [];
    inputs.push(this.row);
    inputs.push(this.col);
    inputs.push(f[this.index].row);
    inputs.push(f[this.index].col);
    inputs = inputs.concat(this.direction());

    for(j = 0; j < this.ray_dirs.length; j++){
      inputs = inputs.concat(this.look(this.ray_dirs[j]));
    }
    return inputs;
  };

  this.direction = function(){
    var direction = [0,0,0,0];
    if(this.dir === 1){
      direction = [1, 0, 0, 0];
    } else if (this.dir === 2){
      direction = [0, 1, 0, 0];
    } else if (this.dir === 3){
      direction = [0, 0, 1, 0];
    } else if (this.dir === 4){
      direction = [0, 0, 0, 1];
    }
    return direction;
  };

  this.look = function(x){
    //var saw = [this.ray_length, 0];
    var saw = [0,0,0];
    var x_loc = floor(this.x / gridScale);
    var y_loc = floor(this.y / gridScale);

    var temp_x, temp_y;

    for(i = 0; i < this.ray_length; i++){

      if(x === 0.5){
        temp_y = y_loc - i;
        temp_x = x_loc - i;
      } else if (x === 1){
        temp_y = y_loc - i;
        temp_x = x_loc;
      } else if (x === 1.5){
        temp_y = y_loc - i;
        temp_x = x_loc + i;
      } else if (x === 2){
        temp_x = x_loc + i;
        temp_y = y_loc;
      } else if (x === 2.5){
        temp_y = y_loc + i;
        temp_x = x_loc + i;
      } else if (x === 3){
        temp_y = y_loc + i;
        temp_x = x_loc;
      } else if (x === 3.5){
        temp_y = y_loc + i;
        temp_x = x_loc - i;
      } else if (x === 4){
        temp_x = x_loc - i;
        temp_y = y_loc;
      }

      if(temp_x >= 0 && temp_x < gridNum && temp_y >= 0 && temp_y < gridNum){
        if(grid[this.index][temp_y][temp_x] === 't'){
          saw = [this.ray_length-i,0,0];
          //console.log('tail: ', i);
          break;
        } else if(grid[this.index][temp_y][temp_x] === 'f'){
          saw = [0,this.ray_length-i,0];
          //saw = [i, 2];
          //console.log('food: ', i);
          break;
        }
      } else {
        saw = [0,0,this.ray_length-i];
        //console.log('wall: ', i);
        break;
      }
    }
    return saw;
  };

  this.death = function() {
    //console.log(grid);
    //console.log('Dead');
    s_save.push(s[this.index]);
    s[this.index] = 0;
    f[this.index] = 0;
    this.dead = true;
    //noLoop();
  };

  this.eat = function() {
    //console.log('Eat');
    this.total += 3;
    this.score++;
    this.eaten = true;
    f[this.index].update();
    mod_ate = true;
    this.starve = 0;
  };

  this.update = function() {

    if(this.starve >= death_after){
      this.death();
    }
    this.starve++;

    var cur_x = this.x/gridScale;
    var cur_y = this.y/gridScale;

    if (this.tail.length < this.total) {

      endNode = new snakeNode(this.x, this.y);
      this.tail.unshift(new snakeNode(endNode.x, endNode.y));

    } else if (this.tail.length != 0) {
      temp = this.tail.pop();
      gridX = floor(temp.x / gridScale);
      gridY = floor(temp.y / gridScale);

      grid[this.index][gridY][gridX] = 0;

      temp.x = this.x;
      temp.y = this.y;

      this.tail.unshift(temp);

      gridX = floor(temp.x / gridScale);
      gridY = floor(temp.y / gridScale);

      grid[this.index][gridY][gridX] = 't';
    } else {

      gridX = floor(this.x / gridScale);
      gridY = floor(this.y / gridScale);

      grid[this.index][gridY][gridX] = 0;
    }

    switch (this.dir) {
      case 1:
        newX = this.x;
        newY = this.y - gridScale;
        break;
      case 2:
        newX = this.x + gridScale;
        newY = this.y;
        break;
      case 3:
        newX = this.x;
        newY = this.y + gridScale;
        break;
      case 4:
        newX = this.x - gridScale;
        newY = this.y;
        break;
      default:
    }


    this.x = newX;
    this.y = newY;

    gridX = floor(this.x / gridScale);
    gridY = floor(this.y / gridScale);

    this.row = gridY;
    this.col = gridX;

    food_x = f[this.index].col;
    food_y = f[this.index].row;

    cur_dif_x = abs(cur_x - food_x);
    cur_dif_y = abs(cur_y - food_y);

    new_dif_x = abs(gridX - food_x);
    new_dif_y = abs(gridY - food_y);

    if(new_dif_x < cur_dif_x || new_dif_y < cur_dif_y){
      this.calc_score++;
    } else if (new_dif_x > cur_dif_x || new_dif_y > cur_dif_y){
      this.calc_score -= 1.25;
    }


    if(gridX < gridNum && gridY < gridNum && gridX >= 0 && gridY >= 0){

      if (grid[this.index][gridY][gridX] === "f") {
        this.eat();
      } else if (grid[this.index][gridY][gridX] === 't') {
        this.death();
        //noLoop();
      }

      grid[this.index][gridY][gridX] = this.dir;

    } else {
      this.death();
      //noLoop();
    }

    this.eaten = false;

    return this.dead;
  };

  this.show = function() {
    this.frames++;
    if(showrays){
      this.draw_rays();
    }
    strokeWeight(1);
    stroke(0);
    fill(this.r,this.g,this.b);
    rect(this.x, this.y, 20, 20);

    fill(this.r,this.g,this.b);
    for (i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 20, 20);
    }

  };

  this.draw_rays = function(){
    strokeWeight(1);
    stroke(255);
    var start_x = this.x + gridScale/2;
    var start_y = this.y + gridScale/2;

    var end_x, end_y;
    for(i = 0; i < this.ray_dirs.length; i++){

      if(this.inputs[i*2+2] === 1){
        stroke('rgb(60, 195, 60)');
      } else if (this.inputs[i*2+2] === 2){
        stroke('rgb(195, 60, 60)');
      } else if (this.inputs[i*2+2] === 3){
        stroke('rgb(60, 60, 195)');
      } else {
        stroke(255);
      }

      console.log(this.ray_dirs[i]);
      len = this.inputs[i*2+1] * gridScale - gridScale/2;
      if(this.ray_dirs[i] === 0.5){
        end_y = start_y - len;
        end_x = start_x - len;
      } else if(this.ray_dirs[i] === 1){
        end_y = start_y - len;
        end_x = start_x;
      } else if (this.ray_dirs[i] === 1.5){
        end_y = start_y - len;
        end_x = start_x + len;
      } else if (this.ray_dirs[i] === 2){
        end_x = start_x + len;
        end_y = start_y;
      } else if (this.ray_dirs[i] === 2.5){
        end_y = start_y + len;
        end_x = start_x + len;
      } else if (this.ray_dirs[i] === 3){
        end_y = start_y + len;
        end_x = start_x;
      } else if (this.ray_dirs[i] === 3.5){
        end_y = start_y + len;
        end_x = start_x - len;
      } else if (this.ray_dirs[i] === 4){
        end_x = start_x - len;
        end_y = start_y;
      }

      line(start_x, start_y, end_x, end_y);
    }

  };

}
