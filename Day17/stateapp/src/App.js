import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

function App() {
  // const [count, setCount] = useState({
  //   count1: 0,
  //   count2: 7,
  // });
  // let copyOfObject = { ...count };
  // const [countone, setcountone] = useState(6);
  // const increment = () => {
  //   setCount({ ...count, count1: count.count1 + 1 });
  // };
  // const decrement = () => {
  //   setCount({ ...count, count2: count.count2 - 1 });
  // };
  // const handleclickone = () => {
  //   setcountone(countone + 2);
  // };
  return (
    <div className="body">
      {/* <h1>{count.count1}</h1>
      <button onClick={increment}>increment</button>
      <h2>{count.count2}</h2>
      <button onClick={decrement}>decrement</button> */}
      {/* <Navbar firstbev="GreenTea" /> */}
      <Card
        title="Today's Money"
        value="$53000,"
        percent="+55%"
        logo="../coin.png"
      />
      <Card
        title="Today's Money"
        value="$53000,"
        percent="+55%"
        logo="../coin.png"
      />
    </div>
  );
}

export default App;
