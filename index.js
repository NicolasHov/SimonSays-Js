
var elem_clicked = 0
var number_list = [];


var elem_red = document.getElementById("red");
var elem_purple = document.getElementById("purple");
var elem_yellow = document.getElementById("yellow");
var elem_green = document.getElementById("green");

var button = document.getElementById("button");

tab = ["red", "purple", "yellow", "green"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function playSequence() {
  number_list = []; // je réinitialise pour l'instant
  number_list.push(getRandomIntInclusive(1, 4));
  console.log("number : "+ number_list[0]);
  changeOpacity(document.getElementById(tab[number_list[0]-1]));
  //return number_list;
}

function changeOpacity(elem) {
  elem.style.opacity="0.4";
  setTimeout(function(){ elem.style.opacity="1"; }, 100);
};

function showNumberElem(elem) {
  var elem_clicked = elem.getAttribute("class");
  console.log("elem cliked :"+ elem_clicked);
  isGoodAnswer(elem_clicked, number_list[0]);
  button.disabled = false;
};

function isGoodAnswer(number_clicked, number) {
  // déterminer si la couleur cliquée (elem_clicked) est bien celle indiquée(number_list[0])
    if (number_clicked == number) {
      console.log("gagné !");
      document.getElementById("result").innerHTML = "Gagné !";
      setTimeout( function(){ document.getElementById("result").innerHTML = ""; }, 2000);
    }
    else {
      console.log("perdu !");
      document.getElementById("result").innerHTML = "Perdu !";
      setTimeout( function(){ document.getElementById("result").innerHTML = ""; }, 2000);
    }
    button.disabled = false;
}

elem_red.addEventListener('click', function() {
  changeOpacity(elem_red);
  showNumberElem(elem_red);
});
elem_purple.addEventListener('click', function() {
  changeOpacity(elem_purple);
  showNumberElem(elem_purple);
});
elem_yellow.addEventListener('click', function() {
    changeOpacity(elem_yellow);
    showNumberElem(elem_yellow);
});
elem_green.addEventListener('click', function() {
    changeOpacity(elem_green);
    showNumberElem(elem_green);
});


button.addEventListener('click', function() {
    playSequence();
    document.getElementById("result").innerHTML = "";
    button.disabled = true;
});

// while (button.disabled == true) {
//
// }
