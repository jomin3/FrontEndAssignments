import React from "react";
import "./card.css";
const Card = (props) => {
  const sizes = () => {
    return props.product.size.map((item, index) => {
      return (
        <div
          className={index === props.product.sizeid ? " selected" : ""}
          onClick={() => {
            props.changesize(props.product.id, index);
            console.log("changingsize", props.product.id, index);
          }}
        >
          {item}
        </div>
      );
    });
  };
  const color = () => {
    return props.product.color.map((item, index) => {
      return (
        <div
          className={
            item + (index === props.product.colorid ? " selected" : "")
          }
          onClick={() => {
            props.changecolor(props.product.id, index);
            console.log("changingsize", props.product.id, index);
          }}
        ></div>
      );
    });
  };
  return (
    <div className="item">
      <div>
        <img
          className="img-box"
          src={props.product.url}
          alt="Awesome Sunglasses"
        />
      </div>

      <div class="details">
        <div className="heading">
          {props.product.glassName} Sunglasses{" "}
          <div className="price">
            Rs <span>{props.product.cost}</span>
          </div>
        </div>
        <div>Men's Collection</div>
        <label>Size</label>
        <div className="horizontal">{sizes()}</div>
        <label>Color</label>
        <div class="colors">{color()}</div>
        <div
          className="btn"
          onClick={() => {
            props.add(props.product.id);
          }}
        >
          <div>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
