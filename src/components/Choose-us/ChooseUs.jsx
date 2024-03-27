import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section  style={{ backgroundColor: '#f7f7f7', paddingTop: '60px' }}>
      <Container>
        <Row>
          <Col lg="6" md="12">
            <div className="choose__content">
              <h2>Discover the Difference</h2>
              <p>
              At Our School, we stand out for more than just our academic excellence. 
              Our commitment goes beyond textbooks and grades. Here's why parents and students 
              choose us:
              <br />
              Empowering Education: Macaulay School offers an empowering education experience, where students are encouraged to explore their passions, think critically, and reach their full potential.
              <br />
              Innovative Excellence: Macaulay School combines innovative teaching methods with a commitment to excellence.

              </p>
            </div>
          </Col>

          <Col lg="6" md="12">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/ZpPCeEpr_HQ?feature=shared"
                  
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
