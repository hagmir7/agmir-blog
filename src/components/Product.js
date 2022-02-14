import React from 'react';



function Product(post) {
 return (
    <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
     <div className='card'>
       <div className='content-image-product'>
       <img className='post-image' alt={post.title} src={post.image} />
       </div>
       <div className='title-product-content border-top'>
        <p className='m-2'>{post.title}</p>
       </div>
     </div>
    </div>
 )
}

export default Product;