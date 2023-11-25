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

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <>
      <div className="navbar-wrapper">
        <div className="nav-logo">
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
        </div>
        <ul className="nav-menu-items">
          {/* {MenuItems.map((el)=>(
        <li key={el.i}>
          <Link to={el.url}>{el.title} {el.icons}</Link>
        </li>
      ))} */}

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
