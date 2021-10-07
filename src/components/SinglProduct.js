import React from 'react'
import ModelOrder from './ModelOrder';
import Slideshow from './SlidShow';



const SinglProduct = () => {
 return (
  <div className="row">
   <div className="col-6">
    <Slideshow />
   </div>
   <div className="col-6">
    <h1 className='h4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
    <div >
     <p className='price border-bottom pb-2' >Marque: Fashion | Produits similaires par Fashion</p>
     <span className='w-100 text-center mt-2 h3 px-2'>121 Dhs</span>
     <del>224.00 Dhs</del>
    </div>
    <div className='my-3'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur reprehenderit culpa laudantium adipisci quam cupiditate commodi animi tempore sed repellendus, sunt aliquam quidem accusantium rerum suscipit ab ipsa fugit!
    </div>
    <button className='btn btn-success mt-3 w-100'>Add to Card</button>
    <ModelOrder /> 
      </div>

  
  </div>


 )
}

export default SinglProduct;
