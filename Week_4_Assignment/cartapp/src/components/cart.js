import React from "react";
import Cartitem from "./cartitem";
import Cartsummary from "./cartsummary";
import "./cart.css";
import Cartheader from "./cartheader";
const Cart = (props) => {
  return (
    <>
      <Cartheader />
      <div>
        <Cartitem
          cartIt={props.cartIt}
          delete={props.delete}
          changecount={props.changecount}
        />
      </div>
      <Cartsummary
        subt={props.subt}
        subtotal={props.subtotal}
        tax={props.tax}
      />
    </>
  );
};

export default Cart;
