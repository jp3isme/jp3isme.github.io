/*jshint esversion: 6 */
function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
}


class NeuralNetwork {

  constructor(a, hiddens_array, num_outputs){

    if(a instanceof NeuralNetwork){
      this.input_nodes = a.input_nodes;
      this.hidden_layers = a.hidden_layers;
      this.output_nodes = a.output_nodes;

      this.weights_input = a.weights_input.copy();
      this.weights_hidden = [];
      for(let i = 0; i < this.hidden_layers.length-1; i++){
        let layer_weight = a.weights_hidden[i].copy();
        this.weights_hidden.push(layer_weight);
      }
      this.weights_output = a.weights_output.copy();

      this.bias_first_hidden = a.bias_first_hidden.copy();
      this.bias_hiddens = [];
      for(let i = 0; i < this.hidden_layers.length-1; i++){
        let layer_bias = a.bias_hiddens[i].copy();
        this.bias_hiddens.push(layer_bias);
      }
      this.bias_output = a.bias_output.copy();

    } else {
      this.input_nodes = a;
      this.hidden_layers = hiddens_array;
      this.output_nodes = num_outputs;

      // initalize weights from inputs to hidden 1
      this.weights_input = new Matrix(this.hidden_layers[0], this.input_nodes);
      this.weights_input.randomize();


      // initialize weights between all hidden layers
      this.weights_hidden = [];
      for(let i = 0; i < this.hidden_layers.length-1; i++){
        let layer_weight = new Matrix(this.hidden_layers[i+1], this.hidden_layers[i]);
        layer_weight.randomize();
        this.weights_hidden.push(layer_weight);
      }

      // initalize weights from last hidden later to output layer
      this.weights_output = new Matrix(this.output_nodes, this.hidden_layers[this.hidden_layers.length-1]);
      this.weights_output.randomize();

      // initialize bias for first hidden layer
      this.bias_first_hidden = new Matrix(this.hidden_layers[0], 1);
      this.bias_first_hidden.randomize();

      // initlaize biasses for all hidden layers
      this.bias_hiddens = [];
      for(let i = 1; i < this.hidden_layers.length; i++){
        let layer_bias = new Matrix(this.hidden_layers[i], 1);
        layer_bias.randomize();
        this.bias_hiddens.push(layer_bias);
      }

      // initalize bias for output layers
      this.bias_output = new Matrix(this.output_nodes, 1);
      this.bias_output.randomize();
    }
  }

  feedforward(inputs_array){
    // create matrix from inputs
    //console.log(inputs_array);
    let inputs = Matrix.fromArray(inputs_array);
    //console.log(inputs);
    // calculate vals going into hidden layer 1 from inputs, add bias, then check if enough to activate (actually mapping sigmoid)
    let hidden_1 = Matrix.matMult(this.weights_input, inputs);
    hidden_1.add(this.bias_first_hidden);
    hidden_1.map(sigmoid);

    // for all hidden layers, calc vals going in, add bias, then check if enough to activate (sigmoid)
    let hiddens = [];
    let temp_hidden = hidden_1;
    for(let i = 0; i < this.hidden_layers.length-1; i++){
      let hidden_i = Matrix.matMult(this.weights_hidden[i], temp_hidden);
      hidden_i.add(this.bias_hiddens[i]);
      hidden_i.map(sigmoid);
      temp_hidden = hidden_i;
    }

    // take the final hidden layer as input to output layer
    // calculate vals going into output layer, add bias, then check if enough to activate (mapping sigmoid)
    let outputs = Matrix.matMult(this.weights_output, temp_hidden);
    outputs.add(this.bias_output);
    outputs.map(sigmoid);

    // return activated outputs in array form (since input was array form)
    return outputs.toArray();
  }

  // TODO: Make this work lol
  // https://www.youtube.com/watch?v=tlqinMNM4xs&list=PLRqwX-V7Uu6Y7MdSCaIfsxc561QI0U0Tb&index=18
  //
  train(inputs, targets){
    let outputs = this.feedforward(inputs);
    // convert to Matrix
    outputs = Matrix.fromArray(outputs);
    targets = Matrix.fromArray(targets);

    // Calc the error
    // Error = targets - outputs
    let output_errors = Matrix.subtract(targets, outputs);

    // calculate the hidden layer error
    let weights_t = Matrix.transpose(this.weights_output);
    let hidden_error = Matrix.matMult(weights_t, output_errors);
    for(let i = this.hidden_layers.length-2; i > 0; i--){
      weights_t = Matrix.transpose(this.weights_hidden[i]);
      hidden_error = Matrix.matMult(weights_t, hidden_error);
    }
    weights_t = Matrix.transpose(this.weights_input);
    hidden_error = Matrix.matMult(weights_t, hidden_error);

  }


  copy(){
    return new NeuralNetwork(this);
  }


  mutate(rate){
    function mutate(val){
      if (Math.random() < rate){
        return Math.random() * 2 - 1;
      }
      else {
        return val;
      }
    }

    this.weights_input.map(mutate);
    for(let i = 0; i < this.hidden_layers.length-1; i++){
      this.weights_hidden[i].map(mutate);
    }
    this.weights_output.map(mutate);

    this.bias_first_hidden.map(mutate);
    for(let i = 0; i < this.hidden_layers.length-1; i++){
      this.bias_hiddens[i].map(mutate);
    }
    this.bias_output.map(mutate);
  }








}
