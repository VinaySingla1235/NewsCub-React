import React, { Component } from "react";
import "./Navbar.css"
//import PropTypes from 'prop-types'
export class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item nav-link"
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.changeCategory("general");
                }}
              >
                Home
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className={`dropdown-menu bg-${this.props.mode}`} aria-labelledby="navbarDropdown">
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("business");
                    }}
                  >
                    Business
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("entertainment");
                    }}
                  >
                    Entertainment
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("health");
                    }}
                  >
                    Health
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("science");
                    }}
                  >
                    Science
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("sports");
                    }}
                  >
                    Sports
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCategory("technology");
                    }}
                  >
                    Technology
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </a>
                <ul className={`dropdown-menu bg-${this.props.mode}`} aria-labelledby="navbarDropdown">
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`} style={{
                      
                    }}
                    onClick={() => {
                      this.props.changeCountry("us", "USA");
                    }}
                  >
                    USA
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("cn", "China");
                    }}
                  >
                    China
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("jp", "Japan");
                    }}
                  >
                    Japan
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("de", "Germany");
                    }}
                  >
                    Germany
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("in", "India");
                    }}
                  >
                    India
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("gb", "UK");
                    }}
                  >
                    UK
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("fr", "France");
                    }}
                  >
                    France
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("br", "Brazil");
                    }}
                  >
                    Brazil
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("it", "Italy");
                    }}
                  >
                    Italy
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("ca", "Canada");
                    }}
                  >
                    Canada
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("ru", "Russia");
                    }}
                  >
                    Russia
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("kr", "South Korea");
                    }}
                  >
                    South Korea
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("au", "Australia");
                    }}
                  >
                    Australia
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("mx", "Mexico");
                    }}
                  >
                    Mexico
                  </li>
                  <li
                    className={`dropdown-item text-${this.props.mode==='light'?'dark':'light'}`}
                    onClick={() => {
                      this.props.changeCountry("id", "Indonesia");
                    }}
                  >
                    Indonesia
                  </li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch" style={{cursor:'pointer'}} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={this.props.changeMode}
              style={{cursor:'pointer'}}
            />
            <label className={`form-check-label text-${this.props.mode==='light'?'dark':'light'}`} style={{cursor:'pointer'}} for="flexSwitchCheckDefault">
              Enable {this.props.mode==='light'?'dark':'light'} Mode
            </label>
          </div>
          </div>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
