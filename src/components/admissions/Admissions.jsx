import Marquee from "react-fast-marquee";
// import Enquiry from "../Enquiry/Index"

// import img from "../../assests/images/gallery/backtoschool.png";
// import img1 from "../../assests/images/gallery/calander.PNG";
import imagegallery1 from "../../assests/images/gallery/3_0.JPG";
import imagegallery2 from "../../assests/images/gallery/2.JPG";
import imagegallery3 from "../../assests/images/gallery/3.JPG";
import imagegallery4 from "../../assests/images/gallery/4.JPG";
import imagegallery5 from "../../assests/images/gallery/5.JPG";
import imagegallery6 from "../../assests/images/gallery/6.JPG";
import imagegallery7 from "../../assests/images/gallery/7.JPG";
import imagegallery8 from "../../assests/images/gallery/8.JPG";
import imagegallery9 from "../../assests/images/gallery/9.JPG";

import school from "../../assests/images/gallery/MacaulaySchoolPics.png";
import edsks from "../../assests/images/edsks.png";




import "./admissions.css";
import MyCalendarComponent from "../Calendar/MyCalendarComponent";

const Admissions = () => {
  return (
    <div className="backImage">
      <section className="admissionHead">
        <h1>Macaulay Group of School</h1>
      </section>

      <section className="admissionMarquee">
        <Marquee>
          <div className="inlblock">
            <h5>
              <i class="ri-vimeo-line"></i> <strong>Admissions Open for the Academic Year 2024-2025!</strong> | Apply now and secure your child's future at our esteemed institution. | Our school offers a nurturing environment for holistic development. | Limited seats available, hurry and enroll your child today! | Explore our state-of-the-art facilities and innovative curriculum. | Contact us for more information or schedule a campus tour.
            </h5>
          </div>
          {/* <div className="inlblock">
            <h5>
              <i class="ri-pinterest-line"></i> Diversity
            </h5>
          </div>
          <div className="inlblock">
            <h5>
              <i class="ri-dribbble-line"></i> TechLab
            </h5>
          </div>
          <div className="inlblock">
            <h5>
              <i class="ri-apple-fill"></i> Creativity
            </h5>
          </div>
          <div className="inlblock">
            <h5>
              <i class="ri-finder-fill"></i> Finder
            </h5>
          </div>
          <div className="inlblock">
            <h5>
              <i class="ri-google-fill"></i> Innovation
            </h5>
          </div> */}
        </Marquee>
      </section>

      <section className="admissionOpen">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 admissionOpenbg" >
              <div className="q">
              <h3>Admission Open 2024-2025</h3>
              <h5>Nursery to Class 10</h5>
              <p>
                Our students are going to be the
                pioneers of 21st-century education. Creating a 360-degree child
                development environment, the school includes an innovative
                curriculum and modern facilities that make it one-of-a-kind in
                India.
              </p>
                <br />
              </div>

              <div className="w-50 text-end">
             <a href="/Achivers">
             <button className="btn"><i className="fas fa-trophy" style={{ marginRight: '5px' }}></i>See Our Achievers</button>
             </a>
           </div>
              {/* <img className="admissionOpenImg" src={img} alt="" /> */}
            </div>
            <div className="col-lg-6">
              <MyCalendarComponent />
              {/* <img className="calanderImg" src={img1} alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* ---------section tag starts here------ */}
      <section className="admissionGallery pdbotm">
        {/* <h1>Gallery</h1> */}
        {/* ---------container starts here------ */}
        <div className="container">
          {/* ---------row starts here------ */}
          <div className="row">
            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery1} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery2} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery3} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery4} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery5} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery6} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery7} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery8} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}

            {/* ---------column starts here------ */}
            <div className="col-md-4 col-xs-12 col-sm-6 ">
              <div className="gallery-img-box">
                <img src={imagegallery9} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */}
          </div>
          {/* ---------row ends here------ */}
        </div>
        {/* ---------container ends here------ */}
      </section>
      {/* ---------section tag endss here------ */}

      <section className="admissionskill">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 admissionskillCol">
              <div className="admissionSkill">
                <h3>Education with Skills</h3>
                <p>
                  The education is not just about gaining
                  knowledge; it's about honing skills that empower you to thrive
                  in a dynamic world. Embrace every opportunity to learn and
                  grow, for it's through education and skills that you'll shape
                  a future of limitless possibilities.
                </p>
                <p>
                  Education alone is not enough. In today's competitive world,
                  it's imperative to complement academic prowess with a diverse
                  set of skills. Skills like communication, collaboration,
                  creativity, and adaptability are the currency of success in
                  the 21st century. Macaulay School is not just a hub of
                  academic excellence; it's a breeding ground for holistic
                  development, where you not only excel in your chosen field but
                  also emerge as well-rounded individuals ready to conquer the
                  world.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="calanderImg" src={edsks} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="lifeAtSchool">
        {/* <h3>"We bleve on Knowledge is Supreme."</h3> */}
        <h3>"Life at Macaulay Group of Schools"</h3>
        <h5>Nurturing minds, fostering growth, and shaping futures.</h5>
        <h5>We bleve that Knowledge is Supreme.</h5>
      </section>

      <section className="admissionKeyPoint">
        <div className="container">
          <div className="row">
            <div className=" col-md-4 admissionKeyPointCol">
              <div className="card admissionKeyPntCrd learningbg">
              <h3 className="admissionKeyPnt whtclr">Learning</h3>
              <p className="keypntpara whtclr">
              The learning style of Macaulay School may vary depending on its educational philosophy, curriculum, and teaching methods. However, it's generally considered that schools often incorporate various learning styles to accommodate the diverse needs of students.
              </p>
              </div>
            </div>
            <div className=" col-md-4 admissionKeyPointCol">
              <div className="card admissionKeyPntCrd artlabbg">
              <h3 className="admissionKeyPnt whtclr">Arts & Lab</h3>
              <p className="keypntpara whtclr">
              At Our School, the arts department provides a vibrant creative space where students explore visual and digital arts.The school's cutting-edge laboratories equip students with the tools and resources for hands-on scientific inquiryex & perimentation.
              </p>
              </div>
            </div>
            <div className=" col-md-4 admissionKeyPointCol">
              <div className="card admissionKeyPntCrd classroombg">
              <h3 className="admissionKeyPnt whtclr">Classrooms</h3>
              <p className="keypntpara whtclr">
              Our 21st Century classroom are student centered. Teachers no longer function as lecturers but as facilitators of learning. This in combination with Biophilic Designed spaces, balances the technology and nature under the New Macaulay English School.
              </p>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h3 className="admissionKeyPnt">Heading</h3>
              <p className="keypntpara">
                Our faculty members undergo arduous training sessions to earn
                the prestigious 3-level certification to become Microsoft
                Innovative Educator Trainer.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="schoolimgsec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="schoolimage" src={school} alt="" />
            </div>
            <div className="col-lg-6">
            <h3 className="admissionKeyPnt">New Macaulay English School</h3>
              <p className="keypntpara">
              Our school prides itself on providing a comprehensive education that combines rigorous academics with enriching extracurricular activities. With a focus on English language proficiency, we offer a dynamic curriculum designed to enhance students' communication skills, critical thinking abilities, and cultural awareness.
              </p>
              <p className="keypntpara">
             We believe in the power of a well-rounded education. Our dedicated faculty members are committed to cultivating a love for learning in every student while instilling values of integrity, respect, and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section></section> */}
      {/* <Enquiry /> */}
    </div>
  );
};

export default Admissions;
