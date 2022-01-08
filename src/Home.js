import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faAnchor } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-left">
          <div className="best">BEST ONLINE STORE OF THE YEAR</div>
          <div className="let-us">Let us sail you to victory</div>
        </div>
        <div className="home-content-right">
          <FontAwesomeIcon icon={faShip} />
          <FontAwesomeIcon icon={faAnchor} />
        </div>
      </div>
    </div>
  );
};

export default Home;
