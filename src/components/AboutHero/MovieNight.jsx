import React from 'react';
import './MovieNight.css'; // Import CSS file
import Swiper from 'swiper'; // Import Swiper JS if needed
import 'swiper/swiper-bundle.css'; // Import Swiper CSS styles
import academicFacilitiesImage from '../../assests/images/ac.png';
import sports from '../../assests/images/sports.png';
import arts from '../../assests/images/arts.png';
import others from '../../assests/images/others.png';

class MovieNightSection extends React.Component {
  componentDidMount() {
    // Initialize Swiper
    var swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });
  }

  render() {
    return (
      <section className='mna'>
        <div className="content">
          <div className="info">
            <h4 style={{ color: 'black' }}>Discover Macaulay</h4>
            <p>
              At Our School, our team comprises experienced professionals dedicated
              to guiding you towards success. Whether you're embarking on your educational journey or
              pursuing ambitious career goals, we are committed to providing you with the support and
              resources needed to achieve your objectives.
            </p>
            <a href="/Facilities" target="_blank">
              <button className='btn'>Explore more!</button>
            </a>
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ padding: '20px' }}>
                <img src={academicFacilitiesImage} alt="Academic Facilities" />
                <div className="overlays">
                  {/* <span>8.5</span> */}
                  <h2>Academic Facilities</h2>
                </div>
              </div>

              <div className="swiper-slide">
                <img className="img-position" src={sports} alt="Sports and Recreation Facilities" />
                <div className="overlays">
                  {/* <span>9.5</span> */}
                  <h2>Sports and Recreation Facilities</h2>
                </div>
              </div>

              <div className="swiper-slide">
                <img src={arts} alt="Arts and Cultural Facilities" />
                <div className="overlays">
                  {/* <span>8.1</span> */}
                  <h2>Arts and Cultural Facilities</h2>
                </div>
              </div>

              <div className="swiper-slide">
                <img src={others} alt="Additional Facilities" />
                <div className="overlays">
                  {/* <span>8.7</span> */}
                  <h2>Additional Facilities</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    );
  }
}

export default MovieNightSection;
