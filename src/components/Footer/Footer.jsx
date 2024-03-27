import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assests/images/navBarImages/logo.png"

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/About",
  },

  // {
  //   display: "Curriculum",
  //   url: "/ACurriculum",
  // },

  {
    display: "Infrastructure",
    url: "/Infrastructures",
  },
  
];

const footerInfoLinks = [
  {
    display: "Academics",
    url: "/gallery",
  },

  {
    display: "Contact",
    url: "/Contacts",
  },

  {
    display: "School IMS" ,
    url: "https://internal.newmacaulayenglishschool.com/authentication/index",
  },
];



// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col lg="3" md="6" className="mb-4">
//             <h2 className=" d-flex align-items-center gap-1">
//                Macaulay High School
//             </h2>

//             <div className="follows">
//               <p className="mb-0">Follow us on social media</p>
//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-facebook-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-instagram-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-linkedin-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-twitter-line"></i>
//                 </a>
//               </span>
//             </div>
//           </Col>

//           <Col lg="3" md="6" className="mb-4">
//             <h6 className="fw-bold">Explore</h6>
//             <ListGroup className="link__list">
//               {footerQuickLinks.map((item, index) => (
//                 <ListGroupItem key={index} className="border-0 ps-0 link__item">
//                   {" "}
//                   <a href={item.url}>{item.display}</a>
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="6" className="mb-4">
//             <h6 className="fw-bold">Information</h6>
//             <ListGroup className="link__list">
//               {footerInfoLinks.map((item, index) => (
//                 <ListGroupItem key={index} className="border-0 ps-0 link__item">
//                   {" "}
//                   <a href={item.url}>{item.display}</a>
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="6">
//             <h6 className="fw-bold">Get in Touch</h6>

//             <p>Address: Bangalore</p>
//             <p> Phone: 123456789 </p>
//             <p>Email: macaulay@gmail.com</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

const Footer = () => {
  return (

    <>
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            {/* <h2 className="d-flex align-items-center gap-1">
               Macaulay High School
            </h2> */}
            <div className="footerLogodiv">
              <img className="footerLogo" src={logo} alt="" />
            </div>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <div>
              <span>
                {" "}
                <a href="https://facebook.com/share/bRDUkRszHg7sRRcf/?mibextid=oFDknk" target="_blank" rel="noopener noreferrer">
                  {/* <i className="ri-facebook-line"></i> */}
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://instagram.com/nmehs7?utm_source=qr&igsh=d2x4NXZhajQzaHFk" target="_blank" rel="noopener noreferrer">
                  {/* <i className="ri-instagram-line"></i> */}
                  {/* <i class="fa-brands fa-instagram"></i> */}
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </span>

              {/* <span>
                {" "}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span> */}

              {/* <span>
                {" "}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </span> */}

              <span>
                {" "}
                <a href="https://youtube.com/@NewMacaulayHighSchool?si=M8TEhnGL7EE6CRxk" target="_blank" rel="noopener noreferrer">
                  {/* <i className="ri-twitter-line"></i> */}
                  <i class="fa-brands fa-square-youtube"></i>
                </a>
              </span>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" >
            <h6 className="fw-bold">Get in Touch</h6>
            <p className="gitouch">Address: Kudlu Gate, Hosapalya Main Road, Banglore- 560068</p>
            <p className="gitouch"> Phone: 080-49524676 </p>
            <p className="gitouch"> Mobile No: 9739156824 </p>
            <p className="gitouch">Email: macaulayschool2010@gmail.com</p>
            <br />
          </Col>
        </Row>
      </Container>
      
    </footer>

<div className="copyrt">
<p className="copyrtline">&copy; Macaulay Group of Schools | Designed & Developed by Drighna Technology pvt Ltd.</p>
</div>
</>
  );
};


export default Footer;

