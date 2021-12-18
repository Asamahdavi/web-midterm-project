import logo from "../img/navbarimg.png";
import "../style/navbar.css";
import twitterIcon from "../img/icons8-twitter-48.png";
import bIcon from "../img/icons8-dribbble-32.png";
import instaIcon from "../img/icons8-instagram-24.png";
import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
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
    <nav className="nav ">
      <img
        className=" nav-brand flex justify-start "
        height={90}
        width={200}
        src={logo}
        alt=""
      />

      <ul className={active}>
        <li className="nav-item">
            <NavLink exact activeClassName="active" to='/'>
               Home
            </NavLink>
      
        </li>

        <li className="nav-item">
         
             <NavLink exact activeClassName="active" to='/About'>
               About
            </NavLink>
        </li>
        <li className="nav-item">
          
             <NavLink exact activeClassName="active" to='/Blog'>
               Blog
            </NavLink>
        </li>
        <li className="nav-item">
         
             <NavLink exact activeClassName="active" to='/Contant'>
               Contact
            </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="thirdIcon space-x-4   float-right flex items-end  relative   grid-cols-3 h-5 bg-darkgray ">
        <img className="cursor-pointer " height={10} width={20} src={twitterIcon} alt="" />
        <img height={10} width={20} className="icon cursor-pointer" src={bIcon} alt="" />
        <img height={10} width={20} className="icon cursor-pointer" src={instaIcon} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
