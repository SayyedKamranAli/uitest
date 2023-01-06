import React from "react";
import Style from "./style/Footer.css";
import Logo from "./logo-dark2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee ,  } from '@fortawesome/free-solid-svg-icons'
import * as Icon from 'react-bootstrap-icons';

function Footer() {
  return (
    <div>
    <div className="footer-top pt-5 mt-4 bg-img">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3><img src={Logo} atl="blank"/></h3>
            <p>
            G-13/3rd floor <br/>Sector-3, Noida<br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <div className="social-links mt-3">
              <a href="#" className="twitter mx-2"><i className="bx bxl-twitter "><Icon.Twitter/></i></a>
              <a href="#" className="facebook mx-2"><i className="bx bxl-facebook"><Icon.Facebook/></i></a>
              <a href="#" className="instagram mx-2"><i className="fa-brands fa-instagram"><Icon.Instagram/></i></a>
              <a href="#" className="google-plus mx-2"><i className="bx bxl-skype"><Icon.Skype/></i></a>
              <a href="#" className="linkedin mx-2"><i className="bx bxl-linkedin"><Icon.Linkedin/></i></a>
            </div>
          </div>

        </div>
      </div>
     </div>
    
      <div className="container-fluid">
        <div className="row row1 text-start">
          <div className="col-md-6">
            &copy; Copyright{"-2022 "}
            <strong>
              <span>SkardTech</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="col-md-6 text-end">
            Designed by <a href="https://bootstrapmade.com/">Sayyed Kamran Ali</a>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;
