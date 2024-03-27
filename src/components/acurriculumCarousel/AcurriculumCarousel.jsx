// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Crousal/crousal.css';

import curriculumImg1 from "../../assests/images/carouselImages/Add your idea here.gif";
import curriculumImg2 from "../../assests/images/carouselImages/Add your idea here (2).gif";
import curriculumImg3 from "../../assests/images/carouselImages/3_1.png";


const AcurriculumCarousel = () => {

const crausalData = [
{ id: 1, image: curriculumImg1, heading: '"Diverse Learning Landscapes"', link: 'www.google.com' },
{ id: 2, image: curriculumImg2, heading: '"Curriculum Cornerstone Insights"', link: 'www.google.com'},
{ id: 3, image: curriculumImg3, heading: '"Exploring Academic Pathways"', link: 'www.google.com' },
];
return (
<>
<Carousel>
        {crausalData.map(item => (
          <Carousel.Item key={item.id}>
            <div className="overlay-box">
              <div className="overlay-sub" style={{marginLeft:'-60px'}}>
              <h2 className="overlay-heading">{item.heading}</h2>

              </div>
            </div>
            <img className="slideImg" src={item.image} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="infra-title">
        <h2 className='infra-title-head'>Curriculum Emphases</h2>
      </div>
</>
)
}

export default AcurriculumCarousel;