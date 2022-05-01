
import {React, useEffect, useState} from 'react';
import BookDetailContent from '../components/BookDetailContent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingDetail from '../components/LoadignDetail';
import Nav from '../components/Nav';


const BookDetail = ({match})=>{

    useEffect(() => {
        fetchItem();
    },[]);
    
    const [item, setItem] = useState(null);
    
    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://www.freedaz.com/en/api/book/${match.params.id}`);
        const item = await fetchItem.json();
        const data = ()=>{
          return (
            <BookDetailContent
             name={item.name} image={item.image} description={item.description.slice(0,140)} id={match.params.id}
             data={item.date} tags={item.tags} pages={item.pages} book_file={item.book_file}
             language={item.language} type_file={item.type_file}
            />
          )
        }
        setItem(data)
    }


    return (
        <>
        <Header />
        <Nav />
        <div>{item?item:<LoadingDetail />}</div>
        <Footer />
        </>

    )
}

export default BookDetail;