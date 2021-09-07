import {React, useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";


function About() {
  useEffect(() => {
    document.title = "Agmir | About";
 }, []);



  return (
    <div className="About">
        <Footer />
        <Header />
        <Nav />
        <div className='container bg-light p-3'>
            <h1>About Us.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea, neque dolore officiis molestias deleniti, quibusdam eos expedita dolorum temporibus pariatur ducimus nihil necessitatibus quam molestiae eaque, eligendi ipsam qui.
            </p>
        </div>
        <Footer />
    </div>
  );
}

export default About;