import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Spin } from 'antd';
import Product from "../components/Product";


function Popular() {
  document.title = 'Agmir | Popular';

  return (
    <div>
      < Footer/>
      < Header/>
      < Nav />
      <div className='container'>
        <Spin />
        <Product />
      </div>

      <div className='border-top'> 
        < Footer/>
      </div>
    </div>
  );
}

export default Popular;