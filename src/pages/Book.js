import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Loading from "../components/Loading"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet-async';
import { Spin, Space } from 'antd';
import LoadingBook from '../components/LoadingBook';


function Book() {

    const [loader, setLoder] = useState(12)

    useEffect(() => {
        fetchItems();
        laodMore()

    }, []);

    



    // Load More
    const laodMore = async () => {
        const counter = loader + 12
        setLoder(counter)
        fetchItems();
    }

    // window.addEventListener('resize', laodMore)
    // const more = ()=>{
    //     console.log(window.scrollY)
    //     if(window.scrollY >= 100){
            
    //     }
    // }

    // window.addEventListener('scroll', more)

    //  Book Spener Function
    const spin = ()=>{
        let btn = document.querySelector('#btn');
        let spiner = document.getElementById('spiner')
        btn.classList.toggle('d-none')
        spiner.classList.toggle('d-none')
        setTimeout(function(){
            btn.classList.toggle('d-none')
            spiner.classList.toggle('d-none')
        },3000)
    }
  
    



    const [items, setItems] = useState(null);
    const fetchItems = async () => {
        const data = await fetch(`https://www.freedaz.com/en/api/books/${loader}/`);

        const items = await data.json();
        const data_item = items.data;
        const item = () => {
            return (
                data_item.map(item => (
                    <div key={item.slug} className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
                        <div className="card card-book shadow-sm overflow-hidden h-100 m-0">
                            <Link to={`/book/${item.slug}`} className='h-100'>
                                <img src={item.image} width="100%" alt={item.title} />
                            </Link>
                        </div>
                    </div>
                ))
            )
        }
        setItems(item)
    }


    return (
        <Fragment>
            <Header />
            <Nav />
            <div className='container-xxl'>
                <div className='last row p-2 pb-3'>
                    {items ? items : <LoadingBook />}
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-info h1 text-white rounded-pill' id='btn' onClick={laodMore} ><span onClick={spin}>Load More</span></button>  
                    <div className='d-none' id='spiner'><Space size="middle"><Spin size="large" /></Space></div>
                </div>
            </div>
            <Footer />
            <Helmet>
                <title>FreeWsad - Books</title>
                <meta name="description" content='It is a digital library of electronic and international books and novels that contains books and novels in all fields in PDF & DOC format.' ></meta>
                <link rel='canonical' href={`/books`} />
                <meta name="keywords" content="books,library,electronic,novels,pdf books,programmig book,python book,learn programmming" />
            </Helmet>
        </Fragment>

    )
}

export default Book;