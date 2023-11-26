import React, { useState } from 'react'
import{IoMdClose}from "react-icons/io"
import "./sidebar.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
const Sidebar = ({setState}) => {
    const [isth, setIsth] = useState(false);
  return (
    <div className="sidebar-modal-wrapper">
      <div className="sidebar-modal-inner">
        <div className="sidebar-heading">
          <div className="nav-logo">
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              alt=""
            />
          </div>
          <IoMdClose className="io" onClick={() => setState(false)} />
        </div>

        {/* --------------modal---body----- */}
        <div className="modal-body">
          <ul className="modal-menu">
            <li>
              <Link>Home</Link>
            </li>
            <li onClick={() => setIsth(!isth)}>
              <Link>
                Industries{" "}
                <span>{isth ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </Link>
              {isth && isth ? (
                <div className="accordion-Text">
                  <p>Sustainability</p>
                  <p>Mineral Processing</p>
                  <p>Mine-To-Mill-To-Mine Optimization</p>
                  <p>Oil & Gas</p>
                </div>
              ) : null}
            </li>
            <li>
              <Link>AI Software</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
