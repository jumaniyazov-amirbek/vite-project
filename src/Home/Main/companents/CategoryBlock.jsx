import React, { useState } from "react";
import Arro3 from "../../../assets/img/category/Phones.png";
import Arro4 from "../../../assets/img/category/Smart Watches.png";
import Arro5 from "../../../assets/img/category/Cameras.png";
import Arro6 from "../../../assets/img/category/Headphones.png";
import Arro7 from "../../../assets/img/category/Computers.png";
import Arro8 from "../../../assets/img/category/Gaming.png";
import CategoryBlock from "./CategoryBlock";
export default function CategoryBlok() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: Arro3,
      name: "Phone",
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
    <div className="block">
      {product.map((item) => (
        <div key={item.id} className="Category-low-block">
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
