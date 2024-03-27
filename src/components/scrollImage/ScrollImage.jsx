import Marquee from "react-fast-marquee";

import img from "../../assests/images/gallery/learning.png"
import img1 from "../../assests/images/gallery/2.PNG"
import img2 from "../../assests/images/gallery/3_8.JPG"
import img3 from "../../assests/images/gallery/art&lab.png"
import img4 from "../../assests/images/gallery/13.PNG"
import img5 from "../../assests/images/gallery/12.PNG"
import img6 from "../../assests/images/gallery/s1.jpeg"
import img7 from "../../assests/images/gallery/s2.jpeg"
import img8 from "../../assests/images/gallery/s3.jpeg"
import img9 from "../../assests/images/gallery/s4.jpeg"
import img10 from "../../assests/images/gallery/s5.jpeg"
import img11 from "../../assests/images/gallery/s6.jpeg"

import "./scrollImage.css"

const scrollimage = [
  {
    id: '0',
    image: img,
  },
  {
    id: '1',
    image: img1,
  },
  {
    id: '2',
    image: img2,
  },
  {
    id: '3',
    image: img3,
  },
  {
    id: '4',
    image: img4,
  },
  {
    id: '5',
    image: img5,
  },
  {
    id: '6',
    image: img6,
  },
  {
    id: '7',
    image: img7,
  },
  {
    id: '8',
    image: img8,
  },
 {
    id: '9',
    image: img9,
  },
  {
    id: '10',
    image: img10,
  },
  {
    id: '11',
    image: img11,
  },

]

const ScrollImage = () => {

  return (
    <>
      <section className="scrollimgsec">
        {/* <div > */}
        <Marquee>
        {scrollimage.map(function(data) {
          return (
            <div className="scrollimgdiv">
              <img className="scrollimg" src={data.image} alt="" />
            </div>
          )
        })}
        </Marquee>
        {/* </div> */}
      </section>
    </>
  )
}

export default ScrollImage;