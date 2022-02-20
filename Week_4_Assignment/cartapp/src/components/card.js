import React from "react";
import "./card.css";
const Card = (props) => {
  const sizes = () => {
    return props.product.size.map((item) => {
      return <div>{item}</div>;
    });
  };
  const color = () => {
    return props.product.color.map((item) => {
      return <div className={item}></div>;
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
