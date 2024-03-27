import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Enquiry from '../Enquiry/Index';
import Images1 from '../../assests/images/about/NAG00196.png';
import Images2 from '../../assests/images/about/NAG00225.png';
import Images3 from '../../assests/images/about/NAG00227.JPG';
import Images4 from '../../assests/images/about/NAG00228.JPG';
import Images5 from '../../assests/images/about/NAG00383.png';
import Images6 from '../../assests/images/about/NAG00211.png';
import c3 from '../../assests/images/about/3_9.JPG';
// import styles from './management.module.css';
import styled, { keyframes, css } from 'styled-components';

// Define keyframes and styled components

const StyledDiv = styled.div`
    animation: ${({ playAnimation, isText }) => playAnimation && isText ? css`${slideAnimationLeft} 0.5s ease forwards` : css`${slideAnimationRight} 0.5s ease forwards`};
`;

const AnimatedTextContainer = styled.div`
    animation: ${({ playAnimation, isText }) => playAnimation && isText ? css`${slideAnimationLeft} 0.5s ease forwards` : css`${slideAnimationRight} 0.5s ease forwards`};
`;

const hoverAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

const AnimatedImage = styled.img`
    width: 450px;
    height: 350px;
    transition: transform 0.3s ease;

    &:hover {
        animation: ${hoverAnimation} 1s ease infinite;
    }
`;

const slideAnimationLeft = keyframes`
    0% { opacity: 0; transform: translateX(-20px); }
    100% { opacity: 1; transform: translateX(0); }
`;

const slideAnimationRight = keyframes`
    0% { opacity: 0; transform: translateX(20px); }
    100% { opacity: 1; transform: translateX(0); }
`;

