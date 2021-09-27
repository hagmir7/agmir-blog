import { React, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";



function ProductDtail() {
 useEffect(() => {
  document.title = "Agmir | Policy";
 }, []);
 return (
  <div className="Policy">
   <Footer />
   <Header />
   <Nav />
   <div className='container bg-light p-3 policy'>


   </div>
   <Footer />
  </div>
 );
}



export default ProductDtail;