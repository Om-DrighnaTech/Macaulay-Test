import React from "react";
import Marquee from "react-fast-marquee";
import { Container, Row,} from "reactstrap";

const Company = () => {
  return (
    <section  style={{ backgroundColor: 'black', padding: '30px', color:'white',}}>
      <Container>
        <Marquee>
        <Row>


          <h4>
          <i class="fas fa-trophy"></i> <strong>Congratulations to our students for winning the Inter-School Debate Competition! </strong>  <i class="fas fa-award"></i> "Our school ranked among the Top 10 Schools in the district for academic excellence."
          </h4>

          {/* <Col lg="2" md="3" sm="4" xs="6">
            <h5 className=" d-flex align-items-center gap-1">
              <i class="ri-pinterest-line"></i> Diversity
            </h5>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h5 className=" d-flex align-items-center gap-1">
              <i class="ri-dribbble-line"></i> TechLab
            </h5>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h5 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-apple-fill"></i> Creativity
            </h5>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h5 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-finder-fill"></i> Finder
            </h5>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h5 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Innovation
            </h5>
          </Col> */}
        </Row>
        </Marquee>
      </Container>
    </section>
  );
};

export default Company;
