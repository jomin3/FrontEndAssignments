import React from "react";

const Cartsummary = (props) => {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" />
        <button type="button" />
      </div>

      <div className="summary">
        <ul onClick={props.subtotal()}>
          <li>
            Subtotal <span>{props.subt}</span>
          </li>

          <li>
            Tax <span>Rs {props.tax}</span>
          </li>
          <li className="total">
            Total <span>Rs {props.subt + props.tax}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};

export default Cartsummary;
