import React from "react";
import logo from "../../assets/img/Logo (2).png";
import search from "../../assets/img/Search.png";
import heart from "../../assets/img/Favorites.png";
import cart from "../../assets/img/Cart1.png";
import user from "../../assets/img/User.png";
import Menu from "../Main/Menu";
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="header-sorche">
            <label htmlFor="search">
              <img src={search} alt="" />
            </label>

            <input placeholder="Search " type="text" name="" id="search" />
          </div>
          <div className="header-link">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact Us</a>
            <a href="">Blog</a>
          </div>
          <div className="header-btn">
            <button>
              <img src={heart} alt="" />
            </button>
            <button>
              <img src={cart} alt="" />
            </button>
            <button>
              <img src={user} alt="" />
            </button>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
