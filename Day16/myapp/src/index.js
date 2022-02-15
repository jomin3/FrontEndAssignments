// import "./index.css";

// ReactDOM.render(
//   <React.StrictMode></React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// class Greet extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

// ReactDOM.render(<Greet />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const Ele = () => {
  // const val = 10;
  // let evodd = (val) => {
  //   if (val % 2 === 0) {
  //     return "Even";
  //   } else {
  //     return "Odd";
  //   }
  // };
  // const newArray = [1, 2, 3, 4, 5, 6];

  // return (
  //   <div>
  //     <h1 className="">Hello</h1>
  //     <h2>
  //       Bye{val} is{evodd(val)}
  //     </h2>
  //   </div>
  // );
  // <div>
  //   <h1>Hello</h1>
  //   <h2>
  //     Bye{val} is{evodd(val)}
  //   </h2>
  //   {newArray.map((item) => {
  //     return <h1> {item} </h1>;
  //   })}
  // </div>
  return <App />;
};

ReactDOM.render(<Ele />, document.getElementById("root"));
