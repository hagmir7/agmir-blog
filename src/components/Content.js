import { React, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Hr from '../ads/Hr';
import BodyDetail from './BodyDetail';



function Detial(props) {
    return (
        <Fragment>
            <div className='container p-0' key={props.id}>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-10 col-lg-8 col-xl-8 card shadow-sm'>
                        <div className='shdow-sm card mt-3 mb-3'>
                            <img className='w-100 img-detail' alt={props.title} src={props.image} />
                        </div>
                        <Hr />
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='w-100'>
                                <h1 className='h3'>{props.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: props.body }} />
                            </div>
                        </div>
                        <Hr />
                    </div>
                </div>
                <Helmet>
                    <title>{props.title}</title>
                    <meta name="description" content={props.description}></meta>
                    <meta name="og:title" property="og:title" content={props.tags}></meta>
                    <meta itemprop="image" content={props.image} />
                    <meta property="og:image" content={props.image} />
                    <meta property="og:title" content={props.title} />
                    <meta property="og:image" content={props.image} />
                    <meta property="og:description" content={props.description} />


                    <meta name="twitter:site" content="@FreeWsad" />
                    <meta name="twitter:title" content={props.title} />
                    <meta name="twitter:description" content={props.description} />
                    <meta name="twitter:creator" content="@FreeWsad" />
                    <meta name="twitter:image" content={props.image} />

                    <meta property="og:title" content={props.title} />
                    
                    <meta property="og:url" content="htttps://www.freewsad.com" />
                    <meta property="og:image" content={props.image} />
                    <meta property="og:description" content={props.description} />
                    <meta property="og:site_name" content="FreeWsad" />
                     <meta name="author" content="freewsad.com" />
                </Helmet>
                <BodyDetail />
            </div>
        </Fragment>
    )
}
export default Detial;