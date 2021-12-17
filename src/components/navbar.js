
import logo from "../img/navbarimg.png";
import "../style/navbar.css";
import twitterIcon from "../img/icons8-twitter-48.png";
import bIcon from "../img/icons8-dribbble-32.png";
import instaIcon from "../img/icons8-instagram-24.png";
import React, { useState } from "react";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
     
      <img  className=" nav__brand flex justify-start " height={90} width={200}src={logo} alt=''/>
     
      <ul className={active}>
        <li className="nav__item">
          <a  href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/About" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Blog" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="/Contant" className="nav__link">
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