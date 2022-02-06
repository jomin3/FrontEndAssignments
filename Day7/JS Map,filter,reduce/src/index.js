import "./styles.css";

let sentence = "Heloo how are you";
let splitArrray = sentence.split(" ");
console.log(splitArrray.join(" "));

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayTwo = arrayOne.map((item) => item * 3);
console.log(arrayTwo);
console.log(arrayOne);

let arrayThree = arrayOne.filter((item) => item % 2 === 0);
console.log(arrayThree);

let arrayFive = arrayOne.filter((item) => item % 2 === 1);
console.log(arrayFive);
let sum = arrayOne.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

// let newNumber = 4;
// let str = "22";
// let str2 = "12";
// console.log(str - str2);
//console.log(4*str);
