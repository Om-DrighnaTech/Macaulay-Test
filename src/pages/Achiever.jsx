import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal  from "../components/Crousal/Crousal";

import Footer from "../components/Footer/Footer"
import Achievers from "../components/Achievers/Achievers";
import Enquiry from "../components/Enquiry/Index"
import F1 from "../components/f1/f1";

const Achiever = () => {

  return (
    <>
      <NavBar />
      <Crousal />
      <Achievers />
      <Enquiry />
      {/* <Footer /> */}
      <F1/>
    </>
  )
}

export default Achiever;