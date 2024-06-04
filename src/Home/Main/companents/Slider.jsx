import React, { useEffect } from "react";
import Swiper from "swiper";

function Slider() {
  useEffect(() => {
    const slider = new Swiper(".swiper-container", {
      loop: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
          <div className="swiper-slide">Slide 7</div>
          <div className="swiper-slide">Slide 8</div>
          <div className="swiper-slide">Slide 9</div>
          <div className="swiper-slide">Slide 10</div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Slider;
