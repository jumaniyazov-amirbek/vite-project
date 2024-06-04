import React from "react";
import PlayStation from "../../../assets/img/PlayStation.png";
import AirPodsMax from "../../../assets/img/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import AppleVisionPro from '../../../assets/img/image 36.png'
import MacBook from '../../../assets/img/MacBook Pro 14.png'
import BannerResponsiv from "./BannerResponsiv";
export default function BnnerBottom() {
  return (
    <div className="BnnerBottom-all">
      <div className="BnnerBottom-left">
        <div className="BnnerBottom-left-block">
          <div className="BnnerBottom-left-img">
            <img src={PlayStation} alt="" />
          </div>
          <div className="BnnerBottom-left-text">
            <h1>Playstation 5</h1>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated
              I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="BnnerBottom-left-bottom">
          <div className="BnnerBottom-left-bottom1">
            <img src={AirPodsMax} alt="" />
            <div className="BnnerBottom-left-bottom1-text">
              <h1>Apple AirPods <span>Max</span></h1>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </div>
          <div className="BnnerBottom-left-bottom2">
          <img src={AppleVisionPro} alt="" />
            <div className="BnnerBottom-left-bottom2-text">
              <h1>Apple Vision<span> Pro</span></h1>
              <p>An immersive way to <br /> experience entertainment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="BnnerBottom-right">
        <div className="BnnerBottom-right-text">
          <h1>Macbook <span>Air</span></h1>
          <p>The new 15‑inch MacBook Air makes room for more of what <br />
           you love with a spacious Liquid Retina display.</p>
          <button>Shop Now</button>
        </div>
        <div className="BnnerBottom-right-img"><img src={MacBook} alt="" /></div>
      </div>
      <div className='BannerResponsiv'><BannerResponsiv/></div>
    </div>
  );
}
