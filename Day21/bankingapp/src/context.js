import { createContext, useState } from "react";

export const Bankcontext = createContext();

export const BankProvider = (props) => {
  const [balance, setBalance] = useState(200);
  const [input, setinput] = useState("");
  const changeHandler = (val) => {
    setinput(val === "" ? "" : parseInt(val));
  };
  const withdrawHandler = () => {
    if (balance >= input) setBalance(balance - input);
    else alert("Balance not sufficient");
    setinput("");
  };
  const depositHandler = () => {
    setBalance(balance + input);
    setinput("");
  };
  const fixedHandler = () => {
    setBalance((balance + input) * 1.03);
    setinput("");
  };
  const DeleteHandler = () => {
    setBalance(0);
    setinput("");
  };
  return (
    <Bankcontext.Provider
      value={{
        balance,
        changeHandler,
        input,
        withdrawHandler,
        depositHandler,
        fixedHandler,
        DeleteHandler
      }}
    >
      {props.children}
    </Bankcontext.Provider>
  );
};
