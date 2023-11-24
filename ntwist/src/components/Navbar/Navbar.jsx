import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import { BiSolidDownArrow } from "react-icons/bi";
const Navbar = () => {
  const [state, setState] = useState(false);
  const [search, setSearch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="inner-navbar">
          <div className="nav-logo">
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              alt=""
            />
          </div>
          <ul className="nav-menu-items">
            <li>Home</li>
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Industries <BiSolidDownArrow style={{ fontSize: "11px" }} />
              {isHovered && (
                <div className="dropdown-content">
                  <p>Sustainability</p>
                  <p>Mineral Processing</p>
                  <p>Mine-To-Mill-To-Mine Optimization</p>
                  <p>Oil & Gas</p>
                </div>
              )}
            </li>
            <li>AI Software</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <div className="search-hamburger">
            <GoSearch className="go" onClick={() => setSearch(true)} />
            <GiHamburgerMenu className="gi" onClick={() => setState(true)} />
          </div>
        </div>
      </div>
      {state ? <Sidebar setState={setState} /> : null}
      {search ? <Search setSearch={setSearch} /> : null}
    </>
  );
};

export default Navbar;
