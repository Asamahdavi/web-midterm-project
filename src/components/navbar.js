
import logo from "../img/navbarimg.png";
import "../style/navbar.css";
import twitterIcon from "../img/icons8-twitter-48.png";
import bIcon from "../img/icons8-dribbble-32.png";
import instaIcon from "../img/icons8-instagram-24.png";
import React, { useState } from "react";


function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

  
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className="nav">
     
      <img  className=" nav-brand flex justify-start " height={90} width={200}src={logo} alt=''/>
     
      <ul className={active}>
        <li className="nav-item">
          <a  href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/About" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/Blog" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/Contant" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="thirdIcon space-x-4   float-right flex items-end  relative   grid-cols-3 h-12 bg-darkgray ">
          <img className=" "  height={10} width={20} src={twitterIcon} alt="" />
          <img height={10} width={20} className="icon" src={bIcon} alt="" />
          <img height={10} width={20} className="icon" src={instaIcon} alt="" />
        </div>
    </nav>
  );
}

export default Navbar;