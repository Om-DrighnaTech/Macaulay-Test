import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero2.gif";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section >
      <Container>
        <Row style={{ marginTop: '10px' }}>
          <Col lg="6" md="6">
             <div className="hero__content">
      <div className="mb-4 hero__title">
        <h3>Unlocking Potential,having Futures</h3>
        
        <h1>Macaulay School</h1>
        <h5>Knowledge is Supreme!</h5>
      </div>
      <p className="mb-5">
      Welcome to Our School, where we believe in the supreme power of knowledge. Our institution is dedicated to not only fostering academic excellence but also ensuring the holistic development of each student. We go beyond traditional teaching methods, creating an environment where creativity, critical thinking, and innovation flourish. With state-of-the-art facilities, including a modern computer lab, alongside our team of dedicated educators and a supportive community, we empower students to unlock their full potential and embark on a lifelong journey of learning.       
      </p>
    </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
           <div className="w-50 text-end">
             <a href="/About" target="_blank">
             <button className="btn"><i className="fas fa-trophy" style={{ marginRight: '5px' }}></i>Explore More!</button>
             </a>
           </div>


          </Col>

          <Col lg="6" md="6" style={{ marginTop: '70px', padding:'20px' }}>
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
