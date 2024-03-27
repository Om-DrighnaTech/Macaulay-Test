

import "./curriculum.css";
// import Approach3 from '../../assests/ImageCurriclm/approach3.png';

import shape_12 from '../../assests/ImageCurriclm/shape_12.png';
// import shape_13 from '../../assests/ImageCurriclm/shape_13.png';

import shape1img from "../../assests/ImageCurriclm/testimonial_1.jpg"
import im from "../../assests/ImageCurriclm/im.png"
import im1 from "../../assests/ImageCurriclm/im1.png";
import im2 from "../../assests/ImageCurriclm/im2.png";
import im3 from "../../assests/ImageCurriclm/im3.png";
import im4 from "../../assests/ImageCurriclm/im4.png";
import im5 from "../../assests/ImageCurriclm/im5.png";
import im6 from "../../assests/ImageCurriclm/im6.png";
import approach3 from "../../assests/ImageCurriclm/im6.png";







import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLightbulb, faLaptop,  faBrain  } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Enquiry from "../Enquiry/Index";



const CurriculumModel = () => {


  const [testimonialContent, setTestimonialContent] = useState({
    title: 'Passion and Enthusiasm',
    subtitle: 'The quality of being inventive, resourceful, and clever in finding solutions',
    description:
      'It involves the ability to think outside the conventional boundaries, exhibit creativity in problem-solving, and devise novel approaches to achieve goals or overcome obstacles. Ingenuity often implies a combination of intelligence, resourcefulness, and a willingness to explore unconventional paths in order to achieve innovative and effective outcomes.',
    image: im1,
  });

  const handleImageClick = (title, subtitle, description, image) => {
    setTestimonialContent({
      title,
      subtitle,
      description,
      image,
    });
  };

  return (
    <>

   
   <section class="currimodl testimonial_v1">
    <div class="shape_v5">
        <img src={shape_12} class="shape_12" alt="shape"/>

        {/* <img src={shape_13} class="shape_13" alt="shape"/> */}
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

              
            </div>
        </div>
        <div class="row1">
            <div class="single_img sm_img" onClick={() => handleImageClick('Effective Communication','Creating Meaningful Learning Experiences: The Essence of an Effective Curriculum', 'An effective curriculum engages students in meaningful learning experiences aligned with educational goals. It fosters critical thinking, creativity, and collaboration by integrating real-world applications and interdisciplinary connections. Through ongoing evaluation and adaptation, it prepares students for success in school, work, and life, inspiring a lifelong love of learning', im1)}>
                <img src={im1} class="img-fluid" alt="people"/>
                <p class="text-below-image">
               
                Effective Communication</p>
            </div>
            <div class="single_img sm_img" onClick={() => handleImageClick('Adaptability','The Key to Thriving in Change: Embracing Adaptability' ,'Adaptability is a crucial skill in todays ever-evolving world, enabling individuals to navigate uncertain environments and embrace new opportunities. This subheading and description emphasize the importance of adaptability in facing change and thriving in dynamic circumstances. It highlights adaptability as a key factor in personal and professional success, encouraging readers to cultivate flexibility, resilience, and learning agility to excel in a rapidly changing world.', im)}>
                <img src={im} class="img-fluid" alt="people"/>
                <p class="text-below-image">
               
               Adaptability</p>
            </div>
            <div class="single_img sm_img" onClick={() => handleImageClick('Empathy and Understanding', 'Empathy And Understanding: Building Bridges of Connection', 'Empathy and understanding are the bridges that connect hearts and minds, fostering deeper connections and mutual respect. By empathizing with others experiences and perspectives, we create a space for genuine understanding and compassion to flourish. These qualities empower us to navigate diverse relationships with sensitivity and kindness, bridging divides and building stronger, more inclusive communities. In embracing empathy and understanding, we cultivate the seeds of empathy, paving the way for greater harmony and unity in our shared human experience.'


,im3)}>
                <img src={im3} class="img-fluid" alt="prople"/>
                <p class="text-below-image">
               
               Empathy And Understanding</p>
            </div>
        </div>
        <div class=" rowmid">
            <div class="single_img sm_img rowmidimg" onClick={() => handleImageClick('Creativity & Innovation', 'Unleashing Creativity: Igniting Innovation', 'Creativity and innovation propel progress and transformation,Fueled by imagination, curiosity, and bold experimentation.They inspire breakthroughs, solutions, and novel ideas,Empowering individuals and organizations to shape the future.', im4)}>
                <img src={im4} class="img-fluid" alt="people"/>
                <p class="text-below-image">
               
                Creativity & Innovation</p>
            </div>
          
            <div class="single_img sm_img rowmidimg" onClick={() => handleImageClick('Classroom Management', 'Creating a Positive Learning Environment: Effective Classroom Management, and clever in finding solutions', 'Classroom management fosters a positive environment for student growth, blending structure with supportive relationships. It establishes clear expectations and routines while nurturing a respectful and inclusive atmosphere. By minimizing disruptions and maximizing engagement, it empowers students to thrive academically and socially.',im6)}>
                <img src={im6} class="img-fluid" alt="prople"/>
                <p class="text-below-image">
               
               Classroom Management</p>
            </div>
        </div>
        
        <div class="row2">
            <div class="single_img" onClick={() => handleImageClick('Motivation and Inspiration', 'Elevating Potential: Motivation and Inspiration', 'Motivation and inspiration fuel the journey of personal and professional growth, sparking enthusiasm and drive. They empower individuals to pursue goals with determination and resilience, overcoming obstacles along the way. By fostering a sense of purpose and possibility, they unleash creativity and unlock potential, propelling individuals towards success and fulfillment.',im2)}>
                <img src={im2} class="img-fluid" alt="prople"/>
                <p class="text-below-image">
               
               Motiviation And Inspiration</p>
            </div>
            
            
            <div class="single_img" onClick={() => handleImageClick('Building Relationships', 'Strengthening Bonds: The Art of Building Relationships', 'Building relationships is the foundation of fostering trust, collaboration, and mutual support. It involves cultivating genuine connections through empathy, active listening, and effective communication. By prioritizing authentic interactions and understanding the needs of others, we create a positive and inclusive environment where individuals feel valued and respected. Strong relationships enhance teamwork, promote personal growth, and contribute to a thriving community.',im5)}>
            <img src={im5} class="img-fluid" alt="prople"/>
            <p class="text-below-image">
               
               building Relationship</p>
            </div>
        </div>

        <div class="testimonial_slide ">
            <div class="slick-slider slick-initialized" dir="ltr">
              
                <div class="slick-list">
                    <div class="slick-track" style={{width: "5110px", opacity: "1;", transform: "translate3d(-730px, 0px, 0px)"}}>
                        <div  class="slick-slide slick-cloned" aria-hidden="true" style={{width: "730px"}}>
                            <div>
                                <div class="single_testimonial">
                                    <div class="client_img">
                                        <img src={im1} class="img-fluid" alt="testimonial one"/>
                                        <div class="qoute">
                                            <i>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
     
                                                </svg>
                                               
                                            </i>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="slick-slide slick-active slick-current"  style={{outline: "none", width: "730px" }}>
                            <div>
                                <div class="single_testimonial">
                                    <div class="client_img">
                                        <img src={testimonialContent.image} class="img-fluid" alt="testimonial one"/>
                                        <div class="qoute">
                                            <i>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div class="client_info">
                                    
                                        <h3>{testimonialContent.title}</h3>
            <h5>{testimonialContent.subtitle}</h5>
            <p>{testimonialContent.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</section>


{/* landing page */}

<section className="achivmentsHead">
        <h1>Our Educational Framework</h1>
      </section>
<section className=" landing-page-section about--area pt-120 pb-60 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".4s" style={{ visibility: 'visible', animationDuration: '0.50s', animationDelay: '0.50s', backgroundColor:"white",}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 col-md-12 col-12">
            <div className="tp-ab-circle-img p-relative mb-60">
              <div className='curriculum-circle-img'>
              <img src={approach3} alt="about-img" />
              </div>
              <div className="ab-circle-shape">

                <img src={shape1img} alt="about-shape" className="ab-circle-two" /> 
              </div>
            
          </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-12 col-12">
            <div className="tp-abcircle-content ">
              <div className="section-title">
            
                
                <h3 className="tp-section-title mb-20">Empowering Growth through Comprehensive Education</h3>
                
                <p>At <b> MACAULAY </b>,The educational framework at our English School is carefully structured to provide a dynamic and enriching learning environment. Our approach integrates personalized learning strategies, innovative teaching methods, and character development initiatives to foster holistic growth in our students. Through a balance of academic rigor, creative expression, and community engagement, we aim to empower students with the skills, knowledge, and values necessary for success in the modern world. </p>
              </div>
              <div class="about-circle-list mb-40">
             

    <div className="row text-center cmedfmIcon">
      <div className="col-sm-6">
        <FontAwesomeIcon icon={faBook} className='icon-background' />
        <p>Diverse Subjects</p>
      </div>
      <div className="col-sm-6">
      <FontAwesomeIcon icon={faLightbulb} className='icon-background' />
        <p>Interactive Learning</p>
      </div>
      <div className="col-sm-6">
      <FontAwesomeIcon icon={faLaptop} className='icon-background' />
        <p>Instructional Design</p>
      </div>
      <div className="col-sm-6">
      <FontAwesomeIcon icon={faBrain} className='icon-background'  />
        <p>Critical Thinking</p>
      </div>
      
      
    </div>
                        </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  



  
  <div>
    <Enquiry/>
  </div>
  
  


    </>
  )
}

export default CurriculumModel;
