import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Body from "../components/Body";
import { Spin } from 'antd';


function Popular() {
  document.title = 'Agmir | Popular';

  return (
    <div>
      < Footer/>
      < Header/>
      < Nav />
      <div className='container'>
        <Spin />
        <Body />
      </div>

      <div className='border-top'> 
        < Footer/>
      </div>
    </div>
  );
}

export default Popular;