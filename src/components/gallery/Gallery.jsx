// --------imports images from images folder-------
import imagegallery1 from "../../assests/images/gallery/3_0.JPG";
import imagegallery2 from "../../assests/images/gallery/2.JPG";
import imagegallery3 from "../../assests/images/gallery/3.JPG";
import imagegallery4 from "../../assests/images/gallery/4.JPG";
import imagegallery5 from "../../assests/images/gallery/5.JPG";
import imagegallery6 from "../../assests/images/gallery/6.JPG";
import imagegallery7 from "../../assests/images/gallery/7.JPG";
import imagegallery8 from "../../assests/images/gallery/8.JPG";
import imagegallery9 from "../../assests/images/gallery/9.JPG";
import student1 from "../../assests/gallryimg/student1.png";
// import img2 from "../../assests/images/gallery/1st_1.png";
import img2 from "../../assests/images/gallery/img2.png"
import Scl2 from "../../assests/gallryimg/scl2.png";
import Scl3 from "../../assests/gallryimg/scl3.png";
import Scl4 from "../../assests/gallryimg/scl4.png";
import Scl5 from "../../assests/gallryimg/scl5.png";
import Scl6 from "../../assests/gallryimg/scl6.png";
import Scl7 from "../../assests/gallryimg/scl7.svg";
import Scl8 from "../../assests/gallryimg/scl8.png";
import Scl9 from "../../assests/gallryimg/scl9.png";
import Scl10 from "../../assests/gallryimg/scl10.svg";
import Scl15 from "../../assests/gallryimg/scl15.svg";
import Scl16 from "../../assests/gallryimg/scl16.svg";
import Scl17 from "../../assests/gallryimg/scl17.svg";
import Scl18 from "../../assests/gallryimg/scl18.svg";
import Scl14 from "../../assests/gallryimg/scl14.svg";
import Scl11 from "../../assests/gallryimg/scl11.svg";
import Scl19 from "../../assests/gallryimg/scl19.svg";
import Scl20 from "../../assests/gallryimg/scl20.svg";
import './gallery.css'
function Gallery() {
  return (
    <>
    <div  className="hdsz">
    <h2>Gallery</h2>
    </div>
    <section className="gallery.page.details graycolor pdbotm">
    
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="gallery_content_head">Annual Extravaganza: </h2>
            <h5>Celebrating Excellence at Macaulay School</h5>
            <p>The Macaulay School Annual Function is not just an event; it's a celebration of the culmination of hard work, talent, and creativity. Every year, our school comes alive with the vibrant energy of students, teachers, and parents gathering to rejoice in the achievements and spirit of our community.</p>
            <p>Join us as we come together to celebrate another year of growth, learning, and camaraderie at the Macaulay School Annual Function. It's a time to reflect on our journey so far and envision the endless possibilities that lie ahead. Together, let's make this evening a memorable celebration of excellence, talent, and community spirit.</p>
          </div>
          <div className="col-lg-6">
            <div className="content-img content-img-left">
            <img src={img2} alt="" />
            {/* <img src={img1} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ---------section tag starts here------ */}
    <section className="gallery-page-section pdbotm">
      {/* <h1>Gallery</h1> */}
      {/* ---------container starts here------ */}
        <div className="container">
        {/* ---------row starts here------ */}  
          <div className="row">
            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery1} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery2} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery3} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery4} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery5} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery6} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery7} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery8} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
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

    <section className="gallery.page.details graycolor pdbotm">
      <div className="container">
        <div className="row">
        <div className="col-lg-6">
            <div className="content-img content-img-right">
            <img src={img2} alt="" />
            {/* <img src={img1} alt="" /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="gallery_content_head">Exploring Excellence: </h2>
            <h5>Inside Macaulay School's Classrooms</h5>
            <p>At Macaulay School, classrooms are not just spaces for learning; they are vibrant hubs of intellectual exploration, creativity, and collaboration. Our teachers, with their dedication and expertise, create an environment where every student feels empowered to excel and grow.</p>
            <p>At Macaulay School, our teachers are more than just educators; they are mentors, guides, and champions of excellence. Through their dedication, passion, and commitment, they inspire and empower the leaders of tomorrow, shaping the future one classroom at a time.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ---------section tag starts here------ */}
    <section className="gallery-page-section pdbotm">
      {/* <h1>Gallery</h1> */}
      {/* ---------container starts here------ */}
        <div className="container">
        {/* ---------row starts here------ */}  
          <div className="row">
            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl17} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl16} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl7} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl18} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl10} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl15} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl9} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl8} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={student1} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

          </div>
        {/* ---------row ends here------ */} 
        </div>
      {/* ---------container ends here------ */}  
      </section>
    {/* ---------section tag endss here------ */}

    <section className="gallery.page.details graycolor pdbotm">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2  className="gallery_content_head">Building Bridges: </h2>
            <h5>The Relationship between Macaulay School and Students</h5>
            <p>At Macaulay School, we understand that education is a partnership between students and educators. We believe in fostering a strong and collaborative relationship between the school and students to ensure the holistic development and success of every child.</p>
            <p>For students, Macaulay School is not just a place of learning; it's a second home where they feel safe, supported, and encouraged to explore their passions and talents. Our dedicated teachers and staff members create a nurturing environment where students can thrive academically, socially, and emotionally. Through personalized attention, mentorship, and a wide range of extracurricular activities, we strive to empower students to reach their full potential and become responsible global citizens.</p>
          </div>
          <div className="col-lg-6">
            <div className="content-img content-img-left">
            <img src={img2} alt="" />
            {/* <img src={img1} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    
    {/* ---------section tag starts here------ */}
    <section className="gallery-page-section pdbotm">
      {/* <h1>Gallery</h1> */}
      {/* ---------container starts here------ */}
        <div className="container">
        {/* ---------row starts here------ */}  
          <div className="row">
            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl19} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl14} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl11} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            {/* <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery4} alt="" />
              </div>
            </div> */}
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl6} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            {/* <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery6} alt="" />
              </div>
            </div> */}
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl5} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            {/* <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={imagegallery8} alt="" />
              </div>
            </div> */}
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl4} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 


            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl3} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl2} alt="" />
              </div>
            </div>
            {/* ---------column ends here------ */} 

            {/* ---------column starts here------ */} 
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-box">
                <img src={Scl20} alt="" />
              </div>
            </div>

          </div>
        {/* ---------row ends here------ */} 
        </div>
      {/* ---------container ends here------ */}  
      </section>
    {/* ---------section tag endss here------ */}

    </>
  )
}

export default Gallery;