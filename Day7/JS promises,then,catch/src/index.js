import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// function greet() {
//   console.log("Hello");
// }
// let buy = () => {
//   console.log("bye");
// };

// setTimeout(greet, 4000);
// buy();
let status = true;
let promExam = new Promise(function (resolve, reject) {
  if (status) {
    setTimeout(function () {
      resolve("The promise is fullfiled");
    }, 5000);
  } else {
    reject("Promise is not fullfilled");
  }
});

function myDisplayer(item) {
  console.log(item);
}
promExam.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
