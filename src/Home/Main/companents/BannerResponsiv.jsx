import React from "react";
import AirPods from "../../../assets/img/hero__gnfk5g59t0qe_xlarge_2x 1 (1).png";
import MacBook from "../../../assets/img/MacBook Pro 14 (1).png";
import PlayStation from '../../../assets/img/PlayStation (1).png'
import image from "../../../assets/img/image 36 (1).png";
export default function BannerResponsiv() {
  return (
    <div className="BannerResponsiv">
      <div className="BannerResponsiv-mini-block">
        <img src={AirPods} alt="" />
        <h1>
          Apple AirPods <span>Max</span>
        </h1>
        <p>Computational audio. Listen, it's powerful</p>
      </div>
      <div className="BannerResponsiv-mini-block">
        <img src={image} alt="" />
        <h1>
          Apple Vision <span>Pro</span>
        </h1>
        <p>An immersive way to experience entertainment</p>
      </div>{" "}
      <div className="BannerResponsiv-mini-block">
        <img src={PlayStation} alt="" />
        <h1>
          Playstation <span>5</span>
        </h1>
        <p>
          Incredibly powerful CPUs, GPUs, and an SSD with <br />
          integrated I/O will redefine your PlayStation <br />
          experience.
        </p>
      </div>{" "}
      <div className="BannerResponsiv-mini-block">
        <img src={MacBook} alt="" />
        <h1>
       <span>Macbook </span>Air
        </h1>
        <p>The new 15‑inch MacBook Air makes room for <br />
         more of what you love with a spacious Liquid <br />
          Retina display.</p>
      </div>
    </div>
  );
}
