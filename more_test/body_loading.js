/*
**
** Body Loading js for "Movie Countdown"
**
** Copyrighted 2018 by John-Michael Smith
**
** This code uses Evan Plaice's jquery.csv.js
** https://github.com/evanplaice/jquery-csv/
**
*/

//document.getElementById("loadCSV").innerHTML='<object type="text/html" data="./movies.html" ></object>';
var csv_content;
var movies;
csv_content = document.getElementById("val_data").innerHTML;
movies = $.csv.toArrays(csv_content);
console.log(movies);

var toAdd = document.createDocumentFragment();

movies.forEach(function(el, index) {
  var newDiv = document.createElement('div');
  var link = document.createElement('a');
  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var h3 = document.createElement('h3');
  var br = document.createElement('br');
  var h2 = document.createElement('h2');
  var label = document.createElement('label');
  var input = document.createElement('input');
  var input_div = document.createElement('div');

  var t1 = document.createTextNode(". . .");
  var t3 = document.createTextNode(el[1]);
  var t2 = document.createTextNode(el[2]);

  h1.appendChild(t1);
  h3.appendChild(t3);
  h2.appendChild(t2);
  newDiv.className = 'dates';
  img.src = el[3];
  img.className = 'movie_posters'
  link.href = el[4];
  link.target = '_blank';
  label.className = 'control control--checkbox';
  input.type = 'checkbox';
  input_div.className = 'control__indicator';

  link.appendChild(img);
  label.appendChild(input);
  label.appendChild(input_div);

  newDiv.appendChild(link);
  newDiv.appendChild(h1);
  newDiv.appendChild(h3);
  newDiv.appendChild(br);
  newDiv.appendChild(h2);
  newDiv.appendChild(label);

  if(index % 4 == 0){
      var spacer = document.createElement('div');
      spacer.className = 'spacer';
      toAdd.appendChild(spacer);
      console.log("Spacer added\n");
  }

  toAdd.appendChild(newDiv);
});

$('.inner').append(toAdd);
