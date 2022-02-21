import React from "react";

const Cartitem = (props) => {
  console.log(props);
  return props.cartIt.map((item) => {
    return (
      <div>
        <ul className="products">
          <li className="row" key="1">
            <div className="col left">
              <div className="thumbnail">
                <a href="#">
                  <img src={item.url} alt="sunglass name" />
                </a>
              </div>
              <div className="detail">
                <div className="name">
                  <a href="#">{item.glassName}</a>
                </div>
                <div className="description">
                  {item.description} <span>{item.size[item.sizeid]}</span>
                </div>
                <div className={item.color[item.colorid]}></div>
                <div className="price">Rs{item.cost}</div>
              </div>
            </div>

            <div className="col right">
              <div className="quantity">
                <input
                  type="text"
                  className="quantity"
                  step="1"
                  value={item.count}
                  onChange={(event) =>
                    props.changecount(event.target.value, item.id)
                  }
                />
              </div>

              <div className="remove">
                <svg
                  onClick={() => props.delete(item.id)}
                  version="1.1"
                  className="close"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enableBackground="new 0 0 60 60"
                >
                  <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  });
};

export default Cartitem;
