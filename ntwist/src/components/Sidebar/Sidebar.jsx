import React from 'react'
import{IoMdClose}from "react-icons/io"
import "./sidebar.css";
import { MenuItems } from '../Navbar/MenuItems';
import { Link } from 'react-router-dom';
const Sidebar = ({setState}) => {
  return (
    <div className='sidebar-modal-wrapper'>
      <div className="sidebar-modal-inner">
        <div className="sidebar-heading">
        <div className="nav-logo">
      <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
     </div>
           <IoMdClose className='io' onClick={()=>setState(false)}/>
        </div>

        {/* --------------modal---body----- */}
        <div className="modal-body">
          <ul className='modal-menu'>
            {MenuItems.map((el)=>(
              <li key={el.id}><Link to={el.url}>
               {el.title} {el.icons}
                </Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
