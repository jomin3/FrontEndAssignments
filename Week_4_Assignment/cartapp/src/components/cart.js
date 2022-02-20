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
          updatecart={props.updatecart}
        />
      </div>
      <Cartsummary subt={props.subt} subtotal={props.subtotal} />
    </>
  );
};

export default Cart;
