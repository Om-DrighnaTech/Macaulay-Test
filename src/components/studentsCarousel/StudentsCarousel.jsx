import Marquee from "react-fast-marquee";

import img from "../../assests/images/gallery/Bhoomika.png"
import img1 from "../../assests/images/gallery/Dhriti.png"
import img2 from "../../assests/images/gallery/Aishwarya.png"
import img3 from "../../assests/images/gallery/Saniya.png"
import img4 from "../../assests/images/gallery/Preethi.png"
// import img5 from "../../assests/images/gallery/Dhriti.png"
// import img6 from "../../assests/images/gallery/Dhriti.png"
// import img7 from "../../assests/images/gallery/Dhriti.png"
// import img8 from "../../assests/images/gallery/Dhriti.png"
// import img9 from "../../assests/images/gallery/Dhriti.png"


import "./studentsCarousel.css";


const toppers = [ {
  id: '0',
  image: img,
  name: 'Bhoomika R Pai',
  percentage: '100 %',
},
{
  id: '1',
  image: img1,
  name: 'Dhriti G Pai',
  percentage: '99 %',
},
{
  id: '2',
  image: img2,
  name: 'Aishwarya K M',
  percentage: '98 %',
},
{
  id: '3',
  image: img3,
  name: 'Saniya Yadav',
  percentage: '97 %',
},
{
  id: '4',
  image: img4,
  name: 'Preethi',
  percentage: '96 %',
},
// {
//   id: '5',
//   name: 'Keshayavini T',
//   percentage: '96 %',
// },
// {
//   id: '6',
//   name: 'Sona S M',
//   percentage: '95 %',
// },
// {
//   id: '7',
//   name: 'Nithya R',
//   percentage: '91 %',
// },
// {
//   id: '8',
//   name: 'Hrithika M',
//   percentage: '91 %',
// },
// {
//   id: '9',
//   name: 'Saba Anjum',
//   percentage: '91 %',
// },
// {
//   id: '10',
//   name: 'Jhannvi R K',
//   percentage: '89 %',
// },
// {
//   id: '11',
//   name: 'S Shivashankari',
//   percentage: '89 %',
// },
// {
//   id: '12',
//   name: 'C Abhinaya',
//   percentage: '87 %',
// },

];

const StudentsCarousel = () => {
  return (
    <>
      
        <section className="admissionMarquee topmarq">
          <h3 className="topCrslHead">Our Toppers</h3>
        <Marquee>
        {toppers.map(function(data) {
      return (
        <div className="card studentCard inlblock">
            <img className="img" src={data.image} alt="" />
            <span>{data.name}</span>
            <p className="percentage">{data.percentage}</p>
          </div>
          )
        })}
        </Marquee>
      </section>
      

      
    </>
  );
};

export default StudentsCarousel;
