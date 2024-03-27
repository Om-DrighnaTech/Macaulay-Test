import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";


const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
      <div className="overlay">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">School Mission and Values</h2>
            {/* <p style={{ fontSize: '18px', fontWeight: 'bolder', color: '#333', textAlign: 'center' }}>
               Knowledge is Supreme!
            </p> */}

            <p className="readable-animation">
                   Knowledge is Supreme!
            </p>

            {/* <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div> */}
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
