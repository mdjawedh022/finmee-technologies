import React from "react";
import "./footer.css"
import { Footerlink, Footerlink2, Footerlink3, Footerlink4 } from "./FooterMenu";
import {AiOutlineGithub} from "react-icons/ai"
import {BiLogoLinkedin,BiLogoTiktok} from "react-icons/bi"
import {FaFacebookSquare,FaYoutube,FaTwitch} from "react-icons/fa"
import {RiTwitterXFill} from "react-icons/ri"
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <ul className="footer-des">
        <li>
          1 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
          Security, a commissioned study conducted by Forrester Consulting,
          2022. Results are for a composite organization based on interviewed
          customers.
        </li>
        <li>2 GitHub, Octoverse 2022 The state of open source software.</li>
      </ul>
     <div className="footer-inner">
     <div className="github-sub-logo">
        <h2>GitHub</h2>
        <p className="sub-insider">Subscribe to The GitHub Insider</p>
        <p className="footer-last-p">
          Discover tips, technical guides, and best practices in our monthly
          newsletter for developers.
        </p>
        <button className="footer-btn">Subscribe</button>
      </div>
      <div className="footer-link">
        <ul>
           {Footerlink.map((el,i)=>{
         return  <li key={i}>{el.text}</li>
           })} 
        </ul>
        <ul>  {Footerlink2.map((el,i)=>{
         return  <li key={i}>{el.text}</li>
           })} 
        </ul>
        <ul> {Footerlink3.map((el,i)=>{
         return  <li key={i}>{el.text}</li>
           })} </ul>
        <ul> {Footerlink4.map((el,i)=>{
         return  <li key={i}>{el.text}</li>
           })} </ul>
      </div>
     </div>
     <div className="social-media-section">
        <div className="footer-term">
            <p>© 2023 GitHub, Inc</p>
            <p>Terms</p>
            <p>Privacy (Updated 08/2022)</p>
            <p>Sitemap</p>
            <p>What is Git?</p>
        </div>
        <div className="social-link">
<RiTwitterXFill/>
<FaFacebookSquare/>
<BiLogoLinkedin/>
<FaYoutube/>
<FaTwitch/>
<BiLogoTiktok/>
<AiOutlineGithub/>
        </div>
     </div>
    </div>
  );
};

export default Footer;
