import React, { useState } from "react";
// import React{useState} from "react";
import "../App.css";
// import {useHistory, Link} from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);


  const navigate = useNavigate();
  const [dropdownClass, setDropdownClass] = useState('');

  const handleToggle = () => {
    setDropdownClass(dropdownClass === 'show' ? '' : 'show');
    setTimeout(() => {
      navigate('/Logic');
    }, 500);
  };




  const [industryDropdownClass, setIndustryDropdownClass] = useState('');
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-32.png"
              width={"35%"}
              id="pole"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <button
                  className="navbar-toggle"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {showNavbar ? (
                    <i class="fa-solid fa-xmark"></i>
                  ) : (
                    <i class="fa-solid fa-bars"></i>
                  )}
                </button>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div
                    className={`navbar-collapse ${showNavbar ? "show" : ""}`}
                  >
                    <div class="dropdown" id="mob">
                      <div className="know">
                        {" "}
                        <Link to="./Logic" style={{ textDecoration: "none" }}>
                          <button
                            className="  nav-link btn btn- dropdown-toggle"
                            type="button"
                            id="stay"
                            aria-expanded="false"
                            onClick={handleToggle}
                          >
                            Solutions
                          </button>
                        </Link>
                      </div>

                      <ul
                        class={`dropdown-menu ${dropdownClass}`} 
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Workforce Augmentation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            IT Services
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Enterprise Solutions{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            AI Augmentation
                          </a>
                        </li>
                      </ul>
                    </div>





                    <div class="dropdown">
                      {" "}
                      <Link to="./Industry" style={{ textDecoration: "none" }}>
                        <button
                          className="nav-link   btn btn- dropdown-toggle"
                          type="button"
                          id="stay"
                          aria-expanded="false"


                          onClick={() => setIndustryDropdownClass(industryDropdownClass === 'show' ? '' : 'show')}
                        >
                          Industries
                        </button>
                      </Link>
                      <ul
                        class={`dropdown-menu ${industryDropdownClass}`}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Information Technology
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Telecommunication
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Automotive{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Oil & Energy
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Pharmaceuticals
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Banking & Finance
                          </a>
                        </li>
                      </ul>
                    </div>




                    

                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Staffing
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Candidates
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className="lol">
                      <li class="nav-item ">
                        <Link to="./Location" class="nav-link" id="stay">
                          Locations
                        </Link>
                      </li>
                    </ul>

                    <button className="btn btn" id="but">
                      Get&nbsp;In&nbsp;Touch
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
