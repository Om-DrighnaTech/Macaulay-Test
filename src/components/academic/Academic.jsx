// import processchool from "../../assests/images/gallery/stepprocess.png";
import Mamatha from "../../assests/images/gallery/Mamatha.png"
import Jalaja from "../../assests/images/gallery/Jalaja.png"
import Shakeerbasha from "../../assests/images/gallery/Shakeerbasha.png"
import Shakunthala from "../../assests/images/gallery/Shakunthala.png"
import Chandra from "../../assests/images/gallery/Chandra.png"
import Farheen from "../../assests/images/gallery/Farheen.png"
import Rakshita from "../../assests/images/gallery/Rakshita.png"
import Prakash from "../../assests/images/gallery/Prakash.png"
import Aswath from "../../assests/images/gallery/Aswath.png"
import Surekha from "../../assests/images/gallery/Surekha.png"
import Nagarathna from "../../assests/images/gallery/Nagarathna.png"
import Kalai from "../../assests/images/gallery/Kalai.png"
import PrePrimary from "../../assests/images/gallery/PrePrimary.svg"
import PrimarySchool from "../../assests/images/gallery/PrimarySchool.svg"
import MiddleSchool from "../../assests/images/gallery/MiddleSchool.svg"
import SecondarySchool from "../../assests/images/gallery/SecondarySchool.svg"
import F1 from "../f1/f1"

import "./academic.css"

const teachersdetails = [
  {
    id: '0',
  image: Mamatha,
  name: 'Mamatha N R',
  qualification: '',
  subject: 'English Faculty',
  },
  {
    id: '1',
  image: Jalaja,
  name: 'Jalaja N T',
  qualification: '',
  subject: 'Primary Science Faculty',
  },
  {
    id: '2',
  image: Shakeerbasha,
  name: 'Shakeerbasha Syed',
  qualification: '',
  subject: 'PE Faculty',
  },
  {
    id: '3',
  image: Shakunthala,
  name: 'Shakunthala',
  qualification: '',
  subject: 'Kannada Faculty',
  },
  {
    id: '4',
  image: Chandra,
  name: 'Chandra Rekha',
  qualification: '',
  subject: 'Maths Faculty',
  },
  {
    id: '5',
  image: Farheen,
  name: 'Farheen',
  qualification: '',
  subject: 'Hindi Faculty',
  },
  {
    id: '6',
  image: Rakshita,
  name: 'Rakshita',
  qualification: '',
  subject: 'Computer Faculty',
  },
  {
    id: '7',
  image: Kalai,
  name: 'Kalai selvi',
  qualification: '',
  subject: 'Science Faculty',
  },
  {
    id: '8',
  image: Nagarathna,
  name: 'Nagarathna N',
  qualification: '(MA,B.Ed)',
  subject: 'English Faculty',
  },
  {
    id: '9',
  image: Prakash,
  name: 'Prakash',
  qualification: '(MA,B.Ed)',
  subject: 'Kannada Faculty',
  },
  {
    id: '10',
  image: Aswath,
  name: 'Aswath Narayana',
  qualification: '(MA, B.Ed,)',
  subject: 'Social Faculty',
  },
  {
    id: '11',
  image: Surekha,
  name: 'Surekha',
  qualification: '(BA, B.Ed)',
  subject: 'Social Faculty',
  },
]

const Academic = () => {

  return (
    <>
      <section className="achivmentsHead">
        <h1>Our Academics</h1>
      </section>

      {/* <section style={{padding: "0px"}}>
      <img style={{width: "100%"}} src={processchool} alt="" />
      </section> */}

      <section className="academicsSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 clm-padng clm-dwn">
              <div className="academicsSec-imgdiv imgdivbdr">
                <img src={PrePrimary} alt="" />
              </div>
              <div className="academicsSec-cntdiv">
                <h5 className="academicsSec-heading yloClr">
                  <span>Pre-Primary</span></h5>
                <p>Our Pre-Primary program focuses on providing a stimulating and nurturing environment where young learners can explore, play, and develop foundational skills. Through age-appropriate activities and interactive learning experiences, we aim to foster curiosity, creativity, and a love for learning.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 clm-padng">
              <div className="academicsSec-imgdiv imgdivbdr">
                <img src={PrimarySchool} alt="" />
              </div>
              <div className="academicsSec-cntdiv">
                <h5 className="academicsSec-heading pnkclr">Primary School</h5>
                <p>In the Primary School, students embark on a journey of academic discovery, building upon their foundational knowledge and skills. Our curriculum encompasses subjects such as English, Mathematics, Science, Social Studies, and Environmental Studies. We emphasize interactive teaching methods, hands-on learning activities, and problem-solving skills.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 clm-padng clm-dwn">
              <div className="academicsSec-imgdiv imgdivbdr">
                <img src={MiddleSchool} alt="" />
              </div>
              <div className="academicsSec-cntdiv">
                <h5 className="academicsSec-heading skyclr">Middle School</h5>
                <p>The Middle School years are a pivotal stage in a student's educational journey, laying the groundwork for future academic success. Our curriculum for Classes 6 to 8 encompasses a broad range of subjects, including English, Mathematics, Science, History, Geography, and Languages (Hindi/Sanskrit).</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 clm-padng">
              <div className="academicsSec-imgdiv">
                <img src={SecondarySchool} alt="" />
              </div>
              <div className="academicsSec-cntdiv">
                <h5 className="academicsSec-heading blkclr">Secondary School</h5>
                <p>In Classes 9 and 10, students prepare for the Indian Certificate of Secondary Education (ICSE) examination. Our rigorous academic program equips students with the knowledge, skills, and confidence to excel in their examinations and beyond. Subjects covered include English, Mathematics, Physics, Chemistry, Biology, History, Geography, and a choice of Second Language.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achivmentsHead">
        <h1>Our Teachers</h1>
      </section>

      <section>
        <div className="container">

          <div className="row">
            {teachersdetails.map(function(data) {
              return (
                <div className="col-md-3 col-sm-6">
                <div className="card teaxherCard">
                <div className="teacherImage">
                  <img src={data.image} alt="" />
                </div>
                <div className="teacherDetails">
                  <h5>{data.name}</h5>
                  <h6>{data.qualification}</h6>
                  <p>{data.subject}</p>
                </div>
                </div>
              </div>
              )
            })}
          </div>

        </div>
      </section>
      

    </>
  )
}

export default Academic;