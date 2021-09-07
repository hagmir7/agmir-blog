import {React, useEffect, useState, Fragment} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Content from "../components/Content";
import App from '../App';



function Detial(props){





    return(
       <Fragment>
  
        <div className='container p-3 bg-light' key={props.id}>
          <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-10 col-lg-10 col-xl-8'>
          <img className='w-100 img-detail' src={`http://127.0.0.1:8000${props.image}`} />  
          </div>

          {/* <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
          </div> */}

          </div>

          <div className='d-flex justify-content-center mt-5'>
          <div className='col-sm-12 col-md-10 col-lg-10 col-xl-8 '>
          <div className='border-bottom d-flex post-tols'>
                <span><small>Views</small>  {props.views}  </span>
                <span><small>Category</small> {props.category_en}</span>
                <span><small>Date</small> {props.date}</span>
          </div>
              <h1>{props.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: props.body }} />
          </div>
          </div>

        </div>
        </Fragment>
    )
}
export default Detial;