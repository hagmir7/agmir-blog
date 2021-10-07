import React from 'react'

export const FormOreder = () => {
 return (
  <div>
   <form action="">
    <label htmlFor="name">Full Name</label>
    <input type="text" name="name" id="name" placeholder='Enter You Name...' className='form-control' />
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder='Enter You Email...' className='form-control' />
    <label htmlFor="phone">Phone</label>
    <input type="tel" name="phone" id="phone" placeholder='Enter You Phone...' className='form-control' />
    <label htmlFor="quantity">Quantity</label>
    <input type="number" name="quantity" id="quantity" placeholder='Enter Quantity' min="1" defaultValue='1' className='form-control' />
   </form>
   
  </div>
 )
}
