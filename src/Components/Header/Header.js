import React from "react";
import cocaCola_logo from "../images/cocacola-logo.svg";
import world_icon from "../images/world.svg";
import search_icon from "../images/search.svg";
import people_icon from "../images/people.svg";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-wrapper">
        <img
          className="coca-cola-logo"
          src={cocaCola_logo}
          alt="coca-cola"
        ></img>

        <ul className="link-wrapper">
          <li className="header-link1">
            <a className="header-a1" href="blank">
              Our Company
            </a>
          </li>
          <li className="header-link2">
            <a className="header-a2" href="blank">
              Our Brands
            </a>
          </li>
          <li className="header-link3">
            <a className="header-a3" href="blank">
              Sustainability
            </a>
          </li>

          <li className="header-link4">
            <a className="header-a4" href="blank">
              Social Impact
            </a>
          </li>

          <li className="header-link5">
            <a className="header-a5" href="blank">
              Careers
            </a>
          </li>
          <li className="header-link6">
            <a className="header-a6" href="blank">
              News
            </a>
          </li>
          <li className="header-link7">
            <a className="header-a7" href="blank">
              Investors
            </a>
          </li>
        </ul>
        <div className="header-icon-wrapper">
          <img className="header-icons" src={world_icon} alt="world"></img>
          <img className="header-icons" src={search_icon} alt="search"></img>
          <img className="header-icons" src={people_icon} alt="people"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
