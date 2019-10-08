import React, { useEffect } from "react";
import M from "materialize-css";

import { Tabs, Tab } from "react-materialize";

import "./index.css";

const About = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="aboutContainer container">
      <h1 className="text-red">About Us</h1>

      <ul class="collapsible z-depth-2">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>About Dwarf Inc.
          </div>
          <div class="collapsible-body">
            <span>
              Dwarf. Incorporation is a organization which is operating in the
              field of Construction, Fabrication, Smart Gardens, Smart Library,
              Smart parking Solutions and various other smart city goals. We
              started our journey in the year 2019 at New Delhi with a small
              team of achievers. People behind Dwarf have remarkable experience
              in Fabrication, Designing, Finance and Marketing.
            </span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">place</i>Our Missions
          </div>
          <div class="collapsible-body">
            <span>
              To Help India Achieve its smart City Objective, by Providing
              Innovation, Best in Class Consulting, Solutions and services. We
              shall make a joy for all stakeholders to work with us.
            </span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">whatshot</i>Our Products.
          </div>
          <div class="collapsible-body">
            <span>
              Some of our popular products are - Health Center, i-library,
              iclassrooms, Smart Gardens and parks, Smart parking Systems, Smart
              Street Lightning system. The offered products are precisely
              designed and Study to meet our customer demands. We are
              technologically advanced organization and we invest time, energy
              and resources in upgrading ourselves. We use superior quality raw
              materials in our products that we procure from the certified and
              verified listed vendors.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
