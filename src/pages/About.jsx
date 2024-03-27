


import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal from "../components/Crousal/Crousal";
import Habout from "../components/Habout/index";
// import Heading from "../components/Heading/Heading"
// import Footer from "../components/Footer/Footer"
// import AboutCarousel from "../components/aboutCrausol/AboutCrausol";
import AboutHero from '../components/AboutHero/MovieNight'
import GridA from '../components/GridA/Grids';
import Enquiry from "../components/Enquiry/Index";
import ScrollImage from "../components/scrollImage/ScrollImage";
import F1 from "../components/f1/f1";

const Ahome = () => {
  return (
    <>
      <NavBar />
      <Crousal />
      <AboutHero />
      <GridA />
      <ScrollImage/>
      {/* <Heading />  */}
      {/* <AboutCarousel /> */}

      <Habout />
      <Enquiry />
           <F1/>
      {/* <Footer /> */}

    </>
  );
};

export default Ahome;
