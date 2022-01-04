import React from "react";


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
          </div>
          <div className="border-bottom  nav-border opacity-1"></div>
        </div>
      </div>
    )
}

export default Header;