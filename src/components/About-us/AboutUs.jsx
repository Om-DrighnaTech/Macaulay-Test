import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about__content">
              <h2>About Us :-</h2>
              {/* <h3>
              Empowering Minds, Enriching Lives
              </h3> */}
              <p>
              "At Our School, we are dedicated to nurturing young minds and preparing them for success in our rapidly changing world. Our goal is to empower each student to reach their full potential through innovative teaching methods and comprehensive extracurricular programs. Join us on our journey to excellence!"

              </p>

              {/* <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Complete Students</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Facilities Students</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Topers Students</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Top Students</p>
                  </div>
                </div>
              </div> */}

              
            </div>
            <div className="row   about__content">
                <div className="col-sm-6" >
                  {/* <span><strong>25K</strong></span><br /> */}
                  <h3>4k</h3>
                  {/* <span>Complete Students</span> */}
                  <p>Students passed</p>
                </div>
                <div className="col-sm-6">
                  {/* <span><strong>12M</strong></span><br />
                  <span>Facilities Students</span> */}
                  <h3>50+</h3>
                  <p>Teaching Staff</p>
                </div>
                <div className="col-sm-6">
                  {/* <span><strong>95M</strong></span><br />
                  <span>Topers Students</span> */}
                  <h3>2+</h3>
                  <p>Total Branches</p>
                </div>
                <div className="col-sm-6">
                  {/* <span><strong>5K</strong></span><br />
                  <span>Top Students</span> */}
                  <h3>17+ Years</h3>
                  <p>Continue with Excellence</p>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
