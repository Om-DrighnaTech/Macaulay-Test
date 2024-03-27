import default_user from "../../assests/images/default_user.png";
import rank1 from "../../assests/images/gallery/15.JPG"

import "./toppers.css"

import Bhoomika from "../../assests/images/gallery/Bhoomika.png";
import Dhriti from "../../assests/images/gallery/Dhriti.png"
import Aishwarya from "../../assests/images/gallery/Aishwarya.png"
import Saniya from "../../assests/images/gallery/Saniya.png"
import Preethi from "../../assests/images/gallery/Preethi.png"


const ourtoppers = [ {
  id: '0',
  image: Bhoomika,
  name: 'Bhoomika R Pai',
  rank: '1st Rank',
  percentage: '100 %',
},
{
  id: '1',
  image: Dhriti,
  name: 'Dhriti G Pai',
  rank: '1st Rank',
  percentage: '99 %',
},
{
  id: '2',
  image: Aishwarya,
  name: 'Aishwarya K M',
  rank: '1st Rank',
  percentage: '98 %',
},
{
  id: '3',
  image: Saniya,
  name: 'Saniya Yadav',
  rank: '1st Rank',
  percentage: '97 %',
},
{
  id: '4',
  image: Preethi,
  name: 'Preethi',
  rank: '1st Rank',
  percentage: '96 %',
},
{
  id: '5',
  image: default_user,
  name: 'Student Name',
  rank: '1st Rank',
  percentage: '96 %',
},
]

const Toppers = () => {

  return (
    <>
      {/* <h1 className="text-center test_header">Student Testimonial</h1> */}
      <div className="testimonial-listing">
        <div className="container">
          <div className="row">
            {ourtoppers.map(function(data) {
      return (
<div className="col-lg-4 col-md-6 col-sm-6">
              {/* Testimonials Box */}
              <div className="testimonial-box">
                <div
                  className="color color-theme1"
                  style={{ color: "#3498db", backgroundColor: "#3498db" }}
                ></div>
                <figure className="image">
                  <img src={data.image} alt=""/>
                </figure>
                <h4 className="text-center">{data.name}</h4>

                <cite className="topperDetail">
                <p>
                    <h5>{data.rank}</h5>
                    {data.percentage}
                  </p>
                  <p>Class 12th <br />2022-2023 <br />Karnataka State</p>
                  
                </cite>
              </div>
            </div>  
      )})}

                     
          </div>
        </div>
      </div>
    </>
  );
};

export default Toppers;