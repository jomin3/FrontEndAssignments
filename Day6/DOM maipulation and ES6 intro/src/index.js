import "./styles.css";

var parEl = document.getElementById("app");
var newEL = document.createElement("li");
console.log(parEl);
console.log(newEL);
newEL.textContent = "Hola";
parEl.replaceChild(newEL, parEl.firstElementChild);
console.log(parEl);
parEl.removeChild(parEl.lastElementChild);
console.log(parEl);

var IdEl = document.getElementById("inner");
console.log(IdEl);
var pEL = document.getElementsByTagName("p");
console.log(pEL);
var classEl = document.getElementsByClassName("two");
console.log(classEl);
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("li"));

var divPar = document.getElementById("box");
console.log(divPar.firstChild);
console.log(divPar.firstElementChild);
console.log(divPar.lastElementChild);
console.log(divPar.previousElementSibling);

var newChild = document.createElement("h2");
divPar.appendChild(newChild);
newChild.textContent = "I am a appended child";

var BodyEl = document.querySelector("body");
newChild.textContent = "I am a child added before ul element";
BodyEl.insertBefore(newChild, parEl);
var neChild = document.createElement("h6");
neChild.textContent = "Replacing Element";
divPar.replaceChild(neChild, divPar.lastElementChild);

var imgEl = document.getElementById("im");
parEl.setAttribute("class", "list");
console.log(parEl.hasAttribute("class"));
console.log(parEl.getAttribute("class"));
// parEl.removeAttribute("class");
parEl.classList.add("listnew");

var btnEl = document.getElementById("btn");
// btnEl.addEventListener("click", function () {
//   alert("You have won an iphone");
// });

// console.log(btnEl);
// btnEl.addEventListener("mouseover", function () {
//   alert("You have won an iphone");
// });

// btnEl.addEventListener("mouseout", function () {
//   alert("You have won an iphone");
// });

// btnEl.addEventListener("mousedown", function () {
//   alert("You have won an iphone");
// });

// btnEl.addEventListener("mouseup", function () {
//   alert("You have won an iphone");
// });

btnEl.addEventListener("mousedown", function () {
  imgEl.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_1280.jpg"
  );
});

var pi = 3.14;
pi = 3.12;
const k = 2;
var PI = 3.1415;
PI = 2;
console.log(PI);
var greet = "hello";
var count = 5;
if (count > 4) {
  let gret = "Hi";
}
//console.log(gret); this is an error
let me = "jomin";
if (count > 4) {
  let me = "sky";
}
console.log(me);
// let add = (a, b) => {
//   return a + b;
// };
let add = (a, b) => a + b;
console.log(add(10, 5));
console.log(typeof parEl);
let newArray = [1, 2, "Hello", true];
let Array = [1, 2, 3, 4, 5, 6];
Array.pop();

console.log(Array);
Array.push(10);
console.log(Array);
Array.shift();
console.log(Array);
Array.unshift(7);
console.log(Array);
// console.log(Array.findIndex("2"));
console.log(Array.slice(1, 2));
console.log(Array.slice(0));
console.log(Array);
let splicedArray = Array.splice(0, 2, Array.push(17, 8));
console.log(Array);
console.log(splicedArray);
let sentence = "THis is a sentence";
console.log(sentence.split(" ", 3));
