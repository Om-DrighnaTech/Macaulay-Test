<nav className="demo-main-nav">
        {/* -------logo part starts here------ */}
        <div className="demo-logo">
          {/* <h2>Demo</h2> */}
          <a href="">
            <img className="demo-logo-img" src={logo} alt="" />
          </a>
        </div>

        {/* -------menu part starts here------- */}
        {/* <div className="demo-menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
            <li>
              <a href="#">Admission</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div> */}

        <div
          className={
            showMediaIcons
              ? "demo-menu-link demo-mobile-menu-link"
              : "demo-menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon className="navBarIcon" icon={faHome} />
                Home
              </NavLink>

              <div className="dropDown">
                <div className="dropDownDiv">
                <ul>
                  <li>
                    link1
                  </li>
                  <li>
                    link1
                  </li>
                  <li>
                    link1
                  </li>
                  <li>
                    link1
                  </li>
                  <li>
                    link1
                  </li>
                  <li>
                    link1
                  </li>
                </ul>
                </div>
              </div>
            </li>
            
            <li>
              <NavLink to="/about">
                <FontAwesomeIcon className="navBarIcon" icon={faPeopleGroup} />
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <FontAwesomeIcon className="navBarIcon" icon={faHome} />
                Academics
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FontAwesomeIcon className="navBarIcon" icon={faServer} />
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FontAwesomeIcon className="navBarIcon" icon={faSchool} />
                Admission
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FontAwesomeIcon className="navBarIcon" icon={faContactBook} />
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>