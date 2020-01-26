import React, { Component, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Images from "../pages/Images";
import Contact from "../pages/Contact";

// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 80px;
  background-color: blue;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    color: black;
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      display: block;
      color: blue;
      font-size: 28px;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: blue;
  }
  a {
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 0.8;
  }
  .fa-bars {
    display: none;
    color: black;
    font-size: 2rem;
  }
  .nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      color: blue;
      font-size: 1.3em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
    .logo a {
      p {
        height: 10px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 0px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 33px;
      right: 30px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p>Dwarf</p>
          </Link>
        </div>
        <div className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>About</li>
            </NavLink>
            <NavLink activeClassName="active" to="/images">
              <li>Images</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </Navigation>
    );
  }
}

export default Header;
