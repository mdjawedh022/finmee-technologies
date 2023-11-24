import React from 'react'
import { FooterMenu } from './FooterMenu'
import {Link} from "react-router-dom"
import {BiLogoTwitter,BiLogoLinkedinSquare} from "react-icons/bi"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-logo"><img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" /></div>
        <div className="footer-menu">
          <ul className='footer-link'>
            {
              FooterMenu.map((el)=>{
                return <li key={el.id}><Link to={el.url}>{el.title}</Link></li>
              })
            }
          </ul>
        </div>
        <p className='footer-text'>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className="social-media"><BiLogoTwitter className='bi-icon'/><BiLogoLinkedinSquare className='bi-icon'/></div>
        <p>© 2022. Ntwist Inc.</p>
    </div>
  )
}

export default Footer
