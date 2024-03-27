import React from 'react'
import Images2 from '../../assests/images/about/NAG00225.png';
import Images3 from '../../assests/images/about/NAG00227.JPG';
import Images5 from '../../assests/images/about/NAG00383.png';
import Images6 from '../../assests/images/gallery/14.JPG';
import Images1 from '../../assests/images/about/NAG00196.png';
import Images9 from '../../assests/images/about/NAG00228.JPG';
// import styles from './management.module.css';
// import Footer from '../Footer/Footer';

// import c3 from '../../assests/images/about/3_9.JPG';
// import Carousel from 'react-bootstrap/Carousel';

const Mnew = () => {

    // const crausalData = [
    //     { id: 1, image: Images1, heading: 'Management and Academics', link: 'www.google.com' },
    //     { id: 2, image: Images6, heading: 'Management and Academics', link: 'www.google.com' },
    //     { id: 3, image: c3, heading: 'Management and Academics', link: 'www.google.com' },
    // ];

    return (

        <div className="page-container">
            <div>
            {/* <div>
                <Carousel>
                    {crausalData.map(item => (
                        <Carousel.Item key={item.id}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '70px', textAlign: 'center', color: '#fff', width: '400px' }}>
                                <h2 style={{ fontSize: '24px', marginBottom: '10px', textDecoration: 'none' }}>{item.heading}</h2>
                            </div>
                            <img style={{ width: '100%', height: '700px', }} src={item.image} alt="" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div> */}
            <div style={{ backgroundColor: 'black', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ color: 'white', textAlign: 'center' }}>Management Team</h2>
            </div>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: 'black' }}>"Our school management team is committed to providing a nurturing environment.</span>
                <br />
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: 'black' }}>Fostering academic excellence, and empowering students to reach their full potential."</span>
                <br />
            </div>

            {/* <body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px' }}> */}
            <div style={{ color: 'white', textAlign: 'center', fontSize: 'bold', height: '800px' }}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px', backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images2} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-290px', left: '20px', right: '20px', backgroundColor: '#ffffff', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 1px)', zIndex: '1', border: '1px solid black' }}>
                                    <h3 style={{ color: 'black' }}>Mr.Jayashanakr</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Chairman</p>
                                    <p style={{ color: 'black', fontStyle: 'italic', marginTop: '-15px' }}>
                                    "Mr. Jayashanakr is a visionary leader with a passion for academic excellence and student success. With years of experience and dedication, he ensures that our school remains at the forefront of education, &  providing a best environment."                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px', backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images3} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-290px', left: '20px', right: '20px', backgroundColor: '#ffffff', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 1px)', zIndex: '1', border: '1px solid black' }}>
                                    <h3 style={{ color: 'black' }}>Mrs. Reksha</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Secretary</p>
                                    <p style={{ color: 'black', fontStyle: 'italic',  marginTop: '-15px' }}> Mrs. Rekha efficiently manages administrative tasks, ensuring smooth operations and communication within our school. With her organizational skills and attention to detail. she plays a vital role in coordinating  various aspects.</p>
                                </div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px',backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images9} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-290px', left: '20px', right: '20px', backgroundColor: '#ffffff', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 1px)', zIndex: '1', border: '1px solid black' }}>
                                    <h3 style={{ color: 'black' }}> Mrs. Dipika </h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Principle</p>
                                    <p style={{ color: 'black', fontStyle: 'italic',  marginTop: '-15px' }}>"Mrs. Dipika brings valuable skills and expertise to our school as Principal. Her attention to detail, organizational abilities, and dedication to providing excellent support are instrumental in ensuring the success and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </body> */}
            
                {/* <div style={{ backgroundColor: 'black', marginTop: '200px', height: '800px' }}>
                    <div style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>
                        <br />
                        <h2 style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Academics</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images6} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-200px', left: '20px', right: '20px', backgroundColor: 'white', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 100px)', zIndex: '1', textAlign: 'center' }}>
                                    <h3 style={{ color: 'black', textAlign: 'center' }}>Martin</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Counselor</p>
                                    <p style={{ color: 'black', fontStyle: 'italic',  marginTop: '-15px' }}> Martin in supporting the overall management and administration of the school. His responsibilities typically encompass a range of duties.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images1} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-200px', left: '20px', right: '20px', backgroundColor: 'white', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 100px)', zIndex: '1', }}>
                                    <h3 style={{ color: 'black' }}>Reva</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Curriculum Coordinator</p>
                                    <p style={{ color: 'black', fontStyle: 'italic',  marginTop: '-15px' }}>As a Coordinator, Reva's background in organizational management can bring significant value to the educational institution.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center' }}>
                            <div style={{ position: 'relative', width: '300px', height: '400px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'visible' }}>
                                <img src={Images5} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{ position: 'absolute', bottom: '-200px', left: '20px', right: '20px', backgroundColor: 'white', padding: '30px 10px', width: 'calc(100% - 40px)', height: 'calc(100% - 100px)', zIndex: '1' }}>
                                    <h3 style={{ color: 'black' }}>Luies</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic',  marginTop: '-5px' }}>Student Dean</p>
                                    <p style={{ color: 'black', fontStyle: 'italic',  marginTop: '-15px' }}>As a Student Dean, Luies holds a vital role in the educational institution, overseeing various aspects of student affairs and support services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            


            {/* <div style={{textAlign: 'center'}}>
                        <button
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                border: 'none',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Adding a subtle box-shadow
                                marginTop: '10px',
                             
                            }}
                        >
                            Learn More
                        </button>
                    </div> */}


</div>

        </div>


    )
}

export default Mnew

