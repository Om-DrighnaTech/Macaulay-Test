import React from "react";
import styles from "./foundation.module.css"; // Import CSS module styles
import CalculateIcon from "@mui/icons-material/Calculate";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import ScienceIcon from "@mui/icons-material/Science";

// import Carousel from "react-bootstrap/Carousel";
import "@fortawesome/fontawesome-free/css/all.css";
import Enquiry from "../Enquiry/Index";
// import f1 from '../../assests/images/about/NAG00015.png'
// import f2 from '../../assests/images/about/1.PNG'
// import f3 from '../../assests/images/about/NAG00119.png'
import math from '../../assests/images/about/mathschool.jpeg'
import sports from '../../assests/images/about/sport1.jpeg'
import skills from '../../assests/images/about/rank.jpeg'
import science1 from '../../assests/images/about/science1.jpeg'
import tech from '../../assests/images/about/comp1.jpeg'
import social from '../../assests/images/about/social1.jpeg'
import arts from '../../assests/images/about/art1.jpeg'
import F1 from '../f1/f1'

const Foundations = () => {


    // const handleVerticalClick = () => {
    //     console.log("Vertical click handled");
    // };


    // const crausalData = [
    //     { id: 1, image: f1, heading: '"Knowledge: Our Supreme"', link: 'www.google.com' },
    //     { id: 2, image: f2, heading: '"Shaping Bright Minds"', link: 'www.google.com' },
    //     { id: 3, image: f3, heading: '"Discover at Macaulay"', link: 'www.google.com' },
    // ];

    return (
        <>
        <div>
            {/* <div>
                <Carousel>
                    {crausalData.map(item => (
                        <Carousel.Item key={item.id}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    padding: '50px',
                                    textAlign: 'center',
                                    color: '#fff',
                                    width: '400px'
                                }}
                            >
                                <h2 style={{ fontSize: '24px', marginBottom: '10px', textDecoration: 'none' }}>{item.heading}</h2>
                              
                            </div>
                            <img
                                style={{ width: '100%', height: '700px', }}
                                src={item.image}
                                alt=""
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div> */}
            <div style={{ backgroundColor: 'black', color: 'white', height: '100px' }}>
                <h2 style={{ paddingTop: '23px', textAlign: 'center' }}>Foundation Pillars</h2>
            </div>
            <div>
                <div
                    style={{ marginTop: "50px", marginLeft: "40px", marginRight: "40px" }}
                >
                    <div className={styles["card-container"]}>

                        <div
                            className={`${styles.card} ${styles["transparent-card"]} ${styles["text-justify"]}`}
                            style={{
                                backgroundImage:
                                    'url("https://static.vecteezy.com/system/resources/previews/005/964/667/original/welcome-back-to-school-background-template-school-supplies-on-white-background-vector.jpg")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                padding: "20px",

                            }}
                        >
                            <p3 style={{ color: "black" }}>
                                The ideation of a futuristic educational institute took a
                                contribution from the best minds to intricately design this
                                dream project. Our focus on all-inclusive child development
                                leads to 7 stars in our logo which represent:
                            </p3>
                        </div>

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://st5.depositphotos.com/42822882/67533/i/450/depositphotos_675331614-stock-photo-happy-indian-school-girl-child.jpg')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${math})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        <CalculateIcon
                                            fontSize="large"
                                            width="40px"
                                            height="40px"
                                        />
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Mathemathics</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            An intellectual and systematic regime of knowledge
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://www.freedom-international.in//uploads/media-upload/2020-11/sports.JPG')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${sports})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        <SportsKabaddiIcon
                                            fontSize="large"
                                            width="40px"
                                            height="40px"
                                        />
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Sports</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            An intellectual and systematic regime of knowledge
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://rubypark.com/wp-content/uploads/2021/02/second-language-debate-competition-4.jpg')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${skills})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        {/* <img src="https://static.vecteezy.com/system/resources/previews/028/711/712/original/interpersonal-relationship-icon-acquaitance-skill-close-care-conversation-two-people-interacting-and-associating-each-other-editable-stroke-illustration-design-on-white-background-eps-10-vector.jpg" alt="Logo" width="40px" /> */}
                                        <i
                                            className="fas fa-user-friends"
                                            style={{ fontSize: "20px", color: "white" }}
                                        ></i>
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Skills</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            Learning turned inwards leading to self-awareness
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div
                    style={{ marginTop: "50px", marginLeft: "40px", marginRight: "40px" }}
                > */}
                    <div className={styles["card-container"]}>
                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://st2.depositphotos.com/34818944/47824/i/450/depositphotos_478241874-stock-photo-nagpur-maharashtra-india-april-2016.jpg')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${science1})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        <ScienceIcon fontSize="large" width="40px" height="40px" />
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Science</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            Learning turned inwards fundamental to scientific
                                            research.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://mountmarypublicschool.com/wp-content/uploads/2014/10/IMG_0089.jpg')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${tech})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        {/* <img src="https://as2.ftcdn.net/v2/jpg/02/38/46/33/1000_F_238463368_XfBAcmXMIy4RDKldWaL7nTeqZXNPzzyN.jpg" alt="Logo" width="40px" /> */}
                                        <i
                                            className="fas fa-cogs"
                                            style={{ fontSize: "30px", color: "white" }}
                                        ></i>
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Technology</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            Practical application for complex problem solving
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://www.empoweringvision.org/wp-content/uploads/2019/08/website-slider.jpg')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${social})`, // Use imageUrl variable in backgroundImage

                            }}
                        >

                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJKEbeQywnYPVPF6e-2RjkS5LIuiAxWg18_yPyBcsgvG_rMtjmQyZLLhO7HALapcU-JI&usqp=CAU" alt="Logo" width="40px" /> */}
                                        <i
                                            className="fas fa-book"
                                            style={{ fontSize: "25px", color: "white" }}
                                        ></i>
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Social Pedagogy</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            Modelling behaviour based on environmental influences
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}

                        <div
                            className={styles.card}
                            style={{
                                // backgroundImage: `url('https://i0.wp.com/india-art.blog/wp-content/uploads/2019/12/Children-paint-at-art-competition-for-children-by-Khula-Aasmaan-IISER-Pune.jpg?fit=816%2C667&ssl=1')`,
                                backgroundSize: "cover", // Ensures the image covers the entire background
                                backgroundPosition: "center", // Centers the background image
                                backgroundRepeat: "no-repeat", // Prevents the background image from repeating
                                backgroundImage: `url(${arts})`, // Use imageUrl variable in backgroundImage

                            }}
                        >
                            <div className={styles.cardOverlay}>
                                <div>
                                    <div className={styles.icon}>
                                        <i
                                            className="fas fa-paint-brush"
                                            style={{ fontSize: "20px", color: "white" }}
                                        ></i>
                                    </div>
                                    <div className={styles.text}>
                                        <h2 style={{ textDecoration: 'none' }}>Arts</h2>
                                        <p className={styles["hidden-paragraph"]}>
                                            Exploring creative, imaginative & performing art forms
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <div style={{ marginTop: '50px' }}>
                <Enquiry />
            </div>
        </div>
        
           
        </>
    );
};

export default Foundations;
