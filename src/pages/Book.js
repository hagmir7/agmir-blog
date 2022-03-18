import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Loading from "../components/Loading"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet-async';


function Book() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [loade, setLoad] = useState(0);

    const laodMore = ()=> {
        

        const counter = loade  + 24
        setLoad(counter);
        fetchItems();

    }




    const [items, setItems] = useState(null);
    const fetchItems = async () => {
        const data = await fetch(`https://www.freedaz.com/en/api/books/${loade}/`);

        const items = await data.json();
        const data_item = items.data;
        const item = () => {
            return (
                data_item.map(item => (
                    <div key={item.slug} className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
                        <div className="card shadow-sm overflow-hidden">
                            <Link to={`/book/${item.slug}`}>
                                <img src={item.image} width="100%" alt={item.title}  />
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
                    {items ? items : <Loading />}
                </div>
                <div className='d-flex justify-content-center' onClick={laodMore}><button className='btn btn-info '>Load More</button></div>
            </div>
            <Footer />
            <Helmet>
            <title>FreeWsad - Book</title>
            <meta name="description" content='It is a digital library of electronic and international books and novels that contains books and novels in all fields in PDF & DOC format.' ></meta>
            <link rel='canonical' href={`/books`} />
            <meta name="keywords" content="books,library,electronic,novels,pdf books,programmig book,python book,learn programmming"/>
        </Helmet>
        </Fragment>

    )
}

export default Book;