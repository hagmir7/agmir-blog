import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
 {
  url: 'https://cdn.pixabay.com/photo/2021/08/22/06/24/bird-6564286__340.jpg',
  caption: 'Slide 1'
 },
 {
  url: 'https://cdn.pixabay.com/photo/2021/08/26/17/12/city-6576686__340.jpg',
  caption: 'Slide 2'
 },
 {
  url: 'https://cdn.pixabay.com/photo/2021/06/13/10/22/clock-6332807__340.jpg',
  caption: 'Slide 3'
 },
];

const Slideshow = () => {
 return (
  <div className="slide-container">
   <Slide>
    {slideImages.map((slideImage, index) => (
     <div className="each-slide" key={index}>
      <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
       <span>{slideImage.caption}</span>
      </div>
     </div>
    ))}
   </Slide>
  </div>
 )
}

export default Slideshow