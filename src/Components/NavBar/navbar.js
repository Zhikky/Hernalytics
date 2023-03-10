import React from "react";
import logo from "./logo-hernalytics.png";
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
      </div>

      <input type="checkbox" id="toggler" />
      <label for="toggler">
        <div>
          <i class="fa-solid fa-bars" id="hidden1"></i>
          <i class="fa-solid fa-xmark" id="hidden2"></i>
        </div>
      </label>

      <div className="link-container">
        <ul className="nav-links">
          <li className="nav">
            <a href="/">ABOUT US</a>
          </li>

          <li className="nav">
            <input type="checkbox" id="toggler1" />
            <label for="toggler1">
              OUR COMMUNITIES <i class="fa-solid fa-caret-down"></i>
            </label>
            <ul class="dropdown-menu1">
              <li>
                <h4>General User</h4>
                <p>Odio mi in id tellus turpis elementum ipsum.</p>
              </li>
              <li>
                <h4>Election Candidiates</h4>
                <p>Odio mi in id tellus turpis elementum ipsum.</p>
              </li>
              <li>
                <h4>Decide To Run (DTR)</h4>
                <p>Odio mi in id tellus turpis elementum ipsum.</p>
              </li>
              <li>
                <h4>Reporters</h4>
                <p>Odio mi in id tellus turpis elementum ipsum.</p>
              </li>
            </ul>
          </li>
          <li className="nav">
            <input type="checkbox" id="toggler2" />
            <label for="toggler2">
             ELECTION DATA <i class="fa-solid fa-caret-down"></i>
            </label>
            <div class="dropdown-menu2">
                <p>Election Day Live Updates</p>
                <p>Post Election Analysis</p>
            </div>
          </li>
          <li className="nav">
            <a href="/">E-BUDDY</a>
          </li>
          <li className="nav">
            <a href="/">VEO PLATFORM</a>
          </li>
          <li className="nav">
            <a href="/">LOGIN</a>
          </li>
          <li className="nav1">
            <a href="/">SIGN UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
