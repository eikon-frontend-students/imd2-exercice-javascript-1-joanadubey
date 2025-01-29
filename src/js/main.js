var yellowbox = document.querySelector(".change-color");

function changeColor() {
  yellowbox.classList.add("is-active");
}

yellowbox.addEventListener("click", changeColor);

var orangebox = document.querySelector(".toggle-color");

function toggleColor() {
  orangebox.classList.toggle("is-active");
}

orangebox.addEventListener("click", toggleColor);

var pinkbox = document.querySelector(".trigger");
var redbox = document.querySelector(".target");

function disapear() {
  redbox.classList.toggle("is-hidden");
}

pinkbox.addEventListener("click", disapear);

var greenbox = document.querySelector(".trigger-all");

function changeColor2() {
  yellowbox.classList.add("is-active");
  orangebox.classList.add("is-active");
}

greenbox.addEventListener("click", changeColor2);

var bluebox = document.querySelector(".trigger-all-self");

function changeColor3() {
  yellowbox.classList.add("is-active");
  orangebox.classList.add("is-active");
  bluebox.classList.add("is-active");
}

bluebox.addEventListener("click", changeColor3);
