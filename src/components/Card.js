import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Card(){
    useEffect(() => {
        fetchItems();
    },[]);


    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
        const data = await fetch('https://freewsad.herokuapp.com/en/api/english');

        const items = await data.json();
        setItems(items.data)

    }

    return(
        <div>
            <div className='last row p-2 pb-3'>
            {items.map(item => (
            <div key={item.id} className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <div className='card'>
                    <Link to={`/detail/${item.id}`}>
                    <div className='content-image'>
                    <img className='post-image' alt={item.title} src={item.image} />
                    </div>
                    <div className='title-content border-top'>
                    <p className='m-2'>{item.title}</p>
                    </div>
                    </Link>
                    
                </div>
            </div>                        

            ))}
                

        </div>

        </div>



       

    )
}

export default Card;