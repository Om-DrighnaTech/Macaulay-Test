import React from "react";
// import img1 from "../../assests/images/6422200.png";
// import img2 from "../../assests/images/6422213.png";
// import img3 from "../../assests/images/seo.png";
// import img4 from "../../assests/images/seo.png";
// import social from "../../assests/contact/social.png";
// import social2 from "../../assests/contact/social2.png";
// import social3 from "../../assests/contact/social3.png";
// import social1 from "../../assests/contact/social1.png";

import gif1 from "../../assests/contact/gif1.gif";
import gif2 from "../../assests/contact/gif2.gif";
import gif3 from "../../assests/contact/gif3.gif";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15556.965180255798!2d77.6421465!3d12.892199949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708510965345!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      {/* <section className="contact-section">
        <div className="container contact-address">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm contact-box-title">
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="contact-address-items ">
             
                <div className="contact-address-box">
                  <h4>ADDRESS:</h4>

                  <p>Demo, Bangalore</p>
                  
                </div>
                <div className="contact-address-box">
                  <h4>EMAIL:</h4>
                  <p> info@macaulay.com</p>
                  
                </div>
                <div className="contact-address-box">
                  <h4>PHONE:</h4>
                  <p> + 1235 2355 98</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm contact-box-title">
              <h1>Get In Touch</h1>
              <form action="">
                <div className="contact-address-get-in-touch">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact_name"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact_name"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="contact_name"
                />
                <textarea cols="30" rows="8">
                  Create a message here...
                </textarea>
                <button className="primary-btn">SEND MESSAGE</button>
              </form>

              <h3>Follow us here</h3>

              <div className="contact-social-media">
                <ul>
                  <li>
                    <img className="contact-social-img" src={social} alt="" />
                  </li>
                  <li>
                    <img className="contact-social-img" src={social1} alt="" />
                  </li>
                  <li>
                    <img className="contact-social-img" src={social2} alt="" />
                  </li>
                  <li>
                    <img className="contact-social-img" src={social3} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section" >
        <div className="container shadow " >
        <iframe
           title="Map"
           src={map}
           width="100%"
           height="1000px"  
           style={{ border: 0 }}
           allowFullScreen="" 
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade" />


        </div>
      </section> */}

<section className="achivmentsHead">
        <h1>Contact Us</h1>
      </section>

<section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon"><img className="gifimg" src={gif3} alt="" /></div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Kudlu Gate, Hosapalya Main Road, Banglore Karnataka(560068)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                              <img className="gifimg" src={gif1} alt="" />
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>contactus@newmacaulayenglishschool.com</p>
                                            <p>macaulayschool2010@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon"><img className="gifimg" src={gif2} alt="" /></div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+91 080-49524676 </p>
                                            <p>+91 9739156824</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <form className="contact-validation-active">
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="form-field"><input type="text" name="name" placeholder="Your Name" value="" />
                                        {/* <div className="errorMessage">The name field is required.</div> */}
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="form-field"><input type="email" name="email" placeholder="Your Email" value="" />
                                        {/* <div className="errorMessage">The email field is required.</div> */}
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col col-lg-6 col-12">
                                        <div className="form-field">
                                            <select type="text" name="subject">
                                                <option>Web Design</option>
                                                <option>Web Development</option>
                                                <option>Ux/Ui Design</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="col col-lg-12 col-12">
                                        <textarea  type="text" name="message" placeholder="Message"></textarea>
                                  
                                        {/* <div className="errorMessage">The message field is required.</div> */}
                                    </div>
                                </div>
                                <div className="submit-area">
                                    <button type="submit" className="theme-btn">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
 <div className="wpo-contact-map">               
                <iframe
           title="Map"
           src={map}
           width="100%"
           height="1000px" 
           style={{ border: 0 }}
           allowFullScreen="" 
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade" 
/>
                </div>
            </section>
        </section>


    </>
  );
};

export default Contact;
