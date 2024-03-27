import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";


const FeatureData = [
  {
    title: "Inclusive Environment",
    desc: " A welcoming atmosphere that celebrates diversity",
    icon: "ri-draft-line",
  },

  {
    title: "Personalized Support",
    desc: "Dedicated counseling and mentorship for student success.",
    icon: "ri-discuss-line",
  },

  {
    title: "Enriching Extracurriculars",
    desc: "Diverse activities fostering talent and holistic growth.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
        
    <section className="section-background">

      <Container>
      <div className="text-center ourfetr mb-5" >
        <h2>Our Features</h2>
        {/* Add any additional description here */}
      </div>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index} className="single_feature_col">
             <div className="single__feature text-center px-4" style={{backgroundColor:'white', padding:'20px'}}>
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
