import { React, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SinglProduct from "../components/SinglProduct";



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
       <SinglProduct />
   </div>
   <Footer />
  </div>
 );
}



export default ProductDtail;