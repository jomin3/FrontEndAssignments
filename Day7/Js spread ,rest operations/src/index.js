"strict";
let student = {
  firstName: "Tom",
  age: 30,
  lastName: "jerry",
  "current Job": "student"
};
// student.firstName = "Mark";
// student.bmi = 24;
// console.log(student.firstName);
// console.log(student["current Job"]);
// console.log(student["bmi"]);
// delete student.bmi;
// console.log("age" in student);
// console.log(student.hasOwnProperty());
// let key;
// for (key in student) {
//   console.log(student[key]);
// }

let newArray = [1, 2, 3, 4, 5, 6];
let [x, , y] = newArray;
console.log(x, y);

let { firstName: fName, age = 31 } = student;
console.log(fName, age);

function show(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
}
show(1, 2, 3, 4, 5);

function showRest(...args) {
  console.log(args.reduce((result, item) => result + item, 0));
}
showRest(1, 2, 3, 4, 5, 6);
let arrOne = [1, 2, 3];
let arrTwo = [...arrOne, 4, 5, 6];
console.log(arrTwo);
