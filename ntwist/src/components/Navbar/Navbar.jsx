import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {GoSearch} from  "react-icons/go"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import { BiSolidDownArrow } from "react-icons/bi";


const Navbar = () => {
  const [state, setState] = useState(false);
  const [search, setSearch] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <>
      <div
        className={
          colorChange ? "navbar-wrapper colorChange" : "navbar-wrapper"
        }
      >
        <div className="nav-logo">
          <img
            className="img111"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
          <img className="img211"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
            alt=""
          />
        </div>
        <ul className="nav-menu-items">
          <li>
            <Link>Home</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link>
              Industries <BiSolidDownArrow style={{ fontSize: "11px" }} />
            </Link>
            {isHovered && (
              <div className="dropdown-content">
                <p>Sustainability</p>
                <p>Mineral Processing</p>
                <p>Mine-To-Mill-To-Mine Optimization</p>
                <p>Oil & Gas</p>
              </div>
            )}
          </li>
          <li>
            <Link>AI Software</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
        <div className="search-hamburger">
          <GoSearch className="go" onClick={() => setSearch(true)} />
          <GiHamburgerMenu className="gi" onClick={() => setState(true)} />
        </div>
      </div>
      {state ? <Sidebar setState={setState} /> : null}
      {search ? <Search setSearch={setSearch} /> : null}
    </>
  );
};

export default Navbar;
