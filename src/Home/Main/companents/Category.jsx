import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
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
        <div className="text">
          <h2>Browse By Category</h2>
        </div>
        <div className="slider-img">
        
        </div>
      </div>
      <div className="Category-low">
        {product.map((item) => (
          <div>
            <Swiper
              style={{ width: 200 }}
              className="banner-slider slider-banner"
              spaceBetween={0}
              loop={true}
            >
              <SwiperSlide className="slider-slide">
                <div key={item.id} className="Category-low-block">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slide">
                <div key={item.id} className="Category-low-block">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}
