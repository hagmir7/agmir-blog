import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import CreatePostForm from '../components/CreatePostForm'
import Footer from '../components/Footer';

function Posts() {
 return (
  <div>
   < Footer />
   < Header />
   < Nav />
   <div className='container'>

    <CreatePostForm />
   </div>

   <div className='border-top'>
    < Footer />
   </div>
  </div>
 )
}

export default Posts;
