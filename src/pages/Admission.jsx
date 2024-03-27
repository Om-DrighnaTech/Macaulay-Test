import NavBar from "../components/demoNavBar/DemoNavBar";
import Crousal  from "../components/Crousal/Crousal";
import Admissions from "../components/admissions/Admissions";
import Footer from "../components/Footer/Footer"
// import Calendar from 'react-calendar'
// import MyCalendarComponent from "../components/Calendar/MyCalendarComponent";
import Enquiry from "../components/Enquiry/Index"
import F1 from "../components/f1/f1";


const Admission = () => {

  return (
    <>
      <NavBar />
      <Crousal />
      {/* <MyCalendarComponent /> */}
      <Admissions />
      
      {/* <Calendar /> */}
      <Enquiry />
      {/* <Footer /> */}
      <F1/>
    </>
  )
}

export default Admission;