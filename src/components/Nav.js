import React from "react";
import {Link} from 'react-router-dom';


function Nav(){
    return(
      <header className="navbar-light navbar-sticky header-static mb-3 border-bottom bg-white">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <Link className="nav-item logo h4 p-2 m-0 mt-1 h1" to="/">FreeWsad</Link>
          </div>
        </nav>
      </header>
    )
}

export default Nav;