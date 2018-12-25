/*jshint esversion: 6 */

class Matrix {

  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;

    this.data = [];

    for (let i = 0; i < rows; i++){
      this.data[i] = [];
      for(let j = 0; j < cols; j++){
        this.data[i][j] = 0;
      }
    }
  }

  copy(){
    let m = new Matrix(this.rows, this.cols);
    for(let i = 0; i < m.rows; i++){
      for(let j = 0; j < m.cols; j++){
        m.data[i][j] = this.data[i][j];
      }
    }
    return m;
  }

  static fromArray(arr){
    let m = new Matrix(arr.length, 1);
    for(let i = 0; i < arr.length; i++){
      m.data[i][0] = arr[i];
    }
    return m;
  }

  toArray(){
    let arr = [];
    for (let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

  static subtract(a, b){
    let result = new Matrix(a.rows, a.cols);
    for(let i = 0; i < a.rows; i++){
      for(let j = 0; j < a.cols; j++){
        resutl[i][j] = a[i][j] - b[i][j];
      }
    }
    return result;
  }

  add(n) {
    if(n instanceof Matrix ){
      for (let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.cols; j++){
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.cols; j++){
          this.data[i][j] += n;
        }
      }
    }
  }

  static mult(a, b) {

    result = new Matrix(a.rows, a.cols);
    // hadamar(?) element-wise product
    for (let i = 0; i < a.rows; i++){
      for(let j = 0; j < a.cols; j++){
        resutls.data[i][j] = a.data[i][j] * n.data[i][j];
      }
    }
  }

  mult(n) {
    // scalar product
    for (let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        this.data[i][j] *= n;
      }
    }

  }

  static matMult(a, b){
    // matix multiplication
    if (a.cols !== b.rows){
      console.log("Cols of A must match rows of B");
      return undefined;
    } else {
      let result = new Matrix(a.rows, b.cols);

      for(let i = 0; i < result.rows; i++){
        for(let j = 0; j < result.cols; j++){
          // Dot product
          let sum = 0;
          for(let k = 0; k < a.cols; k++){
            sum += a.data[i][k] * b.data[k][j];
          }
          result.data[i][j] = sum;
        }
      }
      return result;
    }
  }


  static transpose(a){
    let result = new Matrix(a.cols, a.rows);

    for(let i = 0; i < a.rows; i++){
      for(let j = 0; j < a.cols; j++){
        result.data[j][i] = a.data[i][j];
      }
    }

    return result;
  }

  map(func){
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        let val = this.data[i][j];
         this.data[i][j] = func(val);
      }
    }
  }

  randomize() {
    for (let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  print() {
    console.table(this.data);
  }
}
