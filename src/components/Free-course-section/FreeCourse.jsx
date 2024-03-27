import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/schoolimg/WhatsApp Image 2024-03-18 at 11.30.48 AM.jpeg";
import courseImg02 from "../../assests/schoolimg/courseImg02.svg";
import courseImg03 from "../../assests/schoolimg/WhatsApp Image 2024-03-18 at 11.30.42 AM.jpeg";
import courseImg04 from "../../assests/schoolimg/courseImg04.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Graduation Day",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Physical Activity",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Volunteer Opportunity",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Annual day",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="newsndevents-section ">
      <Container>
        <Row>
          <Col lg="12" className="text-center nandevents mb-5">
            <h2 className="fw-bold">News and Events</h2>
            <p>Welcome to the News and Events section, where you can stay updated on the latest happenings at Macaulays School. From exciting student achievements to upcoming activities, there's always something new to discover!</p>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="6" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
