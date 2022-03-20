import React from "react";
import {Link} from 'react-router-dom';
import MobileMenu from "./MobileMenu";


function Nav(){
    return(
      <header className="navbar-light navbar-sticky header-static mb-3 border-bottom bg-white">
        <div className="navbar navbar-expand-lg p-0">
          <div className="container">
            <Link className="nav-item logo h4 p-2 m-0 mt-1 h1" to="/">FreeWsad</Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    )
}

export default Nav;