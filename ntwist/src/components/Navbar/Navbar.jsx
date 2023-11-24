import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
const Navbar = () => {
  const [state, setState] = useState(false);
  const [search, setSearch] = useState(false);
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
          {MenuItems.map((el) => (
            <li key={el.i}>
              <Link to={el.url}>
                {el.title} {el.icons}
              </Link>
            </li>
          ))}
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
