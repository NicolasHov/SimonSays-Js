
var elem_clicked = 0
var number_list = [];

var elem_red = document.getElementById("red");
var elem_purple = document.getElementById("purple");
var elem_yellow = document.getElementById("yellow");
var elem_green = document.getElementById("green");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function playSequence() {
  number_list = []; // permet de n'avoir q'un seul élément
  number_list.push(getRandomIntInclusive(1, 4));
  console.log(number_list[0]);
  return number_list;
}

function changeOpacity(elem) {
  elem.style.opacity="0.4";
  setTimeout(function(){ elem.style.opacity="1"; }, 100);

};

function elem_clicked(elem) {
  elem_clicked = elem.className.to_int;
  console.log(elem_clicked);
  return elem_clicked;
};


elem_red.addEventListener('click', function() {
  changeOpacity(elem_red);
  elem_clicked(elem_red);
});
elem_purple.addEventListener('click', function() {
  changeOpacity(elem_purple);
  elem_clicked(elem_red);
});
elem_yellow.addEventListener('click', function() {
    changeOpacity(elem_yellow);
    elem_clicked(elem_yellow);
});
elem_green.addEventListener('click', function() {
    changeOpacity(elem_green);
    elem_clicked(elem_green);
});

function chooseNumber() {

}
