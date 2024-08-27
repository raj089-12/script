import React from "react";
import "../App.css";
import { Divider } from "@react-md/divider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h4 className="ant mt-3">
              orange
              <span className="sun">mantra</span>
            </h4>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg navbar-light ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  id="dog"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                      id="stay"
                    >
                      SuccessStories
                    </a>

                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Technology
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Emerging Technologies (AI, ML, IOT)
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Web Application Development Framework
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Mobile Application Development{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Content Management System
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Headless Development{" "}
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
                        Services
                      </button>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                        id="stay"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            eCommerce{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Prototyping &amp; UI/UX
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Enterprise Digital Transformation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Product Engineering
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            IoT&nbsp;
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Mobile Apps&nbsp;
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            DevOps Engineering&nbsp;
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Automation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Custom Framework
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Testing &amp; QA
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Emerging Tech&nbsp;
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
                        Industries
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Automotive
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Real Estate
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Manufacturing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Manufacturing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            BFSI
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Energy & Mining
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Food & Beverages
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Healthcare
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Media & Entertainment
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Retail{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Technology
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Transportation
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
                        Solution
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            eCommerce Solutions
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Product Engineering
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Cloud & DevOps
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Prototyping, POC & Wireframing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Process Transformation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Mobile Apps
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Testing & QA{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Product Design{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            AI, Deep Tech
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            IOT Smart Solutions
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Web & CMS
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Dashboard Development{" "}
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
                        Hire Developers
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Backend
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Frontend
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Mobile
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            QA
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            JS
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Web
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            eCommerce
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Enterprise
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            CMS
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            OPS
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
                        Company
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            About us
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Clients
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Global Clients{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Testimonials{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            White Label Partnership
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Engagement{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Insights
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Awards &amp; Media
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            CSR
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Job Openings
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Careers
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
                        Portfolio
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Ecommerce
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Mobile apps
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Digital Transformation{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Smart Applications
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            AI Solutions
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Social Communities
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            UX/UI Portfolio
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            International Portfolio
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Web Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <button className="btn btn-" id="play">
                        ContactUs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="cake">
        <div className="row">
          <div class="col-sm-12 col-lg-7 col-md-7 mt-4">
            <h1 className="text-center ink">
              Scale Your Business With ReactJS Development Company
            </h1>
            <h6 className="text-center">
              We are creating dynamic user interfaces for web and mobile
              application
            </h6>
            <h6 className="text-center  ">with ReactJS</h6>

            <span id="either" className="for ">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsbannericon1.svg" />
              Expert ReactJS Developers
            </span>
            <br />
            <span id="either" className="for   mt-3">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsbannericon2.svg" />
              Tailored Solutions for Your Needs
            </span>
            <br />
            <span id="either" className="for mt-3">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsbannericon3.svg" />
              Seamless Integration
            </span>
            <span id="either" className="cutting ">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsbannericon4.svg" />
              Cutting and Technology
            </span>
            <br />
            <span id="either" className="for  good">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsbannericon5.svg" />
              Dedicated Support
            </span>

            <div className="text-center mt-5" id="load">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/09/award1.png"
                className="me-2"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/09/award2.png"
                className="me-2"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/09/award3.png"
                className="me-2"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/09/award4.png"
                className="me-2"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/09/award5.png"
                className="me-2"
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 " id="label">
            <h2 className="mt-5 pt-5">Contact Us</h2>
            <form action="#" onsubmit="return validation()">
              <div class="form-group">
                <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                  <label for="user" class="font-weight-bold"></label>
                  <input
                    type="text"
                    name="full"
                    class="form-control"
                    placeholder="Full Name*"
                    id="user"
                    autocomplete="off"
                  />
                  <span
                    id="fullname"
                    class="text-danger font-weight-bold"
                  ></span>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                <div class="form-group">
                  <input
                    type="text"
                    name="pass"
                    class="form-control"
                    id="pass"
                    placeholder="Business Email Address*"
                    autocomplete="off"
                  />
                  <span id="password" class="text-danger font-weight-bold">
                    {" "}
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                <div class="form-group">
                  <input
                    type="text"
                    name="phoneno"
                    class="form-control"
                    id="phoneno"
                    placeholder="Phone Number*"
                    autocomplete="off"
                  />
                  <span id="phoneno" class="text-danger font-weight-bold">
                    {" "}
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                <div class="form-group">
                  <input
                    type="text"
                    name="mobile"
                    class="form-control"
                    id="mobileNumber"
                    placeholder="Organization/Institution*"
                    autocomplete="off"
                  />
                  <span id="mobileno" class="text-danger font-weight-bold">
                    {" "}
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                <div class="form-group">
                  <textarea
                    type="text"
                    name="Message"
                    class="form-control"
                    id="message"
                    placeholder="message*"
                    rows="2"
                    autoComplete="off"
                  ></textarea>
                </div>{" "}
              </div>

              <button className="btn btn-" id="rap">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container pop">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>
              Creating Dynamic User Interfaces For Web And Mobile Applications
              With ReactJS
            </h2>
            <p>
              React JS is an open source JavaScript framework acclaimed for
              being high-performance, robust, and scalable. It is capable of
              rendering interactive UI designs for both, web and mobile
              applications. Since this framework offers the feature of component
              reusability, it makes development faster, simpler, and more
              scalable. Moreover, the virtual DOM implementation makes it an
              ideal choice for creating a variety of complex and
              performance-intensive applications. At OrangeMantra, we extend
              expert ReactJS development services to tailor advanced websites
              and mobile apps with exceptional UIs. Our team has seasoned
              ReactJS developers with the capability to leverage the outstanding
              features of this framework for creating rich, resilient, and
              powerful solutions that match the requirements of the clients.{" "}
            </p>
          </div>
          <div className="col-5 col-md-6 col-xl-3">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/experience.png"
              width="20%"
              id="kite"
            />
            <h4 className="yum">500+</h4>
            <p className="cam">Projects Delivered</p>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/stat-3.png"
              width="20%"
              id="kite"
            />
            <h4 className="yum">10+</h4>
            <p className="cam">Countries Served</p>
          </div>
          <div className="col-5 col-md-6 col-xl-3">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/Top-Brands.png"
              width="20%"
              id="kite"
            />
            <h4 className="yum">15+</h4>
            <p className="cam">Awards Won</p>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/Happy-client.png"
              width="20%"
              id="kite"
            />
            <h4 className="yum">1000+</h4>
            <p className="cam">Happy Clients</p>
          </div>
        </div>
      </div>

      <h2 className="text-center owl mt-5">Some of Our Clients</h2>
      <div id="trap">
        <div className="container pop" id="">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/rpa-image/panasonic.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/skf.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/relaxo.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/pvr.png" />
            </div>
          </div>
        </div>
        <div className="container rat">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/11/HERO-cslogo.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/rpa-image/IKEA.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/and.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/decathlon.png" />
            </div>
          </div>
        </div>
        <div className="container rat">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/rpa-image/eicher.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/01/aulerth-logopng.png" />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2023/12/dsgroup-newlogo.png"
                height={"70px"}
              />
            </div>
            <div className="col-5 col-md-6 col-xl-3" id="you">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/rpa-image/haldiram.png"
                height={"70px"}
              />
            </div>
          </div>
        </div>

        <div className="container pop">
          <div className="row">
            <div className="col-md-7">
              <h2 class="headfont">Your Premier ReactJS Development Company</h2>
              <p class="sec-p">
                We OrangeMantra, are a leading ReactJS development company
                dedicated to delivering high-quality, scalable, and innovative
                solutions to drive your business growth. As a trusted React
                development company, we specialize in creating dynamic and
                interactive web and mobile applications using the latest ReactJS
                development services and technologies. Our team comprises
                experienced and skilled React developers who have a deep
                understanding of ReactJS and its ecosystem. We leverage our
                expertise to craft tailored solutions that meet your specific
                business requirements.
              </p>
              <p class="sec-p">
                By partnering with OrangeMantra, you can harness the power of
                ReactJS to transform your digital presence and drive overall
                growth. Our ReactJS web development company focuses on creating
                user-friendly, scalable, and high-performance applications that
                engage your audience and drive conversions.
              </p>
            </div>
            <div className="col-sm-12 col-md-5">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjskeymain.webp"
                className="mt-5"
                width="95%"
              />
            </div>
          </div>
        </div>

        <h1 className="text-center owl mt-5">Our Services</h1>
        <p className="text-center">We Extend Of ReactJS Development Services</p>
        <div className="container">
          <div className="row" id="tan">
            <div className="col-md-3  lamp">
              <div id="cub">
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon1.svg"
                  id="pipe"
                />
              </div>
              <h4>ReactJS Product Development</h4>
              <p>
                Building result-driven custom ReactJS products to match the
                unique requirements of the clients{" "}
              </p>
            </div>
            <div className="col-md-3  lamp" id="kit">
              <div id="cub">
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon2.svg"
                  id="pipe"
                />
              </div>
              <h4>Interactive UI Development with ReactJS</h4>
              <p>
                Leveraging the power of ReactJS Library to build impressive user
                interfaces for your business applications{" "}
              </p>
            </div>
            <div className="col-md-3 kit lamp" id="kit">
              <div id="cub">
                {" "}
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon3.svg"
                  id="pipe"
                />
              </div>
              <h4>ReactJS Application Design and Development</h4>
              <p>
                Designing and developing outstanding web applications with the
                powerful ReactJS framework
              </p>
            </div>
          </div>
        </div>
        <div className="container book">
          <div className="row" id="tan">
            <div className="col-md-3  lamp" id="kit">
              <div id="cub">
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon4.svg"
                  id="pipe"
                />
              </div>
              <h4>React Native Mobile Application Development</h4>
              <p>
                Creating feature-rich and business-oriented mobile applications
                with React Native framework
              </p>
            </div>

            <div className="col-md-3  lamp" id="kit">
              <div id="cub">
                {" "}
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon5.svg"
                  id="pipe"
                />
              </div>
              <h4>ReactJS Plugin Development</h4>
              <p>
                Bringing additional features for the web applications with
                custom ReactJS plugin development{" "}
              </p>
            </div>

            <div className="col-md-3  lamp" id="kit">
              <div id="cub">
                {" "}
                <img
                  src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjsserviceicon6.svg"
                  id="pipe"
                />
              </div>
              <h4>ReactJS Integration</h4>
              <p>
                Providing expert assistance for integration of the existing
                applications and systems with ReactJS{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="fill">
        <h3 class=" text-center owl ">
          Orange Mantra3’s Development Success using React.js
        </h3>
        <p class="text-center">
          React.js's adaptability and our experience have constantly resulted in
          solutions that not only meet but also beyond our customer's
          expectations, propelling digital success across a range of industries.
        </p>
        <div className="container-fluid gun" id="cap">
          <div className="row">
            <div className="col-md-6">
              <h3 className="well" id="hen">
                Transforming User Interfaces for a Major International eCommerce
                Company Using React Js Development Services{" "}
              </h3>
              <p className="">
                To maintain an advantage in the cutthroat digital market, a
                major international eCommerce behemoth tried to improve its user
                interfaces. The user experience was improved by the visually
                attractive and highly engaging interfaces created by
                OrangeMantra's React.js expertise. We can see a notable increase
                in conversion rates, decreased bounce rates, and improved user
                engagement—all of which help to cement our client's leadership
                position in the sector.
              </p>
              <button class="btn btn-" id="play">
                View Case Study
              </button>
            </div>
            <div className="col-md-6 " id="most">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjscasestudy1.webp"
                className="rat"
                width={"100%"}
              />
            </div>
            <div className="col-md-6">
              <h3 className="well" id="hen">
                Scaling React.js-Based Financial Management in Fintech With
                OrangeMantra React Js Development
              </h3>
              <p>
                A scalable and effective solution for financial management apps
                was required by a fintech business. Orangemantra's React.js
                development services were essential in building a stable and
                expandable finance administration system. React.js was used to
                provide an easy-to-use and responsive user interface, enabling
                the fintech organization to efficiently handle financial
                transactions and expand their business.
              </p>
              <button class="btn btn-" id="play">
                View Case Study
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjscasestudy3.webp"
                className="rat"
                width={"100%"}
              />
            </div>
            <div className="col-md-6">
              <h3 className="well" id="hen">
                Improving EdTech Learning Experiences Using OrangeMantra React
                Js Interface Management System
              </h3>
              <p>
                An EdTech startup wanted to completely transform the way that
                students learned online everywhere.
              </p>
              <p>
                OrangeMantra created an engaging and user-friendly e-learning
                platform by using React.js. Interactive tests, real-time
                collaboration, and the delivery of interesting material were
                made possible by the dynamic and responsive interfaces. The end
                product was an EdTech solution that not only fulfilled but also
                beyond instructor's and student's expectations.
              </p>
              <button class="btn btn-" id="play">
                View Case Study
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjscasestudy3.webp"
                className="rat"
                width={"100%"}
              />
            </div>
            <div className="col-md-6">
              <h3 className="well" id="hen">
                Using OrangeMantra React.js Development Services to Simplify
                Healthcare Management System
              </h3>
              <p>
                To enhance productivity and user experience, a healthcare
                management system required a contemporary and effective user
                interface. The UI of the healthcare management system was
                completely revamped by Orangemantra's React.js development
                services. The medical staff provided favorable feedback,
                shortened procedures, and increased patient care efficiency as a
                consequence of the user-friendly design and easy navigation,
                which improved the experience for healthcare professionals.
              </p>
              <button class="btn btn-" id="play">
                View Case Study
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjscasestudy4.webp"
                className="rat"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center owl pop">
        Streamlined Integrations for Enhanced Functionality
      </h2>
      <div className="container">
        <p class=" text-center mb-3">
          Seamlessly integrate third-party APIs, payment options, social media
          platforms, analytics tools, content management systems, and cloud
          services to develop the functionality and overall performance of your
          ReactJS apps.
        </p>
        <div className="row">
          <div className="col-sm-3 text-center pen " id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon1.svg"
              id="zip"
            />
            <h3>Third-Party APIs Integration</h3>
            <p>
              Easily integrate third-party APIs to enhance the functionality of
              your ReactJS applications and deliver additional features to your
              users.
            </p>
          </div>
          <div className="col-md-3 text-center pen" id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon2.svg"
              id="zip"
            />
            <h3>Payment Gateway Integration</h3>
            <p>
              Add safe and secure payment gateways to deliver smooth and secure
              online transactions for your ReactJS web development projects.
              This will deliver a seamless user experience.
            </p>
          </div>
          <div className="col-md-3 text-center pen" id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon3.svg"
              id="zip"
            />
            <h3>Social Media Integration</h3>
            <p>
              Add social media platforms to enhance the users to share the
              content, log in, or get in touch with your React applications. By
              utilizing using the social media accounts, this enhances the
              overall user engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="container nine">
        <div className="row">
          <div className="col-md-3 text-center pen" id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon4.svg"
              id="zip"
            />
            <h3>Analytics Integration</h3>
            <p>
              Add analytics tools to oversee user behavior, go through the
              performance metrics. And collect valuable insights for enhancing
              your ReactJS web development projects.
            </p>
          </div>
          <div className="col-md-3 text-center pen" id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon5.svg"
              id="zip"
            />
            <h3>CMS Integration</h3>
            <p>
              Add a CMS platform to oversee and update content seamlessly on
              your ReactJS applications, making sure of the flexibility and
              scalability.
            </p>
          </div>
          <div className="col-md-3 text-center pen" id="app">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/02/reactjstechicon6.svg"
              id="zip"
            />
            <h3>Cloud Services Integration</h3>
            <p>
              Add cloud services such as AWS, Google Cloud, or Azure for ductile
              infrastructure, storage, and provide solutions for your ReactJS
              development projects.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container pop">
        <h3 className="text-center owl">Technology Stack</h3>
        <p className="text-center">
          We implement the most advanced level of tools to enhance the overall
          flow
        </p>
        <div className="row" id="mode">
          <div className="col-md-6 col-lg-3 hat" id="app">
            <h4 className="sap">Languages</h4>

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/go.png"
              width={"10%"}
            />
            <span>JavaScript</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/swift.png"
              width={"10%"}
            />
            <span>JXL(JavaScript xml)</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/python.png"
              width={"10%"}
            />
            <span>HTML 5</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/java.png"
              width={"10%"}
            />
            <span>CSS3</span>
          </div>

          <div className="col-md-6 col-lg-3 hat" id="app">
            <h4 className="sap">Tools</h4>

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/testng.jpg"
              width={"10%"}
            />
            <span>Babel</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/selenium.png"
              width={"10%"}
            />
            <span>Webpack</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/loadrunner.png"
              width={"10%"}
            />
            <span>ESLint</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/gatling.png"
              width={"10%"}
            />
            <span>Git</span>
          </div>
          <div className="col-md-6 col-lg-3 hat" id="app">
            <h4 className="sap ">Frameworks</h4>

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/testng.jpg"
              width={"10%"}
            />
            <span>ReactJS</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/junit.png"
              width={"10%"}
            />
            <span>Redux</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/karate.png"
              width={"10%"}
            />
            <span>Next.js</span>

            <Divider />

            <img
              src="https://www.orangemantra.com/wp-content/uploads/tech-stack/rspec.png"
              width={"10%"}
            />
            <span>React Native</span>
          </div>
        </div>
      </div>

      <div className="container pop">
        <h3 class="text-center mb-3 owl">
          How ReactJS Elevates Business Productivity
        </h3>
        <div className="row">
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon1.svg" />
            <h4>Efficient Development Process</h4>
            <p>
              With ReactJS, our React development company enhances the
              development process. This allows for quick iteration and
              deployment of React applications, eventually boosting
              productivity.
            </p>
          </div>
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon2.svg" />
            <h4>Reusable Components</h4>
            <p>
              Utilize reusable components in ReactJS development services
              provided by our ReactJS development company in India. Making sure
              to deliver ensures consistency and accelerates development,
              leading to enhanced productivity.
            </p>
          </div>
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon3.svg" />
            <h4>Virtual DOM</h4>
            <p>
              React's virtual DOM effectively enhances only the needed
              components. This minimizes unnecessary re-renders and optimizes
              performance. This altogether enhances the overall productivity in
              React app development.
            </p>
          </div>
        </div>
      </div>
      <div className="container nine">
        <div className="row">
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon4.svg" />
            <h4>Declarative Syntax</h4>
            <p>
              Reacts declarative syntax clarifies code readability and
              maintenance, enabling our ReactJS web development company to
              deliver projects faster and with fewer errors, increasing
              productivity.
            </p>
          </div>
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon5.svg" />
            <h4>Cross-Platform Compatibility</h4>
            <p>
              Utilizing React Native for React Native development enhances the
              ReactJS development company to craft cross-platform mobile apps
              with a single codebase. That saves time and increases
              productivity.
            </p>
          </div>
          <div className="col-md-3 eat" id="made">
            <img src="https://www.orangemantra.com/wp-content/uploads/2024/02/ecommercebenefiticon6.svg" />
            <h4>Scalability and Performance</h4>
            <p>
              ReactJS's flexibility and performance capabilities ensure that
              ReactJS web development company projects can hold increasing user
              loads efficiently, maintaining productivity even as businesses
              grow.{" "}
            </p>
          </div>
        </div>
      </div>

      <div class="container-fluid pop">
        <div class="row">
          <div class=" col-md-3 col-12">
            <h3>Industries We Cater</h3>
            <p>
              As a top-notch ReactJS company, we provide services in various
              industries like:
            </p>
            <button className="btn btn-" id="play">
              View All
            </button>
          </div>
          <div className="col-sm-12 col-md-9" id="dots">
            <OwlCarousel items={4} margin={8} autoplay={true} nav dots loop>
              <div className="rain">
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/10/IOT-Banking.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/11/In-foods.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/10/IOT-Healthcare.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2024/02/ind-media.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/12/hire-in-realestate.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/11/ind-retail.png"
                  }
                />
              </div>
              <div>
                <img
                  className="img"
                  src={
                    "https://www.orangemantra.com/wp-content/uploads/2023/12/ProfessionalServices.png"
                  }
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="container pop">
        <div className="row">
          <div className="col-md-6">
            <h3 className="owl">Our Process for ReactJS Development</h3>
            <p class="mb-4">
              We carry boosted process that can take your business to new
              heights
            </p>
          </div>
          <div className="col-md-6 corn " id="mob">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/Busin%D0%B5ss-Analysis.png"
              id="kite"
            />
            <h4>Analysis</h4>
            <p className="">
              Properly analyze client needs, business objectives, and target
              audience to be assured about the alignment with our React
              development company goals and deliverables.
            </p>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/UX-D%D0%B5sign.png"
              id="kite"
            />
            <h4>Design</h4>
            <p>
              Develop comprehensive design examples and wireframes that showcase
              the vision and the overall functionality of the ReactJS
              applications. This ensures a user-centric approach and smooth
              navigation.
            </p>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/D%D0%B5v%D0%B5lopm%D0%B5nt.png"
              id="kite"
            />
            <h4>Implementation</h4>
            <p>
              Use the latest tools and technologies to add robust and scalable
              solutions in React app development. This adheres to industry best
              practices and client needs.
            </p>

            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/Testing.png"
              id="kite"
              width={"10%"}
            />
            <h4>Testing</h4>
            <p>
              Carry enhanced testing and provide quality assurance process
              during the overall development lifecycle to check and resolve any
              bugs. This delivers reliability and performance of the ReactJS web
              development company projects.{" "}
            </p>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/Maintenance-and-support.png"
              id="kite"
              width={"10%"}
            />
            <h4>Support</h4>
            <p>
              Provide overall support and maintenance services post-launch to
              provide a smooth operation and continuous improvement of the
              ReactJS development services delivered by our ReactJS development
              company in India.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid 
text-center pop"
        id="pain"
      >
        <div className="row">
          <h3>Ready to Elevate Your Business with ReactJS?</h3>
          <div>
            <button className="btn btn-" id="play">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      <div class="container-fluid pop">
        <div class="row">
          <div class="col-sm-12 col-md-7 col-lg-7" id="tom">
            <h2 className="owl">
              Why Do Businesses Choose Us for Their React Js Development
              Services?{" "}
            </h2>
            <p className="pure">
              At OrangeMantra, we deliver our reputed clients the utmost
              solutions for the competitive market.{" "}
            </p>
          </div>
          <div className="col-lg-3 col-md-5" id="tree">
            <OwlCarousel items={1} margin={5} autoplay={true} nav dots loop>
              <div>
                <span id="pour">01</span>
                <h4>Consumer Loyalty</h4>
                <p id="bat">
                  We, as a Reactjs development company, work on the latest and
                  updated systems and advances to deliver you easy-to-use,
                  adaptable, secure, and new business solutions according to
                  your needs.{" "}
                </p>
              </div>

              <div>
                <span id="pour">02</span>
                <h4>Agile Methodology</h4>
                <p>
                  We work on the Agile approach and use multiple scrum events
                  for improving the practices and techniques and conveying the
                  best outcomes.{" "}
                </p>
              </div>
              <div>
                <span id="pour">03</span>
                <h4>Devoted Teams</h4>
                <p>
                  We have a devoted group of ReactJS developers who are
                  knowledgeable in delivering React js development Services with
                  good quality business arrangements on a few structures and
                  developments.
                </p>
              </div>
              <div>
                <span id="pour">04</span>
                <h4>Uprightness and Transparency</h4>
                <p>
                  We regard your thoughts and vision, give you each little
                  undertaking point of interest routinely, and consider your
                  commendable counsel when and depending on the situation.{" "}
                </p>
              </div>
              <div>
                <span id="pour">05</span>
                <h4>Adaptable Engagement Models</h4>
                <p>
                  Rather than dealing with undesirable unbending and severe
                  boundaries in React js development Services, we offer
                  adaptability to our customers to choose from various
                  commitments and hiring models.
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5" id="pro">
        <div className="row">
          <div className="col-md-8">
            <h3 className="owl pop " id="wax">
              What Clients Say
            </h3>
          </div>
          <div className="col-md-4" id="sap">
            <img
              src="https://www.orangemantra.com/wp-content/uploads/rpa-image/clutchreview.png"
              id="cat"
            />
          </div>
        </div>
      </div>
      <div class="container-fluid" id="pro">
        <div class="row">
          <OwlCarousel items={2} margin={8} autoplay={true} nav dots loop>
            <div className="text-center">
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview2.png"
                }
                id="pic"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview5.png"
                }
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview1.png"
                }
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview2.png"
                }
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview3.png"
                }
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={
                  "https://www.orangemantra.com/wp-content/uploads/2023/10/clutchreview3.png"
                }
              />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div class="container pop">
        <div class="row">
          <h3 className="text-center owl">Frequently Asked Question</h3>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  id="lol"
                >
                  What amount of time do you require to hire ReactJS developers?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  It is very precarious since the employing and onboarding time
                  relies upon engineer accessibility. In any case, when
                  developers are free, our Reactjs development company onboards
                  them in under 24 hours.
                </div>
              </div>
            </div>
            <div class="accordion-item sip">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  id="lol"
                >
                  What is the contrast between React and React Native?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  ReactJS is a front-end JavaScript library to construct hearty
                  and intelligent UI web applications. React Native is a
                  cross-stage application development structure to foster
                  portable applications.
                </div>
              </div>
            </div>
            <div class="accordion-item sip">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  id="lol"
                >
                  Can your ReactJS application development organization give
                  adaptability as far as timezone?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Our ReactJS development company offers you designers who are
                  prepared to work as per any timezone deftly.
                </div>
              </div>
            </div>
            <div class="accordion-item sip">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  id="lol"
                >
                  Which is better: React or Angular?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Both React js development Services and Angular structures are
                  adaptable and amazing. ReactJS needs less coding and in case
                  you contrast it and Angular based on execution, then, at that
                  point, ReactJS ends up being better.
                </div>
              </div>
            </div>
            <div class="accordion-item sip">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  id="lol"
                >
                  Does your React JS development organization follow the MVP
                  model for development?
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  For all the products we create, we guarantee to follow the MVP
                  model to uncover the best practical application reasonably
                  affordable. Also, assuming you as of now have a task plan
                  close by, our React development organization embraces and adds
                  life to it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pop ps-5 pe-5" id="snap">
        <div class="row">
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Industries</h4>
            <p>Automotive</p>
            <p>EduTech</p>
            <p>Retail / e-Commerce</p>
            <p>FinTech</p>
            <p>Healthcare</p>
            <p>Insurance</p>
            <p>Manufacturing</p>
            <p>Media &amp; Entertainment</p>
            <p>Travel &amp; Hospitality</p>
          </div>
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Services</h4>

            <p>E-Commerce</p>
            <p>Mobile App</p>
            <p>PHP</p>
            <p>Java</p>
            <p>QA and Testing</p>
            <p>Maintenance &amp; Support</p>
            <p>Staff Augmentation</p>
          </div>
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Company</h4>

            <p>About OM</p>
            <p>Clients</p>
            <p>Success Stories</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Contact us</p>
            <p>White Label Partnership</p>
          </div>
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Enterprise Solution</h4>
            <p>Enterprise Applications</p>
            <p>Data &amp; Analytics</p>
            <p>Digital Marketing</p>
            <p>Product Engineering</p>
            <p>Cloud Solutions</p>
          </div>
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Technology Focus</h4>
            <p>Technologies</p>
            <p>Big Data</p>
            <p>IOT</p>
            <p>Digital Transformation</p>
            <p>Cloud Computing</p>
            <p>Dashboarding</p>
            <p>SAP</p>
            <p>Salesforce</p>
            <p>Tableau</p>
          </div>
          <div class="col-md-2 col-sm-6 col-6">
            <h4 class="">Connect with Us</h4>
            <div class="social-icon">
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-facebook.png"
                className="me-2"
                width="10%"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-x.png"
                className="me-2"
                width="10%"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-insta.png"
                className="me-2"
                width="10%"
              />
              <img
                src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-linkedin.png"
                width="10%"
              />
            </div>
            <div class="ft-contact-info rat">
              <h4 class="">Contact Us</h4>
              <img src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-phone.webp" />
              <span>+91-9870289050</span>
            </div>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-email.webp"
              className="pop"
            />
            <span>contact@orangemantra.in</span>
            <img
              src="https://www.orangemantra.com/wp-content/uploads/2024/01/ft-address.webp"
              className="pop"
            />
            <span>
              {" "}
              650, Tower A, Spaze iTech Park, Sohna Road, Gurgaon B-33, 3rd
              Floor Tower-B, The Correnthum, Sector 62, Noida, Uttar Pradesh
              201301
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <p>Orangemantra Technology Pvt. Ltd. © 2024</p>
            <h6>
              Rated 4.8 out of 5.0 by 1085+ OrangeMantra clients on over 5600+
              projects
            </h6>
            <small>
              <p>
                The rights to all trademarks, images, videos and logos belong to
                its exclusive owners. They are being used on this site for
                reference purpose only. Clients : USA, UK, Europe, BeNeLux,
                Belgium, Netherlands, Luxembourg, Denmark, Canada, Australia,
                UAE, Dubai, Italy, Turkey, Germany, Singapore, Japan, France,
                Brazil, Portugal.{" "}
              </p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
