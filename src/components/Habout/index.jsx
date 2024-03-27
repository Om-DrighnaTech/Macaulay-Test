import * as React from "react";
import { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { FaCheckCircle } from 'react-icons/fa';
import Enquiry from "../Enquiry/Index";
// import AboutHero from '../../components/AboutHero/MovieNight';
// import ScrollImage from '../../components/scrollImage/ScrollImage';
// import GridA from '../../components/GridA/Grids';
 import './hAbout.css'
// import { click } from "@testing-library/user-event/dist/click";
import backgroundImage from '../../assests/images/about/aaaaa.png';
import styles from './about.module.css';
import F1 from "../f1/f1";

const AboutUs = () => {
  const [verticalActive, setVerticalActive] = useState('tab1');


  const handleVerticalClick = (tab) => {
    setVerticalActive(tab);
  }



  return (
    <>
      <div>
      
        {/* <AboutHero /> */}

        {/* <GridA /> */}
       

        {/* <ScrollImage /> */}
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          <div className="about-content">
            <div className="aboutbg" style={{ padding: '50px',}}>
              <>
                <MDBRow>
                  <MDBCol lg="3" md="4" sm="12">
                    <MDBTabs className='flex-column text-center' style={{ border: 'none', fontFamily: "Andada Pro, serif", color: 'gray', }}>

                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleVerticalClick('tab1')}
                          style={{
                            color: verticalActive === 'tab1' ? 'white' : 'black',
                            textDecoration: 'none',
                            padding: '16px 17px',
                            borderRadius: '2px',
                            marginLeft: '20px',
                            transition: 'background-color 0.3s ease',
                            marginBottom: '5px',
                            // fontWeight: 'bold',
                            backgroundColor: verticalActive === 'tab1' ? '#333333' : '#f0f0f0', // Dark or light gray background
                            fontFamily: "Andada Pro, serif",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#333333'; // Dark gray background
                            e.target.style.color = 'white'; // White text color
                          }}
                          onMouseLeave={(e) => {
                            if (verticalActive !== 'tab1') {
                              e.target.style.backgroundColor = '#f0f0f0';
                              e.target.style.color = 'black'; // Reset text color to black
                            }
                          }}
                        >
                          Why Macaulay
                        </MDBTabsLink>
                      </MDBTabsItem>

                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleVerticalClick('tab2')}
                          style={{
                            color: verticalActive === 'tab2' ? 'white' : 'black',
                            textDecoration: 'none',
                            padding: '16px 17px',
                            borderRadius: '2px',
                            marginLeft: '20px',
                            transition: 'background-color 0.3s ease',
                            marginBottom: '5px',
                            // fontWeight: 'bold',
                            fontFamily: "Andada Pro, serif",
                            backgroundColor: verticalActive === 'tab2' ? '#333333' : '#f0f0f0', // Dark or light gray background
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#333333';
                            e.target.style.color = 'white'; // White text color
                          }}
                          onMouseLeave={(e) => {
                            if (verticalActive !== 'tab2') {
                              e.target.style.backgroundColor = '#f0f0f0';
                              e.target.style.color = 'black';
                            }
                          }}
                        >
                          Our Mission
                        </MDBTabsLink>
                      </MDBTabsItem>

                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleVerticalClick('tab3')}
                          style={{
                            color: verticalActive === 'tab3' ? 'white' : 'black',
                            textDecoration: 'none',
                            padding: '16px 17px',
                            borderRadius: '2px',
                            marginLeft: '20px',
                            transition: 'background-color 0.3s ease',
                            marginBottom: '5px',
                            // fontWeight: 'bold',
                            fontFamily: "Andada Pro, serif",
                            backgroundColor: verticalActive === 'tab3' ? '#333333' : '#f0f0f0', // Dark or light gray background
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#333333';
                            e.target.style.color = 'white'; // White text color
                          }}
                          onMouseLeave={(e) => {
                            if (verticalActive !== 'tab3') {
                              e.target.style.backgroundColor = '#f0f0f0';
                              e.target.style.color = 'black'; // Reset text color to black
                            }
                          }}
                        >
                          Our Vision
                        </MDBTabsLink>
                      </MDBTabsItem>

                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleVerticalClick('tab4')}
                          style={{
                            color: verticalActive === 'tab4' ? 'white' : 'black',
                            textDecoration: 'none',
                            padding: '16px 17px',
                            borderRadius: '2px',
                            marginLeft: '20px',
                            transition: 'background-color 0.3s ease',
                            marginBottom: '5px',
                            // fontWeight: 'bold',
                            fontFamily: "Andada Pro, serif",
                            backgroundColor: verticalActive === 'tab4' ? '#333333' : '#f0f0f0', // Dark or light gray background
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#333333';
                            e.target.style.color = 'white'; // White text color
                          }}
                          onMouseLeave={(e) => {
                            if (verticalActive !== 'tab4') {
                              e.target.style.backgroundColor = '#f0f0f0';
                              e.target.style.color = 'black'; // Reset text color to black
                            }
                          }}
                        >
                          Our Ranking
                        </MDBTabsLink>
                      </MDBTabsItem>


                      <MDBTabsItem style={{ marginLeft: '20px' }}>
                        <MDBTabsLink
                          onClick={() => handleVerticalClick('tab5')}
                          style={{
                            color: verticalActive === 'tab5' ? 'white' : 'black',
                            textDecoration: 'none',
                            padding: '16px 17px',
                            borderRadius: '2px',
                            transition: 'background-color 0.3s ease',
                            // fontWeight: 'bold',
                            fontFamily: "Andada Pro, serif",
                            border: '1px solid transparent', // Add this line to ensure consistency in borders
                            backgroundColor: verticalActive === 'tab5' ? '#333333' : '#f0f0f0', // Dark or light gray background
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#333333';
                            e.target.style.color = 'white'; // White text color
                          }}
                          onMouseLeave={(e) => {
                            if (verticalActive !== 'tab5') {
                              e.target.style.backgroundColor = '#f0f0f0';
                              e.target.style.color = 'black'; // Reset text color to black
                            }
                          }}
                        >
                          Our Research
                        </MDBTabsLink>
                      </MDBTabsItem>

                    </MDBTabs>
                  </MDBCol>
                  <MDBCol lg="9" md="8" sm="12">
                    <MDBTabsContent style={{ textAlign: 'left', color: 'black', marginLeft: '50px', fontFamily: "Andada Pro, serif", }}>
                      <MDBTabsPane open={verticalActive === 'tab1'}>
                        <div style={{ textAlign: 'justify' }}>
                          <h1 style={{ textAlign: 'center', }}>Why Macaulay</h1>
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray", }}>
                              <p>At our Highschool, we are committed to fostering a culture of excellence, integrity, and respect, where every student is valued, supported, and empowered to achieve their dreams. We invite you to join us on this exciting journey of discovery and growth, where the possibilities are endless and the future is bright.</p>

                            </div>
                          </div>

                          
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>Welcome to Our Highschool, where excellence meets opportunity. Established in 1995, Bright Horizons has been a beacon of educational innovation and academic excellence for over two decades.</p>
                            </div>
                          </div>
                        </div>
                      </MDBTabsPane>
                      <MDBTabsPane open={verticalActive === 'tab2'}>
                        <div style={{ textAlign: 'justify', }}>
                          <h1 style={{ textAlign: 'center', }}> Our Mission</h1>
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>At our Highschool, our mission is to ignite a passion for lifelong learning and empower our students to become compassionate leaders and global citizens. Grounded in a commitment to academic excellence, innovation, and inclusivity.</p>
                            </div>
                          </div>
                          
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>Our mission is to empower individuals through education, innovation, and community engagement. We strive to foster an environment of inclusivity and diversity, where every person has the opportunity to reach their full potential.</p>
                            </div>
                          </div>
                          
                        </div>
                      </MDBTabsPane>
                      <MDBTabsPane open={verticalActive === 'tab3'}>
                        <div style={{ textAlign: 'justify' }}>
                          <h1 style={{ textAlign: 'center', }}> Our Vission</h1>
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>At our Highschool, our vision is to cultivate a dynamic learning community where every student is inspired to dream, empowered to innovate, and equipped to thrive in a rapidly evolving world. Guided by a commitment to excellence, equity, and innovation, we envision a future where education transcends boundaries, fosters creativity.</p>
                            </div>
                          </div>
                        
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>Together, with our dedicated educators, supportive families, and engaged community partners, we are building a future where every student has the opportunity to thrive, succeed, and make a positive impact on the world.</p>
                            </div>
                          </div>
                          
                        </div>
                      </MDBTabsPane>
                      <MDBTabsPane open={verticalActive === 'tab4'}>
                        <div style={{ textAlign: 'justify' }}>
                          <h1 style={{ textAlign: 'center' }}> Our Ranking</h1>
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>At our Highschool, our vision is to cultivate a dynamic learning community where every student is inspired to dream, empowered to innovate, and equipped to thrive in a rapidly evolving world. Guided by a commitment to excellence, equity, and innovation, we envision a future where education transcends boundaries, fosters creativity.</p>
                            </div>
                          </div>
                          
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>As we continue to uphold our commitment to excellence, we remain grateful to our dedicated educators, supportive families, and engaged community members who contribute to our continued success and reputation as a leader in education.</p>
                            </div>
                          </div>
                        </div>
                      </MDBTabsPane>
                      <MDBTabsPane open={verticalActive === 'tab5'}>
                        <div style={{ textAlign: 'justify' }}>
                          <h1 style={{ textAlign: 'center' }}> Our Research</h1>
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>At our Highschool, we are committed to fostering a culture of innovation and inquiry through our robust research programs. Our dedicated faculty members are actively engaged in groundbreaking research across a wide range of disciplines, from STEM fields to humanities and social sciences.</p>
                            </div>
                          </div>
                          
                          <div className="green-check-circle" style={{ color: "gray", textAlign: "justify", display: "flex", alignItems: "flex-start" }}>
                            <FaCheckCircle style={{ color: "gray", marginRight: "10px", marginTop: "4px" }} />
                            <div style={{ flex: "1", color: "gray" }}>
                              <p>As we continue to push the boundaries of knowledge and innovation, we are proud to be at the forefront of research excellence, shaping the future of education and making meaningful contributions to the advancement of science, technology, and society.</p>
                            </div>
                          </div>
                          
                        </div>
                      </MDBTabsPane>
                    </MDBTabsContent>
                  </MDBCol>
                </MDBRow>
              </>
            </div>
          </div>
        </div>
      </div>
    </>


  );

};

export default AboutUs;
