// import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faContactBook,
  faSchool,
  faServer,
  faPeopleGroup,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assests/images/navBarImages/MHS.png";

import "./demoNavBar.css";

const DemoNavBar = () => {
  const [showToggleIcons, setShowToggleIcons] = useState(false);

  const handleClick = () => {
    console.log("We r working on It");
    setShowToggleIcons(!showToggleIcons);
  };
  
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img className="navbar-logo-logo" src={logo} alt="" />
        </a>
        <ul className={showToggleIcons ? "navbar-links mobile-menu-link" : "navbar-links"}>
          <li className="navbar-dropdown">
            <a href="/">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faHome} />
              Home</a>
          </li>
          <li className="navbar-dropdown">
            <a href="/About">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faPeopleGroup} />
              About</a>
            <div className="dropdown">
              <a href="/Foundations">Foundational Pillars</a>
              <a href="/ManagementsPage">Management</a>
            </div>
          </li>
          <li className="navbar-dropdown">
            <a href="/Academics">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faGraduationCap} />
              Academics</a>
            <div className="dropdown">
              <a href="/CurriculumModels">Curriculum Model</a>
              <a href="/ACurriculum">Areas of Curriculum</a>
            </div>
          </li>
          <li className="navbar-dropdown">
            <a href="/Facilities">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faServer} />
              Facilities</a>
            <div className="dropdown">
              <a href="./infrastructures">Infrastructure</a>
              <a href="#">Gallery</a>
            </div>
          </li>
          <li className="navbar-dropdown">
            <a href="/Admission">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faSchool} />
              Admission</a>
          </li>
          <li>
            <a href="/Achievers">
            <FontAwesomeIcon className="navbarMenuIcon" icon={faContactBook} />
              Achievers</a>            
          </li>
        </ul>

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
            {/* <button onClick={() => setShowToggleIcons(!showToggleIcons)}><GiHamburgerMenu /></button>             */}
            <GiHamburgerMenu className="giHamburgerMenu" onClick={handleClick}/>
          </div>
      </nav>
    </>
  );
};

export default DemoNavBar;
