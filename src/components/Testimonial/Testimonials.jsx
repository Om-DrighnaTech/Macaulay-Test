import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/gallery/t1.gif";
// import img from "../../assests/images/school.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section  style={{ backgroundColor: '#f7f7f7' }}>
      <Container>
        <Row>
          <Col lg="12" md="12" className="m-auto" >
            <div className="testimonial__wrapper" >
              <div className="testimonial__img w-100">
                <img src={img} alt="" className="w-100" style={{height:'355px',}}/>
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Discover What Our Community Has to Say !</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                           Alumni Testimonial
                      </h6>
                      <p>
                      As an alumni of Macaulay School, I can confidently say that the education I received here
                       went beyond academics. The supportive environment, dedicated faculty, and diverse
                        opportunities helped shape me into the person I am today.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Alumni</h6>
                        <p>Celebrating Lifelong Bonds</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Parent Testimonial
                      </h6>
                      <p>
                      Our family couldn't be happier with our decision to enroll our child at Macaulay School. 
                      From the moment we stepped through the doors, we felt welcomed by the warm and caring atmosphere. 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Parent</h6>
                        <p>Nurturing Environment for Growth</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Faculty Testimonial
                      </h6>
                      <p>
                      As a teacher at Macaluy School, I'm continuously inspired by the dedication and enthusiasm of our 
                      students. The collaborative spirit and thirst for knowledge within our school 
                      community create an environment where everyone can excel. 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Faculty</h6>
                        <p>A Community of Lifelong Learners</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
