import {React, useState, useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Loading from "../components/Loading";

function Popular() {

  const [post, setPost] = useState(null)

  useEffect(()=> {
    fetch("https://freewsad.herokuapp.com/en/api/english")
    .then(respons=>respons.json())
    .then(respons=>{
      const rspo = respons.data
      const post = ()=>{
        return(
          rspo.map(item =>(
            <Product title={item.title}  image={item.image}/>
          ))
        )
      }
      setPost(post)
    })
  })
  return (
    <div>
 
      < Header/>
      < Nav />
      <div className='container'>
      <div className="row last">
      {post?post:<Loading />}
      </div>
      </div>

      <div className='border-top'> 
        < Footer/>
      </div>
    </div>
  );
}

export default Popular;