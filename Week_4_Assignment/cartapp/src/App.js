import "./App.css";
import Header from "./components/header";
import Products from "./components/products";
import Cart from "./components/cart";
import { useEffect, useState } from "react";

function App() {
  const [subt, setsub] = useState(0);
  const [tax, settax] = useState(0);

  const [count, setcount] = useState(1);
  const [sizes, setsizes] = useState(["Narrow", "Medium", "Wide"]);
  const [colors, setcolors] = useState(["maroon", "brown", "black"]);
  const [products, setproducts] = useState([
    {
      id: 1,
      glassName: "Aviator",
      url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//j/i/Gold-Green-Full-Rim-Aviator-John-Jacobs-JJ-Tints-JJ-S12474-C2-Polarized-Sunglasses_john-jacobs-jj-s12474-c2-sunglasses_g_219918_02_2022.jpg",
      cost: 4000,
      size: sizes,
      color: colors,
      description: "Polarized Sunglasses, ultra durable stainless steel frames",
      sizeid: 0,
      colorid: 0,
    },
    {
      id: 2,
      glassName: "WayFarer",
      url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/Matte-Black-Grey-Gunmetal-Black-Blue-Gradient-Full-Rim-Wayfarer-Vincent-Chase-Polarized-MIRAGE-VC-S11113-C5-Sunglasses_vincent-chase-polarized-vc-s11113-c5-sunglasses_sunglasses_g_6435_118_02_2022.jpg",
      cost: 1299,
      size: sizes,
      color: colors,
      description: "Polarized Sunglasses, Matte Surfaced Full-Rim",
      sizeid: 0,
      colorid: 0,
    },
    {
      id: 3,
      glassName: "Clubmaster",
      url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//j/i/Tortoise-Green-Solid-Full-Rim-Clubmaster-John-Jacobs-JJ-Tints-JJ-S13089-C2-Sunglasses_john-jacobs-jj-s13089-c2-sunglasses_sunglasses_g_2549_118_02_2022.jpg",
      cost: 5000,
      size: sizes,
      color: colors,
      description: "Power Sunglasses, Tortoise Full-Rim",
      sizeid: 0,
      colorid: 0,
    },
    {
      id: 4,
      glassName: "CatEyes",
      url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/o/vogue-vo4138-507420-sunglasses_sunglasses_G_5178_1.jpg",
      cost: 7190,
      size: sizes,
      color: colors,
      description: "Power Sunglasses, Scratch-resistant",
      sizeid: 0,
      colorid: 0,
    },
  ]);
  // setproducts(allProducts);
  const [cartitems, setcartitems] = useState([]);

  const additems = (id) => {
    console.log("added");
    let item;
    products.map((items) => {
      if (items.id === id) {
        item = items;
      }
    });
    item = { ...item, count: 1 };
    cartitems.push(item);
    setcartitems([...cartitems]);
    console.log(cartitems);
    subtotal();
    // updatecart();
  };
  const deleteitems = (id) => {
    console.log("deleted");
    let newitem = cartitems.filter((items) => {
      return items.id !== id;
    });
    setcartitems([...newitem]);
    console.log(cartitems);
    subtotal();
  };
  const changecount = (val, id) => {
    // console.log("deleted");
    cartitems.forEach((items) => {
      if (items.id === id) {
        items.count = val;
      }
    });
    setcartitems([...cartitems]);
    console.log(cartitems);
    subtotal();
  };
  const subtotal = () => {
    // console.log("deleted");
    let sub = 0;
    cartitems.forEach((items) => {
      sub += items.count * items.cost;
    });
    settax(sub * 0.08);
    setsub(sub);
    console.log(sub);
  };
  const updatecart = () => {
    // console.log("deleted");

    setcartitems([...cartitems]);
  };
  const changesize = (id, index) => {
    products.forEach((items) => {
      if (items.id === id) {
        items.sizeid = index;
      }
    });
    setproducts([...products]);
  };
  const changecolor = (id, index) => {
    products.forEach((items) => {
      if (items.id === id) {
        items.colorid = index;
      }
    });
    setproducts([...products]);
  };
  console.log(products);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="content">
        <div>
          <Products
            allProducts={products}
            add={additems}
            changesize={changesize}
            changecolor={changecolor}
          />
        </div>
        <div>
          <Cart
            cartIt={cartitems}
            delete={deleteitems}
            changecount={changecount}
            subt={subt}
            subtotal={subtotal}
            tax={tax}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
