import React, { useState } from "react";
import Arrow from "../../../assets/img/Arrow.png";
import Arrow1 from "../../../assets/img/Arrow1.png";
import Arro3 from "../../../assets/img/category/Phones.png";
import Arro4 from "../../../assets/img/category/Smart Watches.png";
import Arro5 from "../../../assets/img/category/Cameras.png";
import Arro6 from "../../../assets/img/category/Headphones.png";
import Arro7 from "../../../assets/img/category/Computers.png";
import Arro8 from "../../../assets/img/category/Gaming.png";
export default function Category() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: Arro3,
      name: "Phones",
    },
    {
      id: 2,
      image: Arro4,
      name: "Smart Watches",
    },
    {
      id: 3,
      image: Arro5,
      name: "Cameras",
    },
    {
      id: 4,
      image: Arro6,
      name: "Headphones",
    },
    {
      id: 5,
      image: Arro7,
      name: "Computers",
    },
    {
      id: 6,
      image: Arro8,
      name: "Gaming",
    },
  ]);
  return (
    <div className="Category-all">
      <div className="Category-top">
        <div className="text">Browse By Category</div>
        <div className="slider-img">
          <img src={Arrow} alt="" />
          <img src={Arrow1} alt="" />
        </div>
      </div>
      <div className="Category-low">
        {product.map((item) => (
          <div key={item.id} className="Category-low-block">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
