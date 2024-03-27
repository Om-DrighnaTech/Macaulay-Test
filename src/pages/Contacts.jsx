import React, { Fragment } from "react";
// import Header from "../components/Header/Header";
// import HeroSectionContact from "../components/Hero-Section/HeroSectionContact";
// import CompanySection from "../components/Company-section/Company";

// import AboutUs from "../components/About-us/AboutUs";
// import Courses from "../components/Courses-section/Courses";
// import ChooseUs from "../components/Choose-us/ChooseUs";
// import Features from "../components/Feature-section/Features";
// import FreeCourse from "../components/Free-course-section/FreeCourse";

// import Testimonials from "../components/Testimonial/Testimonials";

// import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import DemoNavBar from "../components/demoNavBar/DemoNavBar";
import Crousal from "../components/Crousal/Crousal";
import Contact from "../components/contact";
import Enquery from "../components/Enquiry/Index";
import F1 from "../components/f1/f1";


const Contacts = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <DemoNavBar />
      {/* <HeroSectionContact /> */}
      <Crousal />
     
      {/* <CompanySection /> */}
      {/* <AboutUs /> */}
      {/* <ChooseUs /> */}
      <Contact />
      {/* <Courses /> */}
      {/* <Features /> */}
      {/* <FreeCourse /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Enquery/>

      {/* <Footer /> */}
      <F1/>
    </Fragment>
  );
};

export default Contacts;