// import "./styles.css";

let newPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject("The promise is not resolved");
  }, 3000);
});

async function asynFunc() {
  let result = await newPromise
    .then((result) => {
      return result;
    })
    .catch((result) => {
      return result;
    });

  console.log(result);
}
// async function asynFunc() {
//   try {
//     let result = await newPromise;
//   } catch (error) {
//     console.log(error);
//   }
// }
asynFunc();

// let count = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(function () {
//       resolve("Promise is fullfilled");
//     }, 4000);
//   } else {
//     setTimeout(function () {
//       reject("Promise is rejected");
//     }, 4000);
//   }
// });
// let printlog = function (item) {
//   return console.log(item);
// };
// count
//   .then(function promSuccess(result) {
//     console.log(result);
//   })
//   .catch(function err(result) {
//     console.log(result);
//   })
//   .finally(() => {
//     printlog("No matter what");
//   });

// async function funcName() {
//   console.log("This is a async function");
//   return Promise.resolve("one");
// }
// funcName().then((result) => {
//   console.log(result);
// });

// let newPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("The promise is resolved");
//   }, 3000);
// });
// async function asynFunc() {
//   let result = await newPromise;
//   console.log(result);
//   console.log("Hello");
// }
// asynFunc();
