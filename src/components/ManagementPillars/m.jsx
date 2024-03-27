import React from 'react';
import Images2 from '../../assests/images/about/NAG00225.png';
import Images3 from '../../assests/images/about/NAG00227.JPG';
import Images5 from '../../assests/images/about/NAG00383.png';
import Images6 from '../../assests/images/gallery/14.JPG';
import Images1 from '../../assests/images/about/NAG00196.png';
import Images9 from '../../assests/images/about/NAG00228.JPG';
import './m.css'; // Import the CSS file


const M = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'black', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ color: 'white', textAlign: 'center', }}>Management Team</h2>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: 'black' }}>"Our school management team is committed to providing a nurturing environment.</span>
                <br />
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: 'black' }}>Fostering academic excellence, and empowering students to reach their full potential."</span>
                <br />
            </div>

            <div className="container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className="row">
                    <div className="col-sm col-md"> {/* Apply col-md for medium devices */}
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center', marginBottom: '290px' }}>
                            <div style={{
                                position: 'relative',
                                width: '300px',
                                height: '400px',
                                backgroundColor: '#f8f9fa',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}>
                                <img src={Images2} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-290px',
                                    left: '20px',
                                    right: '20px',
                                    backgroundColor: '#ffffff',
                                    padding: '30px 10px',
                                    width: 'calc(100% - 40px)',
                                    height: 'calc(100% - 1px)',
                                    zIndex: '1',
                                    border: '1px solid black'
                                }}>
                                    <h3 style={{ color: 'black' }}>Mr.Jayashanakr</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic', marginTop: '-5px' }}>Chairman</p>
                                    <p style={{ color: 'black', fontStyle: 'italic', marginTop: '-15px' }}>
                                        Mr. Jayashanakr is a visionary leader with a passion for academic excellence and student success. With years of experience and dedication, he ensures that our school remains at the forefront of education, & providing a best environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md"> {/* Apply col-md for medium devices */}
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center', marginBottom: '290px' }}>
                            <div style={{
                                position: 'relative',
                                width: '300px',
                                height: '400px',
                                backgroundColor: '#f8f9fa',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}>
                                <img src={Images3} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-290px',
                                    left: '20px',
                                    right: '20px',
                                    backgroundColor: '#ffffff',
                                    padding: '30px 10px',
                                    width: 'calc(100% - 40px)',
                                    height: 'calc(100% - 1px)',
                                    zIndex: '1',
                                    border: '1px solid black'
                                }}>
                                    <h3 style={{ color: 'black' }}>Mrs. Reksha</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic', marginTop: '-5px' }}>Secretary</p>
                                    <p style={{ color: 'black', fontStyle: 'italic', marginTop: '-15px' }}>
                                        Mrs. Rekha efficiently manages administrative tasks, ensuring smooth operations and communication within our school. With her organizational skills and attention to detail. she plays a vital role in coordinating  various aspects.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', textAlign: 'center', marginBottom: '290px' }}>
                            <div style={{
                                position: 'relative',
                                width: '300px',
                                height: '400px',
                                backgroundColor: '#f8f9fa',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}>
                                <img src={Images9} alt="Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-290px',
                                    left: '20px',
                                    right: '20px',
                                    backgroundColor: '#ffffff',
                                    padding: '30px 10px',
                                    width: 'calc(100% - 40px)',
                                    height: 'calc(100% - 1px)',
                                    zIndex: '1',
                                    border: '1px solid black'
                                }}>
                                    <h3 style={{ color: 'black' }}>Mrs. Dipika</h3>
                                    <p style={{ color: 'red', fontStyle: 'italic', marginTop: '-5px' }}>Principle</p>
                                    <p style={{ color: 'black', fontStyle: 'italic', marginTop: '-15px' }}>
                                        Mrs. Dipika brings valuable skills and expertise to our school as Principal. Her attention to detail, organizational abilities, and dedication to providing excellent support are instrumental in ensuring the success and growth.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default M;

