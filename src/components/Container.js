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

      <div className="details details-one">
        <div className="wrapper">
          <div>
            <h3>Who are we</h3>
            <p>
              Dwarf. Incorporation is a organization which is operating in the
              field of Construction, Fabrication, Smart Gardens, Smart Library,
              Smart parking Solutions and various other smart city goals. We
              started our journey in the year 2019 at New Delhi with a small
              team of achievers. People behind Dwarf have remarkable experience
              in Fabrication, Designing, Finance and Marketing.
            </p>
          </div>
        </div>
      </div>

      <div className="details details-two">
        <div className="wrapper">
          <div>
            <h3>Our Mission</h3>
            <p>
              To Help India Achieve its smart City Objective, by Providing
              Innovation, Best in Class Consulting, Solutions and services. We
              shall make a joy for all stakeholders to work with us.
            </p>
          </div>
        </div>
      </div>

      <div className="details details-three">
        <div className="wrapper black-text">
          <div>
            <h3>Our Products</h3>
            <p>
              Some of our popular products are - Health Center, i-library,
              iclassrooms, Smart Gardens and parks, Smart parking Systems, Smart
              Street Lightning system. The offered products are precisely
              designed and Study to meet our customer demands. We are
              technologically advanced organization and we invest time, energy
              and resources in upgrading ourselves. We use superior quality raw
              materials in our products that we procure from the certified and
              verified listed vendors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
