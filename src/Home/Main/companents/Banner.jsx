import React from "react";
import bg from "../../../assets/img/Iphone Image.png";
export default function Banner() {
  return (
    <div className="Banner">
      <div className="container">
        <div className="banner-row">
          <div className="banner-left">
            <span>Pro.Beyond.</span>
            <h1>
              IPhone 14 <p>Pro</p>
            </h1>
            <p>Created to change everything for the better. For everyone</p>
            <button>Shop Now</button>
          </div>
          <div className="banner-right">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
