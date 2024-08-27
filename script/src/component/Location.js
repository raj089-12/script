import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";

function Location() {
  // const [showNavbar, setShowNavbar] = React.useState(false);

  return (
    <div>
     

      <h1 className="hire" id="local">
        Locations
      </h1>
      <ul className="rate">
        <li>
          <h4 className="text-center">Usa</h4>
        </li>
        <li>
          <h4 className="text-center">India</h4>
        </li>
      </ul>
      <div className="container">
        <h1 className="price" id="usa">
          Usa
        </h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1iTCxx6t8ervpU6wlr8FJuRAV1LkRHpA&ehbc=2E312F"
          width="100%"
          height="600px"
          id="hope"
        ></iframe>
        <h4 className="price" id="usa">
          India
        </h4>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19n09rya5HeXpyQvkfifj9DgFvwyGSVQ&ehbc=2E312F"
          width="100%"
          height="600px"
          id="hope"
        ></iframe>
      </div>


    </div>
  );
}

export default Location;
