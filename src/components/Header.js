import React from "react";
import logo from '../assets/img/logo.png';
import ads from '../assets/img/ads.png'
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div className='row' style={{height: '130px'}}>
            <div className='logo col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto'>
                <Link to='/'>
                <img alt='Bloge' src={logo} />
                </Link>
            </div>
            <div className='ads  col-sm-12 col-md-6 col-lg-6 col-xl-6 sm-hidden'>
            <img alt='ads' src={ads} className='w-75 h-100' />
            </div>
        </div>
    )
}

export default Header;