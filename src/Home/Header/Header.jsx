import React, { useState } from "react";
import logo from "../../assets/img/Logo (2).png";
import search from "../../assets/img/Search.png";
import heart from "../../assets/img/Favorites.png";
import cart from "../../assets/img/Cart1.png";
import user from "../../assets/img/User.png";
import Menu from "../Main/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [burger, setBurger] = useState(false);

  function menu() {
    if (burger == true) {
      setBurger(false);
    }
    if (burger == false) {
      setBurger(true);
    }
  }
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
            <Link to="/"> Home</Link>
            <Link to="about"> About</Link>
            <Link to="contactUs">ContactUs</Link>
            <Link to="blog">Blog</Link>
          </div>
          <div className="header-btn">
            <button>
              <Link to="/heart">
                <img src={heart} alt="" />
              </Link>
            </button>
            <button>
              <Link to="/praduct">
                <img src={cart} alt="" />
              </Link>
            </button>
            <button>
              <Link to="/profil">
                <img src={user} alt="" />
              </Link>
            </button>
          </div>
          <div className="menu">
            <button onClick={menu}>
              <Menu />
            </button>
            <div className={burger ? "blok" : "none"}>
              <div className="release">
                <div className="release-block">
                    <h1>Not</h1>
                <button onClick={menu}>
                  <h1>X</h1>
                </button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
