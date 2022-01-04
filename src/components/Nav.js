import React from "react";
// import logo from '../assets/logo..svg'
import {Link} from 'react-router-dom';



function Nav(){
    return(
<header className="navbar-light navbar-sticky header-static mb-3 border-bottom  bg-white">


  <nav className="navbar navbar-expand-lg p-0">
    <div className="container">

      <h1><a className="nav-item logo h4" href="/">FreeWsad</a></h1>

        <a href="/menu/" className="navbar-toggler ms-auto"><span className="navbar-toggler-icon"></span></a>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav navbar-nav-scroll mx-auto">
          <li className="nav-link"><a className="text-bold text-default" href="/">Home</a></li>
          {/* <li className="nav-item dropdown nav-link">
            <a className=" text-bold text-default" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu</a>
            <ul className="dropdown-menu">

              <li> 
                <a className="dropdown-item" href="/language/"><i className="bi bi-geo-alt"></i> Language</a>
                </li>
                
              <li>
                <a className="dropdown-item" href="/new_topic/"><i className="bi bi-plus-circle"></i> New Topic</a>
              </li>
              <li>
                <a className="dropdown-item" href="/create_book/"><i className="bi bi-plus-square"></i> New Book</a>
              </li>
              <li> 
                <a className="dropdown-item" href="/dashboard/"><i className="bi bi-grid"></i> Dashboard</a>
              </li>
              
              <li>
                <a className="dropdown-item" href="index-4.html"><i className="bi bi-life-preserver"></i> Support</a>
              </li>
              
              <li> 
                <a className="dropdown-item" href="/settings/"><i className="bi bi-gear"></i> Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="/accounts/logout/"><i className="bi bi-power"></i> Log out</a>
              </li>
              

            </ul>
          </li> */}
          <li className="nav-item nav-link"> <a className=" text-bold text-default" href="/topic/">Posts</a></li>
          <li className="nav-item nav-link"> <a className=" text-bold text-default" href="/books/">Books</a></li>
        </ul>
      </div>
      <div className="nav flex-nowrap align-items-center">
        <div className="nav-item d-none d-md-block">
          <a href="#" className="btn btn-sm btn-danger mb-0 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Subscribe!</a>
        </div>
        <div className="nav-item dropdown nav-search">
          <a className="nav-link " role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-search"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end shadow rounded p-2 search" aria-labelledby="navSearch">
            <form className="input-group" action="/en/search/" method="post">
              <input type="hidden" name="csrfmiddlewaretoken" value="ziXs42RwhfoKmvXRp4GGCn4fpxGZ3eItuObZdysMzF3449w1GWmx7zbE7VfSUiOf" className="form-control" />

              <button className="btn btn-success m-0 " type="submit">Search</button>
              <input className="form-control border-success px-2" name="search" type="search" placeholder="Search..." aria-label="Search" />
              
            </form>
          </div>
        </div>
      </div>

    </div>
  </nav>

</header>
        
    )
}

export default Nav;