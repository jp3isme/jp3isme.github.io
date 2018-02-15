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
var mystring = "movies"
var csv_content;
var movies;
$('#loadCSV').load(mystring + ".html", function() {
  csv_content = document.getElementById("val_data").innerHTML;

});

console.log(csv_content);
movies = $.csv.toArrays(csv_content);
console.log(movies);
