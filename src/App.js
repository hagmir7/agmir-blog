import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detial from './pages/Detail';
import { Helmet } from 'react-helmet-async';
import Book from './pages/Book';
import BookDetail from './pages/BookDetail';
import Menu from './pages/Menu';





function App() {
  return (
    <div className="App">

   <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/policy" component={Policy} />
        <Route path="/contact" component={Contact} />
        {/* <Route path='/detail/:id' component={Detial} /> */}
        <Route path='/detail/:id' component={Detial} />
        <Route path='/books' component={Book} />
        <Route path='/book/:id' component={BookDetail} />
        <Route path='/Menu' component={Menu} />
        
      </Switch>
   </Router>

    </div>
  );
}

const Home = ()=>{
  return(
    <div className='bg-light' >
      < Header/>
      < Nav />
      <div className='container'>
        < Body />
      </div>

      <div className='border-top'> 
        < Footer/>
      </div>
      <Helmet>
          <title>FreeWsad - The Best Website For Education</title>
          <meta name="description" content="You can enjoy the Topics and Courses you love and download the original content, and share it all with your friends in FreeWsad." data-rh="true" />
          <meta name="author" content="freewsad.com" />
          <link rel='canonical' href="/" />
          <meta itemprop="image" content="%PUBLIC_URL%/favicon.webp" data-rh="true" />
      </Helmet>
    </div>

  )
}

export default App;
