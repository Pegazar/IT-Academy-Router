import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="navbar">
            <span>Yusif Feyzullazade</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className="list">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="burger">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? "d-none" : "show"}>
          <li className="menu-list">
            {" "}
            <Link onClick={handleClick} to="about">About</Link>
          </li>
          <l className="menu-list">
            {" "}
            <Link onClick={handleClick} to="portfolio">Portfolio</Link>
          </l>
          <li className="menu-list">
            {" "}
            <Link onClick={handleClick} to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
