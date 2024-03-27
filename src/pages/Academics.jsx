import NavBar from "../components/demoNavBar/DemoNavBar"
import Academic from "../components/academic/Academic";
import Crousal from "../components/Crousal/Crousal";
import Enquiry from "../components/Enquiry/Index";
 import F1 from "../components/f1/f1";
// import Footer from "../components/Footer/Footer";


const Academics = () => {

  return (
    <>
      <NavBar />
      <Crousal />
      <Academic />
      <Enquiry />
      <F1 />
      {/* <Footer /> */}
    </>
  )
}

export default Academics;