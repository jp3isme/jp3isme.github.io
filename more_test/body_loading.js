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


var myList = [];

var contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if (!findNaN && typeof Array.prototype.indexOf === 'function') {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(needle) {
      var i = -1,
        index = -1;

      for (i = 0; i < this.length; i++) {
        var item = this[i];

        if ((findNaN && item !== item) || item === needle) {
          index = i;
          break;
        }
      }

      return index;
    };
  }

  return indexOf.call(this, needle) > -1;
};
/*
function toggleCheckbox(element) {
  var val_index = $(this).id;
  console.log(val_index);
  if (!$(this).checked && (contains.call(myList, val_index))) {
    var index = array.indexOf(val_index);
    if (index !== -1) array.splice(index, 1);
  } else if ($(this).checked) {
    if (!contains.call(myList, val_index)) {
      myList.push(val_index);
    }
  }
  console.log(myList);
}
*/
$('#checkbox').click(function() {
  var val_index = $(this).className;
  console.log(val_index);
  if ($(this).is(':unchecked')) {
    if (contains.call(myList, val_index)) {
      var index = array.indexOf(val_index);
      if (index !== -1) array.splice(index, 1);
    }
  } else if ($(this).is(':checked')) {
    if (!contains.call(myList, val_index)) {
      myList.push(val_index);
    }
  }
  console.log(myList);
});


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
  var br2 = document.createElement('br');
  var label = document.createElement('label');
  var input = document.createElement('input');
  var input_div = document.createElement('div');
  var h4 = document.createElement('h4');
  var br3 = document.createElement('br');

  var t1 = document.createTextNode(". . .");
  var t3 = document.createTextNode(el[1]);
  var t2 = document.createTextNode(el[2]);
  var t4 = document.createTextNode("My List");

  h1.appendChild(t1);
  h3.appendChild(t3);
  h2.appendChild(t2);
  newDiv.className = 'dates';
  img.src = el[3];
  img.className = 'movie_posters'
  link.href = el[4];
  link.target = '_blank';
  label.className = 'control control--checkbox';
  label.id = el[0];
  input.type = 'checkbox';
  input.className = el[0];
  input.id = 'checkbox';
  //input.setAttribute("onchange", 'toggleCheckbox(this)');
  input_div.className = 'control__indicator';
  h4.appendChild(t4);

  link.appendChild(img);
  label.appendChild(input);
  label.appendChild(input_div);

  newDiv.appendChild(link);
  newDiv.appendChild(h1);
  newDiv.appendChild(h3);
  newDiv.appendChild(br);
  newDiv.appendChild(h2);
  newDiv.appendChild(br2);
  newDiv.appendChild(label);
  newDiv.appendChild(h4);
  newDiv.appendChild(br3);


  if (index % 4 == 0) {
    var spacer = document.createElement('div');
    spacer.className = 'spacer';
    toAdd.appendChild(spacer);
    console.log("Spacer added\n");
  }

  toAdd.appendChild(newDiv);
});

$('.inner').append(toAdd);
