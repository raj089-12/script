import React from 'react'
import './App.css'
const Footer = () => {
  return (
    <div>




      <div className="foot container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-18.png"
              id="mac"
            ></img>

            <h6 className="some">
              Connect:
              <i class="fa-brands fa-linkedin me-2" id="sugar"></i>
              <i class="fa-brands fa-facebook me-2" id="sugar"></i>
              <i class="fa-brands fa-instagram me-2" id="sugar"></i>
              <i class="fa-brands fa-product-hunt me-2" id="sugar"></i>
            </h6>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h5 className="off">Global Offices / Locations</h5>

            <h6 className="new" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              New Jersey Office
            </h6>

            <p className="mail" id="plus">
              4525 Route 27, Princeton, NJ 08540 Phone: 732-512-0009 Mail:
              info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Michigan Office{" "}
            </h6>

            <p
              className="mail"
              id="plus
              
              "
            >
              250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United
              States of America Phone: 616-717-5787 Mail: info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Hyderabad, India Office
            </h6>

            <p className="mail" id="plus">
              4th Floor, Unit # D 1, D No : 1-89/A/8/C/2, Vittal Rao Nagar,
              Madhapur, Hyderabad-500081 Telangana State. Phone: 040-49901212
              Mail: info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Gurugram, India Office{" "}
            </h6>

            <p className="mail" id="plus">
              {" "}
              Unit 002 Ground Floor, Tower C, Unitech Cyber Park, Sector 39,
              Gurugram, Haryana -122003 Phone: 0124-6831814 Mail:
              info@logicplanet.com
            </p>
          </div>
        </div>
      </div>
    </div>
    


  
  )
}

export default Footer