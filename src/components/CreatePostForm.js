import axios from 'axios'
import React, { useState, } from 'react'

function CreatePostForm() {

 const [title, setTitle] = useState('')
 const [description, setDescription] = useState('')
 const [is_valid, setIs_Valid] = useState('')
 const [image, setImage] = useState(null)






 const addPostInfo = async () => {
  const form = new FormData()
  form.append('title', title)
  form.append('description', description)
  form.append('is_vlaid', is_valid)
  if (image !== null){
   form.append('image', image)
  }
  
  
 
 

  await axios({
   method: 'post',
   url: 'http://127.0.0.1:8000/en/api/api-1/',
   data : form,
   enctype: 'multipart/form-data',
  }).then((response) => {
   console.log(response.data)
   setDescription('');

   var frm = document.getElementsByName('contact-form')[0];
   frm.reset();  // Reset all form data
   setTitle('');
   const alert = response.data
   document.getElementById('aler-box').innerHTML = `<div class="alert alert-success" role="alert"> ${alert} </div>`
   setTimeout(function () {
    document.getElementById('aler-box').textContent = ''
   }, 5000)


  
  })

 }



 return (
  <div className="d-flex justify-content-center my-3">
   <div className='col-sm-12 col-md-10 col-lg-6 col-xl-6'>
    <div id='aler-box' className='my-3'></div>
    <form action="" method="post" name='contact-form'>
     <label htmlFor="title">Title</label><br />
     <input type="text" maxLength='100' value={title} className='form-control' name='title' id='title' onChange={(e)=> setTitle(e.target.value)} />
     <label htmlFor="discrition">Description</label><br />

     <textarea className='form-control' name="description" id="description" cols="30" rows="5" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></textarea>


     <label htmlFor="image"></label> 
     <input className='form-control' type="file" name="image" id="image"  onChange={(e) => setImage(e.target.value[0])} />

     <label htmlFor="is_valid">Is Valid</label>
     <input type="checkbox" name="is_valid" id="is_valid" value={is_valid} onChange={(e) => setIs_Valid(e.target.value)} /><br />




     <button type='button' className='btn btn-success mt-3' onClick={addPostInfo}>Publish</button>
    </form>
    
   </div>
  </div>
 )



}

export default CreatePostForm;
