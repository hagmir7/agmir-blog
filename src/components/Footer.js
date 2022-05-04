import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Footer(){

    const {t} = useTranslation()
    return(
        <div className='bg-light p-2 row'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center'>
                <Link to='/about'>
                <span className='footer-link'>{t("About")}</span>
                </Link>
                <Link to='/contact'>
                <span className='footer-link'>{t("Contact")}</span>
                </Link>
                <Link to='/policy'>
                <span className='footer-link'>{t("Privacy Policy")}</span>
                </Link>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center'>
                {/* <a className='footer-link' href='#'><i class="fab fa-instagram"></i></a>
                <a className='footer-link' href='#'><i className="fab fa-facebook"></i></a>
                <a className='footer-link' href='#'><i className="fab fa-twitter"></i></a> */}
            </div>
        </div>
    )
}
export default Footer;