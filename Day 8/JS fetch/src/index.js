import "./styles.css";
// let data = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });

async function asynFun() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => result);
  console.log(data);
  data = data.map((item) => {
    return item["username"];
  });
  console.log(data);
  console.log("This should be printed after fetch promise is fulfilled");
}
asynFun();
