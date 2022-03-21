import {React, useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { } from 'antd';

import { Helmet } from 'react-helmet-async';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, notification, Space ,Spin  } from 'antd';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('')
  const history = useHistory()



  

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Message has been sent successfully',
      description:
        'Thank you, Your message has been sent. We will reply to you as soon as possible.',
    });
  };

  const contactInfo = async ()=>{
    // Send a POST request
    if(!email == "" && !name == "" && !body == ""){
      const btn = document.querySelector('#btn-contact');
      const spin = document.querySelector('#spiner');
      btn.classList.add('d-none')
      spin.classList.remove('d-none')
    }

    axios({
      method: 'post',
      url: 'https://www.freedaz.com/en/api/contact',
      data: {
        "name": name,
        "email": email,
        "body": body
      }
    }).then((response =>{
      
      if(!email == "" && !name == "" && !body == ""){
        openNotificationWithIcon('success')
        setTimeout(()=>{
          history.push('/')
        },5000)
      }
    }));
  }

  return (
    <div className="Contact">
      <Header />
      <Nav />
      <div className='container mb-4 p-3'>
        <div className='w-100 row justify-content-center'>
          <div className='col-sm-12 col-md-10 col-lg-6 col-xl-6 card p-3 shadow-sm'>
            <h1 className="h4">Contact Us</h1>
            <form>
              <label htmlFor='name'>Name</label>
              <input className='form-control mb-3' type='text' name='name' placeholder='Name...' 
              value={name} onChange={(e) => setName(e.target.value)} required />

              <label htmlFor='emai'>Email</label>
              <input className='form-control mb-3' type='email' name='email' placeholder='Email...'
              value={email} onChange={(e) => setEmail(e.target.value)} required/>

              <label htmlFor='message'>Message</label>
              <textarea className='form-control mb-3' name='body' placeholder='Message...' 
              value={body} onChange={(e) => setBody(e.target.value)} required/>
              <Button className='btn btn-ag ag-blue' id="btn-contact" type="button" onClick={contactInfo}>Send Message</Button>
             <div id="spiner" className="d-none"><Space size="middle"> <Spin size="small"></Spin> </Space></div>
            </form>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Contact Us | FreeWsad</title>
        <link rel='canonical' href="/policy" />

      </Helmet>
      <Footer />
    </div>
  );
}

export default Contact;