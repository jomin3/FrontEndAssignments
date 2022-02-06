import "./styles.css";

let k = 1;
console.log(typeof k);

let num = "Hello";
let x = "How are you";
console.log(`${num} ${x}`);

let numbers: number = 1;
console.log(numbers);

let tru: string = "hello";
console.log(tru);

let bool: boolean = true;

console.log(`${tru} ${bool}`);
console.log(bool + tru);

let newArray: number[] = [1, 2, 3, 4];
console.log(newArray);

let newAray: (string | number)[] = [1, 2, 3, 4];
newAray.push("str");
console.log(newAray);

// let employee: object;
// employee = {
//   fname: "Tom",
//   lname: "jonas",
//   age: 30
// };
let employee: {
  fName: string;
  lName: string;
  age: number;
};
employee = {
  fName: "Tom",
  lName: "jonas",
  age: 30
};
console.log(employee);

// let data:[string,number];
// data=["skill",30];

// let data: [string, number, number?];
// data = ["skill", 30, 78];

let data: any;
data = 20;
data = "jo";
console.log(data);

// function sum(a: any, b: any): void {
//   console.log(a + b);
// }
// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(3, 4));

enum socialMedia {
  fB,
  instaGram
}
console.log(socialMedia);

let message: string = "msg";
let score1: number = 20;
let score2 = 20;
// score2 = "h";
console.log(message, score1 + score2);

var str = "1";
console.log(typeof str);

function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID:", id);
  console.log("Name", name);

  if (mail_id !== undefined) console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

let alphas: string[] = ["1", "2"];
// alphas = ["1", "2", "3", "4"];
alphas.push("5");
console.log(alphas);
console.log(alphas[0]);
console.log(alphas[1]);

let mytuple = [10, "Hello", "World", "typeScript"];
mytuple[1] = 2;
console.log(mytuple);

let newArry = [1, 2, 3, 4, 5];
newArry.forEach((ele, index) => {
  newArry[index] = ele ** 2;
});
console.log(newArry);

function sub(a: number, b: number = 12): number {
  return b - a;
}
console.log(sub(5, 6));
