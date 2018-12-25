
// activation function
function sign(x){
  if (x >= 0){
    return 1;
  } else {
    return -1;
  }
}

function Perceptron() {
  var weights = [];
  var learning_rate = 0.1;

  for (i = 0; i < weights.length; i++) {
    weights[i] = (Math.random() * 2) - 1;
  }

  this.guess = function(inputs){
    var sum = 0;
    for (i = 0; i < inputs.length; i++){
      sum += inputs[i]*weights[i];
    }

    return sign(sum);
  };

  this.train = function(inputs, target){
    var guess = guess(inputs);
    var error = target - guess;

    // tune all the weights
    for(i = 0; i < weights.length; i++){
      weights[i] = inputs[i] * error * learning_rate;
    }

  };
}
