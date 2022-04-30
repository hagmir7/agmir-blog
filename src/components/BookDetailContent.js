import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Hr from "../ads/Hr";


const BookDetailContent = (props) => {
    return (
        <div className="container-lg">
            <Helmet>
            <title>{props.name}</title>
            <meta name="description" content={props.description} ></meta>
            <link rel='canonical' href={`/book/${props.id}`} />
            <meta itemprop="image" content={props.image} />
            <meta name="keywords" content={props.tags}/>

            <meta property="og:url" content={`/book/${props.id}`}  />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.name} />
            <meta property="og:description" content={props.description}  />
            <meta property="og:image" content={props.image} />
        </Helmet>
            <div className="row" key={props.id}>
            <div className="col-12 col-md-7 col-lg-8 col-xl-8 mb-3 card m-0 shadow-sm">
                <article className="blog-post">
                    <h1 className="blog-post-title h4 mt-2">{props.name}</h1>
                    <p className="text-left">{props.description}</p>
                    <Hr />
                    <hr />
                        <div className="d-flex justify-content-center mb-3">
                            <div className="card shadow-sm overflow-hidden">
                                <img className="book-detail-image" src={props.image} alt={props.name} />
                            </div>
                        </div>
                        <h2 className="h5">About book</h2>
                        <table className="table table-hover border">
                            <tbody>
                                <tr>
                                    <th scope="row">Author</th>
                                    <td>books.goalkicker.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">File type</th>
                                    <td>{props.type_file}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Language</th>
                                    <td>{props.language}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Pages</th>
                                    <td>{props.pages}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 className="h5">Download Book</h2>
                        <Hr />
                        <div className="w-100 my-5 d-flex justify-content-center">
                            <a className="btn btn-primary w-50" href={props.book_file} target="_blanck">DOWNLOAD</a>
                        </div>
                </article>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-xl-4 position-relative">
                <div className="position-sticky top-0">
                    <div className="card shadow-sm">
                    <Hr />
                    </div>
                    <div className="p-4 mt-3 bg-light card shadow-sm border">
                        <span className="fst-italic h4 p-1">Copyrights</span>
                        <p className="text-left">
                            We respect the property rights of others, and are always keen not to violate their rights, so authors and publishing houses have the right to demand the removal of a download link for a book from the site. If you find a book that belongs to you and do not agree to the publication of the download link for the book, or you have a suggestion or complaint, write to us through the Contact Us page, or by email at:
                            <a href="mailto:support@freewsad.com">support@freewsad.com</a></p>
                        <Link to="/about" >Read More</Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )

}

export default BookDetailContent;


