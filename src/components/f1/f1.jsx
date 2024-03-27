import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../../assests/images/navBarImages/MHS.png"
import './f1.css'

const F1 = () => {
    return (
        <div>
            <MDBFooter bgColor='rgba(0, 0, 0, 0.05)' className='text-center text-lg-start text-muted'>
                <section className='' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: '10px' }}>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 text-black'>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ margin: '25px' }} >
                                <div className="text-center">
                                    <img src={logo} alt="Company Logo" width='170px' className="mb-3" />

                                    <div className='icon'>
                                        <a href='https://facebook.com/share/bRDUkRszHg7sRRcf/?mibextid=oFDknk' className='me-4 text-reset'>

                                            <MDBIcon fab icon="facebook-square" className="text-primary" />
                                        </a>
                                        <a href='https://instagram.com/nmehs7?utm_source=qr&igsh=d2x4NXZhajQzaHFk' className='me-4 text-reset'>

                                            <MDBIcon fab icon="instagram-square" className="custom-instagram-icon" />
                                        </a>
                                        <a href='https://youtube.com/@NewMacaulayHighSchool?si=M8TEhnGL7EE6CRxk' className='me-4 text-reset'>
                                            <MDBIcon fab icon="youtube-square" className="text-danger" />
                                        </a>
                                    </div>
                                </div>
                            </MDBCol>


                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 black-text' style={{ marginTop: '25px', marginLeft: '50px' }}>
                                <h6 className='text-uppercase fw-bold mb-4 black-text'>Quick Links</h6>
                                <p>
                                    <a href='/' className='no-underline text-black'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='/about' className='no-underline text-black'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='/infrastructures' className='no-underline text-black'>
                                        Infrastructure
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{ margin: '25px' }}>
                                <h6 className='text-uppercase fw-bold mb-4'>info links</h6>
                                <p>
                                    <a href='/Academics' className='no-underline text-black'>
                                        Academics
                                    </a>
                                </p>
                                <p>
                                    <a href='/Contacts' className='no-underline text-black'>
                                        Contact
                                    </a>
                                </p>
                                <p>
                                    <a href='https://internal.newmacaulayenglishschool.com/authentication/index' className='no-underline text-black'>
                                        School IMS
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{ margin: '25px' }}>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p style={{ color: 'black' }}>
                                    <MDBIcon icon="building" className="me-3 black-icon" />
                                    Kudlu Gate, Hosapalya Main Road, Banglore- 560068                                </p>
                               
                                    {/* <p style={{ color: 'black', display: 'flex', alignItems: 'center'  }}>
    <MDBIcon icon="envelope" className="me-3 black-icon" />
    macaulayschool2010@gmail.com
</p> */}

<p className="email-text" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
    <MDBIcon icon="envelope" className="me-3 black-icon" />
    macaulayschool2010@gmail.com
</p>


                                <p style={{ color: 'black' }}>
                                    <MDBIcon icon="phone" className="me-3 black-icon" />  080-49524676
                                </p>
                                <p style={{ color: 'black' }}>
                                    <MDBIcon icon="mobile" className="me-3 black-icon" /> +91-9739156824
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBFooter>
            <div className="copyrt" >
                <p className="copyrtline">&copy; Macaulay Group of Schools | Designed & Developed by Drighna Technology pvt Ltd.</p>
            </div>
        </div>
    )
}

export default F1