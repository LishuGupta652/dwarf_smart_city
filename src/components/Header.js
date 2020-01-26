import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Images from "../pages/Images";
import Contact from "../pages/Contact";

class Header extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue darken-2">
          <div class="container nav-wrapper">
            <a href="#" class="brand-logo">
              Dwarf INC
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/images">Images</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
