import React from "react";
import logo from '../assets/img/logo.png';
import ads from '../assets/img/ads.png'
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div className="navbar-top d-none d-lg-block small bg-white">
        <div className="">
          <div className="d-md-flex justify-content-between align-items-center p-2">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-muted ps-0" href="/about/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="/contact/">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="/policy">Privacy Policy</a>
              </li>
              
            </ul>
        
            {/* <div className="d-flex align-items-center">
              <a href="/freewsad">
                <img src="https://agmir-media.s3.amazonaws.com/user_default.webp?AWSAccessKeyId=AKIASQITCY4Y5YL736O2&amp;Signature=6cFJZtKjUbIcRCxg1ypYCc0W5PQ%3D&amp;Expires=1641301681" className="rounded-circle cover" style={{width:'35px', height:'35px'}} alt="Freewsad" />
              </a>
            </div> */}
            
          </div>
    
          <div className="border-bottom  nav-border opacity-1"></div>
        </div>
      </div>
    )
}

export default Header;