import {React, useEffect, useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Content from '../components/Content';


function Detial({match}){
    useEffect(() => {
        fetchItem();
    },[]);
    
    const [item, setItem] = useState({});
    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://freewsad.herokuapp.com/en/api/english_detail/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item.data)
    }


    return(
        <div>
        < Header/>
        < Nav />
        < Content id={item.id} title={item.title} image={item.image} views={item.views}
         category_en={item.category_en} date={item.date} body={item.body} description={item.description} tags={item.tags}
        />
  
        <div className='border-top'> 
          < Footer/>
        </div>
      </div>
    )
}
export default Detial;