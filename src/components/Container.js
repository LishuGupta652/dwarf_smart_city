import React from "react";
import containerImage from "../img.jpg";
import gardenImage from "../img-2.jpg";

import Fade from "react-reveal/Fade";
const Container = () => {
  return (
    <div>
      <div className="block">
        <div className="one">
          <h1>PRODUCTS</h1>
          <Fade left>
            <p>Smart Containers</p>
          </Fade>
        </div>
        <div className="two">
          <img src={containerImage} />
        </div>
      </div>
      <div className="block block-2">
        <div className="two">
          <img src={gardenImage} />
        </div>

        <div className="one">
          <Fade right>
            <h1>Smart Garden</h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Container;
