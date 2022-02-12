import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className="navbar-top d-none d-lg-block small bg-white">
        <div className="">
          <div className="d-md-flex justify-content-between align-items-center p-2">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-muted ps-0" to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/contact" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/policy" >Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="border-bottom  nav-border opacity-1"></div>
        </div>
      </div>
    )
}

export default Header;