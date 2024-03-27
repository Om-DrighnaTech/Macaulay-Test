
/* eslint-disable */

// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Infrastructures from './pages/Infrastructures';
// import Gallery from './pages/Galleries';
import Ahome from './pages/About';
// import { Foundation } from '@mui/icons-material';
import Foundations from './pages/Foundations';
import ACurriculum from './pages/ACurriculum';
import Curriculum from './pages/Curriculum';
// import Managements from './pages/ManagementsPage';
import ManagementsPage from './pages/ManagementsPage';

import Contacts from './pages/Contacts';

import Admission from './pages/Admission';
import Enquiry from './components/Enquiry/Index';
// import AceCo from './components/acedemicsCo/AceCo';
// import AreaCoro from './components/areaofcoro/AreaCoro';
// import Achiever from './pages/Achiever';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Test from './pages/Test';
import F1 from './components/f1/f1';







function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infrastructures" element={<Infrastructures />} />
          {/* <Route path="/gallery" element={<Gallery/>} /> */}
          <Route path="/Ahome" element={<Ahome/>} />
          <Route path="/Foundations" element={<Foundations/>} />
          <Route path="/ACurriculum" element={<ACurriculum/>} />
          <Route path="/CurriculumModels" element={<Curriculum/>} />
          <Route path="/ManagementsPage" element={<ManagementsPage/>} />

          <Route path="/Contacts" element={<Contacts/>} />
          {/* <Route path="/Achievers" element={<Achiever/>} /> */}

          <Route path="/Admission" element={<Admission/>} />
          <Route path="/Enquiry" element={<Enquiry/>} />
          {/* <Route path="/acedemicsco" element={<AceCo/>} />
          <Route path="/areacoro" element={<AreaCoro/>} /> */}
          
          <Route path="/Academics" element={<Academics/>} />
          <Route path="/Facilities" element={<Facilities/>} />
          <Route path="/Test" element={<Test />} />
          <Route path="/f1" element={<F1 />} />



        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
