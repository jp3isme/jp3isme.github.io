function Food() {
  var gridX, gridY;
  do {
    this.x = Math.floor(Math.random() * gridNum) * gridScale;
    this.y = Math.floor(Math.random() * gridNum) * gridScale;

    gridX = floor(this.x / gridScale);
    gridY = floor(this.y / gridScale);

    if (grid[gridY][gridX] === 0) {
      break;
    }
  } while (true);

  grid[gridY][gridX] = 'f';

  this.update = function() {
    do {
      this.x = Math.floor(Math.random() * gridNum) * gridScale;
      this.y = Math.floor(Math.random() * gridNum) * gridScale;

      gridX = floor(this.x / gridScale);
      gridY = floor(this.y / gridScale);

      if (grid[gridY][gridX] === 0) {
        break;
      }
    } while (true);

    grid[gridY][gridX] = 'f';

  };

  this.show = function() {
    strokeWeight(1);
    stroke(255);
    fill('rgba(255, 0, 0, 0.5)');
    rect(this.x + 5, this.y + 5, 10, 10);
  };
}

function snakeNode(x, y) {
  this.x = x;
  this.y = y;
}

function Snake() {
  this.x = 0;
  this.y = gridScale;
  this.dir = 2;

  this.score = this.total = 0;
  this.tail = [];
  this.dead = this.eaten = false;

  var newX = 0;
  var newY = 0;
  var gridX, gridY;
  var temp;

  this.death = function() {
    console.log(grid);
    console.log('Dead');
    noLoop();
  };

  this.eat = function() {
    console.log('Eat');
    this.total += 3;
    this.score++;
    this.eaten = true;
    f.update();
    score();
  };

  this.update = function() {

    if (this.tail.length < this.total) {
      endNode = new snakeNode(this.x, this.y);
      this.tail.unshift(new snakeNode(endNode.x, endNode.y));

      /*for(i = this.tail.length-2; i > 1; i--){
        this.tail[i].x = this.tail[i-1].x;
        this.tail[i].y = this.tail[i-1].y;
      }*/
    } else if (this.tail.length != 0) {
      temp = this.tail.pop();
      gridX = floor(temp.x / gridScale);
      gridY = floor(temp.y / gridScale);

      grid[gridY][gridX] = 0;

      temp.x = this.x;
      temp.y = this.y;

      this.tail.unshift(temp);

      gridX = floor(temp.x / gridScale);
      gridY = floor(temp.y / gridScale);

      grid[gridY][gridX] = 't';
    } else {

      gridX = floor(this.x / gridScale);
      gridY = floor(this.y / gridScale);

      grid[gridY][gridX] = 0;
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

    if(gridX < gridNum && gridY < gridNum && gridX >= 0 && gridY >= 0){

      if (grid[gridY][gridX] === "f") {
        this.eat();
      } else if (grid[gridY][gridX] === 't') {
        this.death();
        noLoop();
      }

      grid[gridY][gridX] = this.dir;

    } else {
      this.death();
      noLoop();
    }

    this.eaten = false;
  };

  this.show = function() {
    strokeWeight(1);
    stroke(0);
    fill('rgb(200,255,200)');
    rect(this.x, this.y, 20, 20);

    fill('rgb(150,205,150)');
    for (i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 20, 20);
    }
  };

}
