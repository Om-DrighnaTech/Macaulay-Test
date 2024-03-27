import React, { Fragment} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faBookOpenReader, faBaseball, faMusic, faBrain, faCalendar, faSchoolFlag, faSchool, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

import "./infrastructure.css";
import img1 from "../../assests/images/gallery/infra2.png"

const Infrastructure = () => {

  return (
    <>

<section className="gallery.page.details graycolor pdbotm">
    
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="gallery_content_head">Fostering Excellence: </h2>
          <h5>Exploring Macaulay School's Infrastructure</h5>          
          <p>The infrastructure of our School is meticulously designed to provide students with a stimulating environment conducive to academic growth, creativity, and holistic development.</p>
          <p>Our classrooms are equipped with modern teaching aids, including interactive whiteboards and multimedia projectors, to facilitate dynamic and engaging learning experiences. Additionally, our well-equipped laboratories enable students to conduct experiments and hands-on activities, fostering a deeper understanding of scientific concepts. Overall, the infrastructure at Macaulay School is designed to inspire and empower students.</p>
        </div>
        <div className="col-md-6">
          <div className="content-img content-img-left">
          
          <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

      <section className="obg" >
      <div className="container h-100">
        <div className="row align-middle">
        <div className="txtFirst">
              <h1>
                  About Macaulay Premises
                </h1>
              </div>

          {/* -----First----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2">



              <div className="txt">
                <h1>
                  About Our <br />
                  school premises
                </h1>
                <p>Macaulay School's premises feature modern infrastructure, abundant green spaces, and stringent safety measures to foster a conducive learning environment.</p>
              </div>
              <div className="ico-card">
                <FontAwesomeIcon className='fontIcon' icon={faSchool} />
              </div>
            </div>
          </div>
          
          {/* -----Second----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-1">
              <div className="txt">
                <h1>
                  Our Upgraded <br />
                  Computer Lab
                </h1>
                <p>The computer lab at Macaulay School offers cutting-edge technology andexpert technical support to facilitate immersive learning experiences for students.</p>
              </div>
              <div className="ico-card">
                {/* <i className="fa fa-codepen"></i> */}
                <FontAwesomeIcon className='fontIcon' icon={faComputer} />
              </div>
            </div>
          </div>
          
          {/* -----Third----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2">
              <div className="txt">
                <h1>
                  Library <br />
                  For Students
                </h1>
                <p>The library at Macaulay English School provides extensive book collections, digital resources, and a tranquil study environment for students.</p>
              </div>
              {/* <a className="morebtn" onClick={openModal}>Know more</a> */}
              <div className="ico-card">
                {/* <i className="fa fa-empire"></i> */}
                <FontAwesomeIcon className='fontIcon' icon={faBookOpenReader} />
              </div>
            </div>
          </div>
        
          {/* -----Third----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3">
              <div className="txt">
                <h1>
                  Sports and <br />
                  Physical Activity
                </h1>
                <p>Macaulay School encourages students to stay active and healthy through a variety of sports and physical activities, promoting teamwork and overall well-being.</p>
              </div>
              {/* <a className="morebtn" onClick={openModal}>Know more</a> */}
              <div className="ico-card">
                {/* <i className="fa fa-empire"></i> */}
                <FontAwesomeIcon className='fontIcon' icon={faBaseball} />
              </div>
            </div>
          </div>
        
          {/* -----First----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2">
              <div className="txt">
                <h1>
                  Math <br />
                  Olympiad
                </h1>
                <p>Macaulay School excels in preparing students for Math Olympiads, providing rigorous training and mentorship to foster problem-solving skills.</p>
              </div>
              {/* <a className="morebtn" onClick={openModal}>Know more</a> */}
              <div className="ico-card">
                {/* <i className="fa fa-rebel"></i> */}
                <FontAwesomeIcon className='fontIcon' icon={faBrain} />
              </div>
            </div>
          </div>

          {/* -----Second----- */}
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3">
              <div className="txt">
                <h1>
                  Our Yearly <br />
                  Exam Calendar
                </h1>
                <p>Macaulay School meticulously schedules yearly exams to ensure comprehensive coverage of the curriculum and optimal preparation for student success.</p>
              </div>
              {/* <a className="morebtn" onClick={openModal}>Know more</a> */}
              <div className="ico-card">
                {/* <i className="fa fa-codepen"></i> */}
                <FontAwesomeIcon className='fontIcon' icon={faCalendar} />
              </div>
            </div>
          </div>
       
          
       
        </div>
      </div>
      </section>
    </>
  );
};

export default Infrastructure;
