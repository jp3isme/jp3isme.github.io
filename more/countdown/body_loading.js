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
var current = 'a';
var csv_content;
var movies;

function first(){
  csv_content = document.getElementById("val_data").innerHTML;
  movies = $.csv.toArrays(csv_content);
  console.log(movies);
  setup();
}

function setup() {
  $('.inner').html("");
  if (typeof(Storage) !== "undefined") {
    // Retrieve
    var retreive = [];
    if ((retreive = JSON.parse(localStorage.getItem("myList"))) != null) {
      myList = retreive;
    };
  } else {
    alert("Unfortunately, your browser does not support Web Storage, so the \"My List\" feature is unavailable");
  }
  console.log(typeof myList);
  console.log(myList);

  var toAdd = document.createDocumentFragment();
  var count = 0;
  movies.forEach(function(el, index) {
    if(current == 'b'){
      if (!contains.call(myList, el[0])) {
        return;
      }
    }
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
    var t3 = document.createTextNode(el[0]);
    var t2 = document.createTextNode(el[1]);
    var t4 = document.createTextNode("My List");

    h1.appendChild(t1);
    h3.appendChild(t3);
    h2.appendChild(t2);
    newDiv.className = 'dates';
    img.src = el[2];
    img.className = 'movie_posters'
    link.href = el[3];
    link.target = '_blank';
    label.className = 'control control--checkbox';
    label.id = el[0];
    input.type = 'checkbox';
    input.id = el[0];
    input.className = 'checkbox';
    input.setAttribute("onchange", 'checkk(this)');
    input_div.className = 'control__indicator';
    console.log("THIS IS EL ZERO " + el[0]);
    if (contains.call(myList, el[0])) {
      //input.setAttribute("checked", true);
      input.checked = true;
      console.log("found" + el[0]);
    } else {
      //input.setAttribute("checked", false);
      input.checked = false;
      console.log("not found" + el[0]);
    }

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


    if (count % 4 == 0) {
      var spacer = document.createElement('div');
      spacer.className = 'spacer';
      toAdd.appendChild(spacer);
      console.log("Spacer added\n");
    }
    count++;
    toAdd.appendChild(newDiv);
  });
  if (!toAdd.hasChildNodes()) {
    var newDiv = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var h2 = document.createElement('h2');
    div2.style.height = "105px";
    div2.style.width = "100%";
    div3.style.height = "20px";
    div3.style.width = "100%";

    h2.style.textAlign = "center";
    h2.style.margin = '20px';
    newDiv.style.textAlign = "center";
    var t1 = document.createTextNode("Add movies to \"My List\" to see them here");
    h2.appendChild(t1);
    newDiv.appendChild(div2);
    newDiv.appendChild(h2);
    newDiv.appendChild(div3);
    toAdd.appendChild(newDiv);
  }
  $('.inner').append(toAdd);

  $('.dates').each(function() {
    console.log("run");
    var dateInBox = $(this).children("h2").text();
    // Set the date we're counting down to
    var countDownDate = new Date(dateInBox).getTime();

    var changeMe = $(this).children('h1');

    setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();
      //alert(countDownDate + "\n" + now);
      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      changeMe.text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      // If the count down is over, write some text
      if (distance < 0) {
        changeMe.text("It's Time!");
      }
    }, 1000);
  });

};


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

function checkk(elem) {
  var val_index = elem.id;
  console.log(val_index);

  if (contains.call(myList, val_index)) {
    var index = myList.indexOf(val_index);
    if (index !== -1) myList.splice(index, 1);
  } else if (!contains.call(myList, val_index)) {
    myList.push(val_index);
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("myList", JSON.stringify(myList));
  } else {
    alert("Unfortunately, your browser does not support Web Storage, so the My List feature is unavailable");
  }
  console.log(typeof myList);
  console.log(myList);
};

$('#myList_button').click(function() {
  $('#all_button').attr('style', 'background-color: #adadad');
  $('#myList_button').attr('style', 'background-color: #eeeeee');
  console.log("myList");
  current = 'b';
  setup();
});
$('#all_button').click(function() {
  $('#myList_button').attr('style', 'background-color: #adadad');
  $('#all_button').attr('style', 'background-color: #eeeeee');
  console.log("all");
  current = 'a';
  setup();
});

window.onload = first;
