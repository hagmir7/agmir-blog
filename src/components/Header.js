import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className="navbar-top d-none d-lg-block small bg-white">
        <div className="">
          <nav className="d-md-flex justify-content-between align-items-center p-2">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link h6 py-0 text-secondary ps-0" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h6 py-0 text-secondary ps-0" to="/">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h6 py-0 text-secondary ps-0" to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h6 py-0 text-secondary" to="/contact" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h6 py-0 text-secondary" to="/policy" >Privacy Policy</Link>
              </li>
            </ul>
          </nav>
          <div className="border-bottom  nav-border opacity-1"></div>
        </div>
      </div>
    )
}

export default Header;