import Header from "../components/Header";
import Nav from "../components/Nav";
import MenuItem from "../components/MenuItem";
// import images
import Contact from '../assets/img/contact.svg'
import About from '../assets/img/about.svg'
import Book from '../assets/img/book.svg'
import Home from '../assets/img/home.svg'
import Post from '../assets/img/post.svg'
import Privacy from '../assets/img/privacy.svg'

const Menu = ()=>{
    return(
        <>
            <Header />
            <Nav />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="list-group">
                            <MenuItem link="/" title="Home" image={Home} />
                            <MenuItem link="/" title="Blogs" image={Post} />
                            <MenuItem link="/books" title="Books" image={Book} />
                            <MenuItem link="/about" title="About Us" image={About} />
                            <MenuItem link="/contact" title="Contact Us" image={Contact} />
                            <MenuItem link="/policy" title="Privacy Policy" image={Privacy} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Menu;