import React from "react";
import "./footer.scss";
import logo from "./logo-hernalytics.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import watsapp from "./watsapp.png";

function Footer() {
  return (
    <div className="footer">
      <div className="company-address">
        <div>
          <img src={logo} alt="" />
        </div>
        <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
        <span>© 2022 Hernalytics</span>
      </div>

      <div>
        <div className="about">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Hernalytics</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
          </ul>
        </div>

        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Private Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h4>Let's chat</h4>
          <ul>
            <li>
              <p>hernalytics@gmail.com</p>
            </li>
            <li>
              <p>+234 801 234 5678</p>
            </li>
            <li>
              <a>
                <img src={instagram} alt=""></img>
              </a>
              <a>
                <img src={twitter} alt=""></img>
              </a>
              <a>
                <img src={watsapp} alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
