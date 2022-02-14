import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import Loading from "./Loading"


function BodyDetail(){
    useEffect(() => {
        fetchItems();
    },[]);


    const [items, setItems] = useState(null);
    const fetchItems = async () =>{
        const data = await fetch('https://freewsad.herokuapp.com/en/api/english');

        const items = await data.json();
        const data_item = items.data;
        const item = ()=>{
            return(
                data_item.map(item => (
                    <div key={item.id} className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                        <div className='card'>
                            <a href={`/detail/${item.id}`}>
                            <div className='content-image'>
                            <img className='post-image' alt={item.title} src={item.image} />
                            </div>
                            <div className='title-content border-top'>
                            <p className='m-2'>{item.title}</p>
                            </div>
                            </a>
                        </div>
                    </div>                        
                ))
            )
        }
        setItems(item)
    }

    

    

    return(
        <div>
            <div className='last row p-2 pb-3'>
                {items?items:<Loading />}
            </div>
        </div>
    )
}

export default BodyDetail;