import React, { Fragment } from "react";
// import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
// import Footer from "../components/Footer/Footer";
import DemoNavBar from "../components/demoNavBar/DemoNavBar";
import StudentsCarousel from "../components/studentsCarousel/StudentsCarousel";
import F1 from "../components/f1/f1";
// import NavigationBar from "../components/NavigationBar/NavigationBar"
// import Roadmap from "../components/Roadmap/Roadmap";
// import Crousal from "../components/Crousal/Crousal";
// import Header from "../components/Header/Header";

const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <DemoNavBar />
      {/* <NavigationBar /> */}
      <HeroSection />
      <StudentsCarousel />
      {/* <Crousal /> */}
      <AboutUs />
      <CompanySection />
      <ChooseUs />
      <Courses />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      {/* <Roadmap /> */}
      {/* <Footer /> */}
      <F1/>
    </Fragment>
  );
};

export default Home;
