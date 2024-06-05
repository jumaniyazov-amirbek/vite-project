import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CategoryBlok from "./CategoryBlock";
import CategoryBlokk from "./CategoryBlokk";

export default function Category() {
  return (
    <div className="Category-all">
      <div className="Category-top">
        <div className="text">
          <h2>Browse By Category</h2>
        </div>
        <div className="slider-img"></div>
      </div>
      <div className="Category-low">
        <div>
          <Swiper
            style={{ width: 1000 }}
            className="banner-slider slider-banner"
            spaceBetween={0}
            loop={true}
          >
            <SwiperSlide className="slider-slide">
                <CategoryBlok />
            </SwiperSlide>
            <SwiperSlide className="slider-slide">
                <CategoryBlokk />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
