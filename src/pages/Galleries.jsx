import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal  from "../components/Crousal/Crousal";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/Footer/Footer"
import F1 from "../components/f1/f1";

const Galleries = () => {
  return (
    <>
      <NavBar />
      <Crousal />
      <Gallery />
      {/* <Footer /> */}
      <F1/>
     
    </>
  );
};

export default Galleries;