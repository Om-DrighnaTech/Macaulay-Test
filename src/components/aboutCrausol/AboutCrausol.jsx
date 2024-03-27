// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Crousal/crousal.css';

import curriculumImg1 from "../../assests/images/carouselImages/Add your idea here.gif";
import curriculumImg2 from "../../assests/images/carouselImages/Add your idea here (2).gif";
import curriculumImg3 from "../../assests/images/carouselImages/01.JPG";


const AboutCarousel = () => {

const crausalData = [
{ id: 1, image: curriculumImg1, heading: 'About Us', link: 'www.google.com' },
{ id: 2, image: curriculumImg2, heading: 'About Us', link: 'www.google.com'},
{ id: 3, image: curriculumImg3, heading: 'About Us', link: 'www.google.com' },
];
return (
<>
<Carousel>
        {crausalData.map(item => (
          <Carousel.Item key={item.id}>
            <div className="overlay-box">
              <div className="overlay-sub">
              <h2 className="overlay-heading">{item.heading}</h2>
              <a className="btn transparent-btn" href={item.link} target="_blank" rel="noopener noreferrer">
                Know More
              </a>
              </div>
            </div>
            <img className="slideImg" src={item.image} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="infra-title">
        <h2 className='infra-title-head'>About Us</h2>
      </div>
</>
)
}

export default AboutCarousel;