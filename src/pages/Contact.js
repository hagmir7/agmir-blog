import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

import { Helmet } from "react-helmet";

function Contact() {


  return (
    <div className="Contact">
        <Header />
        <Nav />
        <div className='container bg-light p-3'>
            <div className='w-100 row justify-content-center'>
                <div className='col-sm-12 col-md-10 col-lg-6 col-xl-6'>
                  <h1>Contact Us</h1>
                  <form>
                    <label htmlFor='name'>Name</label>
                    <input className='form-control mb-3' type='text' name='full-name' placeholder='Name...' />

                    <label htmlFor='emai'>Email</label>
                    <input className='form-control mb-3' type='email' name='email' placeholder='Email...' />

                    <label htmlFor='message'>Message</label>
                    <textarea className='form-control mb-3' name='message' placeholder='Message...' />

                     <button className='btn btn-ag ag-blue'>Send</button>

                  </form>

                </div>
            </div>
        </div>
        <Helmet>
          <title>FreeWsad | Contact</title>
        </Helmet>
        <Footer />
    </div>
  );
}

export default Contact;