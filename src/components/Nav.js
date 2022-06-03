import React from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Lang from "./Lang";


function Nav(){
    return(
      <header className="navbar-light position-sticky top-0 header-static mb-3 border-bottom bg-white" style={{ zIndex:102 }}>
        <div className="navbar navbar-expand-lg p-0">
          <div className="container d-flex justify-content-between">
            <Link className="nav-item logo h4 p-2 m-0 mt-1 h1" to="/">FreeWsad</Link>
            <Header />
            <Lang />
            <MobileMenu />
          </div>
        </div>
      </header>
    )
}

export default Nav;