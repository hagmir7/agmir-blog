import React from "react";
// import logo from '../assets/logo..svg'
import {Link} from 'react-router-dom';



function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light text-white">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link active text-white' aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/popular'>Popular</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Sport</a></li>
                    <li><a className="dropdown-item" href="#">Health</a></li>
                    <li><a className="dropdown-item" href="#">Programming</a></li>
                    <li><a className="dropdown-item" href="#">Cooking</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2 search-input" id='search' name='result' type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success search-button" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        
    )
}

export default Nav;