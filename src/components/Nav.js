import React from "react";
// import logo from '../assets/logo..svg'
import {Link} from 'react-router-dom';



function Nav(){
    return(
<header className="navbar-light navbar-sticky header-static mb-3 border-bottom  bg-white">
  <nav className="navbar navbar-expand-lg p-0">
    <div className="container">
      <h1><a className="nav-item logo h4 p-0 m-0 mt-1" href="/">FreeWsad</a></h1>
    {/* <a href="/menu/" className="navbar-toggler ms-auto"><span className="navbar-toggler-icon"></span></a> */}
    </div>
  </nav>
</header>
        
    )
}

export default Nav;