import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/gallery/english.svg";

import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "English Language",
  
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Mathematics",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "03",
    title: "Science",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
];

const Courses = () => {
  return (
    <section className="course-section">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left">
                <h2>Academics offering</h2>
                <p>
                Our comprehensive curriculum are designed to inspire intellectual curiosity, foster 
                critical thinking skills, and empower students to reach their full potential. From innovative teaching methods to comprehensive extracurricular programs.
                </p>
              </div>

            </div>
          </Col>

          {/* <Col lg="6" className="mb-5">
          <div className="text-end">
                 <a href="/Curriculum" target="_blank">
                     <button className="btn">See All</button>
                 </a>
              </div>
          </Col> */}
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