const Management = () => {
    const [playAnimation, setPlayAnimation] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPlayAnimation(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);



    const crausalData = [
        { id: 1, image: Images1, heading: '"Managing Academic Excellence"', link: 'www.google.com' },
        { id: 2, image: Images6, heading: '"Leadership in Learning"', link: 'www.google.com' },
        { id: 3, image: c3, heading: '"Academic Leadership Insights"', link: 'www.google.com' },
    ];

    return (
        <>

            <div>
                {/* Carousel Section */}
                <div>
                    <Carousel>
                        {crausalData.map(item => (
                            <Carousel.Item key={item.id}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '40px', textAlign: 'center', color: '#fff', width: '400px' }}>
                                    <h2 style={{ fontSize: '24px', marginBottom: '10px', textDecoration: 'none' }}>{item.heading}</h2>
                                    {/* <a style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', color: '#fff', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', textDecoration: 'none' }} href="/ManagementsPage" rel="noopener noreferrer">KNOW MORE</a> */}
                                </div>
                                <img style={{ width: '100%', height: '700px', }} src={item.image} alt="" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="page-container">
                    {/* Management Section */}
                    <div style={{ backgroundColor: 'black', color: 'white', height: '100px', width: '100%', }}>
                        <h2 style={{ paddingTop: '23px', textAlign: 'center', textDecoration: 'none' }}>Management</h2>
                    </div>

                    <div>
                        {/* First Management Card */}
                        <div style={{ backgroundColor: 'rgb(247, 247, 247)', padding: '50px', marginTop: '0' }}>
                            <div className="page-container" style={{ margin: '0 20px' }}>
                                <div className="row" style={{ alignItems: 'center', margin: '0 -15px' }}>
                                    <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                        <div className="col-md-6" style={{ backgroundColor: '#f7f7f7', padding: '10px' }}>
                                            <AnimatedImage src={Images2} alt="Management" style={{ marginLeft: '25px', marginRight: '30px' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ paddingRight: '25px', paddingLeft: '15px' }}>
                                        <AnimatedTextContainer playAnimation={playAnimation} isImage={false}>
                                            <div className="management-details" style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '0px' }}>
                                                <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Chairperson</h2>
                                                <p style={{ marginRight: '25px' }}>John, our esteemed chairperson, brings a wealth of experience and leadership to our organization. With a keen eye for strategic direction and a commitment to excellence, John guides our board with integrity and vision. His dedication to transparency and collaboration fosters a culture of trust and innovation within our company. Under John's stewardship, we continue to navigate challenges and seize opportunities, ensuring sustainable growth and success for our organization and stakeholders.</p>
                                            </div>
                                        </AnimatedTextContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Management Card */}
                        <div style={{ padding: '50px', marginBottom: '20px' }}>
                            <div className="row" style={{ alignItems: 'center', margin: '0 -15px' }}>
                                <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                    <AnimatedTextContainer playAnimation={playAnimation} isText={true}>
                                        <div className="management-details" style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                                            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Secretary</h2>
                                            <p style={{ marginLeft: '25px' }}>
                                                Bella brings a wealth of expertise and passion to their role as our secretary. With [X] years of experience in administrative positions, they possess a deep understanding of the intricacies of educational administration. Their commitment to excellence and attention to detail ensure that administrative processes run seamlessly, allowing our academic staff to focus on providing the highest quality education to our students.
                                            </p>
                                        </div>
                                    </AnimatedTextContainer>
                                </div>
                                <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                    <StyledDiv playAnimation={playAnimation} isText={false}>
                                        <AnimatedImage src={Images3} alt="Management" style={{ marginLeft: '50px', marginRight: '0px' }} />
                                    </StyledDiv>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Academics Section */}
                    <div style={{ backgroundColor: 'black', color: 'white', height: '100px', width: '100%' }}>
                        <h2 style={{ paddingTop: '23px', textAlign: 'center', textDecoration: 'none' }}>Academics</h2>
                    </div>

                    {/* Third Management Card */}
                    <div style={{ backgroundColor: 'rgb(247, 247, 247)', padding: '50px', marginTop: '0' }}>
                        <div className="page-container" style={{ margin: '0 20px' }}>
                            <div className="row" style={{ alignItems: 'center', margin: '0 -15px' }}>
                                <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                    <div className="col-md-6" style={{ backgroundColor: '#f7f7f7', padding: '10px' }}>
                                        <AnimatedImage src={Images4} alt="Management" style={{ marginLeft: '25px', marginRight: '30px' }} />
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ paddingRight: '25px', paddingLeft: '15px' }}>
                                    <AnimatedTextContainer playAnimation={playAnimation} isImage={false}>
                                        <div className="management-details" style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '0px' }}>
                                            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Principle</h2>
                                            <p style={{ marginRight: '25px' }}>Reven, our esteemed faculty member, brings a wealth of expertise and passion to our academic community. With a deep understanding of their field and a commitment to student success, Reven enriches our educational environment with innovative teaching methods and valuable insights. Their dedication to fostering intellectual curiosity and critical thinking inspires our students to excel and pursue excellence in their studies. Reven's presence enhances our institution's reputation for academic excellence and contributes to the holistic development of our students. We are privileged to have Reven as a valued member of our faculty team.</p>
                                        </div>
                                    </AnimatedTextContainer>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Fourth Management Card */}
                    <div style={{ padding: '50px', marginBottom: '20px' }}>
                        <div className="row" style={{ alignItems: 'center', margin: '0 -15px' }}>
                            <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                <AnimatedTextContainer playAnimation={playAnimation} isText={true}>
                                    <div className="management-details" style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px' }}>
                                        <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Facaulty Member</h2>
                                        <p style={{ marginLeft: '25px' }}>
                                            Mortin, our esteemed chairman, embodies a rare combination of vision, dedication, and integrity. With her innovative leadership style and deep industry knowledge, Bella guides our board with grace and determination. Her commitment to fostering a culture of inclusivity and collaboration empowers our team to thrive and innovate. Under Bella's guidance, we are poised to tackle challenges head-on and seize opportunities for growth and advancement. Her passion for excellence inspires us all to reach new heights and make a meaningful impact in our industry and beyond.                                            </p>
                                    </div>
                                </AnimatedTextContainer>
                            </div>
                            <div className="col-md-6" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                                <StyledDiv playAnimation={playAnimation} isText={false}>
                                    <AnimatedImage src={Images5} alt="Management" style={{ marginLeft: '50px', marginRight: '0px' }} />
                                </StyledDiv>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Enquiry />

        </>
    );
};

export default Management;
