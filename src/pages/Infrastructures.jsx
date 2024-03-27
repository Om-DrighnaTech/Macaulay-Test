import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal from "../components/Crousal/Crousal";
import Infrastructure from "../components/infrastructure/Infrastructure";
import Heading from "../components/Heading/Heading";
import Enquiry from "../components/Enquiry/Index"
import Footer from "../components/Footer/Footer";
import F1 from "../components/f1/f1";

const Infrastructures = () => {
  return (
    <>
      <NavBar />
      <Crousal />
      <Heading />
      <Infrastructure />
      <Enquiry />
      {/* <Footer /> */}
      <F1/>
    </>
  );
};

export default Infrastructures;
