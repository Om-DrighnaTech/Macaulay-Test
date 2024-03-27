import React from 'react';
import './Grid.css';
import academicFacilitiesImage from '../../assests/AboutGrid/g1.gif';
import g2 from '../../assests/AboutGrid/g2.gif';
import g3 from '../../assests/AboutGrid/g3.gif';


class Grid extends React.Component {
  render() {
    return (
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={academicFacilitiesImage} alt="Academic Facilities" />
            </figure>
            <div className="article-body">
            <h2>Diverse Curriculum</h2>
              <p>
              Discover our comprehensive curriculum tailored to foster intellectual curiosity, critical thinking, creativity, and character development, preparing students for success in a dynamic world.
              </p>
              <a href="/ACurriculum" className="read-more" target='blank'>
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>



        <article>
          <div className="article-wrapper">
            <figure>
               <img src={g2} alt="Academic Facilities" />
            </figure>
            <div className="article-body">
              <h2>Co-curriculars</h2>
              <p>
              Engage in a wide range of extracurricular activities including clubs, sports teams, arts programs, and community service initiatives, encouraging holistic development and well-rounded individuals.
              </p>
              <a href="/Facilities" className="read-more" target='blank'>
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>


        <article>
          <div className="article-wrapper">
            <figure>
               <img src={g3} alt="Academic Facilities"  /> 
            </figure>
            <div className="article-body">
              <h2>Dedicated Faculty</h2>
              <p>
              Meet our team of experienced educators who are committed to nurturing each student's potential, providing personalized attention, mentorship, and support both inside and outside the classroom.
              </p>
              <a href="/Infrastructures" className="read-more" target='blank'>
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Grid;


