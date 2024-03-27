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
      <section class='mn'>
        <div className="content">
          <div className="info">
          <h4 style={{ color: 'Black' }}>Explore Our Facilities</h4>

            <p>
              Explore Our Facilities
               We take immense pride in offering a diverse range of facilities that enrich the
             educational journey of our students. Our campus is designed to foster a supportive
              and engaging environment where students can thrive academically, physically,
               and creatively. 

              {/* <span className="movie-night"> movie night</span> filled with popcorn,
              laughter, and great company! Whether you're a fan of thrilling
              action, heartwarming dramas, or side-splitting comedies, we've got a
              film lineup to cater to all tastes. Save the date and bring your
              favorite snacks to make it a memorable evening. */}
            </p>
            <a href="/Contacts" target="_blank">
            <button className="btn">Join</button>
            </a>
          </div>
          <div class="swiper">
          <div class="swiper-wrapper">
          <div className="swiper-slide" style={{ padding: '20px' }}>
              <img src={academicFacilitiesImage} alt="Academic Facilities" />
              <div class="overlays">
                {/* <span>8.5</span> */}
                <h2>Academic Facilities</h2>
              </div>
            </div>

            <div class="swiper-slide">
              <img
                class="img-position"
                src={sports}
                alt="" />
              <div class="overlays">
                {/* <span>9.5</span> */}
                <h2>Sports and Recreation Facilities</h2>
              </div>
            </div>

            <div class="swiper-slide">
              <img
                src={arts}
                alt="" />
              <div class="overlays">
                {/* <span>8.1</span> */}
                <h2>Arts and Cultural Facilities</h2>
              </div>
            </div>

            <div class="swiper-slide">
              <img
                src={others}
                alt="" />
              <div class="overlays">
                {/* <span>8.7</span> */}
                <h2>Additional Facilities</h2>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <ul class="circles">
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

    //     <ul className="circles">
    //       {[...Array(10)].map((_, index) => (
    //         <li key={index}></li>
    //       ))}
    //     </ul>
    //   </section>
    );
  }
}

export default MovieNightSection;
