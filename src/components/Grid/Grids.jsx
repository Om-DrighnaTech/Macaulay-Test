import React from 'react';
import './Grid.css';
import academicFacilitiesImage from '../../assests/images/g1.gif';
import g2 from '../../assests/images/g2.gif';
import g3 from '../../assests/images/g3.gif';


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
              <h2 style={{fontFamily:'"Poppins", sans-serif;'}}>State-of-Art Labs</h2>
              <p>
              Includes outdoor fields, indoor courts, and a swimming pool for various sports activities.
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



        <article>
          <div className="article-wrapper">
            <figure>
               <img src={g2} alt="Academic Facilities" />
            </figure>
            <div className="article-body">
              <h2>Sports Complex</h2>
              <p>
              A vast collection of books, quiet study rooms, and collaborative spaces for research and study.
              </p>
              <a href="/Galleries" className="read-more" target='blank'>
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
              <h2>Library & Study Areas</h2>
              <p>
              Equipped with cutting-edge technology for hands-on experimentation and research.
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
        {/* Repeat the above structure for additional articles */}
      </section>
    );
  }
}

export default Grid;
