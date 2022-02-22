import { useContext } from "react";
import { Bankcontext } from "./context";
import React from "react";

const Banking = () => {
  const { balance } = useContext(Bankcontext);
  const { changeHandler } = useContext(Bankcontext);
  const { input } = useContext(Bankcontext);
  const { withdrawHandler } = useContext(Bankcontext);
  const { depositHandler } = useContext(Bankcontext);
  const { fixedHandler } = useContext(Bankcontext);
  const { DeleteHandler } = useContext(Bankcontext);

  return (
    <div>
      <h2>{balance}</h2>
      <input
        type="number"
        value={input}
        onChange={(event) => {
          changeHandler(event.target.value);
        }}
      />
      <button onClick={withdrawHandler}>Withdraw</button>
      <button onClick={depositHandler}>Deposit</button>
      <button onClick={fixedHandler}>Fixed Deposit</button>
      <button onClick={DeleteHandler}>Delete</button>
    </div>
  );
};

export default Banking;
