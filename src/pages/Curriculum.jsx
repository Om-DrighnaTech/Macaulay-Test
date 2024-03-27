


import NavBar from "../components/demoNavBar/DemoNavBar";
// import Crousal  from "../components/Crousal/Crousal";

// import Habout from "../components/Habout/index";
// import Heading from "../components/Heading/Heading"
import CurriculumModel from "../components/curriculumModel/CurriculumModel";
import Footer from "../components/Footer/Footer"
// import CrmodalCarousel from "../components/crmodalCarousel/CrmodalCarousel";
import Crousal from "../components/Crousal/Crousal"
import F1 from "../components/f1/f1";
// import AceCo from "../components/acedemicsCo/AceCo";


const Curriculum = () => {
  return (
    <>
      <NavBar />
      {/* <Crousal /> */}
      {/* <AceCo /> */}
      < Crousal />
      {/* <CrmodalCarousel /> */}
      {/* <Heading /> */}
      <CurriculumModel />
      {/* <Footer /> */}
      <F1/>
      
    </>
  );
};

export default Curriculum;
