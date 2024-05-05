import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css";
import Logo from '../images/site-logo.png'

const Footer = () => {
  return (
    <footer>
      <div  className="footer-main-div">
        <div className="footer-left-div">
          <div className="footer-logo">
            <Link to="/" className="logo">
              <img src={Logo} alt="site-logo"/>
            </Link>
          </div>
          <div className="footer-logo-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>

        <div className="footer-right-div">
          <div className="company-info">
            <h2>Company Information</h2>
            <p>123, Brooklyn Street, New York (NY)</p>
            <p>Phone : 1234567890</p>
            <p>Mail us : rajatvaidhya@gmail.com</p>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
                <Link to="/contact" style={{color:'black'}}><li>Contact Us</li></Link>
                <Link to="/about" style={{color:'black'}}><li>About us</li></Link>
                <Link to="/privacy" style={{color:'black'}}><li>Privacy Policy</li></Link>
                <Link to="/shipping-information" style={{color:'black'}}><li>Shipping and Returns</li></Link>
                <Link to="/services" style={{color:'black'}}><li>Terms and Conditions</li></Link>
            </ul>
          </div>
          <div className="follow-relay">
            <h2>Follow us</h2>
            <div className="follow-relay-svg">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
