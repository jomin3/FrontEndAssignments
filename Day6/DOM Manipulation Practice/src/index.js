import "./styles.css";
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var orange = document.getElementById("orange");
var white = document.getElementById("reset");
var bodyEl = document.getElementById("app");
red.addEventListener("click", function () {
  bodyEl.setAttribute("class", "redcolor");
  orange.textContent = "Click for Orange";
  red.textContent = "RED IS CLICKED";
  blue.textContent = "Click for Blue";
});
blue.addEventListener("click", function () {
  bodyEl.setAttribute("class", "bluecolor");
  orange.textContent = "Click for Orange";
  red.textContent = "Click for Red";
  blue.textContent = "BLUE IS CLICKED";
});
orange.addEventListener("click", function () {
  bodyEl.setAttribute("class", "orangecolor");
  orange.textContent = "ORANGE IS CLICKED";
  red.textContent = "Click for Red";
  blue.textContent = "Click for Blue";
});
white.addEventListener("click", function () {
  bodyEl.setAttribute("class", "reset");
  orange.textContent = "Click for Orange";
  red.textContent = "Click for Red";
  blue.textContent = "Click for Blue";
});
