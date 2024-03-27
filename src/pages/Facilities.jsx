import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal from "../components/Crousal/Crousal";
// import Infrastructure from "../components/infrastructure/Infrastructure";
// import Heading from "../components/Heading/Heading";
import Enquiry from "../components/Enquiry/Index"
import Footer from "../components/Footer/Footer";
import MovieNightSection from "../components/MovieNightSection/MovieNight";
import Grid from "../components/Grid/Grids";
import F1 from "../components/f1/f1";

const Facilities = () => {
  return (
    <>
      <NavBar />
      <Crousal />
      {/* <Heading /> */}
      <MovieNightSection />
      
      {/* <Infrastructure /> */}
      <Grid />
      
      <Enquiry />
      {/* <Footer /> */}
      <F1/>
    </>
  );
};

export default Facilities;
